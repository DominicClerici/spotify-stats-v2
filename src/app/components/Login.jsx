import React from "react"

// const url = "https://spotifystats.dominicclerici.com/callback"
const url = "http://localhost:3000/callback"

const scope =
  "user-read-private user-read-email user-top-read user-read-playback-state user-read-recently-played"

const Login = ({ small }) => {
  return (
    <a
      href={`https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${url}&scope=${scope}&show_dialog=true`}
      className={`inline-block rounded bg-gradient-to-tr from-highlight/40 to-darkHighlight px-2 hover:brightness-110 sm:px-4 ${small ? "text-md py-1 sm:text-lg" : "py-2 text-xl"} font-semibold transition-all duration-75`}
    >
      Log in with Spotify
    </a>
  )
}

export default Login
