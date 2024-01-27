"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import authorize from "../fetchers/authorize"

const Client = ({ searchParams }) => {
  const [errorCode, setErrorCode] = useState(41)
  const router = useRouter()

  useEffect(() => {
    const error = searchParams.error
    const code = searchParams.code
    if (error) {
      setErrorCode(1)
      return
    }
    if (code) {
      authorize(code)
        .then(() => {
          router.push("/dashboard")
          router.refresh()
        })
        .catch((error) => {
          setErrorCode(error)
        })
    }
  }, [])
  let innerJsx
  if (errorCode !== 0) {
    switch (errorCode) {
      case 1:
        innerJsx = (
          <div className="flex mt-36 items-center justify-center">
            <h1 className="text-2xl">Error: {searchParams.error}</h1>
          </div>
        )
        break

      case 40:
        innerJsx = (
          <div className="flex mt-36 items-center justify-center">
            <h1 className="text-2xl">Bad authorization request</h1>
          </div>
        )
        break

      case 41:
        innerJsx = (
          <div className="flex mt-36 items-center justify-center">
            <h1 className="text-2xl">Bad authorization code</h1>
          </div>
        )
        break

      case 42:
        innerJsx = (
          <div className="flex mt-36 items-center justify-center">
            <h1 className="text-2xl">Error setting cookies</h1>
          </div>
        )
        break
      default:
        innerJsx = (
          <div className="flex mt-36 items-center justify-center">
            <h1 className="text-2xl">Error: {errorCode}</h1>
          </div>
        )
        break
    }
  } else {
    innerJsx = (
      <div className="flex mt-36 items-center justify-center">
        <h1 className="text-2xl">Logging in...</h1>
      </div>
    )
  }
  return (
    <section className="min-h-screen max-w-screen-lg animate-delayed-fade-in">
      {innerJsx}
      {/* <div className="flex mt-36 items-center justify-center">
        <h1 className="text-2xl">Logging in...</h1>
      </div> */}
    </section>
  )
}

export default Client
