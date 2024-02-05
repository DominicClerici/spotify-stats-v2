import { cookies } from "next/headers"
import Link from "next/link"
import Logo from "./Logo"
import Login from "./Login"

const HeroSection = () => {
  return (
    <section className="mx-auto mb-48 grid max-w-screen-xl gap-12 px-4 pt-[25vh] md:grid-cols-2 md:gap-0 md:px-8 lg:px-16">
      <div className="order-2 md:order-1">
        {/* make top tracks top artists and top genres align on the left */}
        <h1 className="xs:text-3xl mb-16 flex min-w-max animate-fade-in justify-center gap-2 text-2xl font-bold sm:text-4xl md:justify-normal md:gap-3 lg:text-5xl xl:text-6xl">
          Your favorite
          <span className="flex flex-col">
            tracks <br />
            artists <br /> genres
          </span>
        </h1>
        <div className="flex justify-center">
          {cookies().get("refresh_token") ? (
            <Link
              href="/dashboard"
              className="inline-block animate-fade-in rounded bg-gradient-to-tr from-highlight/40 to-darkHighlight px-4 py-2 text-xl font-semibold transition-all duration-75 hover:brightness-110"
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
