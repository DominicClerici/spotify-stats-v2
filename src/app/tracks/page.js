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
    <section className="max-w-screen-md min-h-screen mx-auto my-24">
      <Link href="/dashboard" className="flex items-center gap-1 group text-lg mb-8">
        <svg
          className="translate-y-[1px] group-hover:-translate-x-1 transition-transform h-6 w-6"
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
        Go back
      </Link>
      <h1 className="text-4xl font-semibold">Top tracks</h1>
      <FullList code={accessToken.value} type="tracks" />
    </section>
  )
}

export default page
