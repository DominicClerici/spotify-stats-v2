import React from "react"
import PersonalLogo from "./PersonalLogo"

const Footer = () => {
  const className = {
    header: "text-main text-xl font-semibold",
    link: "text-main/80",
    column: "flex flex-col gap-3",
  }
  return (
    <footer className="w-full bg-main/5">
      <div className="row-auto mx-auto grid max-w-screen-lg gap-4 px-4 py-10 sm:px-8 md:py-16">
        <div className="mb-8">
          <a
            href="https://dominicclerici.com"
            className="flex flex-col items-center"
          >
            <h1>By Dominic Clerici</h1>
            <div className="h-14">
              <PersonalLogo />
            </div>
          </a>
        </div>
        {/* <div>
          <h1 className={className.header}>My other work</h1>
          <ul>
            <li className={className.link}>My portfolio</li>
            <li className={className.link}>My portfolio</li>
            <li className={className.link}>My portfolio</li>
            <li className={className.link}>My portfolio</li>
            <li className={className.link}>My portfolio</li>
          </ul>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
