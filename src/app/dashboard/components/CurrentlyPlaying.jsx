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
      <section className="my-10 animate-fade-in sm:my-20">
        <Link href="/recent">
          <h1 className="my-2 ml-2 text-2xl font-bold sm:my-4 sm:text-3xl">
            Currently Playing
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative z-0 h-24 w-24 sm:h-32 sm:w-32">
            <a href={currentTrackData.link} target="_blank">
              <span className="absolute opacity-0">
                {currentTrackData.title}&apos;s photo
              </span>
              <Image
                src={currentTrackData.icon}
                alt={`${currentTrackData.title}'s photo`}
                fill
                className="rounded border-2 border-main/40"
              ></Image>
            </a>
          </div>
          <div>
            <h3 className="line-clamp-1 text-2xl font-semibold">
              {currentTrackData.title}
            </h3>
            <h4 className="mb-4 line-clamp-1 text-lg text-main/70">
              {currentTrackData.artist}
            </h4>
            <a
              href={currentTrackData.link}
              target="_blank"
              className="rounded bg-highlight/20 px-3 py-1 transition-colors duration-75 hover:bg-highlight/25"
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
