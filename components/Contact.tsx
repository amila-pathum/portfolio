import { profile, contactLinks, socials } from "@/lib/content";
import { ArrowRightIcon, DownloadIcon, socialIcons } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div aria-hidden="true" className="contact-bg-grid" />
      <div aria-hidden="true" className="dot" style={{ top: "22%", right: "12%", width: 7, height: 7, background: "var(--em)", animationDuration: "8s" }} />

      <div className="contact-grid split">
        <div>
          <span data-reveal className="eyebrow eyebrow--on-dark" style={{ color: "var(--em)" }}>
            <span className="eyebrow-dot" />
            Contact
          </span>
          <h2 data-reveal className="contact-title">
            Let&apos;s Build
            <br />
            <span className="accent-text--on-dark">Something Great.</span>
          </h2>
          <p data-reveal className="contact-desc">
            I&apos;m currently looking for software engineering and DevOps internship opportunities where I can
            learn, contribute, and grow.
          </p>
          <div data-reveal className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              Get In Touch
              <ArrowRightIcon />
            </a>
            <a href={profile.cvHref} download className="btn btn-ghost-dark">
              Download CV
              <DownloadIcon />
            </a>
          </div>
        </div>

        <div data-reveal className="contact-links">
          {contactLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className={`contact-link${i === contactLinks.length - 1 ? " contact-link--bottom" : ""}`}
            >
              <span className="contact-link-meta">
                <span className="contact-link-label">{link.label}</span>
                <span className="contact-link-value">{link.value}</span>
              </span>
              <span className="contact-link-arrow">↗</span>
            </a>
          ))}

          <div className="contact-social">
            {socials.map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={s.label}
                  className="social-icon social-icon--dark"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
