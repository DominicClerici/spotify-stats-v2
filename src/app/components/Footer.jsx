import React from "react"

const Footer = () => {
  const className = {
    header: "text-main text-xl font-semibold",
    link: "text-main/80",
    column: "flex flex-col gap-3",
  }
  return (
    <footer className="w-full bg-main/5">
      <div className="mx-auto grid max-w-screen-lg grid-cols-3 gap-12 py-24">
        <div>
          <h1>Logo here</h1>
          <h2>Made with love by Dominic Clerici</h2>
        </div>
        <div>
          <h1 className={className.header}>Links</h1>
          <ul>
            <li className={className.link}>Link 1</li>
            <li className={className.link}>Link 2</li>
            <li className={className.link}>Link 3</li>
            <li className={className.link}>Link 4</li>
            <li className={className.link}>Link 5</li>
          </ul>
        </div>
        <div>
          <h1 className={className.header}>My other work</h1>
          <ul>
            <li className={className.link}>My portfolio</li>
            <li className={className.link}>My portfolio</li>
            <li className={className.link}>My portfolio</li>
            <li className={className.link}>My portfolio</li>
            <li className={className.link}>My portfolio</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
