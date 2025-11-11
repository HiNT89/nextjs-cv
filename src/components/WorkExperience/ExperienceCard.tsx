import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface ExperienceCardProps {
  icon: IconDefinition;
  iconClass: string;
  title: string;
  description: string;
  buttonText: string;
}

const ExperienceCard = ({
  icon,
  iconClass,
  title,
  description,
  buttonText,
}: ExperienceCardProps) => {
  return (
    <div className="relative bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 md:p-8 hover:scale-105 transition-all duration-300 group cursor-pointer">
      <div className="mb-4 md:mb-6">
        <div
          className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm ${iconClass}`}
        >
          <FontAwesomeIcon icon={icon} className="text-xl md:text-2xl" />
        </div>
      </div>

      <div className="mb-6 md:mb-8">
        <h3 className="text-white text-xl md:text-2xl font-bold mb-3 md:mb-4">{title}</h3>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">{description}</p>
      </div>

      <button className="bg-transparent border border-white/30 text-white! px-5 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-xs md:text-sm tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-300 group-hover:transform group-hover:translate-y-1">
        {buttonText}
      </button>

      <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/10 rounded-full"></div>
    </div>
  );
};

export default ExperienceCard;
