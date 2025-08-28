import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          VirtualDesk
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
          <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Services</a>
          <a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Pricing</a>
          <a href="#whyus" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Why Us</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>

          {/* Auth Conditional */}
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Dashboard
              </Link>
              <span className="text-gray-600 dark:text-gray-300">Hello, {user.name}</span>
              <button
                onClick={logout}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-3 py-1 bg-[#A47860] text-white rounded-md  transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-3 py-1 bg-[] text-white rounded-md hover:bg-green-700 transition"
              >
                Signup
              </Link>
            </>
          )}
        </div>

        {/* Dark Mode Toggle + Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {isDark ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-800" />
            )}
          </button>
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4 transition">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <a href="#services" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400">Services</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400">Pricing</a>
          <a href="#whyus" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400">Why Us</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400">Contact</a>

          {/* Auth Conditional in Mobile Menu */}
          {user ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-blue-600 dark:hover:text-blue-400"
              >
                Dashboard
              </Link>
              <span className="block text-gray-600 dark:text-gray-300">Hello, {user.name}</span>
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-1 bg-[#A47860] text-white rounded-md transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
