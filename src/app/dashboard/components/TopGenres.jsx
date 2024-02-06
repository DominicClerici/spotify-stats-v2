"use client"
import React, { useEffect, useState } from "react"

const TopGenres = ({ code }) => {
  const [timeFrame, setTimeFrame] = useState("short_term")
  const [items, setItems] = useState({
    short_term: null,
    medium_term: null,
    long_term: null,
  })
  useEffect(() => {
    if (items[timeFrame] == null) {
      let genreCounts = {}
      fetch(
        `https://api.spotify.com/v1/me/top/artists?limit=50&time_range=${timeFrame}`,
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
          data.items.forEach((item) => {
            item.genres.forEach((genre) => {
              if (genreCounts[genre] == null) {
                genreCounts[genre] = 1
              } else {
                genreCounts[genre] += 1
              }
            })
          })
          const sortedGenres = Object.keys(genreCounts).sort(
            (a, b) => genreCounts[b] - genreCounts[a],
          )
          const topGenres = sortedGenres.slice(0, 20)
          setItems((prev) => {
            return {
              ...prev,
              [timeFrame]: topGenres,
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
  if (items[timeFrame] == null) {
    innerJsx = [...Array(20)].map((_, i) => {
      return (
        <div
          key={"skel_tracks_" + i}
          className={`flex items-center gap-4 ${!(i == 4) && "border-b border-b-main/5"} py-2`}
        >
          <div className="mb-2 ml-4 h-6 w-40 rounded-full bg-main/10"></div>
        </div>
      )
    })
  } else {
    innerJsx = items[timeFrame].map((genre, i) => {
      return (
        <div
          key={"track_" + i}
          className={`flex items-center gap-4 ${
            !(i == items[timeFrame].length - 1) && "border-b border-b-main/5"
          } mx-2 py-2`}
        >
          <div>
            <span className="flex items-center">
              <h3 className="ml-4 w-8 text-lg font-semibold text-main/60">
                {i + 1}.
              </h3>
              <h3 className="ml-2 text-lg font-semibold">{genre}</h3>
            </span>
          </div>
        </div>
      )
    })
  }

  return (
    <section className="my-20">
      <h1 className="ml-2 mt-4 text-3xl font-bold">Top genres</h1>
      <span className="my-4 ml-2 flex items-center gap-8">
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
      <div className="flex flex-col rounded border-y border-y-main/5 bg-main/10">
        {innerJsx}
      </div>
    </section>
  )
}

export default TopGenres
