import { certifications } from '../data';

export function Ledger({ items }: { items: typeof certifications }) {
  return (
    <ul className="ledger">
      {items.map((cert, i) => (
        <li key={cert.title} className="reveal" style={{ '--d': `${(i % 4) * 0.05}s` } as React.CSSProperties}>
          <span className="mono muted">{String(i + 1).padStart(2, '0')}</span>
          <h3>{cert.title}</h3>
          <span className="issuer mono muted">{cert.issuer}</span>
          <span className="code mono muted">{cert.code ? `#${cert.code}` : '—'}</span>
          <span className="yr mono">{cert.year}</span>
        </li>
      ))}
    </ul>
  );
}
