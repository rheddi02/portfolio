export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  client: string;
  industry: string;
  role: string;
  year: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;   // Loom share URL or direct MP4 URL
  featured: true;
  order: number;
  status?: "live" | "building" | "client";
};

export type MoreWorkEntry = {
  slug: string;
  title: string;
  tagline: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  note?: string;
};

export type CurrentlyBuilding = {
  title: string;
  tagline: string;
  stack: string[];
  linkedCaseStudy?: string;
};

// ─── Featured case studies ─────────────────────────────────────────

export const caseStudies: CaseStudy[] = [
  {
    slug: "docu-portal",
    title: "DOCU",
    tagline:
      "Document & compliance management portal — permission-aware folder system with automated expiry tracking and an append-only audit trail.",
    client: "Confidential client",
    industry: "Human services / disability support",
    role: "Sole full-stack developer",
    year: "2026",
    stack: ["React", "TypeScript", "Supabase", "Lucid React", "Tailwind CSS", "Resend", "Zustand", "React Hook Form", "Zod", "React Router", "Shadcn UI"],
    liveUrl: "https://web-folder-six.vercel.app",
    videoUrl: "", // ← paste your Loom share URL here after recording
    featured: true,
    order: 1,
    status: "client",
  },
  {
    slug: "ckm-engagement",
    title: "CKM Consultancy",
    tagline:
      "From marketing site to licensed SaaS — built the web presence and the product being sold: a clinical school wellbeing assessment tool.",
    client: "Dr. Karin Daniels, CKM Consultancy PTY Ltd",
    industry: "EdTech / Education consultancy",
    role: "Full-stack developer",
    year: "2026",
    stack: [
      "React",
      "React Router",
      "Vite",
      "Tailwind CSS",
      "Email JS"
    ],
    liveUrl: "https://ckm-web-three.vercel.app",
    videoUrl: "", // ← paste your Loom share URL here after recording
    featured: true,
    order: 2,
    status: "live",
  },
  {
    slug: "sippop-pos",
    title: "Sippop POS",
    tagline:
      "Local-first point-of-sale where every product's margin is computed live from its actual recipe — in daily production use.",
    client: "Personal project",
    industry: "F&B retail",
    role: "Sole developer",
    year: "2026",
    stack: ["React", "TypeScript", "PWA", "Supabase", "Tailwind CSS"],
    liveUrl: "https://sippop-pos.vercel.app",
    featured: true,
    order: 3,
    status: "live",
  },
];

// ─── More Work ────────────────────────────────────────────────────

export const moreWork: MoreWorkEntry[] = [
  {
    slug: "expense-tracker",
    title: "Expense Tracker PWA",
    tagline:
      "Offline-first PWA — local SQLite as source of truth, bidirectional Supabase sync, debt-offsetting engine, and admin panel.",
    stack: [
      "React",
      "TypeScript",
      "sql.js",
      "Supabase",
      "Recharts",
      "TanStack Virtual",
      "Vite",
    ],
    liveUrl: "https://rheddi02.github.io/expense-tracker/",
    githubUrl: "https://github.com/rheddi02/expense-tracker",
  },
  {
    slug: "mawang",
    title: "Mawang Family Support",
    tagline:
      "Marketing site for an Australian NDIS disability-support provider — delivered in client-mandated stack.",
    stack: ["WordPress", "Elementor", "Custom CSS"],
    liveUrl: "https://mawang.group",
    note: "Client work — proprietary",
  },
  {
    slug: "link-collect",
    title: "LinkCollect",
    tagline:
      "Link bookmarking tool with custom JWT auth, email verification, and category organisation.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Zod", "Zustand"],
    liveUrl: "https://link-collect.vercel.app",
    githubUrl: "https://github.com/rheddi02/collections",
    note: "Login required",
  },
];

// ─── Currently Building ───────────────────────────────────────────

export const currentlyBuilding: CurrentlyBuilding = {
  title: "Genesis Scorecard — Backend Platform",
  tagline:
    "Building the production backend for a live EdTech SaaS — six-role access control, append-only audit logging, immutable assessments, and four-language support. Built against a written technical spec.",
  stack: [
    "Express",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "JWT",
    "Zod",
    "Railway",
  ],
  linkedCaseStudy: "ckm-engagement",
};
