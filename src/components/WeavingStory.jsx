import React from "react";
import Picture from "../assets/images/female.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
const WeavingStory = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background image */}
      <img
        src={Picture}
        alt="Weaving"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80" />

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
        {/* Top Right link */}
        <div className="flex justify-end ">
          <a href="#" className="text-sm border-[#6D001D] flex justify-center items-center gap-x-3  pt-3 pr-3 border-b  font-['Poppins']  hover:underline">
            Know the story<FaArrowRightLong />
          </a>
        </div>

        {/* Bottom quote */}
        <div className="max-w-lg">
          <p className="text-sm italic pb-6 pl-3 font-['Poppins']">
            "To create a saree is to compose poetry with thread — every warp
            and weft a stanza of tradition."
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeavingStory;
