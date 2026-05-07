import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { ProjectGrid } from "@/components/ProjectGrid";
import { featuredProjects } from "@/data/projects";

const focusAreas = [
  ["Digital", "Responsive UI and product experience"],
  ["Brand", "Identity touchpoints and visual systems"],
  ["Editorial", "Typography, layout, and information design"],
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid min-h-[calc(100svh-61px)] max-w-7xl gap-10 px-5 pb-12 pt-10 md:grid-cols-[0.92fr_1.08fr] md:items-end md:px-8 md:pb-16 md:pt-16">
        <div className="reveal pb-0 md:pb-10">
          <div className="border-t border-ink pb-6">
            <p className="pt-4 text-xs font-semibold uppercase tracking-[0.32em] text-clay">
              UI/UX · Visual Systems · Editorial Thinking
            </p>
          </div>
          <h1 className="mt-7 max-w-4xl text-balance text-[4.3rem] font-medium leading-[0.86] tracking-[-0.065em] md:text-[8.6rem]">
            Danhong
            <span className="block pl-[0.34em]">Wang</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-graphite md:text-lg md:leading-9">
            I design digital experiences, brand touchpoints, and layout systems with visual craft and a UX-minded sense of structure.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/portfolio" className="inline-flex h-12 items-center justify-center bg-ink px-6 text-sm font-semibold text-paper transition hover:bg-graphite">
              View work
            </Link>
            <Link href="/contact" className="inline-flex h-12 items-center justify-center border border-ink/20 px-6 text-sm font-semibold transition hover:border-ink">
              Contact
            </Link>
          </div>
        </div>
        <div className="reveal grid gap-4 border border-ink/10 bg-paper/35 p-6 md:p-10">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-graphite">Featured case study</p>
          <h2 className="max-w-2xl text-4xl font-medium leading-[0.98] tracking-[-0.04em] md:text-6xl">
            Personal Image Report System
          </h2>
          <p className="max-w-xl text-sm leading-7 text-graphite">
            A digital editorial system that turns personal image consulting into a clear, premium, and reusable client deliverable.
          </p>
          <Link href="/portfolio/personal-image-report-system" className="link-line w-fit text-sm font-semibold">
            Read case study
          </Link>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper/35">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 md:grid-cols-3 md:px-8">
          {focusAreas.map(([value, label]) => (
            <div key={value} className="border-b border-ink/10 py-6 md:border-b-0 md:border-r md:px-8 md:py-9 last:md:border-r-0">
              <p className="text-4xl font-medium tracking-[-0.04em]">{value}</p>
              <p className="mt-2 max-w-48 text-sm leading-6 text-graphite">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-clay">Selected works</p>
            <h2 className="mt-4 max-w-3xl text-balance text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Case studies for digital and visual design roles
            </h2>
          </div>
          <Link href="/portfolio" className="link-line text-sm font-semibold">
            View all work
          </Link>
        </div>
      </section>
      <ProjectGrid projects={featuredProjects} />
      <ContactCta />
    </>
  );
}
