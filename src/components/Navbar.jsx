import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import ButtonNav from './ButtonNav';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { text: "Home", path: '/', index: 1 },
    { text: "Meals", path: '/meals/:category', index: 2 },
    { text: "Favorites", path: '/wishlist', index: 3 },
    { text: "About", path: '/about', index: 4 },
    { text: "Reviews", path: '/reviews', index: 5 },
    { text: "Contact", path: '/contact', index: 6 },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-orange-500/95 backdrop-blur-md shadow-md px-6 lg:px-16 flex justify-between items-center h-20">
      
      {/* Logo */}
      <Link to="/" onClick={() => setIsOpen(false)}>
        <img 
          src="/assets/MealMapLogo8.png" 
          alt="Meal Map Logo" 
          className="w-32 h-28 hover:scale-105 transition-transform duration-300" 
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex gap-8 items-center">
        {links.map((e) => (
          <NavLink 
            key={e.index} 
            to={e.path} 
            className={({ isActive }) =>
              `transition pb-1 ${
                isActive 
                ? "border-b-2 border-white font-bold" 
                : "hover:border-b-2 border-transparent"
              }`
            }
          >
            <ButtonNav text={e.text} />
          </NavLink>
        ))}
      </div>

      {/* Desktop Auth Buttons */}
      <div className="hidden lg:flex gap-4">
        <Link to="/login" className="btn btn-secondary px-4 py-2 rounded-md">Login</Link>
        <Link to="/register" className="btn btn-light px-4 py-2 rounded-md">Sign up</Link>
      </div>

      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white focus:outline-none"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" absolute top-full left-0 w-full bg-black/80 backdrop-blur-md flex flex-col items-center gap-4 py-6 lg:hidden transition-transform duration-300 z-40">
          {links.map((e) => (
            <Link key={e.index} to={e.path} onClick={() => setIsOpen(false)}>
              <ButtonNav text={e.text} />
            </Link>
          ))}
          <div className="flex flex-col gap-2 w-4/5 mt-2">
            <Link to="/login" className="btn btn-secondary flex justify-center py-2 rounded-md" onClick={() => setIsOpen(false)}>Login</Link>
            <Link to="/register" className="btn btn-light flex justify-center py-2 rounded-md" onClick={() => setIsOpen(false)}>Signup</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
