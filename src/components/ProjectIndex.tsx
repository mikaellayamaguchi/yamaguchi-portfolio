import { useRef, useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { projects } from '../data';

const pad = (n: number) => String(n).padStart(2, '0');

// Only mouse users get the floating preview; touch devices see inline thumbnails instead.
const canHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export function ProjectIndex() {
  const [open, setOpen] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const movePreview = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      previewRef.current?.style.setProperty('transform', `translate3d(${clientX}px, ${clientY}px, 0)`);
    });
  };

  const showPreview = canHover && hovered !== null && hovered !== open;

  return (
    <div className="pindex-wrap">
      <ol className="pindex" onMouseMove={canHover ? movePreview : undefined} onMouseLeave={() => setHovered(null)}>
        {projects.map((project, i) => {
          const isOpen = open === i;
          const bodyId = `project-${i}`;
          return (
            <li key={project.title} className={`prow reveal ${isOpen ? 'is-open' : ''}`} onMouseEnter={() => setHovered(i)}>
              <button
                className="prow__head"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={bodyId}
              >
                <span className="prow__num mono">{pad(i + 1)}</span>
                <img className="prow__thumb" src={project.images[0]} alt="" loading="lazy" decoding="async" />
                <span className="prow__main">
                  <span className="display prow__title">{project.title}</span>
                  <span className="prow__role mono muted">{project.role}</span>
                </span>
                <span className="prow__tags mono muted">{project.tags.join(' · ')}</span>
                <span className="prow__icon" aria-hidden="true">
                  <Plus />
                </span>
              </button>

              <div
                id={bodyId}
                className="prow__body"
                // Keep links in collapsed rows out of the tab order.
                ref={(el) => { el?.toggleAttribute('inert', !isOpen); }}
              >
                <div className="prow__inner">
                  <div className="project__body">
                    <p>{project.description}</p>
                    <div className="project__side">
                      <div className="chips">
                        {project.tags.map((tag) => (
                          <span key={tag} className="chip">{tag}</span>
                        ))}
                      </div>
                      <div className="project__links">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn--solid">
                          Live site <ArrowUpRight />
                        </a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
                          Source code
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="gallery" tabIndex={0} aria-label={`${project.title} screenshots`}>
                    {project.images.map((img, n) => (
                      <figure key={n}>
                        <img src={img} alt={`${project.title} screenshot ${n + 1}`} loading="lazy" decoding="async" />
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {canHover && (
        <div ref={previewRef} className={`ppreview ${showPreview ? 'is-on' : ''}`} aria-hidden="true">
          <div className="ppreview__frame">
            {projects.map((project, i) => (
              <img key={project.title} src={project.images[0]} alt="" className={hovered === i ? 'is-on' : ''} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
