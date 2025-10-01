import { FaEnvelope } from "react-icons/fa";
import {
  SiInstagram,
  SiYoutube,
  SiSpotify,
  SiApplemusic,
} from "react-icons/si";

export default function SocialLinks({
  links,
  onMailClick, // open modal
  size = "clamp(18px, 2.2vw, 24px)",
}) {
  const items = [
    { name: "Email", Icon: FaEnvelope, onClick: onMailClick },
    { name: "Instagram", Icon: SiInstagram, href: links.instagram },
    { name: "YouTube", Icon: SiYoutube, href: links.youtube },
    { name: "Spotify", Icon: SiSpotify, href: links.spotify },
    { name: "Apple Music", Icon: SiApplemusic, href: links.apple },
  ];
  return (
    <nav
      className="socials"
      aria-label="social links"
      style={{ gap: "clamp(10px,1.2vw,16px)" }}
    >
      {items.map(({ name, Icon, href, onClick }) =>
        href ? (
          <a
            key={name}
            href={href}
            aria-label={name}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: size }}
          >
            <Icon />
          </a>
        ) : (
          <button
            key={name}
            aria-label={name}
            onClick={onClick}
            style={{ fontSize: size }}
            className="social-btn"
          >
            <Icon />
          </button>
        )
      )}
    </nav>
  );
}
export { SiSpotify as SpotifyIcon, SiApplemusic as AppleIcon };
