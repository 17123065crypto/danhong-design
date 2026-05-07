import { ContactCta } from "@/components/ContactCta";
import { PageIntro } from "@/components/PageIntro";

const capabilities = [
  "Responsive UI and high-fidelity product screens",
  "Brand identity and visual touchpoint systems",
  "Editorial layout, typography, and information design",
  "Digital reports, templates, and service materials",
  "Concept development through final production assets",
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="I design with visual sensitivity and structural thinking."
        description="My work sits between UI/UX, visual design, and graphic systems. I care about hierarchy, rhythm, typography, and the small decisions that make a product or brand touchpoint feel intentional."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:pb-28">
        <div className="border-t border-ink/15 pt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-clay">Profile</p>
          <p className="mt-4 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
            I build quiet, useful, and visually precise design systems for screens and printed touchpoints.
          </p>
        </div>
        <div className="grid content-start gap-12">
          <div className="border-t border-ink/15 pt-6">
            <h2 className="text-4xl font-medium tracking-[-0.04em]">Design focus</h2>
            <div className="mt-8 grid gap-4">
              {capabilities.map((item) => (
                <div key={item} className="flex items-center justify-between border-b border-ink/10 pb-4">
                  <span className="text-lg">{item}</span>
                  <span className="text-graphite">+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
