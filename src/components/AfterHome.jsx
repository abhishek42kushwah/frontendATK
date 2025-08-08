import React from "react";
import { AfterImages } from "../pages/StaticData";
import { GoStarFill } from "react-icons/go";
const AfterHome = () => {
  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {AfterImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Saree ${i + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

       <div className="w-full overflow-hidden bg-[#6D001D] py-2">
         <div className="animate-marquee whitespace-nowrap font-['Dancing Script'] text-white text-sm md:text-base font-[Kalnia] tracking-widest">
      {Array(10).fill(
        <>
          <span className="mx-4">SHOP KARIGARI</span>
          <GoStarFill className="inline text-yellow-400" />
          <span className="mx-4">SHOP LUXURY</span>
          <GoStarFill className="inline text-yellow-400" />
        </>
      )}
    </div>
  </div>
    </div>
  );
};

export default AfterHome;
