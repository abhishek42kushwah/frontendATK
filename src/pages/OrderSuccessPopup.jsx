import { FaCheckCircle } from "react-icons/fa";

const OrderSuccessPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-40 backdrop-blur-sm z-50">
      <div className="bg-white/90 rounded-xl shadow-lg p-6 max-w-sm w-full text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-6xl drop-shadow-lg" />
        </div>

        <h2 className="text-2xl font-bold text-green-600">Success!</h2>

        <p className="text-gray-600 mt-2">
          Your order has been placed successfully. We’ll notify you once it’s shipped.
        </p>

        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md transition-all"
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessPopup;
