"use client"
import React, { useEffect, useState } from "react"
import ListDisplay from "./ListDisplay"

const SAMPLE_TRACK_OBJECT = {
  title: "The Less I Know The Better",
  artist: "Tame Impala",
  icon: "https://i.scdn.co/image/ab67616d0000b273e4b4b5b6b5b6b5b6b5b6b5b6",
  link: "https://open.spotify.com/track/7Fw3lyu0L4bxpGHgTu0Vut?si=3f1e0f6f7a1d4b6a",
}

const SAMPLE_ARTIST_OBJECT = {
  name: "The Beatles",
  icon: "https://i.scdn.co/image/ab6761610000e5ebc5b6b8b9b8b9b8b9b8b9b8b9",
  link: "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2",
}

const ListPreview = ({ code, type }) => {
  const [timeFrame, setTimeFrame] = useState("short_term")
  const [items, setItems] = useState({
    short_term: null,
    medium_term: null,
    long_term: null,
  })
  useEffect(() => {
    if (items[timeFrame] == null) {
      fetch(`https://api.spotify.com/v1/me/top/${type}?limit=5&time_range=${timeFrame}`, {
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

  return (
    <section className="my-16">
      <h1 className="text-3xl font-bold mt-4 ml-2">Top {type == "tracks" ? "tracks" : "artists"}</h1>
      <span className="flex items-center gap-8 my-4 ml-2">
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
      <ListDisplay
        items={items[timeFrame]}
        externalUrl={type == "tracks" ? "http://localhost:3000/tracks" : "http://localhost:3000/artists"}
        type={type}
      />
    </section>
  )
}

export default ListPreview
