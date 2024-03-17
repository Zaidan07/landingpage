import React from "react";

const Product = () => {
  return (
    <div className="container mx-auto py-32">
      <p className="text-base lg:text-xl font-medium text-grey-300 text-center">OUR PRODUCT</p>
      <p className="text-3xl lg:text-5xl font-semibold text-center mt-3 pb-20">Product</p>

      <p className="text-3xl lg:text-5xl font-semibold text-between mt-3 ">Access Clien</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-16 py-10 pl-8">
        <div className="flex flex-col gap-5 items-center pt-7 pb-6 max-w-sm rounded-xl overflow-hidden shadow-glass bg-[#f9fafc]">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Profile</div>
          </div>
          <img src="/assets/clien/login1.jpg" alt="" />
          
        </div>

        <div className="flex flex-col gap-5 items-center pt-7 pb-6 max-w-sm rounded-xl overflow-hidden shadow-glass bg-[#f9fafc]">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Dashboard</div>
          </div>
          <img src="/assets/clien/v1.jpg" alt="" />
        </div>

        <div className="flex flex-col gap-5 items-center pt-7 pb-6 max-w-sm rounded-xl overflow-hidden shadow-xl bg-[#f9fafc]">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Rekap Absensi</div>
          </div>
          <img src="/assets/clien/v2.jpg" alt="" />
        </div>

       
      </div>
      <p className="text-3xl lg:text-5xl font-semibold text-between mt-3 pt-20">Access Admin</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-16 py-10 pl-8">
        <div className="flex flex-col gap-5 items-center pt-7 pb-6 max-w-sm rounded-xl overflow-hidden shadow-glass bg-[#f9fafc]">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Profile Setting</div>
          </div>
          <img src="/assets/admin/p1.jpg" alt="" />
        </div>

        <div className="flex flex-col gap-5 items-center pt-7 pb-6 max-w-sm rounded-xl overflow-hidden shadow-glass bg-[#f9fafc]">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Dashboard Admin</div>
          </div>
          <img src="/assets/admin/p2.jpg" alt="" />
        </div>

        <div className="flex flex-col gap-5 items-center pt-7 pb-6 max-w-sm rounded-xl overflow-hidden shadow-glass bg-[#f9fafc]">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Jadwal</div>
          </div>
          <img src="/assets/admin/p4.jpg" alt="" />
        </div>

      </div>
    </div>
  );
};

export default Product;