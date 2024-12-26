import React from 'react'
import PROJECTS  from './PROJECT'
import { FaEye } from 'react-icons/fa'

const MyProject = () => {
  return (
    <div className='py-20 mb-10 text-colorCustoms' id='projects'>
      <p className='text-center text-red-600 text-xl uppercase'>VISITEZ MES PROJETS</p>
      <h1 className='text-center text-5xl font-bold tracking-wider'>Mes Projets</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20'>
        {PROJECTS.map((projet, key)=>(
          <div key={key} className='w-full shadow-2xl border-slate-900/30 border-2 rounded-2xl mt-10'>
            <img src={projet.image} alt="" className='w-full h-72 m-auto rounded-2xl border-8 border-black'/>
            <h2 className='text-white font-bold text-xl px-2'>{projet.title}</h2>
            <h6 className='lg:w-full  h-36 text-colorCustoms object-cover overflow-hidden hover:overflow-y-scroll text-ellipsis px-2'>{projet.description}</h6>
            <p className='hover:text-red-500 cursor-pointer text-white py-2  text-2xl flex justify-center items-center'><a href={projet.link} target='_blank'> Voir plus </a>  <FaEye/></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyProject