"use client";

import { usePathname } from "next/navigation";
import { notFound } from "next/navigation";
import projects from "@/data/projects";

const ProjectPage: React.FC = () => {
  const pathname = usePathname();
  const project = projects.find((p) => p.slug === pathname);

  if (!project) {
    return notFound();
  }

  if (project) {
    return (
      <section className="flex flex-col justify-center items-center">
        <div className="w-screen py-4 flex justify-center items-center object-cover">
          <img
            className="w-full h-full object-cover"
            src={project.header}
            alt="Header"
          />
        </div>
        <div className="w-5/6 sm:w-3/4 py-4">
          {project.description.map((paragraph, index) => (
            <>
              <p
                key={index}
                className="text-base sm:text-[1.3rem] sm:leading-tight md:text-[1.6rem] md:leading-tight"
              >
                {paragraph}
              </p>
              <br />
            </>
          ))}
        </div>
        <div className="w-screen flex flex-col justify-center items-center object-cover">
          {project.media.map((mediaItem, index) => (
            <>
              <div key={index} className="w-full object-cover py-2">
                {mediaItem.endsWith(".jpg") && (
                  <img
                    src={mediaItem}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full "
                  />
                )}
                {mediaItem.endsWith(".mp4") && (
                  <video controls className="w-full h-full">
                    <source src={mediaItem} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {project.mediaDesc[index] && (
                  <div className="w-5/6 sm:w-3/4 pt-4 m-auto">
                    <p className=" text-base sm:text-[1.3rem] sm:leading-tight md:text-[1.6rem] md:leading-tight ">
                      {project.mediaDesc[index]}
                    </p>
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      </section>
    );
  }
};

export default ProjectPage;
