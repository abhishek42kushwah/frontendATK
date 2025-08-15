import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useAuth } from "../services/AuthContext";
import Navbar from "./Nabvar";
import { Trash2, Plus, Minus } from "lucide-react";
import { useState } from "react";
import Popup from "./OrderSuccessPopup";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useAuth();
  const [shipping, setShipping] = useState("pickup");
  const [open, setOpen] = useState(false); // ✅ fixed typo
  const totalPrice = cart.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price.toString().replace(/,/g, ""));
    return sum + numericPrice * item.quantity;
  }, 0);

  const navigate = useNavigate();

  const handleCheckOut = () => {
    const orderData = {
      cart,
      shipping,
      subtotal: totalPrice,
      shippingCost: shipping === "pickup" ? 0 : 99,
      total: totalPrice + (shipping === "pickup" ? 0 : 99),
    };

    setOpen(true);

    setTimeout(() => {
      navigate("/order-status", { state: { order: orderData } });
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 py-10 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">My Cart</h1>

          {cart.length === 0 ? (
            <div className="bg-white p-10 rounded-lg shadow text-center text-gray-500">
              Your cart is empty.
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="grid grid-cols-12 font-semibold text-gray-600 border-b px-4 py-3">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Qty</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                {cart.map((item) => {
                  const numericPrice = parseFloat(
                    item.price.toString().replace(/,/g, "")
                  );
                  return (
                    <div
                      key={item.id}
                      className="grid grid-cols-12 items-center px-4 py-4 border-b"
                    >
                      <div className="col-span-6 flex items-center gap-4">
                        <img
                          src={item.image || "https://via.placeholder.com/80"}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded border"
                        />
                        <div>
                          <h2 className="font-medium">{item.name}</h2>
                          <p className="text-sm text-gray-500">#{item.id}</p>
                        </div>
                      </div>

                      <div className="col-span-2 text-center font-medium">
                        ₹ {numericPrice.toLocaleString("en-IN")}
                      </div>

                      <div className="col-span-2 flex items-center justify-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                        >
                          <Minus size={16} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="col-span-2 flex items-center justify-end gap-4">
                        <span className="font-semibold text-green-600">
                          ₹{" "}
                          {(numericPrice * item.quantity).toLocaleString(
                            "en-IN"
                          )}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:bg-red-100 rounded-full p-2"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Summary */}
              <div className="mt-6 bg-white p-6 rounded-lg shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-semibold mb-3">Choose shipping mode:</h3>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="pickup"
                        checked={shipping === "pickup"}
                        onChange={(e) => setShipping(e.target.value)}
                      />
                      Store pickup (2–4 days) –{" "}
                      <span className="font-semibold">FREE</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="delivery"
                        checked={shipping === "delivery"}
                        onChange={(e) => setShipping(e.target.value)}
                      />
                      Home delivery (Under 2 days) –{" "}
                      <span className="font-semibold">₹ 99</span>
                    </label>
                  </div>
                </div>

                <div className="w-full md:w-auto bg-gray-50 p-4 rounded-lg shadow-inner">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal:</span>
                    <span>₹ {totalPrice.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping:</span>
                    <span>{shipping === "pickup" ? "Free" : "₹ 99"}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mb-4">
                    <span>Total:</span>
                    <span>
                      ₹{" "}
                      {(
                        totalPrice + (shipping === "pickup" ? 0 : 99)
                      ).toLocaleString("en-IN")}
                    </span>
                  </div>
                  <button
                    onClick={handleCheckOut}
                    className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition w-full"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />

      {open && <Popup onClose={() => setOpen(false)} />}
    </>
  );
};

export default CartPage;
