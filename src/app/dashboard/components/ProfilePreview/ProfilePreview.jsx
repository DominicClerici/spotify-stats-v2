import Image from "next/image"
import React from "react"

const ProfilePreview = async ({ accessCode }) => {
  const res = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessCode}`,
    },
  })
  let data
  if (res.ok) {
    data = await res.json()
  }
  return (
    <div className="flex items-center gap-4 px-12 fade-in-0 animate-in duration-1000">
      <Image
        src={data.images[1].url}
        height={150}
        width={150}
        className="rounded-full border-2 border-main/30"
      ></Image>
      <div>
        <h2 className="font-bold text-5xl mb-2">{data.display_name}</h2>
        <span className="flex items-center gap-8">
          <h3 className="text-xl">
            <span className="text-highlight">{data.followers.total}</span>{" "}
            followers
          </h3>
          <a
            className="text-xl hover:text-highlight transition-colors"
            target="_blank"
            href={data.external_urls.spotify}
          >
            View full profile
          </a>
        </span>
      </div>
    </div>
  )
  //   return (
  //     <div className="flex items-center gap-4 px-12">
  //       <Image
  //         src={data.images[1].url}
  //         height={150}
  //         width={150}
  //         className="rounded-full border-2 border-main/30"
  //       ></Image>
  //       <div>
  //         <h2 className="font-bold text-5xl mb-2">{data.display_name}</h2>
  //         <span className="flex items-center gap-8">
  //           <h3 className="text-xl">
  //             <span className="text-highlight">{data.followers.total}</span>{" "}
  //             followers
  //           </h3>
  //           <a
  //             className="text-xl hover:text-highlight transition-colors"
  //             target="_blank"
  //             href={data.external_urls.spotify}
  //           >
  //             View full profile
  //           </a>
  //         </span>
  //       </div>
  //     </div>
  //   )
}

export default ProfilePreview
