export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 px-6 py-24 md:px-10"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-[700px]">
        <header>
          <p className="font-mono text-[0.7rem] tracking-[0.15em] text-[color:var(--text-muted)]">
            04 / EDUCATION
          </p>
          <h2
            id="education-heading"
            className="font-heading mt-3 text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-[color:var(--text-primary)]"
          >
            Education
          </h2>
        </header>

        <div className="relative mt-12">
          <div
            className="absolute bottom-2 left-[11px] top-2 w-px bg-[color:var(--border)]"
            aria-hidden
          />
          <ul className="m-0 list-none p-0">
            <li className="relative pl-8">
              <span
                className="absolute left-[11px] top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[color:var(--accent)]"
                aria-hidden
              />
              <div>
                <p className="font-heading text-base font-bold text-[color:var(--text-primary)]">
                  National University of Singapore
                </p>
                <p className="mt-1 font-sans text-[0.9rem] font-normal text-[color:var(--text-secondary)]">
                  Bachelor of Electrical Engineering (Honours)
                </p>
                <p className="mt-1 font-sans text-[0.9rem] font-normal text-[color:var(--text-secondary)]">
                  Minor in Computing
                </p>
                <p className="mt-1 font-mono text-[0.75rem] text-[color:var(--text-muted)]">
                  2022 – 2026
                </p>
                <p className="mt-3 font-sans text-[0.9rem] font-normal text-[color:var(--text-secondary)]">
                  GPA: 4.54 / 5.0
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
