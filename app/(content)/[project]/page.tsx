"use client";

import { usePathname } from "next/navigation";
import projects from "@/data/projects";

const ProjectPage: React.FC = () => {
  const pathname = usePathname();
  const project = projects.find((p) => p.slug === pathname);

  if (!project) {
    return (
      <div className="flex justify-center items-center text-4xl h-screen">
        Page not found!
      </div>
    );
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.header}></img>
    </div>
  );
};

export default ProjectPage;
