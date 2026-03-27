// src/components/Header.jsx
import { useState } from "react";
import SocialLinks from "./SocialLinks";
import ContactModal from "./ContactModal";
import { LINKS } from "../config/links";
import flower from "../assets/Flower.png";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Header({ pinned }) {
  const [mailOpen, setMailOpen] = useState(false);

  return (
    <>
      <header className={`topbar ${pinned ? "pinned" : ""}`}>
        <div className="topbar-inner">
          {/* left: logos (spinning flower + band logo) — click scrolls to top */}
          <button
            className="brand-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <img className="brand-logo" src={flower} alt="" aria-hidden="true" />
          </button>

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
