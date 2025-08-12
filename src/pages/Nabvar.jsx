import React, { useState, useRef, useEffect } from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { Heart, ShoppingCart } from "lucide-react";
import { useAuth } from "../services/AuthContext";
import { useNavigate } from "react-router-dom";
import HomeLogo from "../assets/brandlogo.png";
const Navbar = () => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setDropdownOpen(false);
  };

  const handleLogin = () => {
    navigate("/login");
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full">
      <div className="bg-[#700014] text-white text-sm font-[dancing] text-center py-2">
        Step into Style and Discover Your Signature Look
      </div>

      <div className="flex items-center justify-between py-4 px-4 md:px-12 relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={HomeLogo} className="object-contain" width={200} />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {mobileMenuOpen ? (
              <FaTimes className="text-[#700014] text-xl" />
            ) : (
              <FaBars className="text-[#700014] text-xl" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-[#700014]">HANDLOOM</a>
          <a href="#" className="hover:text-[#700014]">SHOP BY OCCASION</a>
          <a href="#" className="hover:text-[#700014]">CRAFT STORIES</a>
          <a href="#" className="hover:text-[#700014]">ABOUT US</a>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Banarasi Sarees"
              className="bg-[#FDD3CF] rounded-full pl-4 pr-10 py-2 w-[210px] md:w-[250px] text-sm border-[#700014] border-1 placeholder:text-white focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-2.5 text-[#700014]" />
          </div>
          <Heart className="cursor-pointer" />
          <ShoppingCart className="cursor-pointer" />
          <div className="relative" ref={dropdownRef}>
            {user ? (
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 focus:outline-none"
              >
                <img
                  src={user?.profileImage || "https://i.pravatar.cc/40"}
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <FaChevronDown className="text-gray-600 text-sm" />
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-[#700014] text-white px-4 py-1 rounded-full text-sm hover:bg-[#900018]"
              >
                Login
              </button>
            )}

            {dropdownOpen && user && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                <div className="flex items-center space-x-3 px-4 py-3">
                  <img
                    src={user?.profileImage || "https://i.pravatar.cc/40"}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="text-sm font-medium text-gray-800">
                    {user?.name || "User"}
                  </div>
                </div>
                <div className="border-t px-4 py-2">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-600 hover:text-red-800 text-sm"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50">
            <div className="flex flex-col items-start px-6 py-4 space-y-4">
              <a href="#" className="text-[#700014] font-medium">HANDLOOM</a>
              <a href="#" className="text-[#700014] font-medium">SHOP BY OCCASION</a>
              <a href="#" className="text-[#700014] font-medium">CRAFT STORIES</a>
              <a href="#" className="text-[#700014] font-medium">ABOUT US</a>

              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for Banarasi Sarees"
                  className="bg-[#FDD3CF] rounded-full pl-4 pr-10 py-2 w-full placeholder:text-[#700014] focus:outline-none"
                />
                <FaSearch className="absolute right-4 top-2.5 text-[#700014]" />
              </div>

              <div className="flex space-x-4 pt-2 items-center">
                <FaHeart className="text-[#700014] cursor-pointer" />
                <FaShoppingCart className="text-[#700014] cursor-pointer" />
                {user ? (
                  <>
                    <img
                      src={user?.profileImage || "https://i.pravatar.cc/40"}
                      alt="User"
                      className="w-8 h-8 rounded-full object-cover"
                      onClick={toggleDropdown}
                    />
                    <button
                      onClick={handleLogout}
                      className="text-red-600 text-sm"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleLogin}
                    className="bg-[#700014] text-white px-4 py-1 rounded-full text-sm hover:bg-[#900018]"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
