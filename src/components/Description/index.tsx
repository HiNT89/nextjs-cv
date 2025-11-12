"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";

const Description = () => {
  const t = useTranslations("description");

  return (
    <section className="custom-container py-10 md:py-20 px-4 md:px-20">
      <div className="max-w-4xl">
        <h1 className="text-white text-2xl md:text-4xl font-bold mb-4 md:mb-6">
          {t("title")}
        </h1>

        <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8">
          {t("currentRole")}{" "}
          <span className="text-blue-400 font-semibold">
            <FontAwesomeIcon icon={faFacebook} size="1x" /> {t("company")}
          </span>
          ,
        </p>

        <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-4">
          <p>{t("intro1")}</p>
          <p>{t("intro2")}</p>
        </div>
      </div>
    </section>
  );
};

export default Description;
