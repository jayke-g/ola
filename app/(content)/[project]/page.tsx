"use client";

import { usePathname } from "next/navigation";
import { notFound } from 'next/navigation'
import projects from "@/data/projects";

const ProjectPage: React.FC = () => {
  const pathname = usePathname();
  const project = projects.find((p) => p.slug === pathname);

  if (!project) {
    return (
      notFound()
    );
  }

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-[100%] py-4">
        <img className="object-cover w-full" src={project.header}></img>
      </div>
      <div className="w-5/6 sm:w-3/4 py-4">
        <p className="text-base sm:text-[1.3rem] sm:leading-relaxed md:text-[1.6rem] md:leading-relaxed">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque
          pretium lectus id turpis. Fusce tellus. Nulla turpis magna, cursus sit
          amet, suscipit a, interdum id, felis. Suspendisse sagittis ultrices
          augue. Nullam rhoncus aliquam metus. Nulla accumsan, elit sit amet
          varius semper, nulla mauris mollis quam, tempor suscipit diam nulla
          vel leo.
        </p>
      </div>
      <div className="w-[100%] py-2">
        <img className="object-cover w-full" src={project.image1}></img>
      </div>
      <div className="w-[100%] py-2">
        <img className="object-cover w-full" src={project.image2}></img>
      </div>
    </section>
  );
};

export default ProjectPage;
