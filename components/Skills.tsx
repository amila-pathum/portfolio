import { skillGroups, devopsSkillCard } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ background: "var(--pg-2)", borderTop: "1px solid var(--ln)", borderBottom: "1px solid var(--ln)" }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span data-reveal className="eyebrow">
              <span className="eyebrow-dot" />
              My Skills
            </span>
            <h2 data-reveal className="section-title">
              Technologies I Use
              <br />
              <span className="accent-text">&amp; I&apos;m Learning</span>
            </h2>
          </div>
          <p data-reveal className="section-lede">
            Honest labels: what I build with today, and what I&apos;m actively learning.
          </p>
        </div>

        <div className="skills-grid g3" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {skillGroups.slice(0, 2).map((group) => (
            <div key={group.title} data-reveal data-card className="skill-card">
              <div className="skill-card-head">
                <h3 className="skill-card-title">{group.title}</h3>
                <span className="skill-badge">{group.badge}</span>
              </div>
              <div className="tag-row">
                {group.skills.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {(() => {
            const group = skillGroups[2];
            return (
              <div data-reveal data-card className="skill-card">
                <div className="skill-card-head">
                  <h3 className="skill-card-title">{group.title}</h3>
                  <span className="skill-badge skill-badge--neutral">{group.badge}</span>
                </div>
                <div className="tag-row">
                  {group.skills.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })()}

          <div data-reveal data-card className="skill-card skill-card--devops">
            <div className="skill-card-head">
              <h3 className="skill-card-title">
                DevOps &amp; Cloud <span className="accent-text--on-dark">{devopsSkillCard.emphasis}</span>
              </h3>
              <span className="skill-badge--em">{devopsSkillCard.badge}</span>
            </div>
            <div className="tag-row" style={{ marginBottom: 24 }}>
              {devopsSkillCard.skills.map((s) => (
                <span key={s} className="tag tag--dark">
                  {s}
                </span>
              ))}
            </div>
            <div className="devops-pipeline-mini">
              {devopsSkillCard.pipeline.map((step, i) => (
                <span key={step} style={{ display: "contents" }}>
                  {i > 0 && <span className="devops-pipeline-mini-arrow">→</span>}
                  <span className={`devops-pipeline-mini-step${i === 0 ? " devops-pipeline-mini-step--first" : ""}`}>{step}</span>
                </span>
              ))}
            </div>
          </div>

          {(() => {
            const group = skillGroups[3];
            return (
              <div data-reveal data-card className="skill-card">
                <div className="skill-card-head">
                  <h3 className="skill-card-title">{group.title}</h3>
                  <span className="skill-badge skill-badge--neutral">{group.badge}</span>
                </div>
                <div className="tag-row">
                  {group.skills.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
