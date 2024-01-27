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
    <button className="py-1 px-3  text-main rounded ml-auto hover:bg-main/10 transition-colors" onClick={logoutHandler}>
      Logout
    </button>
  )
}
