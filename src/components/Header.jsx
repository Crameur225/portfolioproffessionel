'use client'
import React from 'react'
import photo from '../assets/photo.jpg'
import { FaFacebook, FaInstagram, FaNodeJs, FaReact } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { SiMongodb } from 'react-icons/si'
import cv from '../assets/CV-AGBE-YAVO-GAEL-BORROMEE.pdf'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className="mt-20 border-b border-white/10" id="home">
      {/* Texte de bienvenue */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-colorCustoms uppercase text-lg tracking-widest pt-10"
      >
        Bienvenue sur mon portfolio 
      </motion.h3>

      {/* Contenu principal */}
      <div className="lg:grid lg:grid-cols-2 sm:flex sm:flex-wrap gap-16 mt-12 items-center">
        {/* Texte gauche */}
        <div className="gap-y-10 tracking-wider">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white font-extrabold text-5xl py-5 leading-tight">
              Salut, je me nomme
              <br />
              <span className="bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent">
                Yavo Gael Borromée Agbe
              </span>
              <br />
              <span className="text-xl text-colorCustoms font-medium">
                Développeur Fullstack Débutant
              </span>
            </h2>

            <p className="text-gray-300 tracking-wide py-5 leading-relaxed max-w-xl">
              <strong className="text-white">
                Passionné par le développement Full Stack
              </strong>
              , titulaire d’un Brevet de Technicien Supérieur en Informatique, 
              j’ai renforcé mes compétences grâce à des formations sur Udemy.  
              <br />
              <span className="text-white">
                Je recherche une entreprise
              </span>{' '}
              où je pourrai mettre à profit mes compétences tout en continuant
              à évoluer professionnellement.
            </p>
          </motion.div>

          {/* Réseaux + Stack */}
          <div className="grid md:grid-cols-2 gap-10 pt-10">
            {/* Réseaux */}
            <div>
              <h3 className="text-xl uppercase font-bold text-white">
                Trouvez-moi sur
              </h3>
              <div className="flex gap-4 py-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100092984683097"
                  target="_blank"
                  className="p-3 bg-gray-900/70 backdrop-blur-md rounded-full flex justify-center items-center shadow-md hover:scale-110 hover:bg-red-600 transition-all text-2xl text-white"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="p-3 bg-gray-900/70 backdrop-blur-md rounded-full flex justify-center items-center shadow-md hover:scale-110 hover:bg-pink-500 transition-all text-2xl text-white"
                >
                  <FaInstagram />
                </a>
                <a
                  href="www.linkedin.com/in/gael-agbe-29a689270"
                  target="_blank"
                  className="p-3 bg-gray-900/70 backdrop-blur-md rounded-full flex justify-center items-center shadow-md hover:scale-110 hover:bg-blue-600 transition-all text-2xl text-white"
                >
                  <FaLinkedin />
                </a>
              </div>

              <a
                href={cv}
                download
                className="inline-block mt-2 bg-gradient-to-r from-red-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-transform"
              >
               Télécharger CV
              </a>
            </div>

            {/* Stack */}
            <div>
              <h3 className="text-xl uppercase font-bold text-white">
                Ce que j'utilise
              </h3>
              <div className="flex gap-4 py-4">
                <a
                  href="https://react.dev/"
                  target="_blank"
                  className="p-3 bg-gray-900/70 backdrop-blur-md rounded-full flex justify-center items-center shadow-md hover:scale-110 hover:text-red-500 transition-all text-2xl text-cyan-400"
                >
                  <FaReact />
                </a>
                <a
                  href="https://nodejs.org/en"
                  target="_blank"
                  className="p-3 bg-gray-900/70 backdrop-blur-md rounded-full flex justify-center items-center shadow-md hover:scale-110 hover:text-red-500 transition-all text-2xl text-green-400"
                >
                  <FaNodeJs />
                </a>
                <a
                  href="https://www.mongodb.com/products/platform/atlas-database"
                  target="_blank"
                  className="p-3 bg-gray-900/70 backdrop-blur-md rounded-full flex justify-center items-center shadow-md hover:scale-110 hover:text-red-500 transition-all text-2xl text-green-500"
                >
                  <SiMongodb />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Photo droite */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="p-2 rounded-full bg-gradient-to-r from-red-600 via-pink-500 to-yellow-500 animate-spin-slow">
            <img
              src={photo}
              alt="profile"
              className="rounded-2xl w-80 h-96 object-cover border-4 border-gray-900"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Header
