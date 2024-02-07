import React from "react"

const className = {
  header: "font-semibold mt-7 text-2xl text-main",
  paragraph: "text-lg text-main/80",
  list: "text-lg text-main/80 mb-4",
  listHeader: "text-xl font-semibold text-main",
}

const MoreInformation = () => {
  return (
    <section className="w-full">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-2 px-4 pt-24 md:px-8">
        <h3 className={className.header}>Viewing Spotify Stats</h3>
        <p className={className.paragraph}>
          Access your Spotify account to view your top artists, songs, and
          genres, offering a snapshot of your musical preferences over the past
          year.
        </p>

        <h3 className={className.header}>
          Benefits of Spotify Listening Stats
        </h3>
        <p className={className.paragraph}>
          These stats reveal your music preferences, guiding you to new
          discoveries and enhancing your listening experience. Regularly
          reviewing your stats helps tailor your experience to your evolving
          tastes.
        </p>

        <h3 className={className.header}>
          Top Artists: Understanding and Customization
        </h3>
        <p className={className.paragraph}>
          Your top artists, determined by listening time, highlight your
          favorite musicians. You can adjust your preferences by exploring
          Spotify&apos;s recommended new artists and albums.
        </p>

        <h3 className={className.header}>Calculating Top Artists</h3>
        <p className={className.paragraph}>
          Spotify calculates your top artists based on stream counts and
          listening durations, ensuring an accurate reflection of your
          preferences.
        </p>

        <h3 className={className.header}>Exploring New Artists and Albums</h3>
        <p className={className.paragraph}>
          Use Spotify&apos;s &apos;Related Artists&apos; to find new music
          similar to your top artists, expanding your musical range.
        </p>

        <h3 className={className.header}>
          Top Songs: Insights and Playlist Creation
        </h3>
        <p className={className.paragraph}>
          Discover your most played tracks and consider creating personalized
          playlists from these top songs to cater to different moods or
          occasions.
        </p>

        <h3 className={className.header}>
          Spotify Genre Stats: Diving into Your Musical Taste
        </h3>
        <p className={className.paragraph}>
          Explore your top genres to find new artists and albums that match your
          musical style. Spotify identifies these genres based on your listening
          history, enabling personalized music recommendations.
        </p>

        <h3 className={className.header}>
          Enhancing Your Listening Experience with Spotify Stats
        </h3>
        <p className={className.paragraph}>
          Leverage your Spotify stats to refine your music choices, discover new
          artists and genres, and enjoy a more personalized listening
          experience. Custom playlists based on your stats can provide a unique
          soundtrack that mirrors your taste.
        </p>

        <h3 className={className.header}>
          Regular Review: The Power of Updated Insights
        </h3>
        <p className={className.paragraph}>
          Staying informed about your Spotify stats keeps your music choices
          fresh and aligned with your current preferences, ensuring a dynamic
          and satisfying listening journey.
        </p>

        <h3 className={className.header}>FAQs</h3>
        <ol>
          <li>
            <strong className={className.listHeader}>
              Is Stats for Spotify safe?
            </strong>
            <p className={className.list}>
              Stats for Spotify is safe, your data is stored locally in the
              browser.
            </p>
          </li>
          <li>
            <strong className={className.listHeader}>
              Viewing Artist Stats on Spotify?
            </strong>
            <p className={className.list}>
              Use{" "}
              <a
                className="text-[#00FF91] underline"
                href="https://artists.spotify.com/home"
                target="_blank"
              >
                Spotify for Artists
              </a>{" "}
              or other analytics tools to access detailed statistics.
            </p>
          </li>
          <li>
            <strong className={className.listHeader}>
              Accuracy of Stats for Spotify?
            </strong>
            <p className={className.list}>
              Stats for Spotify is accurate, with data sourced directly from
              Spotify, with the{" "}
              <a
                className="text-[#00FF91] underline"
                href="https://developer.spotify.com/documentation/web-api"
                target="_blank"
              >
                Spotify Web API.
              </a>
            </p>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default MoreInformation
