"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const savedLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="))
      ?.split("=")[1];
    if (savedLocale) {
      setLocale(savedLocale);
    }
  }, []);

  const switchLanguage = (newLocale: string) => {
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
    setLocale(newLocale);
    window.location.reload();
  };

  return (
    <div className="flex gap-1 items-center bg-white/10 rounded-lg p-1 backdrop-blur-sm border border-purple-500/20">
      <button
        onClick={() => switchLanguage("en")}
        className={`px-4 py-1.5 rounded-md font-medium transition-all duration-300 ${
          locale === "en"
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50"
            : "text-white/70 hover:text-white hover:bg-white/10"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage("vi")}
        className={`px-4 py-1.5 rounded-md font-medium transition-all duration-300 ${
          locale === "vi"
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50"
            : "text-white/70 hover:text-white hover:bg-white/10"
        }`}
      >
        VI
      </button>
    </div>
  );
}
