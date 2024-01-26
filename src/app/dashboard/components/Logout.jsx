"use client"
import { useRouter } from "next/navigation"
import React from "react"

export const Logout = () => {
  const router = useRouter()
  const logoutHandler = () => {
    fetch("http://localhost:3000/api/logout").then((res) => {
      if (res.status == 200) {
        router.push("/")
      }
    })
  }
  return <button onClick={logoutHandler}>Logout</button>
}
