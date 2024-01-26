"use client"
import React, { useEffect, useState } from "react"
import ListDisplay from "../ListDisplay"

const SAMPLE_ARTIST_OBJECT = {
  name: "The Beatles",
  icon: "https://i.scdn.co/image/ab6761610000e5ebc5b6b8b9b8b9b8b9b8b9b8b9",
  url: "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2",
}

const ArtistPreview = ({ code }) => {
  const [timeFrame, setTimeFrame] = useState("short_term")
  const [artists, setArtists] = useState({
    short_term: null,
    medium_term: null,
    long_term: null,
  })
  useEffect(() => {
    if (tracks[timeFrame] == null) {
      console.log("getting new api call")
      fetch(`https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=${timeFrame}`, {
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
          const artistItems = data.items.map((track) => {})
          setTracks((prev) => {
            return {
              ...prev,
              [timeFrame]: trackItems,
            }
          })
        })
    }
  }, [timeFrame])

  const className = {
    timeFrameButtonActiveStyle:
      "text-lg rounded-lg px-4 py-1 bg-highlight/10 hover:bg-highlight/15 text-main transition-colors",
    timeFrameButtonInactiveStyle:
      "text-lg rounded-lg px-4 py-1 bg-main/10 hover:bg-main/15 text-main transition-colors",
  }

  return (
    <section>
      <h1 className="text-3xl font-bold mt-4 ml-2">Top tracks</h1>
      <span className="flex items-center gap-8 my-2 ml-2">
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
      <ListDisplay items={tracks[timeFrame]} type={tracks} />
    </section>
  )
}

export default ArtistPreview
