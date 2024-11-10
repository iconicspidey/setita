import React, { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="flex justify-between items-center px-4 md:px-10 py-4">
      {/* Logo */}
      <div className="text-lg font-bold text-w-50">
        <img src={logo} alt="Logo" className="w-[70px]" />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6  items-center">
        <a href="#" className="text-w-50 font-semibold hover:text-purple-600">
          Donations
        </a>
        <a href="#" className="text-w-50 hover:text-purple-600">
          Campaign
        </a>
        <a href="#" className="text-w-50 hover:text-purple-600">
          Overview
        </a>
        <a href="#" className="text-w-50 hover:text-purple-600">
          About Us
        </a>
        <button className="bg-transparent text-white border border-white px-4 py-2 rounded-md hover:bg-transparent  hover:text-purple-600">
                  <Link to={'/signin'}>
                  Get Started
                  </Link>
        </button>
      </nav>

      {/* User Icon for Desktop */}
      <div className="hidden md:block">
        <button className="btn btn-circle btn-outline">
          <FaUser className="text-gray-800" />
        </button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        {menuOpen ? (
          <FaTimes className="text-w-50 text-2xl" />
        ) : (
          <FaBars className="text-w-50 text-2xl" />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          <div className="bg-white w-3/4 h-full p-6 shadow-lg">
            <button
              className="mb-6 btn btn-circle btn-outline"
              onClick={toggleMenu}
            >
              <FaTimes className="text-gray-800 text-xl" />
            </button>
            <nav className="flex flex-col space-y-6">
              <a
                href="#"
                className="text-gray-800 font-semibold hover:text-purple-600"
              >
                Donations
              </a>
              <a href="#" className="text-gray-800 hover:text-purple-600">
                Campaign
              </a>
              <a href="#" className="text-gray-800 hover:text-purple-600">
                Overview
              </a>
              <a href="#" className="text-gray-800 hover:text-purple-600">
                About Us
              </a>
            </nav>
            <div className="mt-8">
              <button className="btn btn-circle btn-outline">
                <FaUser className="text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
