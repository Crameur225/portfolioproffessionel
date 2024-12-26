import React from 'react'
import photo from '../assets/photo.jpg'
import { FaBookReader } from 'react-icons/fa';
const Footer = () => {
    const date = new Date();
    const dateYear = date.getFullYear()
  return (
    <div className='py-16 text-colorCustoms flex flex-col items-center'>
        <div className="flex items-center justify-center text-red-600 py-4 text-7xl">         
        <FaBookReader /></div>
          <div>
            <h2>©{dateYear}. All rights reserved by developpeur Agbe.</h2>
          </div>
    </div>
  )
}

export default Footer