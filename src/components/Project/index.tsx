import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Example Project",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "Spotify API", "Express", "MongoDB"],
    githubUrl: "https://github.com/example/project",
    liveUrl: "https://example-project.com",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js and TypeScript. Features include dark mode, smooth animations, and modern design principles.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/example/portfolio",
    liveUrl: "https://portfolio.example.com",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
    githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "https://ecommerce.example.com",
  },
  {
    id: 4,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Firebase", "Vuex", "Socket.io"],
    githubUrl: "https://github.com/example/taskmanager",
  },
];

const Projects: React.FC = () => {
  const otherProjects = projectsData.filter((project) => !project.isFeatured);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex gap-4 flex-col mb-12">
        {otherProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
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
