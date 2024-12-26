import React from 'react'
import photo from '../assets/photo.jpg'
import { FaFacebook, FaInstagram, FaNodeJs, FaReact } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { SiMongodb } from 'react-icons/si'
const Header = () => {
  return (
   <div className='mt-20 border-b-0  border-white' id='home'>
    <h3 className='text-colorCustoms uppercase text-lg pt-10'>
            Bienvenue sur mon portfolio.
        </h3>
     <div className='lg:grid lg:grid-cols-2 sm:flex sm:flex-wrap gap-20 '>
     <div className='gap-y-10 tracking-wider'>
        <div className=''>
            <h2 className='text-white font-bold text-5xl py-5 leading-[1.25em]'>
                Salut, je m'appele 
                <span className='text-red-600'> Yavo Gael Borromée Agbe </span>
                Developpeur full-Stack junior.
            </h2>
            <p className='text-colorCustoms tracking-widest py-5 w-full'>
            <strong>Passionné par le développement Full Stack</strong>, titulaire d’un Brevet de Technicien 
            Supérieur en Informatique, 
            j’ai renforcé mes compétences grâce à des formations sur Udemy. 
            <strong className='text-white'> Je recherche une entreprise </strong> 
            où je pourrai mettre à profit mes compétences tout en continuant à évoluer professionnellement.
            </p>
        </div>
        <div className='grid grid-cols-2 gap-6 text-colorCustoms pt-16'>
            <div>
                <h3 className='text-xl uppercase font-bold'>Trouvez moi sur </h3>
                <div className='grid grid-cols-3 py-4 gap-2'>
                    <button className='py-2 bg-gray-900 rounded flex justify-center items-center shadow-xl  shadow-slate-400/20 hover:bg-gray-800'><a href='https://www.facebook.com/profile.php?id=100092984683097' target='_blank' className='text-2xl'><FaFacebook/></a></button>
                    <button className='py-2 bg-gray-900 rounded flex justify-center items-center shadow-xl  shadow-slate-400/20 hover:bg-gray-800'><a href='#' target='_blank' className='text-2xl'><FaInstagram/></a></button>
                    <button className='py-2 bg-gray-900 rounded flex justify-center items-center shadow-xl  shadow-slate-400/20 hover:bg-gray-800'><a href='www.linkedin.com/in/gael-agbe-29a689270' target='_blank' className='text-2xl'><FaLinkedin/></a></button>
                </div>
            </div>
            <div>
                <h3 className='text-xl uppercase font-bold'>Ce que j'utilise</h3>
                <div className='grid grid-cols-3 py-4 gap-2'>
                    <button className='py-2 bg-gray-900 rounded flex justify-center items-center shadow-xl shadow-slate-400/20 hover:bg-gray-800'><a href='https://react.dev/' target='_blank' className='text-2xl hover:text-red-600'><FaReact/></a></button>
                    <button className='py-2 bg-gray-900 rounded flex justify-center items-center shadow-xl shadow-slate-400/20 hover:bg-gray-800'><a href='https://nodejs.org/en' target='_blank' className='text-2xl hover:text-red-600'><FaNodeJs/></a></button>
                    <button className='py-2 bg-gray-900 rounded flex justify-center items-center shadow-xl shadow-slate-400/20 hover:bg-gray-800'><a href='https://www.mongodb.com/products/platform/atlas-database' target='_blank' className='text-2xl hover:text-red-600'><SiMongodb/></a></button>
                </div>
            </div>
            <div>
                
            </div>
        </div>
     </div>
     <div className='pl-10'>
        <img src={photo} alt="photo de profile" className='w-full h-4/5 shadow-4xl rounded-xl border-[1em] border-black/80' />
     </div>
    </div>
   </div>
  )
}

export default Header