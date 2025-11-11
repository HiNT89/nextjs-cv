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
    <div className="relative bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:scale-105 transition-all duration-300 group cursor-pointer">
      {/* Icon */}
      <div className="mb-6">
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm ${iconClass}`}
        >
          <FontAwesomeIcon icon={icon} className="text-2xl" />
        </div>
      </div>

      {/* Content */}
      <div className="mb-8">
        <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300 text-base leading-relaxed">{description}</p>
      </div>

      {/* Button */}
      <button className="bg-transparent border border-white/30 text-white! px-6 py-3 rounded-lg font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-300 group-hover:transform group-hover:translate-y-1">
        {buttonText}
      </button>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/10 rounded-full"></div>
    </div>
  );
};

export default ExperienceCard;
