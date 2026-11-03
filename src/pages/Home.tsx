import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { ArrowRight, ArrowDown, ArrowUpRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Ledger } from '../components/Ledger';
import { ProjectIndex } from '../components/ProjectIndex';
import profilePic from '../assets/img/my-picture-3.webp';
import {
  EMAIL, GITHUB, LINKEDIN, LOCATION,
  services, projects, blogPosts, certifications, skillGroups, softSkills,
} from '../data';

const pad = (n: number) => String(n).padStart(2, '0');

function LocalTime() {
  const format = () =>
    new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Manila' }).format(new Date());
  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
  }, []);

  return <b>{time} PHT</b>;
}

function SectionHead({ index, label, title, count, note }: { index: string; label: string; title: string; count?: number; note?: string }) {
  return (
    <header className="sec-head reveal">
      <div>
        <div className="sec-head__label mono muted">
          <span className="accent">({index})</span>
          <span>{label}</span>
        </div>
        <h2 className="display">
          {title}
          {count !== undefined && <sup>({pad(count)})</sup>}
        </h2>
      </div>
      {note && <p className="sec-head__note">{note}</p>}
    </header>
  );
}

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 50);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '16754f68-9a8c-4000-8e2b-108faae7f538',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Portfolio Contact from ' + formData.name,
          from_name: 'E-Portfolio Notification',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Error from Web3Forms:', result);
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setFormStatus('error');
    }
    setTimeout(() => setFormStatus('idle'), 4000);
  };

  const stack = Object.values(skillGroups).flat();

  return (
    <>
      <SEO
        title="Mikaella Yamaguchi | Front End Developer"
        description="Mikaella Gabrielle S. Yamaguchi - Front End Developer crafting beautiful, responsive, and modern web experiences. View my portfolio of projects and get in touch."
      />

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero__frame">
          <div className="hero__status">
            <span className="pill mono">
              <span className="dot" />
              Open to internship opportunities — {new Date().getFullYear()}
            </span>
          </div>

          <div className="hero__info mono muted">
            <div>
              <b>Mikaella G.</b>
              <span>Yamaguchi</span>
            </div>
            <div>
              <b>{LOCATION}</b>
              <span>Philippines</span>
            </div>
            <div>
              <b>Front-End Developer</b>
              <span>UI · Responsive · React</span>
            </div>
            <div className="clock">
              <span>Local time</span>
              <LocalTime />
            </div>
          </div>

          <div className="hero__main">
            <div className="hero__copy">
              <p className="hero__kicker mono muted">
                <span className="dot" style={{ animation: 'none' }} />
                [ 00 ] — Portfolio
              </p>
              <h1 className="display hero__title">
                <span className="line"><span style={{ '--i': 0 } as React.CSSProperties}>Interfaces</span></span>
                <span className="line"><span style={{ '--i': 1 } as React.CSSProperties}>that feel</span></span>
                <span className="line"><span style={{ '--i': 2 } as React.CSSProperties} className="serif-i">effortless.</span></span>
              </h1>
              <div className="hero__card">
                <p>
                  IT student at Holy Angel University specializing in web development. I turn ideas into clean,
                  responsive, and engaging experiences on the web.
                </p>
                <div className="hero__ctas">
                  <a href="#projects" className="btn">See projects</a>
                  <a href="#contact" className="btn btn--solid">
                    Get in touch <ArrowRight />
                  </a>
                </div>
              </div>
            </div>

            <figure className="portrait">
              <img src={profilePic} alt="Portrait of Mikaella Yamaguchi" />
              <figcaption className="portrait__tag mono">
                <span>Fig. 01</span>
                <span>M.Y — {new Date().getFullYear()}</span>
              </figcaption>
            </figure>

            <div className="hero__wordmark" aria-hidden="true">
              <span className="display">Mikaella</span>
              <span className="vert">Yamaguchi</span>
            </div>
          </div>

          <div className="hero__foot mono muted">
            <span>Front-end developer &amp; UI designer</span>
            <a href="#about">
              Scroll <ArrowDown />
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <div className="services">
        {services.map((s, i) => (
          <div key={s} className="reveal" style={{ '--d': `${i * 0.08}s` } as React.CSSProperties}>
            <span className="mono muted">{pad(i + 1)}</span>
            <h3>{s}</h3>
          </div>
        ))}
      </div>

      <div className="marquee" aria-label="Tech stack">
        <div className="marquee__track">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} aria-hidden={i >= stack.length}>{s}</span>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="section">
        <div className="wrap">
          <SectionHead index="01" label="About" title="About me" />

          <div className="about">
            <dl className="about__meta mono reveal">
              <div>
                <dt className="muted">Name</dt>
                <dd>Mikaella Gabrielle S. Yamaguchi</dd>
              </div>
              <div>
                <dt className="muted">Studying</dt>
                <dd>BS Information Technology — Holy Angel University</dd>
              </div>
              <div>
                <dt className="muted">Focus</dt>
                <dd>Web development · UI · Responsive design</dd>
              </div>
              <div>
                <dt className="muted">Status</dt>
                <dd className="accent">Open to internships</dd>
              </div>
            </dl>

            <div>
              <p className="about__lead reveal">
                I'm a front-end developer who got into code after finding websites with amazing interactivity and design —
                and wanting to know <em>how they were built.</em>
              </p>
              <div className="about__body reveal">
                <p>
                  I'm currently studying <strong>Information Technology</strong> with a focus on Web Development at{' '}
                  <strong>Holy Angel University</strong>. I believe great web development is where creativity meets
                  functionality, and I aim to deliver both in every project.
                </p>
                <p>
                  I specialize in responsive, pixel-perfect interfaces using <strong>HTML5</strong>, <strong>CSS3</strong>,{' '}
                  <strong>JavaScript</strong>, <strong>React</strong>, and <strong>Tailwind CSS</strong>, and I'm always eager
                  to learn new technologies and keep up with the web.
                </p>
              </div>

              <div className="stats reveal">
                <div>
                  <b>{pad(projects.length)}</b>
                  <span className="mono muted">Projects shipped</span>
                </div>
                <div>
                  <b>3+</b>
                  <span className="mono muted">Years learning</span>
                </div>
                <div>
                  <b>{pad(certifications.length)}</b>
                  <span className="mono muted">Certifications</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills reveal">
            {Object.entries(skillGroups).map(([group, list]) => (
              <div key={group}>
                <h3 className="mono muted">{group}</h3>
                <ul>
                  {list.map((skill, i) => (
                    <li key={skill}>
                      {skill}
                      <span>{pad(i + 1)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="soft reveal">
            <span className="mono muted">Soft skills —</span>
            <div className="chips">
              {softSkills.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="wrap">
          <SectionHead
            index="02"
            label="Selected work"
            title="Projects"
            count={projects.length}
            note="A selection of sites and apps I've designed and built — from first experiments to full-stack builds."
          />

          <ProjectIndex />
        </div>
      </section>

      {/* Certifications */}
      <section id="credentials" className="section">
        <div className="wrap">
          <SectionHead
            index="03"
            label="Credentials"
            title="Certified"
            count={certifications.length}
            note="Continuous learning and professional development."
          />
          <Ledger items={certifications} />
        </div>
      </section>

      {/* Journal */}
      <section id="blog" className="section">
        <div className="wrap">
          <SectionHead
            index="04"
            label="Journal"
            title="Writing"
            count={blogPosts.length}
            note="Notes, experiments, and lessons from building on the web."
          />

          <div className="journal">
            {blogPosts.map((post, i) => (
              <Link key={post.link} to={post.link} className="post reveal" style={{ '--d': `${i * 0.1}s` } as React.CSSProperties}>
                <div className="post__img">
                  <img src={post.image} alt="" loading="lazy" decoding="async" />
                </div>
                <div className="post__meta mono muted">
                  <span className="accent">{post.category}</span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="post__more mono">
                  Read article <ArrowUpRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="wrap">
          <div className="sec-head__label mono muted reveal">
            <span className="accent">(05)</span>
            <span>Contact</span>
          </div>

          <div className="contact">
            <div>
              <h2 className="display contact__title reveal">
                Let's build <span className="serif-i">something</span> together.
              </h2>
              <p className="muted reveal" style={{ maxWidth: 440, marginBottom: 32 }}>
                I'm currently looking for web development internship opportunities. Let's connect!
              </p>
              <ul className="contact__list reveal">
                <li>
                  <span className="mono muted">Email</span>
                  <a className="link-u" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
                <li>
                  <span className="mono muted">LinkedIn</span>
                  <a className="link-u" href={LINKEDIN} target="_blank" rel="noopener noreferrer">Connect with me</a>
                </li>
                <li>
                  <span className="mono muted">GitHub</span>
                  <a className="link-u" href={GITHUB} target="_blank" rel="noopener noreferrer">View my repositories</a>
                </li>
                <li>
                  <span className="mono muted">Location</span>
                  <span>{LOCATION}</span>
                </li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="form reveal">
              <div className="field">
                <label htmlFor="name" className="mono muted">Your name</label>
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="Juan Dela Cruz" />
              </div>
              <div className="field">
                <label htmlFor="email" className="mono muted">Your email</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="juan@example.com" />
              </div>
              <div className="field">
                <label htmlFor="message" className="mono muted">Message</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required placeholder="Tell me about your project or opportunity…" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <button type="submit" className="btn btn--accent" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' ? 'Sending…' : 'Send message'} <ArrowRight />
                </button>
                <span className="form__status mono" role="status">
                  {formStatus === 'success' && <span className="accent">Message sent — thank you!</span>}
                  {formStatus === 'error' && <span>Something went wrong. Please email me instead.</span>}
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
