import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_API;

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (user?.id) {
      const savedCart = localStorage.getItem(`cart_${user.id}`);
      setCart(savedCart ? JSON.parse(savedCart) : []);
    }
  });

  const saveCartToLocalStorage = (updatedCart, userId) => {
    if (userId) {
      localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
    }
  };

  const addToCart = (product, quantity) => {
    setCart((prev) => {
      const updatedCart = [...prev];
      const existingIndex = updatedCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex !== -1) {
        updatedCart[existingIndex].quantity += quantity;
      } else {
        updatedCart.push({ ...product, quantity });
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };


  const updateQuantity = (id, newQuantity) => {
  if (newQuantity < 1) return; 

  const updatedCart = cart.map((item) =>
    item.id === id ? { ...item, quantity: newQuantity } : item
  );

  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart)); 
};

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const updatedCart = prev.filter((item) => item.id !== productId);
      if (user?.id) {
        saveCartToLocalStorage(updatedCart, user.id);
      }
      return updatedCart;
    });
  };

  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const login = async (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    await fetchUserProfile(newToken);
  };

  const logout = (() => {
    let isLoggedOut = false;
    return () => {
      if (isLoggedOut) return;
      isLoggedOut = true;

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      if (user?.id) {
        localStorage.removeItem(`cart_${user.id}`);
      }
      setToken(null);
      setUser(null);
      setCart([]);
    };
  })();

  const fetchUserProfile = async (currentToken) => {
    const authToken = currentToken || token;
    if (!authToken) return;

    try {
      const response = await axios.get(`${BASE_URL}profile`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.data.success) {
        const userData = response.data.user;
        if (userData) {
          localStorage.setItem("user", JSON.stringify(userData));
          setUser(userData);
          const savedCart = localStorage.getItem(`cart_${userData.id}`);
          setCart(savedCart ? JSON.parse(savedCart) : []);
        } else {
          logout();
        }
      } else {
        logout();
      }
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
      logout();
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserProfile(token);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        fetchUserProfile,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
