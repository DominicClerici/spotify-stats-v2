import React from "react";

const scope =
  "user-read-private user-read-email user-top-read user-read-playback-state user-read-recently-played";

const Login = ({ noGlow }) => {
  return (
    <a
      href={`https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/callback&scope=${scope}&show_dialog=true`}
      className={`${noGlow ? "hover:brightness-110" : "glow-below"} inline-block rounded border border-darkHighlight/20 bg-gradient-to-tr from-highlight/40 to-darkHighlight px-4 ${noGlow ? "py-1 text-lg" : "py-2 text-xl"} font-semibold transition-all duration-75`}
    >
      Log in with Spotify
    </a>
  );
};

export default Login;
