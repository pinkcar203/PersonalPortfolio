export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] px-10 py-8">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[0.75rem] text-[color:var(--text-muted)]">
          Prithikashri Kannan · Built with Next.js
        </p>
        <p className="font-mono text-[0.75rem] text-[color:var(--text-muted)] sm:text-right">
          © 2026
        </p>
      </div>
    </footer>
  );
}
