import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChefHat, Menu, X } from "lucide-react";
import ButtonNav from "./ButtonNav";
import { useSelector} from "react-redux";
import { useMemo } from "react";
import { toast } from "react-toastify";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user.value);
    const Favourites = useSelector((state) => state.favourites.items);
  



const links = useMemo(() => [
  { text: "Home", path: "/", index: 1 },
  { text: "Recipes", path: "/meals", index: 2 },
  { text: "About us", path: "/about", index: 3 },
  { text: "Reviews", path: "/reviews", index: 4 },
  { text: "Contact", path: "/contact", index: 5 },
  user && ({ text: "Profile", path: "/profile", index: 6 },
         { text: "Favorites", path: "/favourites", index: 7 }),
].filter(Boolean), [user]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-orange-700 backdrop-blur-md shadow-md px-6 lg:px-12 flex justify-between items-center h-24">
      {/* Logo */}
      <Link to="/" onClick={() => setIsOpen(false)}>
        <img
          src="/assets/MealMapLogo8.png"
          alt="Meal Map Logo"
          className="w-32 h-28 hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex gap-3 items-center">
        {links.map((e) => (
  <NavLink
  key={e.index}
  to={e.path} // خليها دايمًا على الباث
  onClick={(ev) => {
    if (!user && (e.text === "Favorites" || e.text === "Profile")) {
      ev.preventDefault();
      toast.error("You must log in first!");
    }
  }}
  className={({ isActive }) =>
    `transition relative ${
      isActive
        ? "border-b-2 border-white font-bold"
        : "hover:border-b-2 border-transparent"
    }`
  }
>
  <ButtonNav text={e.text} />
   {e.text ==="Favorites" && Favourites.length !== 0  &&(
    <span className="absolute top-0 right-0 text-xs  px-1  rounded-full bg-white text-orange-700">{Favourites.length}</span>
   )}
</NavLink>

))}
      </div>

      {/* Desktop Auth Buttons */}
      {!user ? (
        <div className="hidden lg:flex gap-4">
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
          <Link to="/register" className="btn btn-light">
            Sign up
          </Link>
        </div>
      ) : (
       <div className="hidden lg:flex gap-4">
        <Link
         to="/profile"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          className={`hidden tracking-wider  text-white font-bold transition-all duration-1000 text-md lg:flex gap-4 items-center cursor-pointer p-3 rounded-xl hover:bg-white  hover:text-orange-700`}
        >
           <ChefHat size={28} className={ `${show ?"opacity-100" : "opacity-0"}`} />
            <h1> Hello{" "}{user.fname}</h1>
        </Link>
        </div>
      )}

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white focus:outline-none cursor-pointer"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md flex flex-col items-center gap-4 py-6 lg:hidden transition-transform duration-300 z-40">
         {links.map((e) => (
  <Link
    key={e.index}
    to={user || (e.text !== "Favorites" && e.text !== "Profile") ? e.path : "#"}
    onClick={(ev) => {
      if (!user && (e.text === "Favorites" || e.text === "Profile")) {
        ev.preventDefault(); 
        toast.error("You must log in first!");
      } else {
        setIsOpen(false); 
      }
    }}
  >
    <ButtonNav text={e.text} />
  </Link>
))}

          {!user ? (
            <div className="flex flex-col gap-2 w-4/5 mt-2">
              <Link
                to="/login"
                className="btn text-white bg-orange-700 hover:bg-orange-700 flex justify-center py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn bg-white text-orange-700 hover:bg-white/20 hover:text-white flex justify-center py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Signup
              </Link>
            </div>
          ) : (
            <div className="flex flex-col w-4/5 mt-2">
        <Link
         to="/profile"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          className={` text-white font-bold transition-all duration-1000 text-md flex gap-4 items-center cursor-pointer p-2 mx-auto rounded-xl hover:bg-white  hover:text-orange-700`}
        >
         <ChefHat size={28} className={ `${show ?"opacity-100" : "opacity-0"}`} />
            <h1> Hello{" "}{user.fname}</h1>        </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
