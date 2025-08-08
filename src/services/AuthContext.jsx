import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";


const AuthContext = createContext();


const BASE_URL = import.meta.env.VITE_APP_API;


export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

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
      setToken(null);
      setUser(null);
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
    <AuthContext.Provider value={{ user, token, login, logout, fetchUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
