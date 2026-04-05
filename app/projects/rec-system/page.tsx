import type { Metadata } from "next";
import Link from "next/link";

const STACK = [
  "FastAPI",
  "Apache Kafka",
  "PostgreSQL",
  "Redis",
  "Groq",
  "llama-3.3-70b-versatile",
  "Docker",
] as const;

const STAT_PILLS = [
  "Cached hot path",
  "LLM re-ranking",
  "Event-driven freshness",
] as const;

const WHAT_I_BUILT = [
  "Event ingestion API in FastAPI feeding a Kafka consumer that aggregates click, view, and purchase signals into weighted per-user item scores stored in PostgreSQL",
  "Recommendations API serving top-N personalised results per user, queried from PostgreSQL based on aggregated signal weights",
  "Redis cache-aside layer for low-latency reads on frequently requested user recommendations (sub-100ms recommendation latency on cache hit)",
  "LLM re-ranking via Groq (llama-3.3-70b-versatile) that re-orders score-based SQL candidates and generates per-item natural language explanations (“Recommended because…”)",
  "Full observability stack: Prometheus metrics on all three microservices — request rates, latency histograms, cache hit ratios, and Kafka consumer lag — plus Grafana dashboards with 7 panels",
  "Designed for cache invalidation consistency, event-driven data freshness, and score-based retrieval (SQL over aggregated weights) with a batched LLM refinement step analogous to production RAG re-ranking — not vector or document retrieval",
] as const;

export const metadata: Metadata = {
  title: "Distributed Recommendation System — Case Study",
  description:
    "Event-driven pipeline with LLM-powered re-ranking at scale.",
};

export default function RecSystemCaseStudyPage() {
  return (
    <article className="mx-auto max-w-[800px] px-6 py-24 md:px-10">
      <Link
        href="/#projects"
        className="font-mono text-[0.75rem] text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
      >
        ← Back to projects
      </Link>

      <header className="mt-10">
        <p className="font-mono text-[0.75rem] tracking-[0.15em] text-[color:var(--text-muted)]">
          CASE STUDY
        </p>
        <h1 className="font-heading mt-4 text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-[color:var(--text-primary)]">
          Distributed Recommendation System
        </h1>
        <p className="mt-4 max-w-[600px] font-sans text-[1.1rem] leading-relaxed text-[color:var(--text-secondary)]">
          Event-driven pipeline with LLM-powered re-ranking at scale.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {STAT_PILLS.map((label) => (
            <span
              key={label}
              className="rounded-[4px] px-3.5 py-1.5 font-mono text-[0.75rem] text-[color:var(--accent)] [background:var(--accent-glow)]"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {STACK.map((tech) => (
            <span
              key={tech}
              className="rounded border border-[color:var(--border)] px-2 py-0.5 font-mono text-[0.7rem] text-[color:var(--text-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      <div className="my-16 h-px w-full bg-[color:var(--border)]" aria-hidden />

      <div className="mx-auto max-w-[720px] space-y-16">
        <section>
          <h2 className="font-heading mb-3 text-lg font-bold text-[color:var(--text-primary)]">
            What it is
          </h2>
          <p className="font-sans text-base font-normal leading-[1.8] text-[color:var(--text-secondary)]">
            A production-grade backend that processes behavioural signals at scale and serves
            real-time personalised recommendations: top-N retrieval from SQL over aggregated
            per-user scores, then LLM re-ranking with per-item explanations. Built to demonstrate
            event-driven architecture, Redis cache-aside, and a batched LLM refinement step
            analogous to the re-ranking stage in production RAG-style pipelines (not full
            vector/document retrieval).
          </p>
        </section>

        <section>
          <h2 className="font-heading mb-3 text-lg font-bold text-[color:var(--text-primary)]">
            What I Built
          </h2>
          <ul className="flex flex-col gap-3">
            {WHAT_I_BUILT.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="shrink-0 font-mono text-[0.75rem] leading-[1.8] text-[color:var(--accent)]"
                  aria-hidden
                >
                  →
                </span>
                <span className="font-sans text-base font-normal leading-[1.8] text-[color:var(--text-secondary)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-heading mb-4 text-lg font-bold text-[color:var(--accent)]">
            The Interesting Problem
          </h2>
          <div className="rounded-r-lg border-l-[3px] border-[color:var(--accent)] bg-[color:var(--bg-secondary)] py-6 pl-7 pr-7">
            <p className="font-sans text-base font-normal leading-[1.8] text-[color:var(--text-secondary)]">
              The LLM re-ranking layer sits after retrieval, not during it. The challenge was
              making Llama 3 re-order candidates semantically without blowing up latency. The
              solution was batching all top-N candidates into a single structured prompt and
              parsing the re-ranked order from the response, keeping the LLM call to one per
              request regardless of N.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-6 font-heading text-lg font-bold text-[color:var(--text-primary)]">
            Key Results
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-5 py-5 text-center">
              <p className="font-heading text-[2rem] font-extrabold text-[color:var(--accent)]">
                21
              </p>
              <p className="mt-1.5 font-sans text-[0.85rem] font-normal text-[color:var(--text-secondary)]">
                Automated tests (unit + integration) — 100% pass rate
              </p>
            </div>
            <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-5 py-5 text-center">
              <p className="font-heading text-[2rem] font-extrabold text-[color:var(--accent)]">
                3
              </p>
              <p className="mt-1.5 font-sans text-[0.85rem] font-normal text-[color:var(--text-secondary)]">
                Microservices with independent scaling
              </p>
            </div>
            <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-5 py-5 text-center">
              <p className="font-heading text-[2rem] font-extrabold text-[color:var(--accent)]">
                {'<'}100ms
              </p>
              <p className="mt-1.5 font-sans text-[0.85rem] font-normal text-[color:var(--text-secondary)]">
                Recommendation latency on cache hit
              </p>
            </div>
            <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-5 py-5 text-center">
              <p className="font-heading text-[2rem] font-extrabold text-[color:var(--accent)]">
                1000+
              </p>
              <p className="mt-1.5 font-sans text-[0.85rem] font-normal text-[color:var(--text-secondary)]">
                Concurrent users handled via async pipeline
              </p>
            </div>
          </div>
        </section>
      </div>

      <nav
        className="mt-20 flex flex-col gap-4 border-t border-[color:var(--border)] pt-10 sm:flex-row sm:justify-between"
        aria-label="Case study navigation"
      >
        <Link
          href="/projects/fitness-companion"
          className="font-mono text-[0.75rem] text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--accent)]"
        >
          ← Fitness Companion
        </Link>
        <Link
          href="/#projects"
          className="font-mono text-[0.75rem] text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--accent)] sm:text-right"
        >
          FamilyBot →
        </Link>
      </nav>
    </article>
  );
}
