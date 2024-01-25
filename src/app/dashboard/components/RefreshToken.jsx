"use client"

import refresh from "@/app/fetchers/refresh"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

const RefreshToken = ({ code }) => {
  const router = useRouter()
  useEffect(() => {
    try {
      refresh(code)
        .then(() => {
          console.log("success")
          router.refresh()
        })
        .catch((e) => {
          console.log(e)
          router.push("/")
        })
    } catch (error) {
      console.error("refresh: ", error)
      router.push("/")
    }
  }, [])

  return (
    <div>
      <h1 className="my-24">Refreshing token</h1>
    </div>
  )
}

export default RefreshToken
