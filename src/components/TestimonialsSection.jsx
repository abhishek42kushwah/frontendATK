import { ArrowUpRight, Star } from "lucide-react";
import { testimonials } from "../pages/StaticData";
import testimonialsImage from "../assets/images/Testimonials.png";
import design from "../assets/images/Untitled design 1.jpg";
export default function TestimonialsSection() {
  return (
    <section className="py-10 lg:px-20 px-6 bg-white">
      <div className="justify-center flex">
        <h2 className="text-center  text-4xl md:text-3xl font-[Kalnia]  text-[#052A3D]   mb-8 relative inline-block">
          Testimonials
          <div className="flex justify-center mb-8">
            <img
              src={design}
              alt="Shop By Occasion"
              className="max-w-full h-auto"
            />
          </div>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 ">
          <h3 className="lg:text-3xl md:text-3xl w-1/2  absolute    text-[#052A3D]  font-[Kalnia]">
            Hear from our satisfied <br /> Clients have to say. <span>🖤</span>
          </h3>
          <img
            src={testimonialsImage}
            alt="Clients"
            className="rounded-lg w-full   object-cover max-h-[600px]"
          />
        </div>

        <div className="md:w-1/2 space-y-14 text-white ">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-[#6D001D]  text-[poppins] p-6 rounded-lg shadow-md"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFD700" stroke="#FFD700" />
                ))}
              </div>

              <p className="text-sm italic mb-4">"{item.quote}"</p>

              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                <p className="text-sm font-semibold">
                  {item.name}, {item.location}
                </p>
              </div>

              <div className="absolute bottom-0 right-0 bg-[#F09D8D] border-amber-50   text-[#6A1B1A] p-1 rounded-tl-lg rounded-br-lg border-l-6 border-t-6  ">
                <ArrowUpRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
