import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      type="button"
      className={`fixed top-1/2 right-10 z-50 rounded-full bg-emerald-400 p-2 text-black hover:bg-white hover:text-green-500 ${visible ? "visible" : "invisible"}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowCircleUp className="text-3xl" />
    </button>
  );
};

export default ScrollToTop;
