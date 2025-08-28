import React, { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("");
const navigate=useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", formData);

      // token ko localStorage me save karna
      localStorage.setItem("token", res.data.token);

      setStatus("Login successful!");
      console.log("succesfull");
      navigate("/dashboard")
      
      setFormData({ email: "", password: "" });
    } catch (err) {
      setStatus(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Login</h2>
        {status && <p className="text-center text-sm text-red-500">{status}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}
