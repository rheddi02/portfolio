import Link from "next/link";
import { caseStudies, moreWork, currentlyBuilding } from "@/lib/content";
import { StackTag } from "@/components/ui/StackTag";

// ─── Hero ─────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="mx-auto max-w-wide px-6 pb-24 pt-24">
      <p className="mb-4 font-mono text-label uppercase tracking-widest text-muted">
        Full Stack Software Engineer
      </p>

      <h1 className="mb-6 text-display font-semibold leading-tight tracking-tight text-primary">
        Alfredo
        <br />
        Diomangay
        <span className="animate-cursor-blink ml-1 inline-block h-14 w-0.5 bg-accent align-bottom" />
      </h1>

      <p className="mb-10 max-w-[560px] text-body text-muted">
        6+ years building production web applications — SaaS platforms, client
        portals, POS systems, and real-time tools. Strong across the stack:
        Next.js, Node.js, TypeScript, PostgreSQL.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="/work"
          className="rounded bg-accent px-5 py-2.5 font-mono text-small font-medium text-base transition-colors hover:bg-accent-hover"
        >
          View work →
        </Link>
        <Link
          href="/about"
          className="rounded border border-border px-5 py-2.5 font-mono text-small text-muted transition-colors hover:border-accent/40 hover:text-primary"
        >
          About me
        </Link>
        <a
          href="mailto:rheddi02@gmail.com"
          className="font-mono text-small text-muted transition-colors hover:text-accent"
        >
          rheddi02@gmail.com ↗
        </a>
      </div>
    </section>
  );
}

// ─── Featured Work ────────────────────────────────────────────────

function FeaturedWork() {
  const sorted = [...caseStudies].sort((a, b) => a.order - b.order);

  return (
    <section className="mx-auto max-w-wide px-6 pb-24">
      <div className="mb-10 flex items-baseline justify-between">
        <h2 className="font-mono text-label uppercase tracking-widest text-muted">
          Selected Work
        </h2>
        <Link
          href="/work"
          className="font-mono text-label text-dim transition-colors hover:text-accent"
        >
          All projects →
        </Link>
      </div>

      <div className="grid gap-px bg-border md:grid-cols-1">
        {sorted.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group relative flex flex-col gap-4 bg-base p-8 transition-colors hover:bg-surface md:flex-row md:items-start md:gap-12"
          >
            {/* Index number */}
            <span className="font-mono text-label text-dim transition-colors group-hover:text-accent md:pt-1 md:w-6 md:shrink-0">
              0{i + 1}
            </span>

            {/* Content */}
            <div className="flex-1">
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h3 className="text-h3 text-primary">{project.title}</h3>
                {project.status === "live" && (
                  <span className="font-mono text-label text-available">
                    ● live
                  </span>
                )}
                {project.status === "client" && (
                  <span className="font-mono text-label text-muted">
                    client work
                  </span>
                )}
              </div>

              <p className="mb-4 max-w-xl text-body text-muted">
                {project.tagline}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 5).map((tech) => (
                  <StackTag key={tech} label={tech} />
                ))}
                {project.stack.length > 5 && (
                  <span className="font-mono text-label text-dim">
                    +{project.stack.length - 5} more
                  </span>
                )}
              </div>
            </div>

            {/* Arrow */}
            <span className="font-mono text-dim transition-transform group-hover:translate-x-1 group-hover:text-accent md:pt-1">
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ─── Currently Building ───────────────────────────────────────────

function CurrentlyBuilding() {
  return (
    <section className="mx-auto max-w-wide px-6 pb-24">
      <h2 className="mb-6 font-mono text-label uppercase tracking-widest text-muted">
        Currently Building
      </h2>

      <div className="rounded border border-border bg-surface p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="font-mono text-label text-accent">▶ in progress</span>
        </div>
        <h3 className="mb-2 text-h3 text-primary">{currentlyBuilding.title}</h3>
        <p className="mb-4 max-w-xl text-body text-muted">
          {currentlyBuilding.tagline}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-2">
            {currentlyBuilding.stack.map((tech) => (
              <StackTag key={tech} label={tech} />
            ))}
          </div>
          {currentlyBuilding.linkedCaseStudy && (
            <Link
              href={`/work/${currentlyBuilding.linkedCaseStudy}`}
              className="font-mono text-label text-muted transition-colors hover:text-accent"
            >
              See CKM case study →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── More Work ────────────────────────────────────────────────────

function MoreWork() {
  return (
    <section className="mx-auto max-w-wide px-6 pb-24">
      <h2 className="mb-6 font-mono text-label uppercase tracking-widest text-muted">
        More Work
      </h2>

      <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {moreWork.map((project) => (
          <div
            key={project.slug}
            className="flex flex-col gap-3 bg-base p-6 transition-colors hover:bg-surface"
          >
            <h3 className="text-[1rem] font-semibold text-primary">
              {project.title}
            </h3>
            <p className="flex-1 text-small text-muted">{project.tagline}</p>

            <div className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, 4).map((tech) => (
                <StackTag key={tech} label={tech} />
              ))}
            </div>

            <div className="flex items-center gap-3 pt-1">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-label text-muted transition-colors hover:text-accent"
                >
                  Live ↗
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-label text-muted transition-colors hover:text-accent"
                >
                  GitHub ↗
                </a>
              )}
              {project.note && (
                <span className="font-mono text-label text-dim">
                  {project.note}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────

const skills = {
  Frontend: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vue.js",
  ],
  Backend: [
    "Node.js",
    "Express",
    "AdonisJS",
    "NestJS",
    "Laravel",
  ],
  Database: [
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "MySQL",
    "Supabase",
  ],
  Infrastructure: [
    "Docker",
    "Auth0",
    "Stripe",
    "Vercel",
    "Railway",
  ],
} as const;

function Skills() {
  return (
    <section className="mx-auto max-w-wide px-6 pb-32">
      <h2 className="mb-8 font-mono text-label uppercase tracking-widest text-muted">
        Skills & Tools
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <p className="mb-3 font-mono text-label text-accent">
              {category}
            </p>
            <ul className="space-y-1.5">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="font-mono text-small text-muted"
                >
                  <span className="mr-2 text-dim">–</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <CurrentlyBuilding />
      <MoreWork />
      <Skills />
    </>
  );
}
