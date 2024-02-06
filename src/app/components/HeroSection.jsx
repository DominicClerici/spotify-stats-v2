import { cookies } from "next/headers"
import Link from "next/link"
import Logo from "./Logo"
import Login from "./Login"

const HeroSection = () => {
  return (
    <section className="mx-auto mb-48 grid max-w-screen-xl gap-12 px-4 pt-[25vh] md:grid-cols-2 md:gap-0 md:px-8 lg:px-16">
      <div className="order-2 md:order-1">
        {/* make top tracks top artists and top genres align on the left */}
        <h1 className="xs:text-3xl mb-4 text-center text-2xl font-bold sm:text-4xl md:text-left lg:text-5xl xl:text-6xl">
          Spotify stats
        </h1>
        <h2 className="xs:text-xl mb-16 flex min-w-max justify-center gap-2 text-lg font-semibold text-main/65 sm:text-2xl md:justify-normal lg:text-3xl">
          Your top
          <span className="flex flex-col text-main">
            tracks. <br />
            artists. <br /> genres.
          </span>
        </h2>
        <div className="flex justify-center">
          {cookies().get("refresh_token") ? (
            <Link
              href="/dashboard"
              className="inline-block rounded bg-gradient-to-tr from-highlight/40 to-darkHighlight px-4 py-2 text-xl font-semibold transition-all duration-75 hover:brightness-110"
            >
              See your stats
            </Link>
          ) : (
            <Login />
          )}
        </div>
      </div>
      <div className="order-1 mx-auto md:order-2">
        <Logo large={true} />
      </div>
    </section>
  )
}

export default HeroSection
