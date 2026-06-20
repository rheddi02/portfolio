import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/lib/content";
import { StackTag } from "@/components/ui/StackTag";
import { CaseStudyVideo } from "@/components/ui/CaseStudyVideo";

// ─── Static params ────────────────────────────────────────────────

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.tagline,
  };
}

// ─── Case study prose content ─────────────────────────────────────
// This maps slugs to their full prose content.
// In a larger project this would be MDX files; keeping it co-located
// here avoids a file-system read in the edge runtime and is easier
// to maintain for 3 case studies.

function DocuContent() {
  return (
    <div className="prose-case-study">
      <h2>Summary</h2>
      <p>
        A document management and compliance system that replaced paper files
        and shared drives with a permission-aware portal — built around a
        two-layer access model and automated expiry tracking, not just file
        storage.
      </p>

      <h2>The Problem</h2>
      <p>
        The organisation was running compliance-critical documents — police
        checks, certifications, policy registers, staff and participant files
        — across paper, desktop folders, and shared drives. Nobody had a single
        view of what was expiring, who could see what, or who had touched a
        given file. For an organisation operating under compliance obligations,
        that&apos;s not just inefficient — it&apos;s a real operational risk
        every time a check lapses unnoticed.
      </p>

      <h2>Architecture &amp; Key Decisions</h2>
      <h3>Two-layer permission model, enforced at the data layer</h3>
      <p>
        A flat role-based ACL breaks the first time a Team Leader needs upload
        access to one specific folder without being promoted to a whole new role.
        Built role-level defaults (six roles: Super Admin, HR Manager, Finance
        Manager, Team Leader, Support Worker, Admin Staff) plus per-user folder
        overrides that take effect immediately and are enforced in the query
        layer — not just hidden in the UI. A direct API call respects the same
        rules a sidebar click does.
      </p>

      <h3>Compliance automation as a core feature</h3>
      <p>
        Folders can be configured to require an expiry date, expiry type, and
        signed confirmation at upload time. A daily scheduled job aggregates
        everything expiring within 30 days across the whole organisation and
        emails admins automatically — turning compliance from something a person
        has to remember to chase into a passive safety net.
      </p>

      <h3>Bidirectional, typed document linking</h3>
      <p>
        Five distinct link types (Related, Reference, Supersedes, Assigned,
        Mention) with every link bidirectional — linking A → B automatically
        surfaces the inverse relationship on B without double data entry.
      </p>

      <h3>Archive, never hard-delete</h3>
      <p>
        Documents, participant records, and categories are archived with full
        restore capability and an intact audit trail. For a system holding
        compliance records, accidental deletion is a fundamentally different
        category of risk than in most apps.
      </p>

      <h2>A Hard Problem Worth Mentioning</h2>
      <p>
        The folder-notes feature needed to feel collaborative — autosave as you
        type, <code>@mention</code> a colleague, <code>[[link</code> directly
        to another document — while also being safely viewable from anywhere
        else in the system a link points to it. Notes are fully editable from
        their home folder, but render strictly read-only when opened via a link
        from elsewhere. That one constraint avoids an entire category of
        conflicting-edit bugs that would otherwise show up the moment two people
        had the same note open from different places.
      </p>

      <h2>Outcome</h2>
      <p>
        Delivered and in active daily use across multiple staff roles, replacing
        the organisation&apos;s prior paper and shared-drive workflow entirely.
        Shipped alongside a complete staff user guide covering every
        role&apos;s permissions and workflows — not just code, but the
        documentation needed for non-technical staff to adopt it on day one.
      </p>
    </div>
  );
}

function CkmContent() {
  return (
    <div className="prose-case-study">
      <h2>Summary</h2>
      <p>
        Started as a marketing site for an education consultancy, grew into
        building the product they actually sell — a clinical wellbeing
        assessment tool now being rebuilt into a full multi-role platform.
      </p>

      <h2>The Problem</h2>
      <p>
        CKM needed credible web presence to license the Genesis School Health
        &amp; Wellbeing Scorecard™ to schools and education departments.
        Underneath that, the operational problem was real: teachers were running
        assessments through paper record books, which made it slow to complete
        and nearly impossible to spot a pattern across a class before it became
        a crisis.
      </p>

      <h2>Architecture &amp; Key Decisions</h2>
      <h3>Shipped v1 with zero backend, on purpose</h3>
      <p>
        Scorecard v1 is fully client-side — no server, no database, no auth.
        Every domain score, risk classification, and PDF export happens in the
        browser, in-session. That wasn&apos;t a limitation, it was the plan: it
        let CKM start licensing conversations with school principals using a
        real, working tool months before justifying the cost of backend
        infrastructure for a product that hadn&apos;t yet proven demand.
      </p>

      <h3>Decoupled marketing site from product, deliberately</h3>
      <p>
        Two separate deployments, not one app. The marketing site is
        content-first and SEO-first. The Scorecard is a focused, repeat-use
        tool. Splitting them means content updates never risk product stability,
        and each ships on its own cycle.
      </p>

      <h3>Now scoping v2 from a written specification</h3>
      <p>
        Before writing any backend code, I authored a full technical spec
        covering the schema, every API endpoint, performance constraints, and
        security rules. Treating the spec as the source of truth — not the code
        — is what makes service-layer-enforced immutability and a truly
        append-only audit log possible to enforce consistently.
      </p>

      <h2>A Hard Problem Worth Mentioning</h2>
      <p>
        This is a clinical research tool — once a teacher completes an
        assessment, that record needs to be trustworthy for research purposes
        indefinitely. Completed assessments are immutable, and that rule is
        enforced at the <strong>service layer</strong>, not just behind a
        disabled button. Even a direct authenticated API call attempting to
        modify a completed assessment is rejected before it reaches the
        database.
      </p>
      <p>
        Internationalisation across four South African languages (English,
        Afrikaans, isiXhosa, isiZulu) is resolved server-side per language with
        an English fallback, so partially translated content degrades gracefully
        instead of breaking.
      </p>

      <h2>Outcome</h2>
      <p>
        The marketing site established CKM&apos;s credibility for the licensing
        conversation. Scorecard v1 is live and in use as the working version
        being licensed to schools in the Western Cape. The v2 backend is in
        active development now, scoped to extend the product without requiring
        a rebuild as CKM&apos;s institutional footprint grows.
      </p>
    </div>
  );
}

function SippopContent() {
  return (
    <div className="prose-case-study">
      <h2>Summary</h2>
      <p>
        A point-of-sale system where every product&apos;s margin is computed
        live from its actual recipe — not a flat cost field — with
        offline-first operation and explicit, operator-controlled cloud sync.
        In live, daily production use.
      </p>

      <h2>The Problem</h2>
      <p>
        Running a drinks business means every cup is made from a recipe of
        multiple raw ingredients — syrups by the milliliter, toppings by the
        gram, cups and lids by the piece — and knowing your real margin
        requires costing all of that out correctly. Most POS tools either skip
        recipe-level costing entirely or assume constant internet connectivity
        a small physical stand can&apos;t always guarantee.
      </p>

      <h2>Architecture &amp; Key Decisions</h2>
      <h3>Recipe as the source of truth for cost</h3>
      <p>
        Every product&apos;s cost is derived from its ingredient list — each
        ingredient priced from its pack cost divided by pack quantity. The
        Add/Edit Product form recomputes unit cost and margin live as you build
        the recipe line by line, so margin is visible at creation, not
        discovered later in a report.
      </p>

      <h3>Costs snapshotted at the moment of sale</h3>
      <p>
        Each order locks in the ingredient costs as they were when the sale
        happened. If a syrup&apos;s pack price goes up next month, last
        week&apos;s reported margin doesn&apos;t silently shift. For financial
        reporting, that&apos;s the difference between numbers you can trust and
        a dashboard that quietly rewrites history.
      </p>

      <h3>Inventory deduction modeled at the ingredient level</h3>
      <p>
        Stock is tracked per ingredient in whatever unit makes sense for it —
        bottles, packs, pieces, grams — each with a configurable low-stock
        alert threshold. A single product sale correctly deducts fractional
        quantities across multiple differently-unit-tracked ingredients.
      </p>

      <h3>Local-first, sync as an explicit choice</h3>
      <p>
        The app is fully usable signed out. Signing in adds cloud backup, but
        instead of automatic conflict resolution (risky for sale and stock data
        where order matters), sync is exposed as two explicit one-directional
        actions: &quot;This device → Cloud&quot; and &quot;Cloud → This
        device.&quot; For a single-operator business, a transparent manual
        override is more trustworthy than a silent auto-merge.
      </p>

      <h2>A Hard Problem Worth Mentioning</h2>
      <p>
        Getting margin to compute correctly, live, across ingredients priced in
        entirely different units within the same recipe. A single drink might
        combine syrup (priced per ml), a topping (priced per gram), and a cup
        (priced per piece). The system derives a consistent per-unit cost for
        each regardless of unit, sums them into a single cost basis, and
        recomputes margin on every keystroke while the recipe is being built.
        Doing this at save-time would be easy; doing it live is what makes
        margin something the person creating the menu thinks about, not a
        number that surprises them later.
      </p>

      <h2>Outcome</h2>
      <p>
        In live, daily production use — processing real sales, real inventory
        deductions, and real margin tracking. The dashboard reports revenue,
        cost, and gross profit by day/week/month/custom range, breaks down
        sales by category and top-selling products, and keeps a full order log.
        Typical day: ₱500 revenue, ₱208 cost, ~58% gross margin across 8
        orders — numbers that are trustworthy because they&apos;re built on the
        same per-ingredient costing engine used to build the menu.
      </p>
    </div>
  );
}

const contentMap: Record<string, React.FC> = {
  "docu-portal": DocuContent,
  "ckm-engagement": CkmContent,
  "sippop-pos": SippopContent,
};

// ─── Page ─────────────────────────────────────────────────────────

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const Content = contentMap[slug];

  return (
    <div className="mx-auto max-w-wide px-6 py-24">
      {/* Back */}
      <Link
        href="/work"
        className="mb-12 inline-flex items-center gap-2 font-mono text-label text-muted transition-colors hover:text-accent"
      >
        ← Back to work
      </Link>

      <div className="grid gap-16 lg:grid-cols-[1fr_280px]">
        {/* Main content */}
        <div>
          <p className="mb-3 font-mono text-label uppercase tracking-widest text-muted">
            Case Study
          </p>
          <h1 className="mb-4 text-h2 text-primary">{cs.title}</h1>
          <p className="mb-10 max-w-xl text-body text-muted">{cs.tagline}</p>

          {cs.videoUrl && (
            <CaseStudyVideo url={cs.videoUrl} title={cs.title} />
          )}

          {Content ? <Content /> : (
            <p className="text-body text-muted">Content coming soon.</p>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8 lg:border-l lg:border-border lg:pl-8 lg:pt-1">
          <div>
            <p className="mb-2 font-mono text-label text-dim">Client</p>
            <p className="text-small text-muted">{cs.client}</p>
          </div>
          <div>
            <p className="mb-2 font-mono text-label text-dim">Industry</p>
            <p className="text-small text-muted">{cs.industry}</p>
          </div>
          <div>
            <p className="mb-2 font-mono text-label text-dim">Role</p>
            <p className="text-small text-muted">{cs.role}</p>
          </div>
          <div>
            <p className="mb-2 font-mono text-label text-dim">Year</p>
            <p className="font-mono text-small text-muted">{cs.year}</p>
          </div>
          <div>
            <p className="mb-3 font-mono text-label text-dim">Stack</p>
            <div className="flex flex-wrap gap-2">
              {cs.stack.map((tech) => (
                <StackTag key={tech} label={tech} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-2">
            {cs.liveUrl && (
              <a
                href={cs.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-border px-4 py-2 font-mono text-label text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                View live ↗
              </a>
            )}
            {cs.githubUrl && (
              <a
                href={cs.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-border px-4 py-2 font-mono text-label text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
