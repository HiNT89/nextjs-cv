"use client";
import logo from "@/src/assets/images/logo.png";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import LanguageSwitcher from "@/src/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { useSmoothScroll } from "@/src/hooks/useSmoothScroll";
import { useActiveSection } from "@/src/hooks/useActiveSection";

const CHeader = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("header");
  const { scrollToSection } = useSmoothScroll();

  // Navigation items with sections for smooth scrolling
  const NAV = [
    { name: t("home"), href: "#home", section: "home" },
    { name: t("about"), href: "#about", section: "about" },
    { name: "Experience", href: "#experience", section: "experience" },
    { name: "Projects", href: "#projects", section: "projects" },
    { name: "Contact", href: "#contact", section: "contact" },
  ];

  // Track active section
  const sections = NAV.map((item) => item.section);
  const activeSection = useActiveSection(sections, 100);

  // Handle navigation click
  const handleNavClick = (item: (typeof NAV)[0]) => {
    if (item.section) {
      scrollToSection(item.section);
      setIsMenuOpen(false);
    } else {
      router.push(item.href);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 md:py-6 bg-[#1A0B2E]/95 backdrop-blur-sm text-white px-4 border-b border-purple-500/20">
      <div className="custom-container flex justify-between items-center w-full">
        {/* logo */}
        <div
          className="cursor-pointer border-3 border-(--main-color) h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg object-cover overflow-hidden p-2 hover:scale-110 transition-transform duration-200"
          onClick={() => {
            scrollToSection("home");
          }}
        >
          <img src={logo.src} alt="Logo" className="" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <button
              key={item.name}
              className={`mx-2 text-lg transition-all duration-200 cursor-pointer font-medium relative group ${
                activeSection === item.section
                  ? "text-purple-400"
                  : "text-white hover:text-purple-400"
              }`}
              onClick={() => handleNavClick(item)}
            >
              {item.name}
              {/* Active indicator */}
              <span
                className={`absolute -bottom-2 left-0 w-full h-0.5 bg-purple-400 transform transition-transform duration-200 ${
                  activeSection === item.section
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-2xl z-50 hover:text-purple-400 transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Mobile nav */}
        <nav
          className={`${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden fixed top-0 right-0 h-screen w-64 bg-[#1A0B2E]/95 backdrop-blur-md border-l border-purple-500/30 flex flex-col items-center justify-center gap-8 transition-transform duration-300 z-40`}
        >
          {NAV.map((item) => (
            <button
              key={item.name}
              className={`text-xl transition-colors duration-200 cursor-pointer font-medium ${
                activeSection === item.section
                  ? "text-purple-400"
                  : "text-white hover:text-purple-400"
              }`}
              onClick={() => handleNavClick(item)}
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
