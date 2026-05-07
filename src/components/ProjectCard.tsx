import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <article className="grid gap-4 border-t border-ink/15 pt-5 transition hover:border-ink">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-graphite">{project.category}</p>
            <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em] md:text-3xl">{project.title}</h2>
          </div>
          <span className="shrink-0 text-sm text-graphite">{project.year}</span>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-graphite">{project.summary}</p>
      </article>
    </Link>
  );
}
