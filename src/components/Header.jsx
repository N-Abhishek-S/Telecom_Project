import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Plans from "../components/Plans";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white bg-opacity-80 backdrop-blur-md text-black shadow-lg fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide font-[Poppins]">
          MyBrand
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-28 mr-36 text-lg font-medium">
          {["Home", "Plans", "Account", "About", "Contact"].map((item, index) => (
            <NavLink
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-gray-400 transition duration-300 ease-in-out relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed top-0 right-0 h-full w-64 bg-black text-white shadow-lg transition-transform duration-300 ease-in-out">
          <button
            className="absolute top-4 right-4 p-2"
            onClick={() => setIsOpen(false)}
          >
            <X size={30} />
          </button>
          <nav className="flex bg-black flex-col items-center mt-16 space-y-6">
            {["Home", "Plans", "Account", "About", "Contact"].map((item, index) => (
              <NavLink
                key={index}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-gray-400 transition duration-300 ease-in-out"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
