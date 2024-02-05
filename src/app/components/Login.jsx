import React from "react"

const scope =
  "user-read-private user-read-email user-top-read user-read-playback-state user-read-recently-played"

const Login = ({ small }) => {
  return (
    <a
      href={`https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/callback&scope=${scope}&show_dialog=true`}
      className={`inline-block animate-fade-in rounded bg-gradient-to-tr from-highlight/40 to-darkHighlight px-4 hover:brightness-110 ${small ? "py-1 text-lg" : "py-2 text-xl"} font-semibold transition-all duration-75`}
    >
      Log in with Spotify
    </a>
  )
}

export default Login