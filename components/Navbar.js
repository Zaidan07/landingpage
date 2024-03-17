import React from 'react'
import Image from 'next/image'

const Navbar
 = () => {
  return (
    <div className=''>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <image className='w-40' src="/assets/Simaku.png" alt="logo" />
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
                <a className='cursor-pointer pb-1.5 transition-all hover:font-bold' href="#home">Home</a>
                <a className='cursor-pointer pb-1.5 transition-all hover:font-bold' href="#about">About</a>
                <a className='cursor-pointer pb-1.5 transition-all hover:font-bold' href="#about">Product</a>
                <a className='cursor-pointer pb-1.5 transition-all hover:font-bold' href="">Meet Our Member</a>
                <a className='cursor-pointer pb-1.5 transition-all hover:font-bold' href="">Contact</a>
            </div>  
        </div>
        
    </div>
  )
}

export default Navbar
