import {drapedImages} from "../pages/StaticData"
import design from "../assets/images/Untitled design 1.jpg";
import ImagesInstageam from "../assets/images/instagram.svg"
const DrapedByAtulya = () => {
  return (
    <section className="py-12  w-full text-center bg-white">
      <h2 className="text-3xl font-[Kalnia] text-#052A3D">Draped by Atulya Karigari</h2>
       <div className="flex justify-center items-center ">
               <div className="flex justify-center mb-8">
                 <img
                   src={design}
                   alt="Shop By Occasion"
                   className="max-w-full h-auto"
                 />
               </div>
             </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6  lg:px-24 px-6 mx-auto">
        {drapedImages.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden shadow-md ${
              item.isFeatured ? "md:row-span-2 md:col-span-1" : ""
            }`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
            {item.isFeatured && (
              <div className="absolute bottom-0  left-0 flex flex-col items-center w-full bg-white px-3 py-1 rounded-t h-20  shadow-md gap-2">
                <img src={ImagesInstageam} alt='instagram' className='bottom-10 absolute w-20 h-20' />
                <span className="text-md text-pink-500 font-['Poppins'] pt-10 italic hover:underline">
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
