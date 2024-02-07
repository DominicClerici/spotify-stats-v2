"use client"
// import "./hamburgerStyle.css"
import Link from "next/link"
import React, { useState } from "react"

const MobileHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const className = {
    navStyle: "rounded font-light px-2 py-1 hover:bg-main/10 transition-colors",
  }
  return (
    <>
      <svg
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        xmlns="http://www.w3.org/2000/svg"
        className={`${isOpen ? "open" : ""} hamburgerSvg relative z-50 h-8 w-10 cursor-pointer transition-colors duration-200`}
        fill={isOpen ? "white" : "gray"}
        viewBox="0 0 30 30"
      >
        <path
          className="transition-all duration-300"
          d={`M1.5 ${isOpen ? "28.5" : "1.5"} L28.5 1.5`}
          strokeWidth="3"
          stroke={isOpen ? "white" : "darkgray"}
          strokeLinecap="round"
          strokeLinejoin="round"
          radius="1"
        ></path>
        <path
          className="transition-all duration-300"
          d="M1.5 15 L28.5 15"
          strokeWidth="3"
          stroke={isOpen ? "white" : "darkgray"}
          opacity={isOpen ? "0" : "1"}
          strokeLinecap="round"
          strokeLinejoin="round"
          radius="1"
        ></path>
        <path
          className="transition-all duration-300"
          d={`M1.5 ${isOpen ? "1.5" : "28.5"} L28.5 28.5`}
          strokeWidth="3"
          stroke={isOpen ? "white" : "darkgray"}
          strokeLinecap="round"
          strokeLinejoin="round"
          radius="1"
        ></path>
      </svg>
      <div
        className={`${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} absolute left-0 top-0 w-full bg-background p-4 transition-all duration-300`}
      >
        <nav>
          <ul className="flex flex-col gap-4 text-xl">
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
      </div>
    </>
  )
}

export default MobileHamburgerMenu
