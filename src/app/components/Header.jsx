import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import { Logout } from "./Logout";
import Logo from "./Logo";
import Login from "./Login";

const scope =
  "user-read-private user-read-email user-top-read user-read-playback-state user-read-recently-played";

const Header = () => {
  const accessToken = cookies().get("access_token");
  const refreshToken = cookies().get("refresh_token");

  const className = {
    navStyle: "rounded px-4 py-1 text-lg hover:bg-main/10 transition-colors",
  };

  let innerJsx;
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
            <Link href="artists" className={className.navStyle}>
              <li>Top artists</li>
            </Link>
            <Link href="recents" className={className.navStyle}>
              <li>Recently played</li>
            </Link>
          </ul>
        </nav>
        <Logout />
      </>
    );
  } else {
    innerJsx = (
      <div className="ml-auto">
        <Login noGlow />
      </div>
    );
  }

  return (
    <header className="fixed left-0 top-0 z-30 w-full bg-background/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-screen-xl items-center px-12 py-2">
        <Link href="/" className="group mr-8 p-2">
          <Logo />
        </Link>
        {innerJsx}
      </div>
    </header>
  );
};

export default Header;
