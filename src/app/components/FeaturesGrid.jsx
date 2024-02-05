import React from "react"

const FeaturesGrid = () => {
  return (
    <section className="w-full animate-fade-in">
      <div className="mx-auto grid max-w-[1000px] px-2 sm:px-4 md:px-8">
        <div className="relative grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
          <div className="flex items-center gap-4">
            <div className="rounded-md bg-highlight/25 sm:rounded-xl">
              <svg
                className="h-12 w-12 p-2 text-highlight sm:h-16 sm:w-16 sm:p-4"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M396.8 352h22.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-192 0h22.4c6.4 0 12.8-6.4 12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h22.4c6.4 0 12.8-6.4 12.8-12.8V204.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-387.2-48h22.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8z"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold">Your stats, at a glance.</h2>
              <span>
                See your top tracks, artists, and genres at a glance on your
                personal dashboard.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-md bg-highlight/25 sm:rounded-xl">
              <svg
                className="h-12 w-12 p-2 text-highlight sm:h-16 sm:w-16 sm:p-4"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                  d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                ></path>
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M256 128v144h96"
                ></path>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold">Custom time ranges.</h2>
              <span>
                See every metric from the last 4 weeks, 6 months, or all time.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-md bg-highlight/25 sm:rounded-xl">
              <svg
                className="h-12 w-12 p-2 text-highlight sm:h-16 sm:w-16 sm:p-4"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Lock">
                  <g>
                    <path d="M17.44,9.33h-1.1V6.4a4.34,4.34,0,0,0-8.68,0V9.33H6.56a2.5,2.5,0,0,0-2.5,2.5v7.61a2.507,2.507,0,0,0,2.5,2.5H17.44a2.507,2.507,0,0,0,2.5-2.5V11.83A2.5,2.5,0,0,0,17.44,9.33ZM8.66,6.4a3.34,3.34,0,0,1,6.68,0V9.33H8.66ZM18.94,19.44a1.511,1.511,0,0,1-1.5,1.5H6.56a1.511,1.511,0,0,1-1.5-1.5V11.83a1.5,1.5,0,0,1,1.5-1.5H17.44a1.5,1.5,0,0,1,1.5,1.5Z"></path>
                    <path d="M13,14.95a.984.984,0,0,1-.5.86v1.5a.5.5,0,0,1-1,0v-1.5a.984.984,0,0,1-.5-.86,1,1,0,0,1,2,0Z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold">Secure and private</h2>
              <span>
                The data is stored in your browser and is never sent to any
                server external besides Spotify.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-md bg-highlight/25 sm:rounded-xl">
              <svg
                className="h-12 w-12 p-2 text-highlight sm:h-16 sm:w-16 sm:p-4"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold">Updated instantly</h2>
              <span>
                Your statistics are updated with every visit, so you can always
                see your most recent listening habits.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative -top-16 mx-auto grid max-w-[1200px] grid-cols-3 gap-8">
          <div className={className.panel}>
            <h2 className={className.header}>How it works.</h2>
            <p className={className.body}>
              Spotify Stats uses the Spotify Web API to retrieve your listening
              history and generate statistics based on that. This allows you to
              see your most listened to tracks, favorite artists, and most loved
              genres.{" "}
              <span>
                The data is stored in your browser and is never sent to any
                server.
              </span>
            </p>
          </div>
          <div className={className.panel}>
            <h2 className={className.header}>Wrapped came early!</h2>
            <p className={className.body}>
              Wrapped came early this year! Spotify Stats is a great way to see
              your listening statistics before the official Wrapped is released.
              See your top tracks, artists, and genres at any time of the year.
            </p>
          </div>
          <div className={className.panel}>
            <h2 className={className.header}>Share your stats.</h2>
            <p className={className.body}>
              Spotify stats allows you to share your stats with your friends.
              You can create a playlist of your top tracks, or create a poster
              image of your top artists and songs. Share your stats with your
              friends, or don&apos;t, you never know what songs are going to be
              at the top.
            </p>
          </div>
        </div> */}
    </section>
  )
}

export default FeaturesGrid
