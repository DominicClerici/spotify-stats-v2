import { cookies } from "next/headers"
import Link from "next/link"

export default function Home() {
  const className = {
    header: "text-2xl mb-4",
    body: "text-lg",
    panel: "p-8 rounded-lg bg-main/10",
  }

  const scope = "user-read-private user-read-email user-top-read"

  return (
    <main>
      <section className="mt-24 max-w-screen-lg min-h-[70vh] flex flex-col items-center justify-center mx-auto">
        <h1 className="text-6xl font-bold">Spotify stats</h1>
        <h2 className="text-3xl my-8">See your spotify listening statistics</h2>
        {cookies().get("refresh_token") ? (
          <Link href="/dashboard" className="text-lg bg-main/10 my-24 px-3">
            See your stats
          </Link>
        ) : (
          <a
            href={`https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/callback&scope=${scope}`}
            className="rounded py-2 border-highlight border-2 font-semibold text-highlight text-xl bg-main/10 px-4 my-24 hover:bg-main/20 transition-colors"
          >
            Log in with Spotify
          </a>
        )}
      </section>
      <section className="grid grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        <div className={className.panel}>
          <h2 className={className.header}>How it works.</h2>
          <p className={className.body}>
            Spotify Stats uses the Spotify Web API to retrieve your listening history and generate statistics based on
            that. This allows you to see your most listened to tracks, favorite artists, and most loved genres.{" "}
            <span>The data is stored in your browser and is never sent to any server.</span>
          </p>
        </div>
        <div className={className.panel}>
          <h2 className={className.header}>Wrapped came early!</h2>
          <p className={className.body}>
            Wrapped came early this year! Spotify Stats is a great way to see your listening statistics before the
            official Wrapped is released. See your top tracks, artists, and genres at any time of the year.
          </p>
        </div>
        <div className={className.panel}>
          <h2 className={className.header}>Share your stats.</h2>
          <p className={className.body}>
            Spotify stats allows you to share your stats with your friends. You can create a playlist of your top
            tracks, or create a poster image of your top artists and songs. Share your stats with your friends, or
            don&apos;t, you never know what songs are going to be at the top.
          </p>
        </div>
      </section>
    </main>
  )
}
