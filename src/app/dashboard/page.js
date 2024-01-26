import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import React from "react"
import RefreshToken from "./components/RefreshToken"
import ProfilePreview from "./components/ProfilePreview/ProfilePreview"
import { Logout } from "./components/Logout"
import ListPreview from "./components/ListPreview"
import TopGenres from "./components/TopGenres"

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
      <Logout />
      <ProfilePreview code={accessToken.value} />
      {/* <TrackPreview code={accessToken.value} /> */}
      <ListPreview code={accessToken.value} type={"tracks"} />
      <ListPreview code={accessToken.value} type={"artists"} />
      <TopGenres code={accessToken.value} />
      {/* <ArtistPreview code={accessToken.value} /> */}
    </section>
  )
}

export default page
