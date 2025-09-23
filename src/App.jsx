import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Profile from "./pages/Profile";
import Favourites from "./pages/Favourites";
import Reviews from "./pages/Reviews";
import MealsPage from "./pages/MealsPage";
import MealDetails from "./pages/MealDetails";
import Category from "./pages/Category";
import Error from "./pages/Error";

export default function App() {
  return (
    <>
     
      <Navbar />

    
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/reviews" element={<Reviews />} />

        
        <Route path="/meals" element={<Category />} />
        <Route path="/meals/category/:category" element={<MealsPage />} />
        <Route path="/meals/area/:area" element={<MealsPage />} />
        <Route path="/meal/:id" element={<MealDetails />} />

        
        <Route path="*" element={<Error />} />
      </Routes>

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}
