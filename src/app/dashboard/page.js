import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import React from "react"
import RefreshToken from "./components/RefreshToken"
import ProfilePreview from "./components/ProfilePreview/ProfilePreview"

const page = async () => {
  const refreshToken = cookies().get("refresh_token")
  const accessToken = cookies().get("access_token")

  if (!refreshToken) {
    redirect("/")
  } else if (!accessToken) {
    return <RefreshToken code={refreshToken} />
  }

  return (
    <div className="my-24">
      <section className="max-w-screen-md bg-main/10 min-h-screen mx-auto">
        <ProfilePreview accessCode={accessToken.value} />
      </section>
    </div>
  )
}

export default page
