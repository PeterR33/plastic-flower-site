// src/components/Header.jsx
import { useState } from "react";
import SocialLinks from "./SocialLinks";
import ContactModal from "./ContactModal";
import { LINKS } from "../config/links";
import flower from "../assets/Flower.png";

export default function Header({ pinned }) {
  const [mailOpen, setMailOpen] = useState(false);

  return (
    <>
      {/* NOTE: toggling .pinned drives the visual change */}
      <header className={`topbar ${pinned ? "pinned" : ""}`}>
        <div className="topbar-inner">
          {/* left: brand */}
          <img className="brand-logo" src={flower} alt="Plastic Flower logo" />

          {/* center: title */}
          <div className="topbar-title">PLASTIC&nbsp;FLOWER</div>

          {/* right: socials */}
          <SocialLinks links={LINKS} onMailClick={() => setMailOpen(true)} />
        </div>
      </header>

      <ContactModal
        open={mailOpen}
        onClose={() => setMailOpen(false)}
        toEmail={LINKS.mailTo}
      />
    </>
  );
}
