import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            Simplify Your <span className="text-yellow-400">Workflows</span>{" "}
            with <span className="text-white">VirtualDesk</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-100 dark:text-gray-300">
            A modern platform to manage projects, collaborate with your team,
            and boost productivity — all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start">
            <Link
              to="/signup"
              className="px-6 py-3 rounded-lg bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-500 transition shadow-md"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 rounded-lg border border-white hover:bg-white hover:text-blue-600 transition font-semibold"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right Image / Illustration */}
        <div className="mt-12 md:mt-0">
          <img
            src="/Modern Workspace.avif"
            alt="Hero Section"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Decorative Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 text-white dark:text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.44c58.61-20.71 122.6-34.87 187.14-42.06C726.75-1.42 884.25 9.31 1049.6 33.19c71.75 10.5 146.18 24.4 218.32 41.51V120H0V16c99.54 28.63 207.89 45.27 321.39 40.44z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}
