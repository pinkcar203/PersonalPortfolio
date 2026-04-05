"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD_PX = 80;

const NAV_LINKS = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-200",
          scrolled
            ? "border-b border-[color:var(--border)] bg-[color-mix(in_srgb,var(--bg-primary)_85%,transparent)] backdrop-blur-[12px]"
            : "border-b border-transparent bg-transparent"
        )}
        inert={menuOpen ? true : undefined}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
          aria-label="Main"
        >
          <button
            type="button"
            onClick={scrollToTop}
            className="font-heading text-[1.25rem] font-bold text-[color:var(--accent)]"
            aria-label="Scroll to top"
          >
            PK
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[color:var(--text-secondary)] transition-colors duration-200 hover:text-[color:var(--text-primary)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            <span className="h-0.5 w-6 bg-[color:var(--text-secondary)]" />
            <span className="h-0.5 w-6 bg-[color:var(--text-secondary)]" />
            <span className="h-0.5 w-6 bg-[color:var(--text-secondary)]" />
          </button>
        </nav>
      </header>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[60] flex min-h-dvh flex-col bg-[var(--bg-primary)] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex shrink-0 items-center justify-end px-6 py-4">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-2xl leading-none text-[color:var(--text-secondary)] transition-colors duration-200 hover:text-[color:var(--text-primary)]"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-10 px-6 pb-24">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg text-[color:var(--text-secondary)] transition-colors duration-200 hover:text-[color:var(--text-primary)]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
