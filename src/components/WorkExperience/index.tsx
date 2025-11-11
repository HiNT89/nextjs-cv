import bg from "@/src/assets/images/Gradient.png";
import ExperienceCard from "@/src/components/WorkExperience/ExperienceCard";
import { experiencesData } from "./experiencesData";

const WorkExperience = () => {
  return (
    <section className="relative min-h-screen py-20 px-4">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiencesData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              icon={exp.icon}
              iconClass={exp.iconClass}
              title={exp.title}
              description={exp.description}
              buttonText={exp.buttonText}
            />
          ))}
        </div>
      </div>

      {/* Background gradient overlay */}
      <img
        src={bg.src}
        alt="bg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 -z-10"
      />
    </section>
  );
};

export default WorkExperience;
