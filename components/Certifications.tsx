const ITEMS: { name: string; issuer: string }[] = [
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services" },
  { name: "Rapid Developer", issuer: "Mendix" },
  { name: "Foundations in AI", issuer: "AI Singapore" },
  { name: "Bloomberg Market Concepts", issuer: "Bloomberg" },
  { name: "Sustainable Finance", issuer: "University of Oxford" },
  { name: "Successful Negotiation", issuer: "University of Michigan" },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-20 px-6 py-24 md:px-10"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-[1100px]">
        <header>
          <p className="font-mono text-[0.7rem] tracking-[0.15em] text-[color:var(--text-muted)]">
            05 / CERTIFICATIONS
          </p>
          <h2
            id="certifications-heading"
            className="font-heading mt-3 text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-[color:var(--text-primary)]"
          >
            Certifications
          </h2>
        </header>

        <div className="mt-10 flex flex-wrap gap-4">
          {ITEMS.map((item) => (
            <div
              key={item.name}
              className="min-w-[min(100%,260px)] flex-1 rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-secondary)] px-5 py-4 transition-colors duration-200 hover:border-[color:var(--border-bright)] sm:min-w-[240px] sm:flex-none"
            >
              <p className="font-sans text-[0.9rem] font-semibold text-[color:var(--text-primary)]">
                {item.name}
              </p>
              <p className="mt-1 font-sans text-[0.8rem] font-normal text-[color:var(--text-secondary)]">
                {item.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
