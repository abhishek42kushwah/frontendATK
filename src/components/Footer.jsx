import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaPhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import FooterLogo from "../assets/images/ATK_Logo.jpg";
import FooterImages from "../assets/images/footer 1.jpg"
const Footer = () => {
  return (
    <footer className="bg-white  border-[#7F0A1833] border-t-2  text-[#052A3D] lg:px-20 px-6 ">
      <div className=" mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div className="col-span-1 lg:col-span-2 border-[#7F0A1833] lg:border-r-2 py-12 ">
          <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-12 items-center sm:items-start">
            <img
              src={FooterLogo}
              alt="ATK_LOGO"
              className="  object-contain"
            />
            <p className="text-[#700014] pt-2 font-[poppins] leading-relaxed text-center sm:text-left max-w-xs">
              Where every thread tells a story of grace. Designed to be worn,
              cherished, and passed on.
            </p>
          </div>

          <div className="flex mt-16 border-[#7F0A1833] border-t-2   justify-between">
            {/* Quick Links */}
            <div className="col-span-1 mt-6 font-[poppins]">
              <h4 className="font-bold text-sm text-gray-800 mb-4 tracking-wide">
                QUICK LINKS
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-red-800 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-800 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-800 transition-colors">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-800 transition-colors">
                    Shipping Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Info */}
            <div className="col-span-1 mt-6  font-[poppins]  ">
              <h4 className="font-bold text-sm text-gray-800 mb-4 tracking-wide">
                INFO
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-red-800 transition-colors">
                    Handloom
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-800 transition-colors">
                    New Collection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-800 transition-colors">
                    Corporate Gifting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-800 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-800 transition-colors">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 mt-6  font-[poppins]  ">
              <h4 className="font-bold text-sm text-gray-800 mb-4 tracking-wide"></h4>
              <ul className="space-y-3 text-sm text-gray-600"></ul>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div className="col-span-1 font-[poppins] border-[#7F0A1833] md:border-t-2   py-12  lg:col-span-2">
          <h3 className="text-5xl font-[Kalnia] text-[#700014] mb-6 tracking-wide">
            CONTACT US
          </h3>
          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <MdLocationPin
                className="text-[#052A3D]  mt-0.5 flex-shrink-0"
                size={20}
              />
              <p className="leading-relaxed">
                Plot No 1215/1511, Khandagiri Bari, Ghatikia, Khandha,
                Bhubaneswar-751030 Odisha (India)
              </p>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="text-[#052A3D] flex-shrink-0" size={20} />
              <p>atulyakarigariindia@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-[#052A3D] flex-shrink-0" size={16} />
              <p>+91 9078670708</p>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <FaYoutube
                className="text-[#052A3D] hover:text-[#58849b] cursor-pointer transition-colors"
                size={20}
              />
              <AiFillInstagram
                className="text-[#052A3D] hover:text-[#58849b] cursor-pointer transition-colors"
                size={20}
              />
              <FaFacebook
                className="text-[#052A3D] hover:text-[#58849b] cursor-pointer transition-colors"
                size={20}
              />
              <BsTwitterX
                className="text-[#052A3D] hover:text-[#58849b] cursor-pointer transition-colors"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={FooterImages} alt="work"  className=" object-contain"/>
      </div>
    </footer>
  );
};

export default Footer;
