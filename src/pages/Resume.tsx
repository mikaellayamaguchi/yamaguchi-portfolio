import { useEffect } from 'react';
import { Download } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Ledger } from '../components/Ledger';
import resumePdf from '../assets/docs/my-resume.pdf';
import { EMAIL, LOCATION, certifications, education, skillGroups, softSkills } from '../data';

export function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Resume - Mikaella Yamaguchi"
        description="View Mikaella Gabrielle S. Yamaguchi's resume including education, technical skills, and certifications. Download PDF resume."
      />

      <header className="page-head">
        <div className="wrap">
          <p className="mono muted" style={{ marginBottom: 20 }}>
            <span className="accent">(CV)</span> — Mikaella Gabrielle S. Yamaguchi
          </p>
          <h1 className="display">Resume</h1>
          <div className="page-head__row">
            <p>Front-end web developer, passionate about creating clean, responsive digital experiences.</p>
            <a href={resumePdf} download="MikaellaYamaguchi_Resume.pdf" className="btn btn--accent">
              Download PDF <Download />
            </a>
          </div>
        </div>
      </header>

      <div className="info-strip mono muted">
        <div>
          <span>Email</span>
          <a className="link-u" href={`mailto:${EMAIL}`} style={{ color: 'var(--fg)' }}>{EMAIL}</a>
        </div>
        <div>
          <span>Based in</span>
          <span style={{ color: 'var(--fg)' }}>{LOCATION}</span>
        </div>
        <div>
          <span>Status</span>
          <span style={{ color: 'var(--fg)' }}>Open to internships</span>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="r-block">
            <span className="mono muted"><span className="accent">(01)</span> Education</span>
            <ul className="timeline">
              {education.map((edu) => (
                <li key={edu.degree} className="reveal">
                  <span className="mono accent">{edu.period}</span>
                  <div>
                    <h3>{edu.degree}</h3>
                    <p>{edu.school}{edu.description ? ` — ${edu.description}` : ''}</p>
                  </div>
                  <span className="lvl mono muted">{edu.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="r-block">
            <span className="mono muted"><span className="accent">(02)</span> Technical skills</span>
            <div className="skills reveal" style={{ marginTop: 0 }}>
              {Object.entries(skillGroups).map(([group, list]) => (
                <div key={group}>
                  <h3 className="mono muted">{group}</h3>
                  <div className="chips">
                    {list.map((s) => (
                      <span key={s} className="chip">{s}</span>
                    ))}
                  </div>
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

          <div className="r-block">
            <span className="mono muted"><span className="accent">(03)</span> Certifications &amp; achievements</span>
            <Ledger items={certifications} />
          </div>
        </div>
      </section>
    </>
  );
}
