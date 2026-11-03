import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ArrowDown, Moon, Sun } from 'lucide-react';

const sections = [
  { name: 'About', id: 'about' },
  { name: 'Work', id: 'projects' },
  { name: 'Journal', id: 'blog' },
  { name: 'Contact', id: 'contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  const location = useLocation();
  const onHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    setActive(location.pathname === '/resume' ? 'resume' : '');
    if (!onHome) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    const hero = document.getElementById('home');
    if (hero) io.observe(hero);
    return () => io.disconnect();
  }, [onHome, location.pathname]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Storage can be blocked (private mode); the theme still applies for this visit.
    }
  }, [theme]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <>
      <nav className={`nav ${scrolled || isOpen ? 'is-scrolled' : ''}`}>
        <div className="wrap nav__inner">
          <Link to="/" className="nav__brand">
            Mikaella<span>.</span>Yamaguchi
          </Link>

          <div className="nav__links mono">
            {sections.slice(0, 2).map((s, i) => (
              <Link key={s.id} to={`/#${s.id}`} className={`nav__link ${active === s.id ? 'is-active' : ''}`}>
                <i>0{i + 1}</i>
                {s.name}
              </Link>
            ))}
            <Link to="/" className="nav__mark" aria-label="Back to top">
              MY
            </Link>
            {sections.slice(2).map((s, i) => (
              <Link key={s.id} to={`/#${s.id}`} className={`nav__link ${active === s.id ? 'is-active' : ''}`}>
                <i>0{i + 3}</i>
                {s.name}
              </Link>
            ))}
          </div>

          <div className="nav__right">
            <Link to="/resume" className={`btn ${active === 'resume' ? 'btn--accent' : ''}`}>
              Resume
              <ArrowDown />
            </Link>
            <button
              className="nav__icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
            <button
              className="nav__icon nav__toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`menu ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        <div className="menu__links">
          {sections.map((s, i) => (
            <Link key={s.id} to={`/#${s.id}`} tabIndex={isOpen ? 0 : -1}>
              {s.name}
              <i>0{i + 1}</i>
            </Link>
          ))}
          <Link to="/resume" tabIndex={isOpen ? 0 : -1}>
            Resume
            <i>05</i>
          </Link>
        </div>
        <p className="mono muted">Front-end developer — {new Date().getFullYear()}</p>
      </div>
    </>
  );
}
