import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scrolling to toggle header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scrolling function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-800 text-white" : "bg-transparent text-white"
      }`}
    >
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-yellow-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 text-center mx-auto">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="uppercase hover:text-blue-500"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="uppercase hover:text-blue-500"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("services")}
              className="uppercase hover:text-blue-500"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="uppercase hover:text-blue-500"
            >
              Portfolio
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="uppercase hover:text-blue-500"
            >
              Contact
            </button>
          </li>
        </ul>

       
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-3/4 bg-gray-800 text-white transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "60%", paddingTop: "4rem" }}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsMobileMenuOpen(false)}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="flex flex-col space-y-6 p-6">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="uppercase hover:text-blue-500"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="uppercase hover:text-blue-500"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("services")}
              className="uppercase hover:text-blue-500"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="uppercase hover:text-blue-500"
            >
              Portfolio
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="uppercase hover:text-blue-500"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Social Media Icons in Mobile Menu */}
        <div className="flex justify-center mt-6 space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border-2 border-transparent hover:border-blue-500 hover:bg-blue-100 transition-all duration-300"
          >
            <FaFacebookF className="text-white hover:text-blue-500" size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border-2 border-transparent hover:border-pink-500 hover:bg-pink-100 transition-all duration-300"
          >
            <FaInstagram className="text-white hover:text-pink-500" size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border-2 border-transparent hover:border-blue-400 hover:bg-blue-100 transition-all duration-300"
          >
            <FaTwitter className="text-white hover:text-blue-400" size={20} />
          </a>
          <a
            href="https://wa.me/+255764998891"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border-2 border-transparent hover:border-green-500 hover:bg-green-100 transition-all duration-300"
          >
            <FaWhatsapp className="text-white hover:text-green-500" size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
