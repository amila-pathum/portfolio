"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { profile, navLinks } from "@/lib/content";
import { DownloadIcon, MenuIcon } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header data-nav className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">
            <Image src="/profile.png" alt={profile.name} width={38} height={38} className="brand-mark-img" priority />
          </span>
          <span className="brand-meta">
            <span className="brand-name">{profile.name}</span>
            <span className="brand-title">{profile.title}</span>
          </span>
        </a>

        <nav className="nav-links desk-only" style={{ display: "flex" }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta-wrap desk-only" style={{ display: "flex" }}>
          <a href={profile.cvHref} download className="nav-cta">
            Download CV
            <DownloadIcon />
          </a>
        </div>

        <button
          className="nav-toggle mob-only"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <MenuIcon />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="mobile-link">
              {link.label}
            </a>
          ))}
          <a href={profile.cvHref} download onClick={() => setMenuOpen(false)} className="mobile-cta">
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
