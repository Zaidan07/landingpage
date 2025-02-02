import React from 'react'

const Member = () => {
  return (
    <div className="container mx-auto py-32">
        <p className="text-xl font-medium text-grey-300 text-center">
            Meet Our Member
            </p>
        <p className="text-5xl font-semibold text-center mt-3">
            Anggota Kami 
            </p>
       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20 pl-8 pr-8"> 
          
            <div className="flex flex-col gap-5 " >
                <img src="/assets/t1.svg" alt="" />
                <p className="text-2xl font-semibold ">  Alfarez </p>
                
                <p className="text-gray-500 "> Lorem ipsum </p>
            </div>
          
            <div className="flex flex-col gap-5 " >
                <img src="/assets/t2.svg" alt="" />
                <p className="text-2xl font-semibold ">  Sri Wati </p>
               
                <p className="text-gray-500 "> Lorem ipsum </p>
            </div>
          
            <div className="flex flex-col gap-5 " >
                <img src="/assets/t3.svg" alt="" />
                <p className="text-2xl font-semibold ">  Shaim </p>
                
                <p className="text-gray-500 "> Lorem ipsum </p>
            </div>

            

            
        </div>
       
    
    </div>
  )
}

export default Member