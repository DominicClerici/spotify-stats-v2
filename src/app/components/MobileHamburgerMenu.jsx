"use client"
import "./hamburgerStyle.css"
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
        viewBox="0 0 30 22"
      >
        <path
          className="firstPath"
          d="M2 0 L28 0"
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          radius="1"
        ></path>
        <path
          d="M2 11 L28 11"
          strokeWidth="3"
          stroke="white"
          opacity={isOpen ? "0" : "1"}
          strokeLinecap="round"
          strokeLinejoin="round"
          radius="1"
        ></path>
        <path
          className="secondPath"
          d="M2 22 L28 22"
          strokeWidth="3"
          stroke="white"
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
