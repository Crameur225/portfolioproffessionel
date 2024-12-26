import React from 'react'
import { EXPERINCES, FORMATIONS } from './FORMATIONS'

const MoiEnResumer = () => {
  return (
    <div className='py-20 text-colorCustoms ' id='about-me'>
      <p className='text-center text-red-500'>RESUMER</p>
      <h2 className='text-center font-bold text-5xl pb-10'>Formations et expérience</h2>
     <div className='w-[85%] m-auto grid lg:grid-cols-2 sm:grid-cols-1 gap-20'>
       <div>
        <h2 className='uppercase text-3xl py-4'>Formation et Certifations</h2>
        <div className='flex flex-col justify-center items-center gap-10'>
           {FORMATIONS.map((formation, key)=>(
            <div key={key} className='w-full border-2 border-slate-900/30 shadow-2xl rounded-2xl'>
              <div className='py-8'>
              <h2 className='text-4xl text-white py-2'>{formation.title}</h2>
              <p className='text-red-600'>{formation.date}</p>
              <hr />
              </div>
              <p>{formation.name}</p>
               <p className='py-2'>{formation.description}</p>
            </div>
           ))}
        </div>
       </div>
       <div>
        <h2 className='uppercase text-3xl py-4'>EXPÉRIENCE PROFESSIONNELLE</h2>
        <div className='flex flex-col justify-center items-center gap-10'>
           {EXPERINCES.map((formation, key)=>(
            <div key={key} className='w-full border-2 border-slate-900/30 shadow-2xl rounded-2xl'>
              <div className='py-8'>
              <h2 className='text-4xl text-white py-2'>{formation.title}</h2>
              <p className='text-red-600'>{formation.date}</p>
              <hr />
              </div>
              <p>{formation.name}</p>
               <p className='py-2'>{formation.description}</p>
            </div>
           ))}
        </div>
       </div>
     </div>
    </div>
  )
}

export default MoiEnResumer