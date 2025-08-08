import React, { useEffect, useState } from 'react';
import PopUp01 from '../assets/images/popup01.png';
import PopUp02 from '../assets/images/popup02.png';
import popupLogo01 from "../assets/images/popupLogo01.svg"
import popupLogo02 from "../assets/images/popupLogo02.svg"
const AtulyaPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50  flex items-center justify-center bg-[#5c51518f] bg-opacity-60">
      <div className="p-2 rounded-3xl  bg-[linear-gradient(90deg,#FFFFFF_64.73%,#EFC009_10%)]">
        <div className="flex w-[90vw] h-[70vh] max-w-5xl overflow-hidden rounded-2xl bg-white shadow-lg">
          {/* Left Side */}
          <div
            className="w-1/2 relative text-white flex flex-col justify-center items-center px-6 py-12"
            style={{
              backgroundImage: `url(${PopUp02})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="text-sm font-light font-[popines]  tracking-wide uppercase">Affordable Elegance</h2>
            <h1 className="text-4xl font-bold mb-2">
                <img src={popupLogo01}  alt='Atulya' />
            </h1>
            <p className="text-lg mb-4">Starts from</p>
            <p className="text-3xl font-[popines] mb-4">₹1000</p>
            <p className="text-center text-sm max-w-xs mb-6">
              Beautifully handcrafted pieces designed for everyday charm, thoughtful gifts, and accessible artistry.
            </p>
            <button className="px-5 py-2 bg-white text-black rounded-full font-[popines] hover:bg-gray-200">
              Shop Affordability
            </button>
          </div>

          {/* Right Side */}
          <div
            className="w-1/2 relative text-white flex flex-col justify-center items-center px-6 py-12"
            style={{
              backgroundImage: `url(${PopUp01})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="text-sm tracking-wide uppercase">Luxe Heritage</h2>
            
              <img src=  {popupLogo02} alt='Atulya Karigari'  />
           
            <p className="text-lg mb-4">Starts from</p>
            <p className="text-3xl font-[popines] mb-4">₹7000</p>
            <p className="text-center text-sm max-w-xs mb-6">
              Elevated designs and heirloom-worthy pieces — crafted for those who appreciate timeless luxury.
            </p>
            <button className="px-5 py-2 bg-yellow-400 text-black rounded-full font-medium hover:bg-yellow-300">
              Shop Luxury
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtulyaPopup;
