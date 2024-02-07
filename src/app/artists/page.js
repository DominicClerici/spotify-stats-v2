import React from "react"
import FullList from "./FullList"
import Link from "next/link"
import { cookies } from "next/headers"
import RefreshToken from "../dashboard/components/RefreshToken"

const page = async () => {
  const refreshToken = cookies().get("refresh_token")
  const accessToken = cookies().get("access_token")

  if (!refreshToken) {
    redirect("/")
  } else if (!accessToken) {
    return <RefreshToken code={refreshToken} />
  }

  return (
    <section className="mx-auto mb-4 mt-24 min-h-screen max-w-screen-md animate-fade-in px-4 sm:px-8">
      <Link
        href="/dashboard"
        className="group mb-8 flex items-center gap-1 text-lg"
      >
        <svg
          className="h-6 w-6 translate-y-[1px] transition-transform group-hover:-translate-x-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M5 12l4-4m-4 4 4 4"
          />
        </svg>
        Dashboard
      </Link>
      <h1 className="mb-8 text-3xl font-semibold sm:text-4xl">Top artists</h1>
      <FullList code={accessToken.value} type="artists" />
    </section>
  )
}

export default page
