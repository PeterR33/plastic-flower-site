import { useEffect, useRef, useState } from "react";
import Header from "../components/Header"; // add Header here
import Hero from "../components/Hero";
import ShowsCard from "../components/ShowsCard";
import AlbumFlip from "../components/AlbumFlip";
import AlbumPlaceholder from "../components/AlbumPlaceholder";
import MerchSection from "../components/MerchSection";
import ShowModal from "../components/ShowModal";

import albumFront from "../assets/album.png";
import albumBack from "../assets/album-back.png";
import pocketCover from "../assets/Pocket.PNG";
import arpCover from "../assets/ARP.PNG";
import { LINKS } from "../config/links";
import Footer from "../components/Footer";
import GrassStrip from "../components/GrassStrip";

export default function Home() {
  const [pinned, setPinned] = useState(false); // local state for header
  const [showModalOpen, setShowModalOpen] = useState(false);
  const [activeShow, setActiveShow] = useState(null);
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
    {
      name: "Live Set",
      date: "02/12",
      time: "Doors 7:00 PM · Show 7:30 PM",
      location: "Darkside Bar",
      modal: {
        description:
          "Join us for our show in Darkside Tempe. It is a cool vibe and location, and we are excited to play music for everyone and put on a great show.",
        lineup: [
          "PlasticFlower — Headliner",
          "TBD",
          "TBD",
          "TBD",
        ],
        venueHref: "https://www.instagram.com/thedarksidetfm/?",
        venueLabel: "Darkside Instagram",
      },
    },
    { name: "TBD", date: "TBD", time: "TBD", location: "TBD" },
    { name: "TBD", date: "TBD", time: "TBD", location: "Alek's house" },
  ];

  const onShowClick = (show) => {
    if (!show?.modal) return;
    setActiveShow(show);
    setShowModalOpen(true);
  };

  const onCloseShowModal = () => {
    setShowModalOpen(false);
    setActiveShow(null);
  };

  return (
    <>
      {/* header always rendered with pinned state */}
      <Header pinned={pinned} />

      {/* hero observed for pinning */}
      <Hero ref={heroRef} pinned={pinned} />

      <section className="pf-section after-hero">
        <h2 className="section-headline">Upcoming&nbsp;Shows</h2>
        <ShowsCard upcoming={upcoming} onShowClick={onShowClick} />
      </section>

      <h2 className="section-headline mt">Our Music</h2>
      <section className="pf-section" style={{ marginTop: 12 }}>
        <div className="album-stack">
          <AlbumPlaceholder
            front={pocketCover}
            backText="POCKET"
            title="Pocket"
          />
          <AlbumPlaceholder
            front={arpCover}
            backText="AMAZING ROPE POLICE"
            title="Amazing Rope Police"
          />
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
        </div>
      </section>
      <ShowModal
        open={showModalOpen}
        onClose={onCloseShowModal}
        show={activeShow}
      />

      <section className="pf-section" style={{ marginTop: 6 }}>
        <MerchSection instaHref="https://www.instagram.com/plasticflowerband/" />
      </section>

      <Footer></Footer>
      <GrassStrip />
      <div />
    </>
  );
}
