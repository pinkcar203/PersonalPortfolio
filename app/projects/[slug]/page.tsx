import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-[1100px] px-6 py-24 md:px-10">
      <p className="font-mono text-sm text-[color:var(--text-muted)]">
        <Link
          href="/#projects"
          className="text-[color:var(--text-secondary)] hover:text-[color:var(--accent)]"
        >
          ← Projects
        </Link>
      </p>
      <h1 className="font-heading mt-6 text-[clamp(2rem,4vw,2.75rem)] font-bold text-[color:var(--text-primary)]">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl font-sans text-[color:var(--text-secondary)]">
        {project.tagline}
      </p>
      <p className="mt-10 text-sm text-[color:var(--text-muted)]">
        Case study content coming soon.
      </p>
    </main>
  );
}
