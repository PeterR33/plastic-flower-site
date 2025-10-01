import merchImg from "../assets/PlaceholderMerch.jpeg"; // replace when you have real photos

export default function MerchSection({ instaHref = "#" }) {
  const items = [
    { id: 1, title: "Merch coming soon.", img: merchImg },
    { id: 2, title: "Merch coming soon.", img: merchImg },
    { id: 3, title: "Merch coming soon.", img: merchImg },
  ];

  return (
    <section className="pf-section merch">
      <h2 className="section-headline">Official Merch</h2>

      <ul className="merch-grid">
        {items.map((it) => (
          <li key={it.id} className="merch-card">
            <div className="merch-media">
              <img src={it.img} alt={it.title} />
            </div>
            <div className="merch-meta">
              <span className="merch-title">{it.title}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="merch-cta">
        <a
          className="merch-btn"
          href={instaHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          DM us to buy
        </a>
      </div>
    </section>
  );
}
