import { PageIntro } from "@/components/PageIntro";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Portfolio"
        title="Case studies across product, brand, and editorial systems."
        description="A curated selection of UI/UX, visual identity, print, and layout work. Each project focuses on structure, hierarchy, user context, and craft."
      />
      <ProjectGrid projects={projects} />
    </>
  );
}
