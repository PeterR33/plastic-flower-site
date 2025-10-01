import { useState } from "react";
import "../styles/album.css";

export default function AlbumPlaceholder() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`album-flip ${flipped ? "flipped" : ""}`}>
      <button className="album-3d" onClick={() => setFlipped(!flipped)}>
        <div className="album-face album-front">
          <div className="placeholder-front">Happy Birthday Aleks!</div>
        </div>
        <div className="album-face album-back">
          <div className="placeholder-back">Coming Soon</div>
        </div>
      </button>
    </div>
  );
}
