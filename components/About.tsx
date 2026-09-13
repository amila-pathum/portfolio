export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="about-grid split">
        <div>
          <span data-reveal className="eyebrow">
            <span className="eyebrow-dot" />
            About Me
          </span>
          <h2 data-reveal className="section-title section-title--tight">
            Building Software.
            <br />
            <span className="accent-text">Learning Infrastructure.</span>
            <br />
            Growing Every Day.
          </h2>
          <div data-reveal className="about-copy">
            <p>
              I&apos;m an IT undergraduate with a strong interest in software engineering and DevOps. I enjoy
              building practical applications and understanding how software moves from development to deployment.
            </p>
            <p>
              My current focus is strengthening my backend and full-stack development skills while learning Linux,
              Docker, CI/CD, cloud platforms, and modern DevOps practices.
            </p>
            <p>
              I&apos;m looking for opportunities where I can contribute, learn from experienced engineers, and grow
              into a well-rounded software and DevOps engineer.
            </p>
          </div>
          <div data-reveal className="about-tags">
            <span className="chip--tint">Backend Engineering</span>
            <span className="chip--tint">Full-Stack Apps</span>
            <span className="chip--tint">Linux &amp; Containers</span>
            <span className="chip--tint">CI/CD Automation</span>
          </div>
        </div>

        <div data-reveal style={{ position: "relative" }}>
          <div className="terminal-card">
            <div className="terminal-bar">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot terminal-dot--em" />
              <span className="terminal-title">amila@dev — zsh</span>
            </div>
            <div className="terminal-body">
              <div>
                <span className="terminal-prompt">$</span> whoami
              </div>
              <div className="terminal-muted">it-undergraduate · software-engineering · devops</div>
              <div style={{ marginTop: 10 }}>
                <span className="terminal-prompt">$</span> cat focus.txt
              </div>
              <div className="terminal-muted">backend · full-stack · linux · docker · ci-cd · cloud</div>
              <div style={{ marginTop: 10 }}>
                <span className="terminal-prompt">$</span> git log --oneline -1
              </div>
              <div className="terminal-muted">feat: keep learning, keep shipping</div>
              <div style={{ marginTop: 10 }}>
                <span className="terminal-prompt">$</span> <span className="terminal-cursor">&nbsp;&nbsp;</span>
              </div>
            </div>
          </div>
          <div className="info-grid g2" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div className="info-tile">
              <p className="info-label">Studying</p>
              <p className="info-value">Information Technology</p>
            </div>
            <div className="info-tile">
              <p className="info-label">Seeking</p>
              <p className="info-value">SE / DevOps Internship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
