import Image from "next/image";
import { profile, socials } from "@/lib/content";
import { ArrowRightIcon, DownloadIcon, socialIcons } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div aria-hidden="true" className="hero-bg-grid" />
      <div aria-hidden="true" className="dot" style={{ top: "18%", left: "6%", width: 7, height: 7, background: "var(--em)", animationDuration: "7s" }} />
      <div aria-hidden="true" className="dot" style={{ top: "62%", left: "3%", width: 5, height: 5, background: "var(--ink)", animationDuration: "9s", animationDelay: ".6s" }} />
      <div aria-hidden="true" className="dot" style={{ top: "12%", right: "16%", width: 5, height: 5, background: "var(--em)", animationDuration: "8s", animationDelay: "1.2s" }} />

      <div className="hero-grid split" style={{ gridTemplateColumns: "1.08fr .92fr" }}>
        <div>
          <span data-reveal className="eyebrow hero-badge">
            <span className="eyebrow-dot" />
            Hello, I&apos;m
          </span>
          <h1 data-reveal className="hero-title">
            {profile.name}
          </h1>
          <p data-reveal className="hero-subtitle">
            IT Undergraduate
            <br />
            <span className="accent-text">&amp; DevOps</span> Enthusiast
          </p>
          <div data-reveal className="hero-rule" />
          <p data-reveal className="hero-desc">
            I&apos;m an IT undergraduate passionate about building reliable software and learning modern DevOps
            practices. I enjoy developing full-stack applications, working with backend technologies, and exploring
            cloud, containers, automation, and CI/CD.
          </p>
          <div data-reveal className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects
              <ArrowRightIcon />
            </a>
            <a href={profile.cvHref} download className="btn btn-outline">
              Download CV
              <DownloadIcon />
            </a>
            <a href="#contact" className="link-underline">
              Let&apos;s Connect ↗
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-frame">
            <div aria-hidden="true" className="portrait-outline" />
            <div aria-hidden="true" className="portrait-accent" />
            <div className="portrait-photo-wrap">
              <div className="portrait-photo">
                <Image
                  src="/profile.png"
                  alt={`Portrait of ${profile.name}`}
                  fill
                  sizes="(min-width: 900px) 420px, 60vw"
                  className="portrait-photo-img"
                  priority
                />
              </div>
            </div>
            <div className="portrait-tag">{profile.location}</div>
          </div>

          <div className="social-rail desk-only" style={{ display: "flex" }}>
            <span className="social-rail-label">Follow me on</span>
            <span className="social-rail-line" />
            {socials.map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={s.label}
                  className="social-icon"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
