import React from "react";
import Image from "next/image";

const Product = () => {
  return (
    <section className="bg-yellow-400">
    <div className="container mx-auto py-32 ">
      <p className="text-base lg:text-xl font-medium text-grey-300 text-center">OUR PRODUCT</p>
      <p className="text-3xl lg:text-5xl font-semibold text-center mt-3 pb-20">Product</p>

      <p className="text-3xl lg:text-5xl font-semibold text-between mt-3 pt-20 px-10">Access Clien</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-16 py-10 pl-8">
        <div className="flex flex-col gap-5 items-center pt-7 pb-6 max-w-sm rounded-xl overflow-hidden shadow-glass bg-[#f9fafc]">
          <div className="px-6 py-1 ">
            <div className="font-bold text-xl">Jurnal Guru</div>
          </div>
          <Image src="/assets/clien/v03.jpg" alt="" />
        </div>

        <div className="flex flex-col gap-5 items-center pt-7 pb-6 max-w-sm rounded-xl overflow-hidden shadow-glass bg-[#f9fafc]">
        <div className="px-6 py-1 ">
            <div className="font-bold text-xl ">Dasboard</div>
          </div>
          <Image src="/assets/clien/v11.jpg" alt="" />
        </div>

        <div className="flex flex-col gap-5 items-center pt-7 pb-6 max-w-sm rounded-xl overflow-hidden shadow-glass bg-[#f9fafc]">
          <div className="px-6 py-1">
            <div className="font-bold text-xl ">Jurnal Al-Quran</div>
          </div>
          <Image src="/assets/clien/v05.jpg" alt="" />
        </div>

      </div>

      <p className="text-3xl lg:text-5xl font-semibold text-between mt-3 pt-20 px-10">Access Admin</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-16 py-10 pl-8">
        <div className="flex flex-col gap-5 items-center pt-7 pb-6 max-w-sm rounded-xl overflow-hidden shadow-glass bg-[#f9fafc]">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Profile Setting</div>
          </div>
          <Image src="/assets/admin/p1.jpg" alt="" />
        </div>

        <div className="flex flex-col gap-5 items-center pt-7 pb-6 max-w-sm rounded-xl overflow-hidden shadow-glass bg-[#f9fafc]">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Dashboard Admin</div>
          </div>
          <Image src="/assets/admin/p2.jpg" alt="" />
        </div>

        <div className="flex flex-col gap-5 items-center pt-7 pb-6 max-w-sm rounded-xl overflow-hidden shadow-glass bg-[#f9fafc]">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Jadwal</div>
          </div>
          <Image src="/assets/admin/p4.jpg" alt="" />
        </div>

      </div>
    </div>
    </section>
  );
};

export default Product;
