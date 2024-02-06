"use client"
import { useRouter } from "next/navigation"
import React from "react"

const baseUrl = "https://spotifystats.dominicclerici.com/"

export const Logout = () => {
  const router = useRouter()
  const logoutHandler = () => {
    fetch(`${baseUrl}api/logout`).then((res) => {
      if (res.status == 200) {
        router.push("/")
        router.refresh()
      }
    })
  }
  return (
    <button
      className="rounded px-3 py-1 font-light text-main transition-colors hover:bg-main/10"
      onClick={logoutHandler}
    >
      Logout
    </button>
  )
}
