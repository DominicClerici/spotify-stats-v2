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
          className={`flex items-center gap-4 ${!(i == 4) && "border-b border-b-main/5"} mx-2 py-2`}
        >
          <p className="-ml-10 w-6 text-main/70">{i + 1}.</p>
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
    innerJsx = items.map((item, i) => {
      return (
        <div
          key={"track_" + i}
          className={`flex items-center gap-4 ${!(i == items.length - 1) && "border-b border-b-main/5"} mx-2 py-2`}
        >
          <p className="-ml-10 hidden w-6 text-main/70 md:inline">{i + 1}.</p>
          <div className="relative z-0 h-12 min-h-12 w-12 min-w-12 sm:h-16 sm:w-16">
            <a href={item.link} target="_blank">
              <span className="absolute opacity-0">
                {item.title}&apos;s photo
              </span>
              <Image
                src={item.icon}
                alt={`${type == "tracks" ? item.title : item.name}'s photo`}
                fill
                sizes={"(max-width: 10000px) 64px"}
                className="rounded"
              ></Image>
            </a>
          </div>
          <div>
            {type == "tracks" ? (
              <>
                <h3 className="text-md line-clamp-1 font-semibold sm:text-xl">
                  {item.title}
                </h3>
                <h4 className="text-md line-clamp-1 text-main/70 sm:text-lg">
                  {item.artist}
                </h4>
              </>
            ) : (
              <h3 className="text-md font-semibold sm:text-xl">{item.name}</h3>
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
    <div className="flex flex-col rounded border-t border-t-main/5 bg-main/10">
      {innerJsx}
      <Link
        href={externalUrl}
        className="group flex cursor-pointer items-center justify-center gap-1 rounded-b border-b border-b-main/5 bg-main/10 py-2 text-xl transition-colors duration-75 hover:bg-main/15"
      >
        View all
        <svg
          className="h-6 w-6 translate-y-[1px] transition-transform group-hover:translate-x-2"
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
