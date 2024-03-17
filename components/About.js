import React from "react";

const About = () => {
  return (
    
    <section>
      <div >
        <div className="container mx-auto py-32">
          <p className="text-base lg:text-xl font-medium text-grey-300 text-center">WHY CHOSE US</p>
          <p className="text-3xl lg:text-5xl font-semibold text-center mt-3">Kelebihan Kami</p>
          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20 pl-8">   
            <div className="flex flex-col gap-5 items-center pt-7 pb-6 max-w-sm rounded-xl overflow-hidden shadow-glass backdrop-blur-sm bg-white/30 " >
              <image src="/assets/v4.svg" alt="v4" />
              <p className="text-2xl font-semibold ">Mudah Digunakan</p>
              <p className="text-gray-500 text-center">
                Lorem, ipsum dolor sit amet consectetur <br />
                adipisicing elit. Explicabo corporis earum aliquid
                <br /> quidem animi recusandae.
              </p>
            </div>

            <div className="flex flex-col gap-5 items-center pt-7 pb-6 max-w-sm rounded-xl overflow-hidden  shadow-glass backdrop-blur-sm bg-white/30 ">
              <image src="/assets/v55.svg" alt="v5" />
              <p className="text-2xl font-semibold ">Harga Terjangkau</p>
              <p className="text-gray-500 text-center">
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Perspiciatis dicta atque odio nemo <br />
                doloribus voluptate tempora laborum nulla?
              </p>
            </div>

            <div className="flex flex-col gap-5 items-center pt-7 pb-6 max-w-sm rounded-xl overflow-hidden  shadow-glass backdrop-blur-sm bg-white/30 ">
              <image src="/assets/v06.svg" alt="v6" />
              <p className="text-2xl font-semibold ">Aplikasi Ringan</p>
              <p className="text-gray-500 text-center">
                Lorem ipsum dolor sit amet consectetur
                <br /> adipisicing elit. Reprehenderit fuga iusto
                <br /> numquam cumque fugiat beatae tempore alias
              </p>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default About;
