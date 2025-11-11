import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
const Description = () => {
  return (
    <section className="custom-container py-20 px-20">
      <div className="max-w-4xl">
        <h1 className="text-white text-4xl font-bold mb-6">
          I'm a Frontend Developer.|
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          Currently, I'm a Frontend Developer with{" "}
          <span className="text-blue-400 font-semibold">
            <FontAwesomeIcon icon={faFacebook} size="1x" /> Facebook
          </span>
          ,
        </p>

        <div className="text-gray-300 text-base leading-relaxed space-y-4">
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
