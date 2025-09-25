import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Profile from "./pages/Profile";
import MealsPage from "./pages/MealsPage";
import MealDetails from "./pages/MealDetails";
import Favourites from "./pages/Favourites";
import Reviews from "./pages/Reviews";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/Privacy";
import Error from "./pages/Error";
import { getUser } from "./RTX/Slices/userSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/meals" element={<Category />} />

        {/* Protected Routes */}
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/favourites" element={<ProtectedRoute><Favourites /></ProtectedRoute>} />
        <Route path="/meal/:id" element={<ProtectedRoute><MealDetails /></ProtectedRoute>} />
        <Route path="/meals/category/:category" element={<ProtectedRoute><MealsPage /></ProtectedRoute>} />
        <Route path="/meals/area/:area" element={<ProtectedRoute><MealsPage /></ProtectedRoute>} />

        {/* Error */}
        <Route path="*" element={<Error />} />
      </Routes>

      <ToastContainer position="top-center" autoClose={1500} />
    </>
  );
}
