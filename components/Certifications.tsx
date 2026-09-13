import { certifications } from "@/lib/content";
import { CertBadgeIcon, CertDocIcon, CertPlusIcon } from "./icons";

const placeholderIcons = [CertBadgeIcon, CertDocIcon];

export default function Certifications() {
  // Keep at least two open slots so the section reads as "ready to fill"
  // rather than empty, matching the original design's intent.
  const openSlots = Math.max(0, 2 - certifications.length);

  return (
    <section id="certs" className="section-pad certs-section" style={{ background: "var(--pg-2)", borderTop: "1px solid var(--ln)" }}>
      <div className="wrap">
        <div className="section-head">
          <h2 data-reveal className="section-title" style={{ margin: 0 }}>
            Certifications
            <br />
            <span className="accent-text">&amp; Continuous Learning</span>
          </h2>
          <p data-reveal className="section-lede">
            Credentials land here as I complete them — each card takes a name, provider, year and verification link.
          </p>
        </div>

        <div className="certs-grid g3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.href ?? undefined}
              target={cert.href ? "_blank" : undefined}
              rel={cert.href ? "noreferrer" : undefined}
              data-reveal
              data-card
              className="cert-card"
              style={{ borderStyle: "solid", textDecoration: "none" }}
            >
              <CertBadgeIcon />
              <div>
                <p className="cert-name">{cert.name}</p>
                <p className="cert-meta">{cert.meta}</p>
              </div>
              {cert.href && <span className="cert-link">Credential link →</span>}
            </a>
          ))}

          {Array.from({ length: openSlots }).map((_, i) => {
            const Icon = placeholderIcons[i % placeholderIcons.length];
            return (
              <div key={`slot-${i}`} data-reveal data-card className="cert-card">
                <Icon />
                <div>
                  <p className="cert-name">Certification name</p>
                  <p className="cert-meta">Provider · Year</p>
                </div>
                <span className="cert-link">Credential link →</span>
              </div>
            );
          })}

          <div data-reveal data-card className="cert-card cert-card--dark">
            <CertPlusIcon />
            <div>
              <p className="cert-name cert-name--on-dark">Always learning</p>
              <p className="cert-meta cert-meta--on-dark">Cloud &amp; DevOps tracks in progress</p>
            </div>
            <span className="cert-link cert-link--em">Updated regularly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
