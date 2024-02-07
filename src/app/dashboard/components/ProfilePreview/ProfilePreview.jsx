import Image from "next/image"
import React from "react"

const ProfilePreview = async ({ code }) => {
  const res = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${code}`,
    },
  })
  let data
  if (res.ok) {
    data = await res.json()
  }
  return (
    <section className="flex animate-fade-in items-center gap-4 px-4 sm:px-12">
      <div className="relative h-24 w-24 sm:h-36 sm:w-36">
        <Image
          priority={true}
          alt={`Spotify profile picture for ${data.display_name}`}
          src={data.images[1].url}
          fill
          className="rounded-full border-2 border-main/30"
        ></Image>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-bold sm:text-4xl md:text-5xl">
          {data.display_name}
        </h2>
        <span className="flex flex-col sm:flex-row sm:items-center sm:gap-8">
          <h3 className="text-lg sm:text-xl">
            <span className="text-highlight/80">{data.followers.total}</span>{" "}
            followers
          </h3>
          <a
            className="group flex items-center gap-1 text-lg transition-colors sm:text-xl"
            target="_blank"
            href={data.external_urls.spotify}
          >
            View profile
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
          </a>
        </span>
      </div>
    </section>
  )
}

export default ProfilePreview
