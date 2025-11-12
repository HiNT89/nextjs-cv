"use client";
import logo from "@/src/assets/images/logo.png";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import LanguageSwitcher from "@/src/components/LanguageSwitcher";
import { useTranslations } from "next-intl";

const CHeader = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("header");

  const NAV = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("lab"), href: "/lab" },
  ];

  return (
    <header className="py-4 md:py-6 bg-[#1A0B2E] text-white px-4">
      <div className="custom-container flex justify-between items-center w-full">
        {/* logo */}
        <div
          className="cursor-pointer border-3 border-(--main-color) h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg object-cover overflow-hidden p-2"
          onClick={() => {
            router.push("/");
          }}
        >
          <img src={logo.src} alt="Logo" className="" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <button
              key={item.name}
              className="mx-2 text-lg hover:text-(--main-color) transition-colors cursor-pointer font-medium"
              onClick={() => {
                router.push(item.href);
              }}
            >
              {item.name}
            </button>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Mobile nav */}
        <nav
          className={`${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden fixed top-0 right-0 h-screen w-64 bg-[#1A0B2E] border-l border-purple-500/30 flex flex-col items-center justify-center gap-8 transition-transform duration-300 z-40`}
        >
          {NAV.map((item) => (
            <button
              key={item.name}
              className="text-xl hover:text-(--main-color) transition-colors cursor-pointer font-medium"
              onClick={() => {
                router.push(item.href);
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </button>
          ))}
          <div className="mt-4">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default CHeader;
