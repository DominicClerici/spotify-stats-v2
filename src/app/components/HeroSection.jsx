import { cookies } from "next/headers";
import Link from "next/link";
import Logo from "./Logo";
import Login from "./Login";

const HeroSection = () => {
  return (
    <section className="mx-auto mt-[25vh] grid min-h-[50vh] max-w-screen-lg grid-rows-2 px-4 md:grid-cols-2">
      <div className="glow-left order-2 md:order-1">
        <h1 className="text-6xl glow-right font-bold">Spotify stats</h1>
        <h2 className="mb-20 mt-3 text-3xl">
          See your spotify listening statistics
        </h2>
        {cookies().get("refresh_token") ? (
          <Link
            href="/dashboard"
            className="glow-below inline-block rounded border border-darkHighlight/20 bg-gradient-to-tr from-highlight/40 to-darkHighlight px-4 py-2 text-xl font-semibold transition-all duration-75"
          >
            See your stats
          </Link>
        ) : (
          <Login />
        )}
      </div>
      <div className="order-1 mx-auto md:order-2 relative">
        <Logo large={true} />
      </div>
    </section>
  );
};

export default HeroSection;
