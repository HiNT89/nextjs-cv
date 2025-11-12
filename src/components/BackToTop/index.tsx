"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useSmoothScroll } from "@/src/hooks/useSmoothScroll";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToTop } = useSmoothScroll();

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            flex items-center justify-center
            w-12 h-12 
            bg-gradient-to-r from-purple-600 to-purple-700 
            hover:from-purple-700 hover:to-purple-800
            text-white 
            rounded-full 
            shadow-lg hover:shadow-xl
            transform transition-all duration-300 
            hover:scale-110 
            focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2
            animate-bounce hover:animate-none
          "
          aria-label="Back to top"
          title="Quay lên đầu trang"
        >
          <FontAwesomeIcon icon={faChevronUp} className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
