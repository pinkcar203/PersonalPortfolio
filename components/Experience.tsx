type TimelineEntry = {
  company: string;
  role: string;
  period: string;
  oneLiner: string;
};

const ENTRIES: TimelineEntry[] = [
  {
    company: "Toku Pte Ltd",
    role: "Product Associate",
    period: "Oct 2025 – Present",
    oneLiner:
      "Toku is a Singapore-based AI-powered cloud communications platform with call centre infrastructure with speech-to-text, real-time transcription, and conversation intelligence. Assisted with AI features product enhancement and test automation",
  },
  {
    company: "Toku Pte Ltd",
    role: "Product Intern",
    period: "Jul 2025 – Oct 2025",
    oneLiner:
      "Toku is a Singapore-based AI-powered cloud communications platform with call centre infrastructure with speech-to-text, real-time transcription, and conversation intelligence. Assisted with AI features product enhancement",
  },
  {
    company: "Siemens",
    role: "Project Management & Automation Intern",
    period: "Jan 2025 – Jun 2025",
    oneLiner:
      "Siemens is a global technology company — industrial automation, infrastructure, and digitalization. Assisted with process automation and project managemen and Python automation integrated with SAP",
  },
  {
    company: "i4 Tech",
    role: "Software Engineer Intern",
    period: "May 2024 – Aug 2024",
    oneLiner:
      "Manufacturing data simulator in Python. Mendix low-code delivery",
  },
];

function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <li className="relative pb-12 pl-8 last:pb-0">
      <span
        className="absolute left-[11px] top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[color:var(--accent)]"
        aria-hidden
      />
      <div>
        <p className="font-sans text-base font-semibold text-[color:var(--text-primary)]">
          {entry.company}
        </p>
        <p className="mt-1 font-sans text-[0.9rem] font-normal text-[color:var(--text-secondary)]">
          {entry.role}
        </p>
        <p className="mt-1 font-mono text-[0.75rem] text-[color:var(--text-muted)]">
          {entry.period}
        </p>
        <p className="mt-3 font-sans text-[0.875rem] font-normal italic text-[color:var(--text-secondary)]">
          {entry.oneLiner}
        </p>
      </div>
    </li>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 px-6 py-24 md:px-10"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-[700px]">
        <header>
          <p className="font-mono text-[0.7rem] tracking-[0.15em] text-[color:var(--text-muted)]">
            02 / EXPERIENCE
          </p>
          <h2
            id="experience-heading"
            className="font-heading mt-3 text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-[color:var(--text-primary)]"
          >
            Where I&apos;ve Worked
          </h2>
        </header>

        <div className="relative mt-12">
          <div
            className="absolute bottom-2 left-[11px] top-2 w-px bg-[color:var(--border)]"
            aria-hidden
          />
          <ul className="list-none p-0 m-0">
            {ENTRIES.map((entry, index) => (
              <TimelineItem key={`${entry.company}-${entry.period}-${index}`} entry={entry} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
