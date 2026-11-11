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
                {"status" in project && project.status && (
                  <span className="project-type-badge project-status-badge">
                    <span className="project-status-dot" aria-hidden="true" />
                    {project.status}
                  </span>
                )}
              </div>
              <h3 className="project-title">{project.name}</h3>
              {"subtitle" in project && project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
              <p className="project-desc">{project.description}</p>

              <div className="project-contributions">
                <span className="project-contributions-label">My Contributions</span>
                {"contributionGroups" in project && project.contributionGroups ? (
                  project.contributionGroups.map((group) => {
                    const list = (
                      <ul className="project-contributions-list">
                        {group.items.map((c) => (
                          <li key={c} className="project-contribution">
                            {c}
                          </li>
                        ))}
                      </ul>
                    );
                    return "collapsible" in group && group.collapsible ? (
                      <details key={group.label} className="project-contribution-group project-contribution-details">
                        <summary className="project-contribution-group-label project-contribution-summary">
                          {group.label}
                          <span className="project-contribution-count">{group.items.length}</span>
                          <span className="project-contribution-toggle" aria-hidden="true" />
                        </summary>
                        {list}
                      </details>
                    ) : (
                      <div key={group.label} className="project-contribution-group">
                        <span className="project-contribution-group-label">{group.label}</span>
                        {list}
                      </div>
                    );
                  })
                ) : (
                  <ul className="project-contributions-list">
                    {project.contributions.map((c) => (
                      <li key={c} className="project-contribution">
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
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
