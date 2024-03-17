import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className="bg-green-500">
    <div className="container mx-auto pt-10">
      <div className="bg-[#f8fafe] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-10 py-10 rounded-xl items-center justify-center   ">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <image className="w-28" src="/assets/Simaku.png" alt="footer logo" />
          <p className="text-center lg:text-start">20 Osgood Rd. Milford, NH 03055, USA +1283871239190213021</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
            <p className="text-xl font-bold">Contact</p>
            <FaPhoneAlt /> <p className="text-base">085*-****-****</p>
            <MdEmail /> <p className="text-base">......@gmail.com</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
            <p className="text-xl font-bold">Product</p>
            <p className="text-base">Courses</p>
            <p className="text-base">Blog</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
            <p className="text-xl font-medium"></p>
            <p className="text-base">Terms & Conditions</p>
            <p className="text-base">Privacy policy</p>
        </div>
        <div className="flex  items-center gap-5">
            <BsFacebook className="text-3xl text-gray-500" />
            <BsInstagram className="text-3xl text-gray-500" />
            <BsYoutube className="text-3xl text-gray-500" />

        </div>

      </div>
      <div className="flex flex-col items-center lg:items-center justify-center py-5">
        <span className="block text-sm text-grey-300 sm:text-center dark:text-gray-800">© 2024 <a href="" className="hover:underline">Simaku.</a>id SMK Muhamadiyah 1 Sukoharjo.</span>
        </div>
    </div>
    </section>
  );
};

export default Footer;
