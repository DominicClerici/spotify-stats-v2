"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import authorize from "../fetchers/authorize"

const page = ({ searchParams }) => {
  const [errorCode, setErrorCode] = useState(0)
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
        })
        .catch((error) => {
          setErrorCode(error)
        })
    }
  }, [])
  if (errorCode !== 0) {
    switch (errorCode) {
      case 1:
        return (
          <div>
            <h1 className="text-3xl my-24">Error: {searchParams.error}</h1>
          </div>
        )
      case 40:
        return (
          <div>
            <h1 className="text-3xl my-24">Bad authorization request</h1>
          </div>
        )
      case 41:
        return (
          <div>
            <h1 className="text-3xl my-24">Bad authorization code</h1>
          </div>
        )
      case 42:
        return (
          <div>
            <h1 className="text-3xl my-24">Error setting cookies</h1>
          </div>
        )
      default:
        return (
          <div>
            <h1 className="text-3xl my-24">Error: {errorCode}</h1>
          </div>
        )
    }
  }
  return (
    <section className="min-h-screen max-w-screen-lg">
      <div className="flex mt-36 items-center justify-center">
        <h1 className="text-2xl">Logging in...</h1>
      </div>
    </section>
  )
}

export default page
