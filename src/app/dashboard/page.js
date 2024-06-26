import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import React from "react"
import RefreshToken from "./components/RefreshToken"
import ProfilePreview from "./components/ProfilePreview/ProfilePreview"
import ListPreview from "./components/ListPreview"
import TopGenres from "./components/TopGenres"
import CurrentlyPlaying from "./components/CurrentlyPlaying"
import RecentlyPlayed from "./components/RecentlyPlayed"

const page = async () => {
  const refreshToken = cookies().get("refresh_token")
  const accessToken = cookies().get("access_token")

  if (!refreshToken) {
    redirect("/")
  } else if (!accessToken) {
    return <RefreshToken code={refreshToken} />
  }

  return (
    <section className="mx-auto my-24 min-h-screen max-w-screen-md px-4 sm:px-8">
      <ProfilePreview code={accessToken.value} />
      <CurrentlyPlaying code={accessToken.value} />
      {/* <TrackPreview code={accessToken.value} /> */}
      <ListPreview code={accessToken.value} type={"tracks"} />
      <ListPreview code={accessToken.value} type={"artists"} />
      <RecentlyPlayed code={accessToken.value} />
      <TopGenres code={accessToken.value} />
      {/* <ArtistPreview code={accessToken.value} /> */}
    </section>
  )
}

export default page
