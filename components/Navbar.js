import React from "react";

const Navbar = () => {
  return (
    
    <div className="">
      
      {/* <nav>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <img className='w-40' src="/assets/Simaku.png" alt="logo" />
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
                <a className='cursor-pointer pb-1.5 transition-all hover:font-bold' href="#home">Home</a>
                <a className='cursor-pointer pb-1.5 transition-all hover:font-bold' href="#about">About</a>
                <a className='cursor-pointer pb-1.5 transition-all hover:font-bold' href="#about">Product</a>
                <a className='cursor-pointer pb-1.5 transition-all hover:font-bold' href="">Meet Our Member</a>
                <a className='cursor-pointer pb-1.5 transition-all hover:font-bold' href="">Contact</a>
            </div>  
        </div>
      </nav> */}

      <nav className="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 ">
        <div className="flex-1 flex justify-between items-center">
          <a href="/" className="flex text-lg font-semibold">
            <img src="/assets/Simaku.png" className="p-2 w-40" alt="Simaku logo" />
            
          </a>
        </div>
        <label htmlFor="menu-toggle" className="block cursor-pointer lg:hidden">
          <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div className="hidden lg:flex lg:items-center lg:w-auto w-full " id="menu">
          <nav>
            <ul className="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
              <li className="py-2 lg:py-0 ">
                <a className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" href="#">
                  Blog
                </a>
              </li>
              <li className="py-2 lg:py-0 ">
                <a className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" href="#">
                  Projects
                </a>
              </li>
              <li className="py-2 lg:py-0 ">
                <a className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" href="#">
                  Apps
                </a>
              </li>
              <li className="py-2 lg:py-0 ">
                <a className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" href="#">
                  Designs
                </a>
              </li>
              <li className="py-2 lg:py-0 ">
                <a className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" href="#">
                  My Journey
                </a>
              </li>
              <li className="py-2 lg:py-0 ">
                <a className="text-red-600 hover:pb-4 hover:border-b-4 hover:border-yellow-400" href="#">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
