import { drapedImages} from "../pages/StaticData"
import design from "../assets/images/Untitled design 1.jpg";
import ImagesInstageam from "../assets/images/instagram.svg";

const DrapedByAtulya = () => {
 
  return (
    <section className="py-12 w-full text-center bg-white">
      {/* Title */}
      <h2 className="text-3xl font-[Kalnia] text-[#052A3D]">
        Draped by Atulya Karigari
      </h2>

      {/* Divider */}
      <div className="flex justify-center mt-2 mb-8">
        <img src={design} alt="Design Divider" className="max-w-full h-auto" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  px-6 mx-auto auto-rows-[280px]">
        {drapedImages.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden shadow-md ${item.className}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
            {item.isFeatured && (
              <div className="absolute bottom-0 left-0 w-full bg-white py-2 flex flex-col items-center shadow-md">
                <img
                  src={ImagesInstageam}
                  alt="instagram"
                  className="w-8 h-8 mb-1"
                />
                <span className="text-pink-500 italic hover:underline">
                  {item.instagram}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DrapedByAtulya;
