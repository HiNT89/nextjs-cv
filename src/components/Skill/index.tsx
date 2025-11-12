"use client";

import skill_img from "@/src/assets/images/Skills.png";
import { useTranslations } from "next-intl";

const Skill = () => {
  const t = useTranslations("skill");

  return (
    <section className="custom-container flex flex-col items-center mb-40! px-4 gap-6">
      <h3 className="text-center max-w-4xl leading-relaxed">
        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block mb-4">
          {t("title")}
        </span>
        <span className="text-xl text-gray-700 dark:text-gray-300">
          {t("description")}
        </span>
      </h3>
      <img src={skill_img.src} alt={t("imageAlt")} />
    </section>
  );
};

export default Skill;
