import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/content";
import { StackTag } from "@/components/ui/StackTag";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies covering SaaS platforms, client portals, POS systems, and full-stack builds.",
};

export default function WorkPage() {
  const sorted = [...caseStudies].sort((a, b) => a.order - b.order);

  return (
    <div className="mx-auto max-w-wide px-6 py-24">
      {/* Header */}
      <div className="mb-16">
        <p className="mb-3 font-mono text-label uppercase tracking-widest text-muted">
          ~/work
        </p>
        <h1 className="mb-4 text-h2 text-primary">Selected Work</h1>
        <p className="max-w-md text-body text-muted">
          Three case studies from client engagements and personal projects —
          each written around the actual problem, architecture decisions, and
          outcome.
        </p>
      </div>

      {/* Case study list */}
      <div className="space-y-px bg-border">
        {sorted.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex flex-col gap-6 bg-base p-8 transition-colors hover:bg-surface md:flex-row md:gap-12"
          >
            {/* Index */}
            <div className="font-mono text-label text-dim group-hover:text-accent md:w-6 md:shrink-0 md:pt-1">
              0{i + 1}
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="font-mono text-label text-muted">
                  {project.client}
                </span>
                <span className="font-mono text-label text-dim">·</span>
                <span className="font-mono text-label text-dim">
                  {project.year}
                </span>
                {project.status === "live" && (
                  <>
                    <span className="font-mono text-label text-dim">·</span>
                    <span className="font-mono text-label text-available">
                      ● live
                    </span>
                  </>
                )}
              </div>

              <h2 className="text-h3 text-primary">{project.title}</h2>
              <p className="max-w-lg text-body text-muted">{project.tagline}</p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.stack.map((tech) => (
                  <StackTag key={tech} label={tech} />
                ))}
              </div>

              {/* Role */}
              <p className="font-mono text-label text-dim">{project.role}</p>
            </div>

            {/* Arrow */}
            <span className="self-start font-mono text-dim transition-transform group-hover:translate-x-1 group-hover:text-accent md:pt-1">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
