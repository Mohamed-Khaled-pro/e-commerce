
import { Route , Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import About from "./pages/About"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Profile from "./pages/Profile"
import MealsPage from "./pages/MealsPage"
import MealDetails from "./pages/MealDetails"
import Error from "./pages/Error"
import Favourites from "./pages/Favourites"
import Reviews from "./pages/Reviews"
import Category from "./pages/Category";
export default function App() {
  return (
  <>
 <Navbar/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/favourites" element={<Favourites />} />
  <Route path="/reviews" element={<Reviews />} />
  <Route path="/meals/:category" element={<MealsPage />} />
  <Route path="/meals" element={<Category />} />
  <Route path="/meal/:name" element={<MealDetails />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<Error />} />
  </Routes>
  <ToastContainer position="top-center" autoClose={3000} />
  </>
  )
}
