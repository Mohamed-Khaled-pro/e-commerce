import React from 'react';
import { useState } from "react";
import MealMapLogo from 'C:/Users/USER/Desktop/MealMap/e-commerce/public/assets/MealMapLogo8.png';
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";


export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <nav className="navbar flex justify-between items-center px-6 py-3 text-white text-lg md:bg-orange-500 max-sm:bg-orange-500 relative">
      {/* Logo */}
      <div className="logo">
        <img src={MealMapLogo} alt="Meal Map Logo" className="w-26 h-26" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-2xl font-semibold">
        <Link to="/">Home</Link>
        <Link to="/meals/:category">Meals</Link>
        <Link to="/wishlist">Favorites</Link>
        <Link to="/about">About</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Desktop Search + Auth */}
      <div className="hidden md:flex items-center gap-3">
        <button className="btn btn-primary">Login</button>
        <button className="btn btn-light">Signup</button>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-orange-500 flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/meals/:category" onClick={() => setIsOpen(false)}>Meals</Link>
          <Link to="/wishlist" onClick={() => setIsOpen(false)}>Favorites</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/reviews" onClick={() => setIsOpen(false)}>Reviews</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

          <div className="flex flex-col gap-2 w-4/5">
            <button className="btn btn-primary">Login</button>
            <button className="btn btn-light">Signup</button>
          </div>
        </div>
      )}
    </nav>
    </>
  )
}