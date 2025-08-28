import React from "react";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row 
                      justify-between items-center gap-6">
        {/* Logo / Brand */}
        <h2 className="text-xl font-bold text-white">VirtualDesk</h2>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400">
            <Facebook />
          </a>
          <a href="#" className="hover:text-sky-400">
            <Twitter />
          </a>
          <a href="#" className="hover:text-blue-500">
            <Linkedin />
          </a>
          <a href="#" className="hover:text-gray-100">
            <Github />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} VirtualDesk. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
