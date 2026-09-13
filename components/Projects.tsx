import { projects } from "@/lib/content";
import { GithubIcon } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ background: "var(--pg-2)", borderTop: "1px solid var(--ln)", borderBottom: "1px solid var(--ln)" }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span data-reveal className="eyebrow">
              <span className="eyebrow-dot" />
              Portfolio
            </span>
            <h2 data-reveal className="section-title">
              Projects <span className="accent-text"> I've Built</span>
            </h2>
          </div>
          <p data-reveal className="section-lede">
            Here are some of the projects I&apos;ve built while developing my software engineering and DevOps
            skills.
          </p>
        </div>

        {projects.map((project, i) => (
          <article
            key={project.name}
            data-reveal
            data-card
            className={`project-card${i < projects.length - 1 ? " mb" : ""}`}
          >
            <div className="project-copy">
              <div className="project-kicker-group">
                <span className="project-kicker">{project.number}</span>
                <span className="project-type-badge">{project.type}</span>
              </div>
              <h3 className="project-title">{project.name}</h3>
              {"subtitle" in project && project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
              <p className="project-desc">{project.description}</p>

              <div className="project-contributions">
                <span className="project-contributions-label">My Contributions</span>
                <ul className="project-contributions-list">
                  {project.contributions.map((c) => (
                    <li key={c} className="project-contribution">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-tags">
                {project.tech.map((t) => (
                  <span key={t} className="tag tag--sm">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {project.repos.map((repo) => (
                  <a key={repo.label} href={repo.href} target="_blank" rel="noreferrer" className="btn-dark-sm">
                    <GithubIcon size={15} />
                    {repo.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
