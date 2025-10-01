import { useEffect } from "react";
import "../styles/modal.css";

export default function ContactModal({ open, onClose, toEmail }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = (fd.get("message") || "").toString().trim();
    const subject = encodeURIComponent("Plastic Flower — website message");
    const body = encodeURIComponent(msg);
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
    onClose(); // close after triggering the client email
  };

  return (
    <div className="modal-root" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h3 className="modal-title">Connect with us</h3>
        <form onSubmit={submit} className="modal-form">
          <label className="modal-label" htmlFor="message">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Say hi, ask about shows, booking, etc."
          />
          <button className="modal-send" type="submit">
            Send
          </button>
        </form>
        <p className="modal-note">
          Tip: this opens your mail app to send to us.
        </p>
      </div>
    </div>
  );
}
