import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import design from "../assets/images/Untitled design 1.jpg";
import { sarees } from "../pages/StaticData";
import { Eye, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductSlider = () => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-12 px-5">
      <h2 className="text-3xl font-[Kalnia] text-center text-[#053b46]">
        Our Products
      </h2>

      <div className="flex justify-center mb-6">
        <img
          src={design}
          alt="Shop By Occasion"
          className="max-w-full h-auto"
        />
      </div>

      <Slider {...settings}>
        {sarees.map((product) => (
          <div key={product.id} className="px-3">
            {/* Product Image with Name Overlay */}
            <div className="relative group rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              {/* Price Badge */}
              <div className="absolute top-3 left-3 bg-[#6A1B1A] text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                ₹ {product.price}
              </div>

              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[450px] object-cover rounded-xl"
              />

              {/* Gradient + Name */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                <h3 className="text-white text-lg font-[Kalnia]">
                  {product?.name}
                </h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button
                  className="flex items-center gap-2 bg-white text-[#6A1B1A] px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition"
                  onClick={() =>
                    navigate("/saree-details", { state: { product } })
                  }
                >
                  <Eye size={18} /> Quick View
                </button>

                <button
                  onClick={() =>
                    navigate("/saree-details", { state: { product } })
                  }
                  className="flex items-center gap-2 bg-[#6A1B1A] text-white px-5 py-2 rounded-full font-medium hover:bg-[#4d0908] transition"
                >
                  <ShoppingCart size={18} /> Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
