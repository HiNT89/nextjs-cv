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
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  index = 0,
}) => {
  const isOdd = index % 2 === 1;

  return (
    <div className="relative">
      <div className={`flex items-center ${isOdd ? "flex-row-reverse" : ""}`}>
        {/* Content */}
        <div className="flex-1 space-y-4">
          <p className="text-sm text-purple-400 font-semibold tracking-wide">
            Featured Project
          </p>
          <h3 className="text-4xl lg:text-5xl font-bold text-white">{title}</h3>
          <div
            className={`p-6 rounded-3xl backdrop-blur-sm w-full ${
              isOdd ? "-translate-x-[60px]" : "translate-x-[60px]"
            }`}
            style={{
              background:
                "linear-gradient(45deg, rgba(105, 59, 147, 1), rgba(110, 191, 244, 0.22), rgba(70, 144, 212, 0.1))",
            }}
          >
            <p className="text-gray-200 leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Project Image */}
        <div className="flex-1 bg-[#2B0B3A] p-6 rounded-3xl">
          <img
            src={project.src}
            alt="project preview"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Background gradient overlay */}
      <img
        src={bg.src}
        alt="bg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 -z-10 pointer-events-none"
      />
    </div>
  );
};

export default ProjectCard;
