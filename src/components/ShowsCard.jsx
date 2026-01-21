export default function ShowsCard({ upcoming = [], onShowClick }) {
  return (
    <div className="shows-wrap">
      <div className="shows-card">
        <div className="shows-scroller no-mask">
          {upcoming.map((it, idx) => (
            <Row
              key={`up-${idx}`}
              {...it}
              onClick={
                onShowClick && it.modal ? () => onShowClick(it) : undefined
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Row({ name, date, time, location, href, onClick }) {
  const RowTag = onClick ? "button" : href ? "a" : "div";
  const linkProps = href && !onClick ? { href } : {};
  return (
    <RowTag
      className={`show-row${onClick || href ? " show-row-link" : ""}`}
      role="listitem"
      type={onClick ? "button" : undefined}
      onClick={onClick}
      {...linkProps}
    >
      <div className="show-col name">
        <span className="dot" aria-hidden="true" />
        {name}
      </div>
      <div className="show-col date">{date}</div>
      <div className="show-col time">{time}</div>
      <div className="show-col loc">@ {location}</div>
    </RowTag>
  );
}
