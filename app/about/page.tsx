import type { Metadata } from "next";
import Link from "next/link";
import { StackTag } from "@/components/ui/StackTag";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full stack software engineer with 6+ years of experience — based in the Philippines, open to remote work.",
};

const experience = [
  {
    company: "Freshclinics",
    title: "Software Engineer",
    period: "Dec 2022 – Jul 2025",
    location: "Remote (AU)",
    highlights: [
      "Built production full-stack applications with Next.js + AdonisJS",
      "Integrated Stripe billing — recurring, one-time, and POS workflows",
      "Multi-database architecture: PostgreSQL (relational) + MongoDB (document)",
      "Auth0 RBAC across applications",
      "Containerised deployments with Docker",
      "Custom POS hardware integration",
    ],
  },
  {
    company: "Qonvex",
    title: "Backend Developer",
    period: "Aug 2019 – Nov 2022",
    location: "Remote",
    highlights: [
      "High-traffic SaaS in Laravel + Vue.js, 99.9% uptime",
      "MySQL query optimisation — reduced API response time by up to 70%",
      "Production deployments with Nginx, Docker, pm2",
      "Grafana monitoring and alerting — cut response to production issues by 40%",
      "REST API design for internal modules and third-party integrations",
    ],
  },
] as const;

const allSkills = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Vue.js",
  "Node.js", "Express", "AdonisJS", "NestJS", "Laravel",
  "PostgreSQL", "MongoDB", "Prisma", "MySQL", "Supabase",
  "Docker", "Auth0", "Stripe", "Vercel", "Railway",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-prose px-6 py-24">
      {/* Header */}
      <div className="mb-16">
        <p className="mb-3 font-mono text-label uppercase tracking-widest text-muted">
          ~/about
        </p>
        <h1 className="mb-6 text-h2 text-primary">Alfredo Diomangay</h1>
        <div className="space-y-4 text-body text-muted">
          <p>
            Full stack software engineer with 6+ years building production web
            applications. I work across the whole stack — from database schema
            and API design to responsive frontend and deployment pipelines.
          </p>
          <p>
            Most of my career has been building SaaS platforms and business
            tooling: subscription billing systems, clinical assessment tools,
            document management portals, and point-of-sale systems. I care
            about the decisions that make software maintainable a year after
            launch, not just on the day it ships.
          </p>
          <p>
            Based in Calbayog City, Samar, Philippines. Available for remote
            roles — I&apos;ve worked remotely with Australian companies for the
            majority of my career.
          </p>
        </div>
      </div>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="mb-8 font-mono text-label uppercase tracking-widest text-muted">
          Experience
        </h2>

        <div className="space-y-10">
          {experience.map((job) => (
            <div key={job.company} className="border-l border-border pl-6">
              <div className="mb-1 flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-h3 text-primary">{job.company}</h3>
                <span className="font-mono text-label text-muted">
                  {job.location}
                </span>
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-x-3">
                <span className="text-body text-muted">{job.title}</span>
                <span className="font-mono text-label text-dim">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-2">
                {job.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-small text-muted"
                  >
                    <span className="mt-0.5 font-mono text-accent shrink-0">
                      –
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="mb-6 font-mono text-label uppercase tracking-widest text-muted">
          Education
        </h2>
        <div className="border-l border-border pl-6">
          <h3 className="mb-1 text-h3 text-primary">
            Northwest Samar State University
          </h3>
          <p className="text-body text-muted">
            Bachelor of Science in Information Technology
          </p>
          <p className="font-mono text-label text-dim">2015 – 2019</p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="mb-6 font-mono text-label uppercase tracking-widest text-muted">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {allSkills.map((skill) => (
            <StackTag key={skill} label={skill} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="mb-6 font-mono text-label uppercase tracking-widest text-muted">
          Contact
        </h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-label text-dim w-16">Email</span>
            <a
              href="mailto:rheddi02@gmail.com"
              className="font-mono text-small text-muted transition-colors hover:text-accent"
            >
              rheddi02@gmail.com ↗
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-label text-dim w-16">Phone</span>
            <a
              href="tel:+639605051337"
              className="font-mono text-small text-muted transition-colors hover:text-accent"
            >
              +63 960 505 1337 ↗
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-label text-dim w-16">Resume</span>
            <a
              href="/resume.pdf"
              download
              className="font-mono text-small text-muted transition-colors hover:text-accent"
            >
              Download PDF ↓
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
