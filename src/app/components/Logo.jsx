import "./logoStyles.css"
import React from "react"

const Logo = ({ large }) => {
  return (
    // 75

    <svg
      className={`logoCont ${large ? "h-[90px] w-[225px] lg:h-[120px] lg:w-[300px]" : "h-[30px] w-[75px]"}`}
      viewBox="0 0 150 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="150" height="6" x="0" y="0" fill="#244F26" />
      <rect className="animRect" width="20" height={32} x="0" y="10" />
      <rect className="animRect" width="20" height={12} x="26" y="10" />
      <rect className="animRect" width="20" height={45} x="52" y="10" />
      <rect className="animRect" width="20" height={22} x="78" y="10" />
      <rect className="animRect" width="20" height={9} x="104" y="10" />
      <rect className="animRect" width="20" height={50} x="130" y="10" />
    </svg>
  )
}

export default Logo
