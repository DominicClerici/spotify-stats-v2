import Image from "next/image"
import Link from "next/link"
import React from "react"

const ListDisplay = ({ items, type, externalUrl }) => {
  let innerJsx
  if (!items) {
    innerJsx = [...Array(5)].map((_, i) => {
      return (
        <div
          key={"skel_tracks_" + i}
          className={`flex items-center gap-4 ${!(i == 4) && "border-b border-b-main/5"} py-2`}
        >
          <div className="w-16 h-16 rounded-lg bg-main/10"></div>
          <div>
            <div className="w-40 h-6 rounded-full bg-main/10 mb-2"></div>
            {type == "tracks" && <div className="w-24 h-4 rounded-full bg-main/10"></div>}
          </div>
        </div>
      )
    })
  } else {
    innerJsx = items.map((item, i) => {
      return (
        <div
          key={"track_" + i}
          className={`flex items-center gap-4 ${!(i == items.length - 1) && "border-b border-b-main/5"} mx-2 py-2`}
        >
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
            className="ml-auto mr-2 bg-highlight/15 rounded py-1 px-3 hover:bg-highlight/20 transition-colors duration-75"
          >
            {type == "tracks" ? "Listen" : "View"} on Spotify
          </a>
        </div>
      )
    })
  }

  return (
    <div className="bg-main/10 flex flex-col border-t border-t-main/5 rounded">
      {innerJsx}
      <Link
        href={externalUrl}
        className="bg-main/10 group flex gap-1 justify-center items-center py-2 text-xl border-b border-b-main/5 rounded-b cursor-pointer transition-colors duration-75 hover:bg-main/15"
      >
        View all
        <svg
          className="w-6 h-6 group-hover:translate-x-2 translate-y-[1px] transition-transform"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </Link>
    </div>
  )
}

export default ListDisplay
