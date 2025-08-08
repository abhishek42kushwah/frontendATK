import React from "react";
import { fabricData } from "../pages/StaticData";
import design from "../assets/images/Untitled design 1.jpg";
const FabricSection = () => {
  return (
    <div className="py-12 px-6 text-center">
      <h2 className="text-3xl font-[Kalnia]  text-[#053b46] ">
        Shop By Fabric
      </h2>
      <div className="flex justify-center items-center ">
        <div className="flex justify-center mb-8">
          <img
            src={design}
            alt="Shop By Occasion"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      <div className="flex overflow-x-auto gap-6 lg:gap-14 justify-center pb-4 ">
        {fabricData.map((fabric, index) => (
          <div
            key={index}
            className="min-w-[130px] sm:min-w-[160px] bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm"
          >
            <img
              src={fabric.image}
              alt={fabric.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-2 text-sm font-[poppins]">{fabric.name}</div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button className="bg-[#052A3D] text-xl text-white px-8 py-2 rounded-full hover:bg-[#021d25] transition">
          Explore
        </button>
      </div>
    </div>
  );
};

export default FabricSection;
