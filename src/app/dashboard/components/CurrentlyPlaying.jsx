import Image from "next/image"
import Link from "next/link"
import React from "react"

const CurrentlyPlaying = async ({ code }) => {
  const res = await fetch("https://api.spotify.com/v1/me/player", {
    headers: {
      Authorization: `Bearer ${code}`,
    },
  })
  let data

  if (res.status == 200) {
    data = await res.json()
  }
  if (data && data.is_playing) {
    if (data.currently_playing_type == "episode") {
      return <></>
    }
    const currentTrackData = {
      title: data.item.name,
      artist: data.item.artists.map((artist) => artist.name).join(", "),
      icon: data.item.album.images[1].url,
      link: data.item.external_urls.spotify,
    }
    return (
      <section className="my-20 animate-fade-in">
        <Link href="/recent">
          <h1 className="text-3xl font-bold my-4 ml-2">Currently Playing</h1>
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative h-32 w-32 z-0">
            <Image
              src={currentTrackData.icon}
              alt={`${currentTrackData.title}'s photo`}
              fill
              className="rounded border-2 border-main/40"
            ></Image>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">{currentTrackData.title}</h3>
            <h4 className="text-lg text-main/70 mb-4">{currentTrackData.artist}</h4>
            <a
              href={currentTrackData.link}
              target="_blank"
              className="bg-highlight/20 rounded py-1 px-3 hover:bg-highlight/25 transition-colors duration-75"
            >
              View on Spotify
            </a>
          </div>
        </div>
      </section>
    )
  }
  return <></>
}

export default CurrentlyPlaying
