import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../RTX/Slices/userSlice";
import { toast } from "react-toastify";
import { Eye, EyeClosedIcon, EyeOff } from "lucide-react";
export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
 const dispatch = useDispatch()
  const registeredUser = location.state;
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 5) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (registeredUser) {
      if (
        formData.email !== registeredUser.email ||
        formData.password !== registeredUser.password
      ) {
        newErrors.credentials = "Incorrect email or password";
      }
    } else {
      newErrors.credentials = "No user found. Please register first.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      localStorage.setItem("user", JSON.stringify(registeredUser));
      dispatch(setUser(registeredUser))
      navigate("/");
    }
    toast.success("Login Successfully")
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="mb-6 text-center text-2xl font-bold text-orange-700">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-orange-700 focus:ring-orange-700"
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

           <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <div className="relative mt-1">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          placeholder="••••••••"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 cursor-pointer "
        >
          {showPassword ?  <EyeOff/>:<Eye/> }
        </button>
      </div>
      {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
    </div>

          {errors.credentials && (
            <p className="text-sm text-center text-red-600">{errors.credentials}</p>
          )}

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-bold text-orange-700 mx-1 hover:border-b-2 p-1 hover:border-orange-700"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
