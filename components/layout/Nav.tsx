"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "~/home" },
  { href: "/work", label: "~/work" },
  { href: "/about", label: "~/about" },
] as const;

// ─── Hamburger icon — animates to × when open ─────────────────────

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="flex h-5 w-5 flex-col items-end justify-center gap-[5px]">
      <span
        className={cn(
          "block h-px bg-current transition-all duration-300 origin-right",
          open ? "w-full -rotate-45 translate-y-[3px]" : "w-full"
        )}
      />
      <span
        className={cn(
          "block h-px bg-current transition-all duration-300",
          open ? "w-0 opacity-0" : "w-3/4"
        )}
      />
      <span
        className={cn(
          "block h-px bg-current transition-all duration-300 origin-right",
          open ? "w-full rotate-45 -translate-y-[3px]" : "w-full"
        )}
      />
    </span>
  );
}

// ─── Mobile menu overlay ──────────────────────────────────────────

function MobileMenu({
  open,
  pathname,
  onClose,
}: {
  open: boolean;
  pathname: string;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-base/80 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel — slides down from the header */}
      <div
        className={cn(
          "fixed left-0 right-0 top-[57px] z-40 border-b border-border bg-surface transition-all duration-300 ease-in-out md:hidden",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <nav className="px-6 py-8">
          {/* Nav links */}
          <ul className="mb-8 space-y-1">
            {links.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);

              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center justify-between py-3 font-mono text-small border-b border-border/50 transition-colors",
                      isActive
                        ? "text-accent"
                        : "text-muted hover:text-primary"
                    )}
                  >
                    <span>{label}</span>
                    {isActive ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    ) : (
                      <span className="font-mono text-dim">→</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Resume download */}
          <a
            href="/resume.pdf"
            download
            onClick={onClose}
            className="flex w-full items-center justify-between rounded border border-border px-4 py-3 font-mono text-small text-muted transition-all hover:border-accent/40 hover:text-accent"
          >
            <span>resume.pdf</span>
            <span>↓</span>
          </a>

          {/* Contact shortcut */}
          <a
            href="mailto:rheddi02@gmail.com"
            onClick={onClose}
            className="mt-3 flex w-full items-center justify-between rounded border border-border px-4 py-3 font-mono text-small text-muted transition-all hover:border-accent/40 hover:text-accent"
          >
            <span>rheddi02@gmail.com</span>
            <span>↗</span>
          </a>

          {/* Status indicator */}
          <div className="mt-8 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-available" />
            <span className="font-mono text-label text-dim">
              Available for hire · UTC+8
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-base/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-wide items-center justify-between px-6 py-4">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-mono text-label font-medium uppercase tracking-widest text-muted transition-colors hover:text-primary"
          >
            asd<span className="text-accent">.</span>dev
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-6 md:flex">
            {links.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "font-mono text-small transition-colors",
                      isActive
                        ? "text-accent"
                        : "text-muted hover:text-primary"
                    )}
                  >
                    {label}
                    {isActive && (
                      <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
                    )}
                  </Link>
                </li>
              );
            })}

            <li>
              <a
                href="/resume.pdf"
                download
                className="rounded border border-border px-3 py-1.5 font-mono text-small text-muted transition-all hover:border-accent hover:text-accent"
              >
                resume.pdf ↓
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center text-muted transition-colors hover:text-primary md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        pathname={pathname}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
