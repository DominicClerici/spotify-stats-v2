"use client"
import { useRouter } from "next/navigation"
import React from "react"

export const Logout = () => {
  const router = useRouter()
  const logoutHandler = () => {
    fetch("http://localhost:3000/api/logout").then((res) => {
      if (res.status == 200) {
        router.push("/")
        router.refresh()
      }
    })
  }
  return (
    <button
      className="ml-auto rounded  px-3 py-1 text-main transition-colors hover:bg-main/10"
      onClick={logoutHandler}
    >
      Logout
    </button>
  )
}
