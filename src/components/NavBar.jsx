import React, { useEffect, useRef, useState } from "react";
import photo from "../assets/photo.png";
import cv from "../assets/CV-AGBE-YAVO-GAEL-BORROMEE.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fixed, setFixed] = useState(false);
  const navRef = useRef(null);

  const fixedFunction = () => {
    if (navRef.current) {
      if (window.scrollY > navRef.current.offsetTop) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", fixedFunction);
    return () => window.removeEventListener("scroll", fixedFunction);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      ref={navRef}
      className={`${
        fixed
          ? "backdrop-blur-lg bg-black/70 fixed top-0 w-full z-50 shadow-lg transition-all duration-500"
          : "backdrop-blur-sm bg-black/50 w-full shadow-md"
      } text-colorCustoms`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={photo}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-white shadow-md"
          />
          <span className="ml-3 text-lg font-bold tracking-wide text-white">
            GAEL AGBE
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "Features" },
            { id: "projects", label: "Mes Projets" },
            { id: "about-me", label: "Moi" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="relative uppercase text-sm text-gray-300 hover:text-white transition duration-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={cv}
              download
              className="ml-4 bg-gradient-to-r from-red-500 to-pink-600 px-4 py-2 text-white rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
            >
              Télécharger CV
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/80 backdrop-blur-lg transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-4 px-6 py-6 text-center">
          <li>
            <a href="#home" className="block text-white uppercase hover:text-red-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="block text-white uppercase hover:text-red-400">
              Ce que je fais
            </a>
          </li>
          <li>
            <a href="#projects" className="block text-white uppercase hover:text-red-400">
              Mes Projets
            </a>
          </li>
          <li>
            <a href="#about-me" className="block text-white uppercase hover:text-red-400">
              Moi
            </a>
          </li>
          <li>
            <a href="#contact" className="block text-white uppercase hover:text-red-400">
              Contact
            </a>
          </li>
          <li>
            <a
              href={cv}
              download
              className="block bg-gradient-to-r from-red-500 to-pink-600 px-4 py-2 text-white rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
            >
              Télécharger CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
