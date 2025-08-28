// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              {/* Landing Page */}
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <Services />
                    <Pricing />
                    <WhyUs />
                    <Contact />
                    <Footer />
                  </>
                }
              />

              {/* Auth Pages */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Protected Dashboard Route */}
              <Route
                path="/dashboard"
                element={
                  // <PrivateRoute>
                    <Dashboard />
                  // </PrivateRoute>
                }
              />
            </Routes>
          </div>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
