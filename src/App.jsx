import React from 'react'
import Navbar from './components/NavBar'
import Header from './components/Header'
import CeQueJeFais from './components/CequeJeFais/CeQueJeFais'
import MyProject from './components/MyProject/MyProject'
import MoiEnResumer from './components/Moi/MoiEnResumer'
import Skills from './components/Skills'
import ContacterMoi from './components/ContacterMoi'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

const App = () => {
  return (
    <div className='min-w-full min-h-min bg-bakgroundCustoms overflow-y-hidden'>
      <Navbar/>
      <BackToTop/>
       <div className='w-[90%] h-full m-auto'>
       <Header/>
       </div>
       <hr className='border-1 border-black my-16'/>
      <div className='w-[90%] h-full m-auto '>
       <CeQueJeFais/>
       </div>
       <hr className='border-1 border-black my-16'/>
       <div className='w-[90%] h-full m-auto '>
       <MyProject/>
       </div>
       <hr className='border-1 border-black my-16'/>
       <div className='w-[90%] h-full m-auto '>
       <MoiEnResumer/>
       <Skills/>
       </div>
       <hr className='border-1 border-black my-16'/>
       <div className='w-[90%] h-full m-auto '>
       <ContacterMoi/>
       </div>
       <hr className='border-1 border-black my-16'/>
       <div className='w-[90%] h-full m-auto '>
       <Footer/>
       </div>
    </div>
  )
}

export default App