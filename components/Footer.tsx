import { profile, socials } from "@/lib/content";
import { socialIcons } from "./icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-brand-mark">{profile.monogram}</span>
          <span className="footer-brand-meta">
            <span className="footer-brand-name">{profile.name}</span>
            <span className="footer-brand-title">{profile.role}</span>
          </span>
        </div>

        <div className="footer-social">
          {socials.map((s) => {
            const Icon = socialIcons[s.label];
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={s.label}
                className="social-icon social-icon--footer"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        <p className="footer-copy">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
