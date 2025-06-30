import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">BC</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Bharat Construction
              </h1>
              <p className="text-xs text-gray-600">Building India's Future</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-800 hover:text-amber-600 font-medium transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-amber-600 font-medium transition"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:text-amber-600 font-medium transition"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-amber-600 font-medium transition"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-800 hover:text-amber-600 font-medium px-3 py-2 rounded hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:text-amber-600 font-medium px-3 py-2 rounded hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-gray-800 hover:text-amber-600 font-medium px-3 py-2 rounded hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-amber-600 font-medium px-3 py-2 rounded hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
