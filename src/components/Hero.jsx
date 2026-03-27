import { forwardRef } from "react";
import {
  SiInstagram,
  SiYoutube,
  SiSpotify,
  SiApplemusic,
} from "react-icons/si";
import { LINKS } from "../config/links";

const heroNavLinks = [
  { label: "Music", href: "#music" },
  { label: "Shows", href: "#shows" },
  { label: "Films", href: "#films" },
  { label: "Merch", href: "#merch" },
];

const socialItems = [
  { name: "Instagram", Icon: SiInstagram, href: LINKS.instagram },
  { name: "YouTube", Icon: SiYoutube, href: LINKS.youtube },
  { name: "Spotify", Icon: SiSpotify, href: LINKS.spotify },
  { name: "Apple Music", Icon: SiApplemusic, href: LINKS.apple },
];

const Hero = forwardRef(function Hero(_props, ref) {
  return (
    <section className="hero" ref={ref} aria-label="Band hero image">
      <img
        className="hero-img"
        src="/HeroImage.JPG"
        alt="Plastic Flower band"
      />
      <div className="film-grain" aria-hidden="true" />

      {/* Social icons — top center */}
      <nav className="hero-socials" aria-label="social links">
        {socialItems.map(({ name, Icon, href }) => (
          <a
            key={name}
            href={href}
            aria-label={name}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
          >
            <Icon />
          </a>
        ))}
      </nav>

      {/* Center logo */}
      <div className="hero-center">
        <img
          src="/BackGroundRemove.png"
          alt="Plastic Flower"
          className="hero-logo"
        />
      </div>

      {/* Bottom nav links */}
      <nav className="hero-nav" aria-label="page sections">
        {heroNavLinks.map(({ label, href }) => (
          <a key={label} href={href} className="hero-nav-link">
            {label}
          </a>
        ))}
      </nav>
    </section>
  );
});

export default Hero;
