import React from "react";
import { ArrowUpRight } from "lucide-react";
import { trends } from "../pages/StaticData";
import design from "../assets/images/Untitled design 1.jpg";

const ShopByTrend = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-4xl font-[Kalnia]  text-[#052A3D]">
        Shop By Trend
      </h2>
      <div className="flex justify-center mb-8">
        <img
          src={design}
          alt="Shop By Occasion"
          className="max-w-full h-auto"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-around mt-10 lg:px-20 px-12 gap-y-6">
        {trends.map((trend, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md w-full max-w-xs"
          >
            <img
              src={trend.image}
              alt={trend.title}
              className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-0 right-0 bg-[#6A1B1A] text-white p-4 rounded-bl-lg ">
              <ArrowUpRight size={24} />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
              <h3 className="text-white text-lg font-[Kalnia]">{trend.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByTrend;
