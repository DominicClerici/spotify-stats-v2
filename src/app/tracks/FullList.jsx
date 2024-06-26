"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"

const FullList = ({ code, type }) => {
  const [timeFrame, setTimeFrame] = useState("short_term")
  const [items, setItems] = useState({
    short_term: null,
    medium_term: null,
    long_term: null,
  })
  useEffect(() => {
    if (items[timeFrame] == null) {
      fetch(
        `https://api.spotify.com/v1/me/top/${type}?limit=50&time_range=${timeFrame}`,
        {
          headers: {
            Authorization: `Bearer ${code}`,
          },
        },
      )
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
        })
        .then((data) => {
          const newItems = data.items.map((item) => {
            if (type == "artists") {
              return {
                name: item.name,
                icon: item.images[1].url,
                link: item.external_urls.spotify,
              }
            } else {
              return {
                title: item.name,
                artist: item.artists[0].name,
                icon: item.album.images[1].url,
                link: item.external_urls.spotify,
              }
            }
          })

          setItems((prev) => {
            return {
              ...prev,
              [timeFrame]: newItems,
            }
          })
        })
    }
  }, [timeFrame])

  const className = {
    timeFrameButtonActiveStyle:
      "text-lg rounded-lg px-4 py-1 bg-highlight/20 hover:bg-highlight/25 text-main transition-colors duration-75",
    timeFrameButtonInactiveStyle:
      "text-lg rounded-lg px-4 py-1 bg-main/10 hover:bg-main/15 text-main transition-colors duration-75",
  }
  let innerJsx
  if (!items[timeFrame]) {
    innerJsx = [...Array(50)].map((_, i) => {
      return (
        <div
          key={"skel_tracks_" + i}
          className={`flex items-center gap-4 border-b border-b-main/10 py-2`}
        >
          <p className="-ml-10 hidden w-6 text-main/70 md:inline">{i + 1}.</p>
          <div className="h-16 w-16 rounded-lg bg-main/10"></div>
          <div>
            <div className="mb-2 h-6 w-40 rounded-full bg-main/10"></div>
            {type == "tracks" && (
              <div className="h-4 w-24 rounded-full bg-main/10"></div>
            )}
          </div>
        </div>
      )
    })
  } else {
    innerJsx = items[timeFrame].map((item, i) => {
      return (
        <div
          key={"track_" + i}
          className={`mx-2 flex items-center gap-4 border-b border-b-main/10 py-2`}
        >
          <p className="-ml-12 w-6 text-main/70">{i + 1}.</p>
          <div className="relative z-0 min-h-12 min-w-12 sm:h-16 sm:w-16">
            <a href={item.link} target="_blank">
              <span className="absolute opacity-0">
                {item.title}&apos;s photo
              </span>
              <Image
                src={item.icon}
                alt={`${type == "tracks" ? item.title : item.name}'s photo`}
                fill
                className="rounded"
              ></Image>
            </a>
          </div>
          <div>
            {type == "tracks" ? (
              <>
                <h3 className="line-clamp-1 text-lg font-semibold sm:text-xl">
                  {item.title}
                </h3>
                <h4 className="text-md line-clamp-1 sm:text-lg">
                  {item.artist}
                </h4>
              </>
            ) : (
              <h3 className="line-clamp-1 text-lg font-semibold sm:text-xl">
                {item.name}
              </h3>
            )}
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
  }
  return (
    <>
      <span className="my-4 flex items-center gap-4 sm:gap-8">
        <button
          onClick={() => {
            setTimeFrame("short_term")
          }}
          className={
            timeFrame == "short_term"
              ? className.timeFrameButtonActiveStyle
              : className.timeFrameButtonInactiveStyle
          }
        >
          4 Weeks
        </button>
        <button
          onClick={() => {
            setTimeFrame("medium_term")
          }}
          className={
            timeFrame == "medium_term"
              ? className.timeFrameButtonActiveStyle
              : className.timeFrameButtonInactiveStyle
          }
        >
          6 Months
        </button>
        <button
          onClick={() => {
            setTimeFrame("long_term")
          }}
          className={
            timeFrame == "long_term"
              ? className.timeFrameButtonActiveStyle
              : className.timeFrameButtonInactiveStyle
          }
        >
          All time
        </button>
      </span>
      <div className="flex flex-col">{innerJsx}</div>
    </>
  )
}

export default FullList
