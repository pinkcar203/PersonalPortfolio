"use client";

import type { SVGProps } from "react";
import SpotlightCard from "@/components/animations/SpotlightCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="h-5 w-5"
      {...props}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function Projects() {
  const ordered = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  return (
    <section
      id="projects"
      className="scroll-mt-20 px-6 py-24 md:px-10"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[1100px]">
        <header className="max-w-2xl">
          <p className="font-mono text-[0.7rem] tracking-[0.15em] text-[color:var(--text-muted)]">
            01 / WORK
          </p>
          <h2
            id="projects-heading"
            className="font-heading mt-3 text-[clamp(2rem,4vw,3rem)] font-bold text-[color:var(--text-primary)]"
          >
            Projects
          </h2>
          <p className="mt-4 font-sans text-[color:var(--text-secondary)]">
            Production systems with real users, real metrics, and real
            infrastructure.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[repeat(3,minmax(320px,1fr))]">
          {ordered.map((project, index) => (
            <motion.div
              key={project.slug}
              className="h-full min-h-0"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <SpotlightCard
                spotlightColor="rgba(56, 189, 248, 0.18)"
                className="!h-full !min-h-[280px] !rounded-[12px] !border !border-[color:var(--border)] !bg-[color:var(--bg-secondary)] !p-[28px] !transition-colors !duration-300 hover:!border-[color:var(--border-bright)]"
              >
                <div className="relative z-10 flex h-full min-h-0 flex-col">
                  <h3 className="font-heading text-[1.2rem] font-bold text-[color:var(--text-primary)]">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 font-sans text-[0.9rem] font-normal text-[color:var(--text-secondary)]">
                    {project.tagline}
                  </p>

                  <span className="font-mono mt-4 inline-block w-fit rounded px-2.5 py-1 text-[0.75rem] text-[color:var(--accent)] [background:var(--accent-glow)]">
                    {project.highlight}
                  </span>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-[color:var(--border)] px-2 py-0.5 font-mono text-[0.7rem] text-[color:var(--text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-6">
                    <div>
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex text-[color:var(--text-secondary)] transition-colors duration-200 hover:text-[color:var(--accent)]"
                          aria-label={`${project.title} on GitHub`}
                        >
                          <GithubIcon />
                        </a>
                      ) : (
                        <span aria-hidden="true" className="inline-block w-5" />
                      )}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-lg text-[color:var(--text-primary)] transition-colors duration-200 hover:text-[color:var(--accent)]"
                      aria-label={`Case study: ${project.title}`}
                    >
                      →
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
