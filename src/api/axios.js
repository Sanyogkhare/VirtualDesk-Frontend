import axios from "axios";

// Base URL from .env
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // backend ka base URL from .env
});

// Agar token localStorage me hai to har request ke saath bhejna
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
