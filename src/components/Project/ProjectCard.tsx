import React from "react";
import bg from "@/src/assets/images/Gradient.png";
import project from "@/src/assets/images/project.png";
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  isFeatured = false,
}) => {
  return (
    <div className="relative check">
      <div className="flex">
        <div className=""></div>
        <div className="bg-[#2B0B3A] p-4 rounded-3xl">
          <img src={project.src} alt="project" />
        </div>
      </div>
      {/* Background gradient overlay */}
      <img
        src={bg.src}
        alt="bg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 -z-10"
      />
    </div>
  );
};

export default ProjectCard;
