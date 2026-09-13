// Inline SVG icon set, ported 1:1 from the Portfolio Design Component so the
// visual output matches exactly. Kept as small React components rather than
// an icon library dependency since the set is small and fixed.

type IconProps = { size?: number; className?: string };

export function GithubIcon({ size = 17, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 5-1.8 5-5.2a4 4 0 0 0-1-2.8 3.7 3.7 0 0 0-.1-2.8s-1.3-.4-4.3 1.6a10 10 0 0 0-5.2 0C5.4 3.5 4.1 3.9 4.1 3.9a3.7 3.7 0 0 0-.1 2.8A4 4 0 0 0 3 9.5c0 3.4 2 5.2 5 5.2-.6.6-.9 1.4-1 2.2v5" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 17, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function EmailIcon({ size = 17, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <rect x="2" y="4" width="20" height="16" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

export function FacebookIcon({ size = 17, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function InstagramIcon({ size = 17, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

export const socialIcons: Record<string, (p: IconProps) => JSX.Element> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: EmailIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
};

export function ArrowRightIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function DownloadIcon({ size = 15, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className={className}>
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M4 21h16" />
    </svg>
  );
}

export function MenuIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

/* ---- DevOps pipeline step icons ----
   stroke="currentColor" so the pipeline can drive icon color (default vs.
   hover-brightened) from CSS via the wrapping .pipeline-icon element. */
export function BranchIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" className={className}>
      <path d="m8 6-6 6 6 6" />
      <path d="m16 6 6 6-6 6" />
    </svg>
  );
}

export function GitIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M12 9v3M9.5 16 12 12l2.5 4" />
    </svg>
  );
}

export function BuildIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" className={className}>
      <path d="M4 7h16v13H4z" />
      <path d="M4 11h16" />
      <path d="M9 4h6" />
    </svg>
  );
}

export function ContainerIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" className={className}>
      <path d="M3 12h11v5H3z" />
      <path d="M6 12V9h5v3" />
      <path d="M14 14c3 2 6 1 7-2" />
    </svg>
  );
}

export function CicdIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" className={className}>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 4v5h-5" />
    </svg>
  );
}

export function CloudIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" className={className}>
      <path d="M6 18h11a4 4 0 0 0 0-8 6 6 0 0 0-11.7 1.5A3.5 3.5 0 0 0 6 18z" />
    </svg>
  );
}

export const pipelineIcons: Record<string, (p: IconProps) => JSX.Element> = {
  branch: BranchIcon,
  git: GitIcon,
  build: BuildIcon,
  container: ContainerIcon,
  cicd: CicdIcon,
  cloud: CloudIcon,
};

/* Small chevron used between pipeline steps to show flow direction. */
export function PipelineArrowIcon({ size = 12, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" className={className}>
      <path d="M4 12h14M12 6l6 6-6 6" />
    </svg>
  );
}

/* ---- certification card icons ---- */
export function CertBadgeIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="square" className={className}>
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14.5 7 22l5-2.5L17 22l-2-7.5" />
    </svg>
  );
}

export function CertDocIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="square" className={className}>
      <path d="M4 5h16v11H4z" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  );
}

export function CertPlusIcon({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="square" className={className}>
      <path d="M12 3v18" />
      <path d="M3 12h18" />
    </svg>
  );
}
