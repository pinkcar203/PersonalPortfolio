import type { Metadata } from "next";
import Link from "next/link";

const STACK = [
  "React Native",
  "TypeScript",
  "ONNX Runtime",
  "MediaPipe Pose",
  "expo-sqlite",
  "Python",
  "Keras",
  "scikit-learn",
  "FFmpeg",
] as const;

const STAT_PILLS = [
  "82.4% avg form accuracy",
  "89% on squat",
  "200 external test videos",
  "0 network calls",
] as const;

const WHAT_I_BUILT = [
  "A five-stage TypeScript analytical pipeline running on-device: pose validation → temporal smoothing → angle computation → FSM rep counting → ML form assessment",
  "Five exercise-specific form quality models (DNN for squat, SVM for bench press, curl, deadlift, lat pulldown) trained in Python, deployed on-device via ONNX Runtime",
  "Singleton session management for ONNX Runtime to prevent native memory exhaustion on mobile hardware",
  "Five typed repository adapters providing the integration boundary between all subsystems through a shared SQLite database",
  "Background Processing Service orchestrating the complete pipeline with stage-level error handling and graceful degradation",
] as const;

export const metadata: Metadata = {
  title: "Fitness Companion — Case Study",
  description:
    "On-device exercise analysis with ML-powered form assessment — no data leaves your phone.",
};

export default function FitnessCompanionCaseStudyPage() {
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
          Fitness Companion
        </h1>
        <p className="mt-4 max-w-[600px] font-sans text-[1.1rem] leading-relaxed text-[color:var(--text-secondary)]">
          On-device exercise analysis with ML-powered form assessment — no data leaves your
          phone.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {STAT_PILLS.map((label) => (
            <span
              key={label}
              className="rounded px-3.5 py-1.5 font-mono text-[0.75rem] text-[color:var(--accent)] [background:var(--accent-glow)]"
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
            A cross-platform mobile app that records your workout, classifies the exercise,
            counts reps, and tells you whether your form is safe — all running entirely on your
            Android phone with zero cloud dependency. Built as a final-year capstone at NUS with
            a team of four.
          </p>
        </section>

        <section>
          <h2 className="sr-only">My Role</h2>
          <p className="font-sans text-base font-normal leading-[1.8] text-[color:var(--text-secondary)]">
            I owned the analytical engine and was responsible for integrating all four
            subsystems into a working product. My pipeline is the single service call that
            connects the vision models, the mobile UI, the database, and my own analysis code
            into one post-recording workflow.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-heading text-lg font-bold text-[color:var(--text-primary)]">
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
            The Hardest Problem
          </h2>
          <div className="rounded-r-lg border-l-[3px] border-[color:var(--accent)] bg-[color:var(--bg-secondary)] py-6 pl-7 pr-7">
            <p className="font-sans text-base font-normal leading-[1.8] text-[color:var(--text-secondary)]">
              Migrated the entire pipeline from a Python FastAPI server to on-device TypeScript
              between semesters after a privacy analysis revealed that streaming pose landmarks
              over a network constitutes biometric data transmission. The algorithms transferred
              — the architecture didn&apos;t. Every component was reimplemented from scratch in a
              different language, runtime, and inference framework, with validated numerical
              equivalence to prevent
              training–serving skew.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-6 font-heading text-lg font-bold text-[color:var(--text-primary)]">
            Key Results
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-5 py-5 text-center">
              <p className="font-heading text-[2rem] font-extrabold text-[color:var(--accent)]">
                82.4%
              </p>
              <p className="mt-1.5 font-sans text-[0.85rem] font-normal text-[color:var(--text-secondary)]">
                Average form classification accuracy
              </p>
            </div>
            <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-5 py-5 text-center">
              <p className="font-heading text-[2rem] font-extrabold text-[color:var(--accent)]">
                200
              </p>
              <p className="mt-1.5 font-sans text-[0.85rem] font-normal text-[color:var(--text-secondary)]">
                Independently recorded external test videos
              </p>
            </div>
            <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-5 py-5 text-center">
              <p className="font-heading text-[2rem] font-extrabold text-[color:var(--accent)]">
                0
              </p>
              <p className="mt-1.5 font-sans text-[0.85rem] font-normal text-[color:var(--text-secondary)]">
                Network calls. All inference runs on-device.
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
          href="/#projects"
          className="font-mono text-[0.75rem] text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--accent)]"
        >
          ← FamilyBot
        </Link>
        <Link
          href="/projects/rec-system"
          className="font-mono text-[0.75rem] text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--accent)] sm:text-right"
        >
          Recommendation System →
        </Link>
      </nav>
    </article>
  );
}
