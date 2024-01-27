import "./logoStyles.css"
import React from "react"

const Logo = () => {
  return (
    <svg
      className="logoCont h-[30px] w-[75px]"
      viewBox="0 0 150 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="150" height="6" x="0" y="0" />
      <rect className="animRect" width="20" height={32} x="0" y="10" />
      <rect className="animRect" width="20" height={12} x="26" y="10" />
      <rect className="animRect" width="20" height={45} x="52" y="10" />
      <rect className="animRect" width="20" height={22} x="78" y="10" />
      <rect className="animRect" width="20" height={9} x="104" y="10" />
      <rect className="animRect" width="20" height={50} x="130" y="10" />
    </svg>
  )
  return (
    <svg className="h-8 w-8 text-main" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
      <rect className="group-hover:text-highlight transition-colors" x="79" y="41.2075" width="15" height="50" rx="2" />
    </svg>
  )
}

export default Logo
