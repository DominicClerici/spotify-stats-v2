import React from "react"
import ListDisplay from "./ListDisplay"
import Link from "next/link"
import timeAgo from "@/app/timeAgo"

const RecentlyPlayed = async ({ code }) => {
  const res = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=5", {
    headers: {
      Authorization: `Bearer ${code}`,
    },
  })
  let data
  let recentTrackData
  if (res.status == 200) {
    data = await res.json()
  }
  if (data) {
    recentTrackData = data.items.map((item) => {
      return {
        title: item.track.name,
        artist: item.track.artists.map((artist) => artist.name).join(", "),
        icon: item.track.album.images[1].url,
        link: item.track.external_urls.spotify,
        time: timeAgo(item.played_at),
      }
    })
  }

  return (
    <section className="my-20 animate-fade-in">
      <Link href="/recents">
        <h1 className="text-3xl font-bold my-4 ml-2">Recently played</h1>
      </Link>
      <ListDisplay items={recentTrackData} type="tracks" externalUrl={"/recents"} />
    </section>
  )
}

export default RecentlyPlayed
