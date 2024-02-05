import "./logoStyles.css";
import React from "react";

const Logo = ({ large }) => {
  return (
    // 75
    <svg
      className={`logoCont group ${large ? "h-[60px] w-[150px] lg:h-[120px] lg:w-[300px]" : "h-[30px] w-[75px]"}`}
      viewBox="0 0 150 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="150" height="6" x="0" y="0" className="fill-highlight/25 group-hover:fill-highlight/50 duration-300 transition-colors" />
      <rect className="animRect" width="20" height={32} x="0" y="10" />
      <rect className="animRect" width="20" height={12} x="26" y="10" />
      <rect className="animRect" width="20" height={45} x="52" y="10" />
      <rect className="animRect" width="20" height={22} x="78" y="10" />
      <rect className="animRect" width="20" height={9} x="104" y="10" />
      <rect className="animRect" width="20" height={50} x="130" y="10" />
    </svg>
  );
};

export default Logo;
