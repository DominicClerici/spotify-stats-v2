import { cookies } from "next/headers"
import Link from "next/link"
import React from "react"
import { Logout } from "./Logout"
import Logo from "./Logo"
import Login from "./Login"
import MobileHamburgerMenu from "./MobileHamburgerMenu"

const Header = () => {
  const refreshToken = cookies().get("refresh_token")

  const className = {
    navStyle:
      "rounded sm:px-4 font-light py-1 md:text-md lg:text-lg hover:bg-main/10 transition-colors",
  }

  let innerJsx

  if (true) {
    innerJsx = (
      <>
        <div className="ml-auto md:hidden">
          <MobileHamburgerMenu />
        </div>
        <nav>
          <ul className="hidden items-center md:flex md:gap-1 lg:gap-2">
            <Link href="dashboard" className={className.navStyle}>
              <li>Dashboard</li>
            </Link>
            <Link href="tracks" className={className.navStyle}>
              <li>Top tracks</li>
            </Link>
            <Link href="artists" className={className.navStyle}>
              <li>Top artists</li>
            </Link>
            <Link href="recents" className={className.navStyle}>
              <li>Recently played</li>
            </Link>
          </ul>
        </nav>
        <div className="mmd:hidden ml-auto md:visible">
          <Logout />
        </div>
      </>
    )
  } else {
    innerJsx = (
      <div className="ml-auto">
        <Login small />
      </div>
    )
  }

  return (
    <header className="fixed left-0 top-0 z-30 w-full bg-background/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-screen-xl items-center px-4 py-2 sm:px-12">
        <Link href="/" className="group p-2 sm:mr-8">
          <span className="absolute opacity-0">home</span>
          <Logo />
        </Link>
        {innerJsx}
      </div>
    </header>
  )
}

export default Header
