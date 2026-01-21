import { useState } from "react";
import "../styles/album.css";

export default function AlbumPlaceholder({
  front,
  backText,
  title = "Single",
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`album-flip ${flipped ? "flipped" : ""}`}>
      <button
        className="album-3d"
        type="button"
        onClick={() => setFlipped((v) => !v)}
        aria-label={flipped ? `Show ${title} cover` : `Show ${title} back`}
      >
        <div className="album-face album-front">
          <img src={front} alt={`${title} cover`} />
        </div>
        <div className="album-face album-back single-back">
          <div className="single-back-label">{backText}</div>
        </div>
      </button>
    </div>
  );
}
