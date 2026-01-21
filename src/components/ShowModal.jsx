import { useEffect } from "react";
import "../styles/modal.css";

export default function ShowModal({ open, onClose, show }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !show) return null;

  const { name, date, time, location, modal } = show;
  const lineup = modal?.lineup || [];
  const venueHref = modal?.venueHref;
  const venueLabel = modal?.venueLabel || "Venue link";

  return (
    <div className="modal-root" onClick={onClose}>
      <div className="modal-card show-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h3 className="modal-title">{name}</h3>
        <div className="show-meta">
          {date} · {time} · {location}
        </div>
        <p className="show-description">{modal?.description}</p>
        <div className="show-section">
          <div className="show-subtitle">Lineup</div>
          <ul className="show-lineup">
            {lineup.map((line, idx) => (
              <li key={`${line}-${idx}`}>{line}</li>
            ))}
          </ul>
        </div>
        {venueHref ? (
          <a className="show-venue-link" href={venueHref}>
            {venueLabel}
          </a>
        ) : null}
      </div>
    </div>
  );
}
