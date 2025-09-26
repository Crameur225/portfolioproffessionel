'use client'
import React from 'react'
import PROJECTS from './PROJECT'
import { FaEye } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MyProject = () => {
  return (
    <div className="py-20 mb-10 text-colorCustoms" id="projects">
      <p className="text-center text-red-600 text-xl uppercase tracking-widest">
        VISITEZ MES PROJETS
      </p>
      <h1 className="text-center text-5xl font-bold tracking-wider mb-12">
        Mes Projets
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12">
        {PROJECTS.map((projet, key) => (
          <motion.div
            key={key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: key * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl border border-slate-700/40 rounded-2xl overflow-hidden group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={projet.image}
                alt={projet.title}
                className="w-full h-72 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between">
              <h2 className="text-white font-bold text-2xl mb-2">
                {projet.title}
              </h2>
              <p className="relative text-gray-300 text-sm h-28 overflow-hidden pr-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-12 after:bg-gradient-to-t after:from-gray-800 after:to-transparent">
                  {projet.description}
              </p>

              {/* Bouton Voir Plus */}
              <div className="mt-4 flex justify-center">
                <a
                  href={projet.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300"
                >
                  Voir plus <FaEye />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default MyProject
