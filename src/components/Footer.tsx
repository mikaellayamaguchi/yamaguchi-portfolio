import { Link } from 'react-router';
import { ArrowUp } from 'lucide-react';
import { EMAIL, GITHUB, LINKEDIN, LOCATION } from '../data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <p className="display footer__big">
              Mikaella <span className="accent">Yamaguchi</span>
            </p>
            <p className="mono muted" style={{ marginTop: 12 }}>
              Front-end developer · {LOCATION}
            </p>
          </div>

          <div>
            <p className="mono muted">Index</p>
            <ul>
              <li><Link className="link-u" to="/#about">About</Link></li>
              <li><Link className="link-u" to="/#projects">Work</Link></li>
              <li><Link className="link-u" to="/#blog">Journal</Link></li>
              <li><Link className="link-u" to="/resume">Resume</Link></li>
            </ul>
          </div>

          <div>
            <p className="mono muted">Elsewhere</p>
            <ul>
              <li><a className="link-u" href={`mailto:${EMAIL}`}>Email</a></li>
              <li><a className="link-u" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a className="link-u" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bar mono muted">
          <span>© {year} Mikaella Gabrielle S. Yamaguchi</span>
          <button className="mono" onClick={() => window.scrollTo({ top: 0 })} style={{ display: 'inline-flex', gap: 6, alignItems: 'center', color: 'var(--fg)' }}>
            Back to top <ArrowUp style={{ width: 12, height: 12 }} />
          </button>
        </div>
      </div>
    </footer>
  );
}
