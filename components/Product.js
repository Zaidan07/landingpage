import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Product = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "8px" // Adjust as needed
  };

  return (
    <section className="bg-yellow-400 ">
      <div className="container mx-auto py-32">
        <p className="text-base lg:text-xl font-medium text-grey-300 text-center">GET</p>
        <p className="text-3xl lg:text-5xl font-semibold text-center mt-3 pb-20">Access</p>

        <p className="text-3xl lg:text-5xl font-semibold text-center mt-3 pb-20">Access Clien & Admin</p>
        <Slider {...settings} className="py-10 px-2">
          <div className="flex flex-col items-center pt-7 pb-6 max-w-sm mx-auto rounded-xl overflow-hidden bg-[#f9fafc]">
            <div className="px-6 py-1 ">
              <div className="font-bold text-xl">Jurnal Guru</div>
            </div>
            <img src="/assets/clien/v03.jpg" alt="" className="w-full" />
          </div>

          <div className="flex flex-col items-center pt-7 pb-6 max-w-sm mx-auto rounded-xl overflow-hidden bg-[#f9fafc]">
            <div className="px-6 py-1 ">
              <div className="font-bold text-xl ">Dashboard</div>
            </div>
            <img src="/assets/clien/v11.jpg" alt="" className="w-full" />
          </div>

          <div className="flex flex-col items-center pt-7 pb-6 max-w-sm mx-auto rounded-xl overflow-hidden bg-[#f9fafc]">
            <div className="px-6 py-1">
              <div className="font-bold text-xl ">Jurnal Al-Quran</div>
            </div>
            <img src="/assets/clien/v05.jpg" alt="" className="w-full" />
          </div>

          <div className="flex flex-col items-center pt-7 pb-6 max-w-sm mx-auto rounded-xl overflow-hidden bg-[#f9fafc]">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Profile Setting</div>
            </div>
            <img src="/assets/admin/p1.jpg" alt="" className="w-full" />
          </div>

          <div className="flex flex-col items-center pt-7 pb-6 max-w-sm mx-auto rounded-xl overflow-hidden bg-[#f9fafc]">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Dashboard Admin</div>
            </div>
            <img src="/assets/admin/p2.jpg" alt="" className="w-full" />
          </div>

          <div className="flex flex-col items-center pt-7 pb-6 max-w-sm mx-auto rounded-xl overflow-hidden bg-[#f9fafc]">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Jadwal</div>
            </div>
            <img src="/assets/admin/p4.jpg" alt="" className="w-full" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Product;
