import React from "react";
import { images } from "../pages/StaticData";
const Home = () => {
  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Saree ${i + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      <div className="bg-[#F09D8D] text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-24 py-6 text-center md:text-left font-[Kalnia]">
        <h2 className="text-3xl md:text-2xl lg:max-w-[300px] font-[Kalnia] tracking-widest mb-4 md:mb-0 uppercase">
          Shop Affordable <br className="md:hidden" /> Range
        </h2>

        <div className="flex space-x-10">
          <div className="text-left">
            <p className="uppercase text-[15px] tracking-widest">Under</p>
            <p className="text-[50px]  font-light">₹7000</p>
          </div>

          <div className="text-left border-l border-white pl-6">
            <p className="uppercase text-[15px] tracking-widest">Upto</p>
            <p className="text-[50px]  font-light">
              20% <span className="text-sm align-top font-thin">OFF</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
