import { useEffect, useRef, useState } from "react";
import Header from "../components/Header"; // add Header here
import Hero from "../components/Hero";
import ShowsCard from "../components/ShowsCard";
import AlbumFlip from "../components/AlbumFlip";
import AlbumPlaceholder from "../components/AlbumPlaceholder";
import MerchSection from "../components/MerchSection";

import albumFront from "../assets/album.png";
import albumBack from "../assets/album-back.png";
import { LINKS } from "../config/links";
import Footer from "../components/Footer";
import GrassStrip from "../components/GrassStrip";

export default function Home() {
  const [pinned, setPinned] = useState(false); // local state for header
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setPinned(!entry.isIntersecting),
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const upcoming = [
    { name: "Open Mic", date: "09/25", time: "9:30", location: "Garden" },
    {
      name: "House Party",
      date: "10/16",
      time: "6:30",
      location: "Undisclosed",
    },
    { name: "TBA", date: "TBD", time: "TBD", location: "TBD" },
    {
      name: "Mouse in a Famous House",
      date: "TBD",
      time: "TBD",
      location: "Famous Location",
    },
  ];

  return (
    <>
      {/* header always rendered with pinned state */}
      <Header pinned={pinned} />

      {/* hero observed for pinning */}
      <Hero ref={heroRef} pinned={pinned} />

      <section className="pf-section after-hero">
        <h2 className="section-headline">Upcoming&nbsp;Shows</h2>
        <ShowsCard upcoming={upcoming} />
      </section>

      <h2 className="section-headline mt">Our Music</h2>
      <section className="pf-section" style={{ marginTop: 12 }}>
        <AlbumPlaceholder />
      </section>

      <section className="pf-section push-down">
        <AlbumFlip
          front={albumFront}
          back={albumBack}
          title="NO I NOT"
          appleHref={LINKS.apple}
          spotifyHref={LINKS.spotify}
          tracks={[
            "Stupid Mikebrand",
            "Sober Song",
            "Chocolate on the Wall",
            "Maria's Secret",
            "AmazingRopePolice",
            "Namir's Interlude",
            "NightLinks",
            "1 And 3",
            "Classily",
            "Somethin Sweet",
            "No Emotion",
          ]}
          releaseDate="Feb 7"
        />
      </section>

      <section className="pf-section" style={{ marginTop: 6 }}>
        <MerchSection instaHref="https://www.instagram.com/plasticflowerband/" />
      </section>

      <Footer></Footer>
      <GrassStrip />
      <div />
    </>
  );
}
