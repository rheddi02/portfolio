# alfredo-portfolio

Personal portfolio — Next.js 15, TypeScript, Tailwind CSS.

## Stack

- **Framework:** Next.js 15 (App Router, SSG)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS + custom design tokens
- **Email:** Resend (contact form)
- **Deployment:** Vercel

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Add your RESEND_API_KEY (optional in dev)

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  page.tsx              → Home (hero, work, skills)
  about/page.tsx        → About + experience timeline
  work/
    page.tsx            → Work index
    [slug]/page.tsx     → Individual case studies
  api/contact/route.ts  → Contact form handler

components/
  layout/
    Nav.tsx             → Sticky navigation
    StatusBar.tsx       → VS Code-style bottom bar (signature element)
  ui/
    StackTag.tsx        → Amber monospace tech tags

lib/
  content.ts            → All project data (single source of truth)
  utils.ts              → cn helper, formatDate

public/
  resume.pdf            → ← ADD YOUR RESUME HERE
```

## Customisation Checklist

Before deploying, confirm/update these:

### content.ts
- [ ] Confirm DOCU client name (or keep "Confidential client")
- [ ] Add correct delivery years for CKM and Sippop
- [ ] Confirm Sippop is personal project or client work
- [ ] Confirm DOCU stack (add actual framework/backend)
- [ ] Confirm CKM Scorecard stack (Phase 1 + Phase 2)

### app/work/[slug]/page.tsx
- [ ] Fill any remaining [CONFIRM] items in case study prose
- [ ] Add screen recording embed for DOCU (login-gated)
- [ ] Add screen recording embed for CKM Scorecard (login-gated)

### public/
- [ ] Add `resume.pdf` — must match your live resume exactly

### .env.local
- [ ] Add `RESEND_API_KEY` from resend.com

### Vercel
- [ ] Connect to the new GitHub repo
- [ ] Add `RESEND_API_KEY` as an environment variable
- [ ] Custom domain: add `alfredo-portfolio.vercel.app` (already configured)

## Adding a New Case Study

1. Add the project metadata to `lib/content.ts` (either `caseStudies` or `moreWork`)
2. Add a content component in `app/work/[slug]/page.tsx` and register it in `contentMap`
3. Done — `generateStaticParams` picks it up automatically

## Deployment

Push to `main` → Vercel auto-deploys. Preview deployments are created for all branches.

```bash
npm run build      # verify build passes locally before pushing
npm run type-check # verify no TypeScript errors
```
