import axios from "axios";

const API_BASE_URL = "localhost:5000/";

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000, 
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); 
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response.data, 
    (error) => {
        console.error("API Error:", error.response?.data?.message || "Something went wrong");
        return Promise.reject(error);
    }
);

export const apiRequest = async (method, url, data = null, params = {}) => {
    try {
        const response = await api({
            method,
            url,
            data,
            params, 
        });
        return response; 
    } catch (error) {
        throw error; 
    }
};