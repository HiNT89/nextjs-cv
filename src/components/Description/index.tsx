import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Description = () => {
  return (
    <section className="custom-container py-10 md:py-20 px-4 md:px-20">
      <div className="max-w-4xl">
        <h1 className="text-white text-2xl md:text-4xl font-bold mb-4 md:mb-6">
          I'm a Frontend Developer.|
        </h1>

        <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8">
          Currently, I'm a Frontend Developer with{" "}
          <span className="text-blue-400 font-semibold">
            <FontAwesomeIcon icon={faFacebook} size="1x" /> Facebook
          </span>
          ,
        </p>

        <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-4">
          <p>
            A passionate Frontend Developer, working in the industry for 2+
            years now.
          </p>
          <p>
            I create beautiful and responsive user interfaces that provide
            excellent user experience and meet modern web standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
