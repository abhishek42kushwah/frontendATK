import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaWhatsapp } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/AuthContext";
import { toast } from "react-toastify";
import { IoHome } from "react-icons/io5";

function LoginPage() {
  const BASE_URL = import.meta.env.VITE_APP_API;
  const [showPassword, setShowPassword] = useState(false);
  const LoginImage = "/public/pexels.jpg";
  const logo = "/public/brandlogo.png";
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}login`, formData, {
        withCredentials: true,
      });

      const data = response.data;

      if (data.success) {
        const token = data.data.token;
        await login(token);

        toast.success("Welcome to atulya karigari!", { position: "top-right" });
        navigate("/home");
      } else {
        toast.error(`Login Failed: ${data.message}`, { position: "top-right" });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed! Please try again",
        {
          position: "top-right",
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="h-screen w-full flex items-center justify-start p-10  bg-cover bg-center"
      style={{ backgroundImage: `url(${LoginImage})` }}
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-2  pt-3">
        <a
          href="/"
          className="w-8 h-8 ml-3  bg-white rounded-md flex items-center justify-center "
        >
          <IoHome />
        </a>
        <div className="flex justify-center items-center">
          <img src={logo} width="130px" height="130px" alt="Logo" />
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800 pt-1">
          LOG IN
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 mt-6 p-2">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="border py-2 px-4 rounded-lg w-full"
            required
          />
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="border py-2 px-4 rounded-lg w-full pr-10"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
          <button
            type="submit"
            className="text-white font-openSans py-3 rounded-lg w-full mt-12"
            style={{
              background:
                "linear-gradient(90deg, #0065FD -16.35%, #BC00FE 114.52%)",
            }}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          This site is protected by reCAPTCHA and the Google
          <span className="text-blue-500 cursor-pointer"> Privacy Policy </span>
          and{" "}
          <span className="text-blue-500 cursor-pointer">
            {" "}
            Terms of Service
          </span>{" "}
          apply.
        </p>
        <div className="text-center pt-4">
          <p className="text-sm">
            Create New Account With Atuly Karigari?{" "}
            <a
              href="/signup"
              className="text-blue-700 font-bold text-[17px] cursor-pointer animate-blinkSign"
            >
              Sign Up
            </a>
          </p>
        </div>

        <div className="flex justify-center items-center space-x-4 sm:space-x-6 text-lg sm:text-xl pt-4 text-white font-openSans">
          <a
            href={`https://wa.me/${9078670708}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-x-1 px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base"
            style={{
              background: "linear-gradient(180deg, #61FD7D 0%, #2BB826 100%)",
            }}
          >
            <FaWhatsapp size={22} className="sm:size-[28px]" /> WhatsApp
          </a>

          <a
            href={`https://t.me/${9078670708}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-x-1 px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base"
            style={{
              background: "linear-gradient(180deg, #FFC700 0%, #FF9F47 100%)",
            }}
          >
            <RiTelegram2Line
              className="rounded-full p-1"
              size={22}
              style={{
                background:
                  "linear-gradient(203.2deg, #37AEE2 21.67%, #1E96C8 70%)",
              }}
            />
            <span className="text-[#1E96C8] font-medium">Telegram</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
