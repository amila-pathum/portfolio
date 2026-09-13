// Central place for the portfolio's editable content — names, links, copy.
// Update the placeholder URLs/emails here once real ones are ready.

export const profile = {
  name: "Amila Pathum",
  monogram: "AP",
  title: "IT Undergraduate",
  role: "IT Undergraduate & DevOps Enthusiast",
  location: "Moratuwa, LK",
  email: "amilapathumranasinghe@gmail.com", // TODO: replace with real contact email
  cvHref: "/Amila_Pathum_Ranasinghe_CV.pdf",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/amila-pathum" }, // TODO: real GitHub URL
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amila-pathum-ranasinghe/" }, // TODO: real LinkedIn URL
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Facebook", href: "https://www.facebook.com/amilapathumranasinghex/" }, // TODO: real Facebook URL
  { label: "Instagram", href: "https://www.instagram.com/amila_pathum_r/" }, // TODO: real Instagram URL
];

export const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "amila-pathum-ranasinghe", href: "https://www.linkedin.com/in/amila-pathum-ranasinghe/" }, // TODO
  { label: "GitHub", value: "github.com/amilapathum", href: "https://github.com/amila-pathum" }, // TODO
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  // Certifications nav link disabled along with the section in app/page.tsx —
  // uncomment both to re-enable.
  // { label: "Certifications", href: "#certs" },
  { label: "Contact", href: "#contact" },
];

export const techStrip = ["Java", "Spring Boot", "React", "TypeScript", "Docker", "AWS"];

export const skillGroups = [
  {
    title: "Programming & Backend",
    badge: "Working with",
    skills: ["Java", "Spring Boot", "PHP", "JavaScript", "TypeScript", "REST APIs"],
  },
  {
    title: "Frontend",
    badge: "Working with",
    skills: ["React", "TypeScript", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Database",
    badge: "Familiar",
    badgeNeutral: true,
    skills: ["PostgreSQL / SQL", "SQLite"],
  },
  {
    title: "Tools",
    badge: "Working with",
    badgeNeutral: true,
    skills: ["Maven", "Node.js", "Postman", "Apache", "VS Code", "IntelliJ IDEA", "Figma", "Canva"],
  },
];

export const devopsSkillCard = {
  title: "DevOps & Cloud",
  emphasis: "— main direction",
  badge: "Learning · Hands-on",
  skills: ["Linux", "Git", "GitHub", "Docker", "CI/CD", "AWS"],
  pipeline: ["Linux", "Git", "Docker", "CI/CD", "AWS"],
};

export const pipelineSteps = [
  { index: "01", title: "Development", sub: "Java · Spring Boot", icon: "branch" },
  { index: "02", title: "Version Control", sub: "Git · GitHub", icon: "git" },
  { index: "03", title: "Build", sub: "Maven · Node.js", icon: "build" },
  { index: "04", title: "Containerization", sub: "Docker", icon: "container" },
  { index: "05", title: "CI/CD", sub: "GitHub Actions", icon: "cicd" },
  { index: "06", title: "Cloud & Infra", sub: "AWS · Linux", icon: "cloud" },
] as const;

// Dates are intentionally omitted below — add real ones (e.g. "08/2025 – 12/2025")
// once you have them; nothing here is invented.
export const projects = [
  {
    number: "PROJECT 01",
    type: "Team · 5 Developers",
    name: "MemberConnect",
    subtitle: "Member Registration System for ERP Integration",
    description:
      "Secure web-based system that digitalizes member registration and administrative processes for an educational-sector financial cooperative, including registrations, profile changes, transfers, terminations, scholarships, death and donation requests, approvals and document generation.",
    contributions: [
      "Built the member termination workflow end to end",
      "Implemented the death and donation request workflow",
      "Developed the member dormant process",
      "Worked with Git/GitHub branching and code review alongside four developers",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
      "Zustand",
      "Java 21",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
    ],
    repos: [
      { label: "Frontend", href: "https://github.com/amila-pathum/MemberConnectFrontend" }, // TODO: real repo URL
      { label: "Backend", href: "https://github.com/amila-pathum/member-connect-backend" }, // TODO: real repo URL
    ],
  },
  {
    number: "PROJECT 02",
    type: "Team",
    name: "Task Management Application",
    description:
      "Task management application with dedicated views for upcoming, current and completed tasks, plus user profile and settings management.",
    contributions: [
      "Developed the user profile and settings module",
      "Built reusable React components using Next.js App Router",
      "Implemented forms and state handling",
    ],
    tech: ["Next.js App Router", "React", "TypeScript", "Java"],
    repos: [
      { label: "View Code", href: "https://github.com/amila-pathum/TodoNew" }, // TODO: real repo URL
    ],
  },
  {
    number: "PROJECT 03",
    type: "Team",
    name: "Grand Restaurant Management System",
    description:
      "Restaurant management platform offering menu management, online ordering, table reservations, customer reviews and an administrative dashboard.",
    contributions: [
      "Implemented the customer review feature",
      "Built the authentication flow including login, logout and session handling",
    ],
    tech: ["PHP 7.4+", "HTML", "CSS", "JavaScript", "SQLite", "PDO prepared statements", "password hashing", "GD", "Apache/Nginx"],
    repos: [
      { label: "View Code", href: "https://github.com/amila-pathum/restaurant" }, // TODO: real repo URL
    ],
  },
];

export const timeline = [
  {
    kind: "current" as const,
    badge: "Current",
    eyebrow: "Education",
    title: "IT Undergraduate",
    description:
      "Studying information technology while building projects that connect software development with deployment and infrastructure.",
    tags: ["Software Engineering", "Backend Development", "DevOps", "Cloud Computing", "Systems"],
  },
  {
    kind: "experience" as const,
    eyebrow: "Previous · Experience",
    title: "Web Development Trainee",
    company: "Revoise",
    companyHref: "https://revoise.com/",
    location: "Yakkala, Sri Lanka",
    date: "October 2023 – January 2024",
    description: "Completed a structured web development training programme focused on building, styling and deploying websites.",
    contributions: [
      "Built and styled websites using HTML, CSS, JavaScript, PHP and MySQL",
      "Worked entirely in a Linux development environment, using the command line for day-to-day development tasks",
      "Deployed and hosted completed sites on Linux servers running on DigitalOcean",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Linux", "DigitalOcean"],
  },
  {
    kind: "open" as const,
    eyebrow: "Next — open",
    title: "Software Engineering / DevOps Internship",
    description:
      "Actively applying. Looking for a team where I can contribute to real systems and learn from experienced engineers.",
  },
  {
    kind: "open" as const,
    eyebrow: "In progress",
    title: "Open Source & Certifications",
    description: "Working towards cloud and DevOps credentials, and my first open source contributions.",
  },
];

export const certifications: {
  name: string;
  meta: string;
  href?: string;
}[] = [
  // Add real certifications here as they're earned, e.g.:
  // { name: "AWS Certified Cloud Practitioner", meta: "Amazon Web Services · 2026", href: "https://..." },
];
