import React, { useEffect, useRef, useState } from 'react';
import photo from '../assets/photo.jpg';
import cv from '../assets/CV-AGBE-YAVO-GAEL-BORROMEE.pdf'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fixed, setFixed]= useState(false);
  const navRef = useRef(null)

const fixedFunction =()=>{
  if(navRef.current){
    if(window.scrollY > navRef.current.offsetTop){
      setFixed(true)
    }else{
      setFixed(false)
    }
  }
}
useEffect(()=>{
   window.addEventListener("scroll", fixedFunction);
   return () => window.removeEventListener("scroll", fixedFunction)
}, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav ref={navRef} className={`${fixed ? "bg-bakgroundCustoms fixed top-0 w-full z-50 h-16 text-colorCustoms shadow-xl" : "bg-bakgroundCustoms text-colorCustoms shadow-xl"}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={photo} // Remplacez par le chemin de votre photo
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <span className="ml-4 text-lg font-bold">GAEL AGBE</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-white uppercase text-sm  hover:transition-all ease-out hover:duration-500">Home</a></li>
          <li><a href="#about" className="hover:text-white uppercase text-sm  hover:transition-all ease-out hover:duration-500">Features</a></li>
          <li><a href="#projects" className="hover:text-white uppercase text-sm  hover:transition-all ease-out hover:duration-500">Mes Projets</a></li>
          <li><a href="#about-me" className="hover:text-white uppercase text-sm  hover:transition-all ease-out hover:duration-500">Moi</a></li>
          <li><a href="#contact" className="hover:text-white uppercase text-sm  hover:transition-all ease-out hover:duration-500">Contact</a></li>
          <li>
            <a
              href={cv} // Remplacez par le chemin de votre CV
              download
              className="bg-black/60 border px-4 py-2 text-white rounded hover:bg-red-600"
            >
              Télécharger CV
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
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
      {isOpen && (
        <ul className="md:hidden bg-gray-700 space-y-4 px-6 py-4">
          <li><a href="#home" className="block hover:text-gray-400 uppercase">Home</a></li>
          <li><a href="#about" className="block hover:text-gray-400 uppercase">Ce que je fais</a></li>
          <li><a href="#projects" className="block hover:text-gray-400 uppercase">Mes Projets</a></li>
          <li><a href="#about-me" className="block hover:text-gray-400 uppercase">Moi</a></li>
          <li><a href="#testimonials" className="block hover:text-gray-400 uppercase">Témoignages</a></li>
          <li><a href="#contact" className="block hover:text-gray-400 uppercase">Contact</a></li>
          <li>
            <a
              href={cv}
              download
              className="block bg-black/90 px-4 py-2 text-center rounded hover:bg-red-600"
            >
              Télécharger CV
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
