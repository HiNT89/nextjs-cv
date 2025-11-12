"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { useTranslations } from "next-intl";

interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
}

const Projects: React.FC = () => {
  const t = useTranslations("projects");

  const projectsData: Project[] = [
    {
      id: 1,
      titleKey: "project1.title",
      descriptionKey: "project1.description",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Spotify API", "Express", "MongoDB"],
      githubUrl: "https://github.com/example/project",
      liveUrl: "https://example-project.com",
      isFeatured: true,
    },
    {
      id: 2,
      titleKey: "project2.title",
      descriptionKey: "project2.description",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/example/portfolio",
      liveUrl: "https://portfolio.example.com",
    },
    {
      id: 3,
      titleKey: "project3.title",
      descriptionKey: "project3.description",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      githubUrl: "https://github.com/example/ecommerce",
      liveUrl: "https://ecommerce.example.com",
    },
    {
      id: 4,
      titleKey: "project4.title",
      descriptionKey: "project4.description",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Firebase", "Vuex", "Socket.io"],
      githubUrl: "https://github.com/example/taskmanager",
    },
  ];

  const otherProjects = projectsData.filter((project) => !project.isFeatured);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex gap-4 flex-col mb-12">
        {otherProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={t(project.titleKey)}
            description={t(project.descriptionKey)}
            image={project.image}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            isFeatured={false}
            index={project.id - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
