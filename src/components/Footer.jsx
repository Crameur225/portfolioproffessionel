import React from 'react'
import photo from '../assets/photo.jpg'
const Footer = () => {
    const date = new Date();
    const dateYear = date.getFullYear()
  return (
    <div className='py-16 text-colorCustoms flex flex-col items-center'>
        <div className="flex flex-col items-center justify-center">
                  <img
                    src={photo} // Remplacez par le chemin de votre photo
                    alt="Profile"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <span className="ml-4 text-lg font-bold">GAEL AGBE</span>
                </div>
          <div>
            <h2>©{dateYear}. All rights reserved by developpeur Agbe.</h2>
          </div>
    </div>
  )
}

export default Footer