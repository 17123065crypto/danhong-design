import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-x-6 gap-y-14 px-5 pb-20 md:grid-cols-2 md:px-8 md:pb-28">
      {projects.map((project, index) => (
        <div key={project.slug} className={index % 2 === 1 ? "md:pt-16" : ""}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
