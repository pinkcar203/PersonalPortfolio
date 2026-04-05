"use client";

import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";
import Aurora from "@/components/Aurora";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const NAME = "PRITHIKASHRI KANNAN";
const TAGLINE =
  "Final-year NUS EE student with a minor in Computing.";

const TAGLINE_DELAY_AFTER_NAME_MS = 800;
const CTA_ENTRANCE_DELAY_S = 1.2;

export function Hero() {
  const [showTagline, setShowTagline] = useState(false);
  const [chevronVisible, setChevronVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setChevronVisible(window.scrollY <= 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.12]">
        <Aurora
          colorStops={["#38bdf8", "#0ea5e9", "#0369a1"]}
          amplitude={1}
          blend={0.5}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-1 flex-col justify-center px-6 py-20 md:px-10">
        <div className="flex w-full flex-col md:pl-[5%]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[0.75rem] tracking-[0.2em] text-[color:var(--text-secondary)]"
          >
            National University of Singapore '2026
          </motion.p>

          <div className="mt-6">
            <SplitText
              tag="h1"
              text={NAME}
              className="!block w-full font-heading font-extrabold text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.05] text-[color:var(--text-primary)]"
              textAlign="left"
              splitType="chars"
              delay={40}
              duration={1.25}
              ease="power3.out"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              playOnMount
              onLetterAnimationComplete={() => {
                window.setTimeout(() => {
                  setShowTagline(true);
                }, TAGLINE_DELAY_AFTER_NAME_MS);
              }}
            />
          </div>

          {showTagline ? (
            <div className="mt-8 max-w-[600px]">
              <BlurText
                text={TAGLINE}
                animateBy="words"
                className="font-sans font-normal text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-[color:var(--text-secondary)]"
                delay={50}
                stepDuration={0.35}
                threshold={0}
                rootMargin="0px"
              />
            </div>
          ) : null}

          <motion.div
            className="mt-12 flex flex-row flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: CTA_ENTRANCE_DELAY_S,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-[6px] bg-[color:var(--accent)] px-7 py-3 text-sm font-semibold text-[#080c14] transition-opacity hover:opacity-90"
            >
              See My Work
            </a>
            <a
              href="https://github.com/prithikashrikannan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[6px] border border-[color:var(--border-bright)] px-7 py-3 text-sm font-semibold text-[color:var(--text-secondary)] transition-colors duration-200 hover:border-[color:var(--accent)] hover:text-[color:var(--text-primary)]"
            >
              GitHub
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 1 }}
        animate={{ opacity: chevronVisible ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        aria-hidden="true"
      >
        <ChevronDown
          className="h-6 w-6 text-[color:var(--text-muted)] animate-hero-chevron"
          strokeWidth={1.5}
        />
      </motion.div>
    </section>
  );
}
