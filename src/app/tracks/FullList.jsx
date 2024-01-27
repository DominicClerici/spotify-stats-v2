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
      fetch(`https://api.spotify.com/v1/me/top/${type}?limit=50&time_range=${timeFrame}`, {
        headers: {
          Authorization: `Bearer ${code}`,
        },
      })
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
        <div key={"skel_tracks_" + i} className={`flex items-center gap-4 border-b border-b-main/10 py-2`}>
          <p className="w-6 -ml-10 text-main/70">{i + 1}.</p>
          <div className="w-16 h-16 rounded-lg bg-main/10"></div>
          <div>
            <div className="w-40 h-6 rounded-full bg-main/10 mb-2"></div>
            {type == "tracks" && <div className="w-24 h-4 rounded-full bg-main/10"></div>}
          </div>
        </div>
      )
    })
  } else {
    innerJsx = items[timeFrame].map((item, i) => {
      return (
        <div key={"track_" + i} className={`flex items-center gap-4 border-b border-b-main/10 mx-2 py-2`}>
          <p className="w-6 -ml-12 text-main/70">{i + 1}.</p>
          <div className="relative h-16 w-16 z-0">
            <Image
              src={item.icon}
              alt={`${type == "tracks" ? item.title : item.name}'s photo`}
              fill
              sizes={"(max-width: 10000px) 64px"}
              className="rounded"
            ></Image>
          </div>
          <div>
            {type == "tracks" ? (
              <>
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <h4 className="text-lg">{item.artist}</h4>
              </>
            ) : (
              <h3 className="font-semibold text-xl">{item.name}</h3>
            )}
          </div>
          <a
            href={item.link}
            target="_blank"
            className="ml-auto bg-highlight/25 rounded py-1 px-3 hover:bg-highlight/35 transition-colors duration-75"
          >
            {type == "tracks" ? "Listen" : "View"} on Spotify
          </a>
        </div>
      )
    })
  }
  return (
    <>
      <span className="flex items-center gap-8 my-4">
        <button
          onClick={() => {
            setTimeFrame("short_term")
          }}
          className={
            timeFrame == "short_term" ? className.timeFrameButtonActiveStyle : className.timeFrameButtonInactiveStyle
          }
        >
          4 Weeks
        </button>
        <button
          onClick={() => {
            setTimeFrame("medium_term")
          }}
          className={
            timeFrame == "medium_term" ? className.timeFrameButtonActiveStyle : className.timeFrameButtonInactiveStyle
          }
        >
          6 Months
        </button>
        <button
          onClick={() => {
            setTimeFrame("long_term")
          }}
          className={
            timeFrame == "long_term" ? className.timeFrameButtonActiveStyle : className.timeFrameButtonInactiveStyle
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