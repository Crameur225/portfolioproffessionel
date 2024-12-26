import React, { useEffect, useState } from 'react'
import { FaCircleArrowUp } from 'react-icons/fa6'

const BackToTop = () => {
    const [scrollTop, setScrollTop] = useState(false)

    const scrollLy = () =>{
        setScrollTop(window.scrollY > 200)
    }
    
    useEffect(()=>{
      window.addEventListener('scroll', scrollLy);

     return () =>{ window.removeEventListener('scroll', scrollLy)}
    }, [])

    const scrolTo = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
  <div>
     {scrollTop && (
    <button onClick={scrolTo} className='fixed bottom-[40px] right-[20px] py-6 px-6 rounded text-3xl cursor-pointer hover:opacity-1 text-white'>
      <FaCircleArrowUp/>
    </button>
   )}
  </div>
  )
}

export default BackToTop