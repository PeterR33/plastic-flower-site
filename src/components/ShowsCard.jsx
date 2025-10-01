export default function ShowsCard({ upcoming = [] }) {
  return (
    <div className="shows-wrap">
      <div className="shows-card">
        <div className="shows-scroller no-mask">
          {upcoming.map((it, idx) => (
            <Row key={`up-${idx}`} {...it} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Row({ name, date, time, location }) {
  return (
    <div className="show-row" role="listitem">
      <div className="show-col name">
        <span className="dot" aria-hidden="true" />
        {name}
      </div>
      <div className="show-col date">{date}</div>
      <div className="show-col time">{time}</div>
      <div className="show-col loc">@ {location}</div>
    </div>
  );
}
