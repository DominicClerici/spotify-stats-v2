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
        <p className="-ml-12 hidden w-6 text-main/70 md:inline">{item.time}</p>
        <div className="relative z-0 min-h-12 min-w-12 sm:h-16 sm:w-16">
          <a href={item.link} target="_blank">
            <span className="absolute opacity-0">
              {item.title}&apos;s photo
            </span>
            <Image
              src={item.icon}
              alt={`${item.title}'s photo`}
              fill
              className="rounded"
            ></Image>
          </a>
        </div>
        <div>
          <h3 className="line-clamp-1 text-lg font-semibold sm:text-xl">
            {item.title}
          </h3>
          <h4 className="text-md line-clamp-1 sm:text-lg">{item.artist}</h4>
        </div>
        <a
          href={item.link}
          target="_blank"
          className="invisible absolute ml-auto mr-2 rounded bg-highlight/15 p-2 transition-colors duration-75 hover:bg-highlight/20 sm:visible sm:relative"
        >
          <Image
            src={"/Spotify_Icon_RGB_White.png"}
            width={25}
            height={25}
            alt="spotify logo"
          ></Image>
        </a>
      </div>
    )
  })

  return <div className="flex flex-col">{innerJsx}</div>
}

export default FullList
