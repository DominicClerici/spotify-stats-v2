import { cookies } from "next/headers"
import Link from "next/link"
import React from "react"
import { Logout } from "./Logout"

const scope = "user-read-private user-read-email user-top-read"

const Header = () => {
  const accessToken = cookies().get("access_token")
  const refreshToken = cookies().get("refresh_token")

  const className = {
    navStyle: "rounded px-4 py-1 text-lg hover:bg-main/10 transition-colors",
  }

  let innerJsx
  if (refreshToken) {
    innerJsx = (
      <>
        <nav>
          <ul className="flex items-center gap-2">
            <Link href="dashboard" className={className.navStyle}>
              <li>Dashboard</li>
            </Link>
            <Link href="tracks" className={className.navStyle}>
              <li>Top tracks</li>
            </Link>
            <Link href="tracks" className={className.navStyle}>
              <li>Top artists</li>
            </Link>
            <Link href="tracks" className={className.navStyle}>
              <li>Recently played</li>
            </Link>
          </ul>
        </nav>
        <Logout />
      </>
    )
  } else {
    innerJsx = (
      <a
        href={`https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/callback&scope=${scope}`}
        className="rounded transition-colors py-1 border-highlight border-2 font-semibold text-highlight text-lg bg-main/10 px-3 ml-auto hover:bg-main/20"
      >
        Log in with Spotify
      </a>
    )
  }

  return (
    <header className="w-full bg-background/70 backdrop-blur-lg fixed z-10 top-0 left-0">
      <div className="flex items-center py-5 px-12 max-w-screen-xl mx-auto">
        <Link href="/" className="mr-8 p-2 group">
          <svg
            className="h-8 w-8 text-main"
            viewBox="0 0 100 100"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="5.5" height="100" rx="2.75" />
            <rect x="100" y="94.5" width="5.5" height="100" rx="2.75" transform="rotate(90 100 94.4883)" />
            <rect
              className="group-hover:text-highlight transition-colors"
              x="9.7"
              y="29.3965"
              width="15"
              height="62"
              rx="2"
            />
            <rect
              className="group-hover:text-highlight transition-colors"
              x="32.8"
              y="57.7427"
              width="15"
              height="33"
              rx="2"
            />
            <rect
              className="group-hover:text-highlight transition-colors"
              x="55.9"
              y="18.6353"
              width="15"
              height="72"
              rx="2"
            />
            <rect
              className="group-hover:text-highlight transition-colors"
              x="79"
              y="41.2075"
              width="15"
              height="50"
              rx="2"
            />
          </svg>
        </Link>
        {innerJsx}
      </div>
    </header>
  )
}

export default Header
