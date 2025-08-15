import React from "react";
import Navbar from "../pages/Nabvar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { FaBoxOpen, FaTruck, FaCheckCircle } from "react-icons/fa";

const OrderStatus = () => {
  const location = useLocation();
  const order = location.state?.order || {};

  const steps = [
    { label: "Processing", icon: <FaBoxOpen />, status: "completed" },
    { label: "Shipped", icon: <FaTruck />, status: "current" },
    { label: "Delivered", icon: <FaCheckCircle />, status: "upcoming" },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen py-6 px-6">
        <div className=" mx-auto bg-white p-6 rounded-2xl shadow-lg border grid md:grid-cols-2 gap-6">
          
          
          <div>
            <h1 className="text-3xl font-[poppines] text-[#052A3D] mb-6">
              Order Details
            </h1>

            <div className="mb-6 border p-4 rounded bg-gray-50">
              <p>
                <strong>Order ID:</strong> #{order.id || "ORD" + Date.now()}
              </p>
              <p>
                <strong>Shipping:</strong> {order.shipping || "N/A"}
              </p>
              <p>
                <strong>Total:</strong> ₹{order.total || 0}
              </p>
            </div>

            <div className="space-y-4">
              {order.cart?.map((item) => (
                <div
                  key={item.id}
                  className="flex bg-gray-50 rounded-lg shadow-sm overflow-hidden border"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover"
                  />
                  <div className="p-3 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.pattern} | {item.origin}
                    </p>
                    <p className="text-purple-600 font-bold">₹{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Status Tracking */}
          <div>
            <h2 className="text-2xl font-[poppines] text-[#052A3D] mb-6">
              Order Status
            </h2>

            <div className="relative flex flex-col items-center space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center w-full">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-xl shadow-lg
                      ${
                        step.status === "completed"
                          ? "bg-green-500"
                          : step.status === "current"
                          ? "bg-yellow-500 animate-pulse"
                          : "bg-gray-300"
                      }`}
                  >
                    {step.icon}
                  </div>

                  <div className="ml-4">
                    <p
                      className={`font-medium ${
                        step.status === "completed"
                          ? "text-green-600"
                          : step.status === "current"
                          ? "text-yellow-600"
                          : "text-gray-500"
                      }`}
                    >
                      {step.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="mt-10 p-4 border rounded-lg bg-gray-50">
              <p className="flex justify-between text-gray-600">
                <span>Subtotal:</span> <span>₹{order.subtotal}</span>
              </p>
              <p className="flex justify-between text-gray-600">
                <span>Shipping:</span>
                <span>
                  {order.shipping} (
                  {order.shippingCost === 0
                    ? "Free"
                    : `₹${order.shippingCost}`}
                  )
                </span>
              </p>
              <p className="flex justify-between font-bold text-lg text-gray-800">
                <span>Total:</span> <span>₹{order.total}</span>
              </p>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Estimated Delivery: <strong>22 Aug 2025</strong>
              </p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderStatus;
