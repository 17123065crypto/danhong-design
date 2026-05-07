import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ContactCta } from "@/components/ContactCta";
import { projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  return {
    title: project ? `${project.title} | Danhong Wang` : "Project | Danhong Wang",
    description: project?.summary,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <article>
        <section className="mx-auto max-w-7xl px-5 pb-10 pt-14 md:px-8 md:pb-16 md:pt-24">
          <Link href="/portfolio" className="link-line text-sm font-semibold text-graphite hover:text-ink">
            Back to work
          </Link>
          <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-clay">
                {project.category} / {project.year}
              </p>
              <h1 className="mt-5 text-balance text-5xl font-medium leading-[0.96] tracking-[-0.05em] md:text-8xl">
                {project.title}
              </h1>
            </div>
            <p className="border-t border-ink/15 pt-5 text-base leading-8 text-graphite md:text-lg">{project.summary}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-20">
          <aside className="grid gap-8 border-t border-ink/15 pt-6 md:sticky md:top-24 md:self-start">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-graphite">Role</p>
              <p className="mt-2 font-medium">{project.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-graphite">Tools</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="border border-ink/15 bg-paper/35 px-3 py-1 text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-graphite">Focus</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span key={service} className="border border-ink/15 bg-paper/35 px-3 py-1 text-sm">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="grid gap-12">
            <CaseStudySection label="Overview">
              <p>{project.overview}</p>
            </CaseStudySection>
            <CaseStudySection label="Role">
              <p>{project.role}</p>
            </CaseStudySection>
            <CaseStudySection label="Tools">
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="border border-ink/15 bg-paper/35 px-3 py-1 text-base">
                    {tool}
                  </span>
                ))}
              </div>
            </CaseStudySection>
            <CaseStudySection label="Challenge">
              <p>{project.challenge}</p>
            </CaseStudySection>
            <CaseStudySection label="Process">
              <ol className="grid gap-4">
                {project.process.map((step, index) => (
                  <li key={step} className="grid gap-3 border-t border-ink/10 pt-4 md:grid-cols-[3rem_1fr]">
                    <span className="text-sm text-clay">{String(index + 1).padStart(2, "0")}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </CaseStudySection>
            <CaseStudySection label="Outcome">
              <p>{project.outcome}</p>
            </CaseStudySection>
          </div>
        </section>
      </article>
      <ContactCta />
    </>
  );
}

function CaseStudySection({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-ink/15 pt-6 md:grid-cols-[0.35fr_1fr]">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">{label}</p>
      <div className="text-xl font-medium leading-9 tracking-[-0.025em] text-ink md:text-2xl md:leading-10">
        {children}
      </div>
    </section>
  );
}
