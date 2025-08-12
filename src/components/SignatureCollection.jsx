import React from "react";
import { Signature } from "../pages/StaticData";
import design from "../assets/images/Untitled design 1.jpg"; 

const SignatureCollection = () => {
  return (
    <section className="py-10 px-6  text-center">
      <h2 className="text-3xl  font-[Kalnia]  text-[#052A3D] ">
       Signature Collection
      </h2>

      <div className="flex justify-center mb-8">
        <img
          src={design}
          alt="Shop By Occasion"
          className="max-w-full h-auto"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-20 mb-8">
        {Signature.map((item, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden w-[280px] sm:w-[320px] md:w-[380px] shadow-md group cursor-pointer"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left- right-[-1] pl-6    py-4 text-white font-[Kalnia] text-xl ">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <button className="bg-[#052A3D] text-white text-xl px-8 py-2 rounded-full hover:bg-[#001a24] transition">
        Explore
      </button>
    </section>
  );
};

export default SignatureCollection;
