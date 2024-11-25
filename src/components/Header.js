
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Magai Portifolio</h1>

        {/* Menu Button (Visible on Mobile) */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Nav Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6`}
        >
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
          <a href="#portfolio" className="hover:text-gray-300">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
