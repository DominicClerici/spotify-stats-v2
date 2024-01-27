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
    <section className="flex items-center gap-4 px-12 animate-fade-in">
      <Image
        priority={true}
        alt={`Spotify profile picture for ${data.display_name}`}
        src={data.images[1].url}
        height={150}
        width={150}
        className="rounded-full border-2 border-main/30"
      ></Image>
      <div>
        <h2 className="font-bold text-5xl mb-2">{data.display_name}</h2>
        <span className="flex items-center gap-8">
          <h3 className="text-xl">
            <span className="text-highlight/80">{data.followers.total}</span> followers
          </h3>
          <a
            className="text-xl transition-colors group flex items-center gap-1"
            target="_blank"
            href={data.external_urls.spotify}
          >
            View full profile
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
          </a>
        </span>
      </div>
    </section>
  )
}

export default ProfilePreview
