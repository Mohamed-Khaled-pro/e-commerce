import React from 'react';
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import ButtonNav from './ButtonNav';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <nav className="navbar z-20 w-full  absolute top-0 flex justify-between items-center px-6  text-white text-lg bg-orange-500 shadow-sm ">
      {/* Logo */}
      <div className="logo ">
        <img src="/assets/MealMapLogo8.png" alt="Meal Map Logo" className="w-32 h-28" />
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex gap-4 text-xl font-semibold  m-auto">
{[
          {text:"Home" ,path:'/',index:1},
          {text:"Meals" ,path:'/meals/:category',index:2},
          {text:"Favorites" ,path:'/wishlist',index:3},
          {text:"About" ,path:'/about',index:4},
          {text:"Reviews" ,path:'/reviews',index:5},
          {text:"Contact" ,path:'/contact',index:6},
          
          ].map((e)=>{
          return  <Link key={e.index} to={e.path}><ButtonNav text={e.text}/></Link>
          })
        }
      </div>

      {/* Desktop Search + Auth */}
      <div className="hidden lg:flex items-center gap-3">
        <Link to="/login" onClick={() => setIsOpen(false)} className="btn btn-secondary ">Login</Link>
       <Link to="/register" onClick={() => setIsOpen(false)} className="btn btn-light">Signup</Link>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden focus:outline-none cursor-pointer "
      >
        {isOpen ? <X size={32} /> : <Menu size={34} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" absolute top-full left-0 w-full bg-black/70 flex flex-col items-center gap-4 py-4 md:hidden z-50 transition-color transition-transform duration-3000">
          {[
          {text:"Home" ,path:'/',index:1},
          {text:"Meals" ,path:'/meals/:category',index:2},
          {text:"Favorites" ,path:'//wishlist',index:3},
          {text:"About us" ,path:'/about',index:4},
          {text:"Reviews" ,path:'/reviews',index:5},
          {text:"Contact" ,path:'/contact',index:6},
          ].map((e)=>{
           return  <Link key={e.index} to={e.path } onClick={() => setIsOpen(false)}><ButtonNav text={e.text}/></Link>
         })
        }
          <div className="flex flex-col gap-2 w-4/5">
            <button className="btn btn-light" onClick={() => setIsOpen(false)}><Link to="/login">Login</Link></button>
           <button className="btn btn-light" onClick={() => setIsOpen(false)}><Link to="/register">Signup</Link> </button>
          </div>
        </div>
      )}
    </nav>
    </>
  )
}