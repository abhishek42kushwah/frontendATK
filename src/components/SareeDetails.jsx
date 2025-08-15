import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../pages/Nabvar";
import Footer from "./Footer";
import { FaStar, FaRegStar, FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../services/AuthContext";
import { toast } from "react-toastify";
const SareeDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const { product } = location.state;
  const rating = Math.floor(Math.random() * 6);
 const { addToCart } = useAuth();
 const toastHandler=()=>{
   toast.success("Add Successfully", { position: "top-right" });
 }
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2">
          
          <div className="w-full h-full py-6 flex justify-center items-center">
            <img
              src={product?.image}
              alt={product?.name}
              className="w-[400px] h-[500px] object-cover rounded-2xl shadow-md"
            />
          </div>

          
          <div className="p-6 flex flex-col">
            <h2 className="text-2xl font-[Kalnia]">{product?.name}</h2>

            
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) =>
                i < rating ? (
                  <FaStar key={i} className="text-yellow-300 text-lg" />
                ) : (
                  <FaRegStar key={i} className="text-gray-400 text-lg" />
                )
              )}
            </div>

            
            <p className="mt-2 text-3xl font-[Kalnia]">{product?.price} ₹</p>

            
            <p className="mt-3 font-[Poppins] text-gray-600">
              {product?.description}
            </p>

            
            <div className="mt-4">
              <p className="font-medium">Type</p>
              <p className="mt-1 text-black">{product?.type || "Not specified"}</p>
            </div>

            
            <div className="mt-4">
              <p className="font-medium">Pattern</p>
              <p className="mt-1 text-black">
                {product?.pattern || "Not specified"}
              </p>
            </div>


            <div className="mt-4">
              <p className="font-medium">Origin</p>
              <p className="mt-1 text-black">
                {product?.origin || "Not specified"}
              </p>
            </div>

            
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center border rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1"
                >
                  +
                </button>
              </div>
              <button  onClick={() => {addToCart(product, quantity),toastHandler()}} className="bg-[#6A1B1A] text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-[#4b0907]">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SareeDetails;
