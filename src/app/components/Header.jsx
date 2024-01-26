import React from "react"

const Header = () => {
  return (
    <header className="w-screen py-5 px-12 bg-background/70 backdrop-blur-lg flex items-center fixed z-10 top-0 left-0">
      <div className="mr-8">
        <p>Icon here</p>
      </div>
      <nav>
        <ul className="flex items-center gap-8">
          <a>
            <li>Top tracks</li>
          </a>
          <a>
            <li>Top artists</li>
          </a>
          <a>
            <li>Top genres</li>
          </a>
          <a>
            <li>Recently played</li>
          </a>
        </ul>
      </nav>
    </header>
  )
}

export default Header
