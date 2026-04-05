"use client";

import { motion } from "framer-motion";

const fadeInView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
} as const;

const FUN_FACTS = [
  {
    emoji: "🏋️",
    text: "Loves to gym in my free time"
  },
  {
    emoji: "🍞",
    text: "Bakes. Will absolutely show up to office with a box of chocolate chip cookies",
  },
  {
    emoji: "📺",
    text: "Currently watching something. Probably should be sleeping.",
  },
] as const;

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 px-6 py-24 md:px-10"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1100px]">
        <header>
          <p className="font-mono text-[0.7rem] tracking-[0.15em] text-[color:var(--text-muted)]">
            00 / ABOUT
          </p>
          <h2
            id="about-heading"
            className="font-heading mt-3 text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-[color:var(--text-primary)]"
          >
            About Me
          </h2>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12">
          <motion.div {...fadeInView}>
            <div className="space-y-6 font-sans text-[1rem] font-normal leading-[1.8] text-[color:var(--text-secondary)]">
              <p>
                I&apos;m a final-year student at NUS, graduating 2026, with a love for building
                things that actually get used by real people.
              </p>
              <p>
                I like automating the boring stuff and making systems that just work, quietly,
                reliably, without anyone having to think about it.
              </p>
              <p>
                When I&apos;m not at my desk, I&apos;m at the gym, burning something in the kitchen
                that was supposed to be a recipe, or three episodes deep into something I told
                myself I&apos;d watch &apos;just one of.&apos;
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            {FUN_FACTS.map((fact) => (
              <div
                key={fact.text}
                className="flex items-center gap-4 rounded-[8px] border border-[color:var(--border)] bg-[color:var(--bg-secondary)] py-4 pl-5 pr-5"
              >
                <span className="shrink-0 text-[1.5rem] leading-none" aria-hidden>
                  {fact.emoji}
                </span>
                <p className="font-sans text-[0.875rem] font-normal leading-[1.5] text-[color:var(--text-secondary)]">
                  {fact.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
