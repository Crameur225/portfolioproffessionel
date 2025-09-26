import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [scrollTop, setScrollTop] = useState(false);

  const scrollLy = () => {
    setScrollTop(window.scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollLy);
    return () => {
      window.removeEventListener("scroll", scrollLy);
    };
  }, []);

  const scrolTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scrollTop && (
        <button
          onClick={scrolTo}
          className="fixed bottom-8 right-6 p-4 rounded-full text-white text-2xl shadow-lg 
          bg-gradient-to-r from-indigo-500 to-purple-600 
          hover:from-purple-600 hover:to-pink-500 
          transition-all duration-500 ease-in-out 
          animate-bounce hover:animate-none"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default BackToTop;
