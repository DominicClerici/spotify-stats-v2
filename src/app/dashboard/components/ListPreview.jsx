"use client"
import React, { useEffect, useState } from "react"
import ListDisplay from "./ListDisplay"
import Link from "next/link"

// const url = "https://spotifystats.dominicclerici.com"
const url = "http://localhost:3000"

const ListPreview = ({ code, type }) => {
  const [timeFrame, setTimeFrame] = useState("short_term")
  const [items, setItems] = useState({
    short_term: null,
    medium_term: null,
    long_term: null,
  })
  useEffect(() => {
    if (items[timeFrame] == null) {
      fetch(
        `https://api.spotify.com/v1/me/top/${type}?limit=5&time_range=${timeFrame}`,
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
          if (data.items) {
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
                  artist: item.artists.map((artist) => artist.name).join(", "),
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
          }
        })
    }
  }, [timeFrame])

  const className = {
    timeFrameButtonActiveStyle:
      "text-lg rounded-lg px-4 py-1 bg-highlight/20 hover:bg-highlight/25 text-main transition-colors duration-75",
    timeFrameButtonInactiveStyle:
      "text-lg rounded-lg px-4 py-1 bg-main/10 hover:bg-main/15 text-main transition-colors duration-75",
  }

  return (
    <section className="my-10 animate-fade-in sm:my-20">
      <Link href={type == "tracks" ? `${url}/tracks` : `${url}/artists`}>
        <h1 className="ml-2 mt-4 text-3xl font-bold">
          Top {type == "tracks" ? "tracks" : "artists"}
        </h1>
      </Link>
      <span className="my-2 flex items-center gap-4 sm:my-4 sm:ml-2 sm:gap-8">
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
      <ListDisplay
        items={items[timeFrame]}
        externalUrl={type == "tracks" ? `${url}/tracks` : `${url}/artists`}
        type={type}
      />
    </section>
  )
}

export default ListPreview
