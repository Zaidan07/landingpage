import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="pt-10  py-52 bg-gradient-to-r from-green-500 to-yellow-400">
      <div id="home">
        <div className="container mx-auto ">
          <Navbar />
          <div className="  px-6 lg:px-16 py-10 rounded-3xl m-5 backdrop-blur-sm bg-white/75 ">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
              <div className="flex flex-col gap-5 lg:gap-10">
                <p className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  Simaku <br className="lg:flex hidden" /> Website jurnal yang keren <br className="lg:flex hidden" /> dan simple.
                </p>

                <p className="text-sm sm:text-base lg:text-lg text-gray-500">
                  Lorem, ipsum dolor sit <br /> amet consectetur adipisicing elit.
                </p>
              </div>
              {/* <img className="max-w-sm lg:max-w-lg rounded-lg shadow-glass-card" src="/assets/admin/p2.jpg" alt="" /> */}
              <div className="flex flex-col items-center pt-0 pb-0 max-w-md rounded-xl overflow-hidden ">
                <div className="">
                <img className="" src="/assets/heros.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
