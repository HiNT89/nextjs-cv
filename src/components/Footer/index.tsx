"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDribbble,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#1a0b2e] py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            {t("title")}
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            {t("description")}
          </p>

          <a
            href={`mailto:${t("email")}`}
            className="text-gray-300 hover:text-purple-400 transition-colors mb-8 inline-block"
          >
            {t("email")}
          </a>

          <div className="flex gap-6 mt-8">
            <a
              href="https://www.instagram.com/hint_1108/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a
              href="https://www.facebook.com/ntt.starup/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="Dribbble"
            >
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
            <a
              href={`mailto:${t("email")}`}
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="Google"
            >
              <FontAwesomeIcon icon={faGoogle} size="xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
