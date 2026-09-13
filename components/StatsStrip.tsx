import { techStrip } from "@/lib/content";

export default function StatsStrip() {
  return (
    <section className="stats-strip">
      <div className="stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div className="stat-cell">
          <p className="stat-eyebrow">Currently</p>
          <p className="stat-value">Full-Stack Development</p>
        </div>
        <div className="stat-cell">
          <p className="stat-eyebrow">Learning</p>
          <p className="stat-value">DevOps &amp; Cloud</p>
        </div>
        <div className="stat-cell">
          <p className="stat-eyebrow" style={{ marginBottom: 10 }}>
            Working with
          </p>
          <div className="stat-tags">
            {techStrip.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
