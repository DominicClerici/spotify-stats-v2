"use client"
import React, { useEffect, useState } from "react"
import { setCookie } from "../api/actions/setCookie"
import { useRouter } from "next/navigation"

const page = ({ searchParams }) => {
  const [errorCode, setErrorCode] = useState(0)
  const router = useRouter()
  // const nextCookies = cookies()
  // console.log(nextCookies.get("access_token"))

  useEffect(() => {
    const error = searchParams.error
    if (error) {
      setErrorCode(1)
      return
    }
    const code = searchParams.code
    if (code) {
      fetch("http://localhost:3000/api/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.access_token) {
            setCookie(data)
              .then(() => {
                router.push("/dashboard")
              })
              .catch(() => {
                setErrorCode(2)
              })
          } else {
            setErrorCode(2)
          }
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
      case 2:
        return (
          <div>
            <h1 className="text-3xl my-24">Internal server error</h1>
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
    <div>
      <h1 className="text-3xl my-24">Logging you in</h1>
    </div>
  )
}

export default page
