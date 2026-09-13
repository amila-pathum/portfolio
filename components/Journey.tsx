import { timeline } from "@/lib/content";

export default function Journey() {
  return (
    <section id="journey" className="section-pad">
      <div className="journey-grid split">
        <div>
          <span data-reveal className="eyebrow">
            <span className="eyebrow-dot" />
            Journey
          </span>
          <h2 data-reveal className="section-title" style={{ fontSize: "clamp(30px,3.6vw,48px)" }}>
            My Learning
            <br />
            <span className="accent-text">Journey</span>
          </h2>
        </div>

        <div className="timeline">
          {timeline.map((item) => (
            <div key={item.title} data-reveal className={`timeline-item${item.kind === "open" ? " timeline-item--muted" : ""}`}>
              <span className={item.kind === "open" ? "timeline-dot timeline-dot--open" : "timeline-dot"} />
              {item.kind === "current" ? (
                <>
                  <div className="timeline-badges">
                    <span className="timeline-badge-current">{item.badge}</span>
                    <span className="timeline-badge-label">{item.eyebrow}</span>
                  </div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.description}</p>
                  {item.tags && (
                    <div className="tag-row">
                      {item.tags.map((t) => (
                        <span key={t} className="tag tag--sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              ) : item.kind === "experience" ? (
                <>
                  <p className="timeline-eyebrow">{item.eyebrow}</p>
                  <h3 className="timeline-title">{item.title}</h3>
                  <div className="timeline-meta-row">
                    <a href={item.companyHref} target="_blank" rel="noreferrer" className="timeline-meta timeline-meta-link">
                      {item.company}
                    </a>
                    <span className="timeline-meta-sep">·</span>
                    <span className="timeline-meta">{item.location}</span>
                    <span className="timeline-meta-sep">·</span>
                    <span className="timeline-meta">{item.date}</span>
                  </div>
                  <p className="timeline-desc">{item.description}</p>
                  <ul className="timeline-contributions">
                    {item.contributions.map((c) => (
                      <li key={c} className="timeline-contribution">
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="tag-row">
                    {item.tech.map((t) => (
                      <span key={t} className="tag tag--sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <p className="timeline-eyebrow">{item.eyebrow}</p>
                  <h3 className="timeline-title timeline-title--sm">{item.title}</h3>
                  <p className="timeline-desc timeline-desc--sm">{item.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
