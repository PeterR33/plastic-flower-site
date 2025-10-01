import { useEffect, useRef, useState } from "react";
import { SpotifyIcon, AppleIcon } from "./SocialLinks";
import "../styles/album.css";

export default function AlbumFlip({
  front,
  back,
  title = "Album",
  appleHref = "#",
  spotifyHref = "#",
  tracks = [],
  releaseDate = "",
}) {
  const [flipped, setFlipped] = useState(false);

  // refs for smooth expand/collapse
  const detailsCollapserRef = useRef(null);
  const detailsInnerRef = useRef(null);

  // whenever flipped changes, animate height so content below moves naturally
  useEffect(() => {
    const collapser = detailsCollapserRef.current;
    const inner = detailsInnerRef.current;
    if (!collapser || !inner) return;

    const setToAutoAfterExpand = () => {
      // after expansion animation completes, set height:auto for responsiveness
      collapser.style.height = "auto";
      collapser.removeEventListener("transitionend", setToAutoAfterExpand);
    };

    if (flipped) {
      // Expand: from current height (0 or px) to scrollHeight
      const target = inner.scrollHeight;
      collapser.style.height = target + "px";
      collapser.addEventListener("transitionend", setToAutoAfterExpand);
      collapser.classList.add("is-open");
    } else {
      // Collapse: set explicit px height first, then to 0 on next tick
      const current = inner.getBoundingClientRect().height;
      collapser.style.height = current + "px";
      // force reflow to ensure the browser picks up the starting height
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      collapser.offsetHeight;
      collapser.style.height = "0px";
      collapser.classList.remove("is-open");
    }
  }, [flipped]);

  return (
    <div className={`album-flip ${flipped ? "flipped" : ""}`}>
      <button
        className="album-3d"
        onClick={() => setFlipped((v) => !v)}
        aria-label={flipped ? "Show album front" : "Show album back & details"}
      >
        <div className="album-face album-front">
          <img src={front} alt={`${title} cover`} />
        </div>
        <div className="album-face album-back">
          <img src={back} alt={`${title} back`} />
        </div>
      </button>

      {/* Collapser controls height; inner holds actual content */}
      <div className="album-details-collapser" ref={detailsCollapserRef}>
        <div className="album-details" ref={detailsInnerRef}>
          <div className="album-links left">
            <a
              href={appleHref}
              target="_blank"
              rel="noopener noreferrer"
              className="album-link apple"
            >
              <AppleIcon />
              <span>Apple Music</span>
            </a>
            <a
              href={spotifyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="album-link spotify"
            >
              <SpotifyIcon />
              <span>Spotify</span>
            </a>
          </div>

          <div className="tracklist">
            {tracks.map((t, i) => (
              <div className="track" key={i}>
                {t}
              </div>
            ))}
          </div>

          <div className="mini-footer left">Release date: {releaseDate}</div>
        </div>
      </div>
    </div>
  );
}
