import React from 'react'
import { SiBootstrap, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si'

const CeQueJeFais = () => {
  return (
    <div className='text-colorCustoms pb-24' id='about'>
      <p className='uppercase text-red-700'>Features</p>
      <h2 className='text-4xl text-white py-4'>Ce que je fais.</h2>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-6 my-6'>
        {/* Pour du reactJs */}
        <div 
        className='shadow-lg rounded-2xl p-6 hover:text-white hover: shadow-gray-500/40 hover:bg-slate-900 transform transition ease-in-out duration-500 hover:scale-110'>
          <h2 className='text-red-700 text-5xl py-2'><SiReact/></h2>
          <p className=''>
          J'utilise ReactJS, un outil moderne pour créer des sites web dynamiques appelés SPA (Single Page Applications). Ces sites sont rapides à charger, réactifs, 
          et faciles à mettre à jour grâce aux nombreuses ressources et fonctionnalités qu'offre ReactJS.
          </p>
        </div>
        {/* Pour du NodeJs */}
        <div 
        className='shadow-lg rounded-2xl p-6 hover:text-white hover:shadow-gray-500/40 hover:bg-slate-900 transform transition ease-in-out duration-500 hover:scale-110'>
          <h2 className='text-red-700 text-5xl py-2'><SiNodedotjs/></h2>
          <p>
          J'utilise Node.js, une technologie moderne pour développer des applications web rapides et efficaces côté serveur. 
          Avec sa capacité à gérer un grand nombre de connexions simultanées et son environnement basé sur JavaScript, Node.js est idéal pour créer des API performantes et des applications évolutives, tout en bénéficiant de son vaste écosystème de modules.
          </p>
        </div>
        {/* Pour du TailWindCss */}
        <div 
        className='shadow-lg rounded-2xl p-6 hover:text-white hover:shadow-gray-500/40 hover:bg-slate-900 transform transition ease-in-out duration-500 hover:scale-110'>
          <h2 className='text-red-700 text-5xl py-2'><SiTailwindcss/></h2>
          <p>
          J'utilise Tailwind CSS, un framework moderne pour concevoir 
          des interfaces web rapides et élégantes. Grâce à son système de 
          classes utilitaires, il permet de créer des designs personnalisés sans écrire de CSS manuel, tout en restant flexible et maintenable. Avec Tailwind, je peux rapidement développer des interfaces cohérentes et réactives, adaptées à tous les types de projets.
          </p>
        </div>
        {/* Pour du TailWindCss */}
        <div  
        className='shadow-lg rounded-2xl p-6 hover:text-white hover:shadow-gray-500/40 hover:bg-slate-900 transform transition ease-in-out duration-500 hover:scale-110'>
          <h2 className='text-red-700 text-5xl py-2'><SiBootstrap/></h2>
          <p>
          J'utilise Bootstrap, un framework populaire pour créer des interfaces web modernes et réactives. Avec son système de grilles flexible et ses nombreux 
          composants préconstruits (comme les boutons, les cartes ou les modaux),
           Bootstrap permet de concevoir rapidement des sites élégants et compatibles avec tous les appareils, tout en réduisant le temps de développement.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CeQueJeFais