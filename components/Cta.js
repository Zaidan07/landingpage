import React from 'react'

const Cta = () => {
  return (
    <div className='container mx-auto flex flex-col gap-5 items-center justify-center py-20'>
        <p className='text-xl md:text-2xl lg:text-4xl font-medium text-center'> Any Question? </p>
        <p className='text-base sm:text-lg lg:text-2xl font-medium text-center'> Lets Contact Our </p>

        <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 items-center mt-5">
          <input type="text" className='px-5 py-5 rounded-full  w-72 lg:w-96 outline-none bg-[#f8fafe]' placeholder='Enter a email' />
          <button className='btn btn-sm lg:btn-lg  bg-[#524fd5] btn-lg rounded-full border-none'>SEND</button>
        </div>
        
    </div>
  )
}

export default Cta