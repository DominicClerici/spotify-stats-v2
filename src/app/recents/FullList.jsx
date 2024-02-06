import Image from "next/image"
import React from "react"
import timeAgo from "../timeAgo"

const FullList = async ({ code }) => {
  const res = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=50",
    {
      headers: {
        Authorization: `Bearer ${code}`,
      },
    },
  )

  let data
  let trackArray
  if (res.status == 200) {
    data = await res.json()
  }
  if (data) {
    trackArray = data.items.map((item) => {
      return {
        title: item.track.name,
        artist: item.track.artists.map((artist) => artist.name).join(", "),
        icon: item.track.album.images[1].url,
        link: item.track.external_urls.spotify,
        time: timeAgo(item.played_at),
      }
    })
  }
  if (trackArray.length == 0) {
    return (
      <h3 className="text-xl font-semibold text-main/60">
        No recently played tracks
      </h3>
    )
  }

  let innerJsx = trackArray.map((item, i) => {
    return (
      <div
        key={"track_" + i}
        className={`mx-2 flex items-center gap-4 border-b border-b-main/10 py-2`}
      >
        <p className="-ml-12 w-6 text-main/70">{item.time}</p>
        <div className="relative z-0 h-16 w-16">
          <a href={item.link} target="_blank">
            <span>{item.title}&apos;s photo</span>

            <Image
              src={item.icon}
              alt={`${item.title}'s photo`}
              fill
              sizes={"(max-width: 10000px) 64px"}
              className="rounded"
            ></Image>
          </a>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <h4 className="text-lg">{item.artist}</h4>
        </div>
        <a
          href={item.link}
          target="_blank"
          className="ml-auto rounded bg-highlight/25 px-3 py-1 transition-colors duration-75 hover:bg-highlight/35"
        >
          Listen on Spotify
        </a>
      </div>
    )
  })

  return <div className="flex flex-col">{innerJsx}</div>
}

export default FullList
