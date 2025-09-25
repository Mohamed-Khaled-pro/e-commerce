import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.fname.trim()) newErrors.fname = "First name is required";
    if (!form.lname.trim()) newErrors.lname = "Last name is required";

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^01[0125][0-9]{8}$/.test(form.mobile.trim())) {
      newErrors.mobile = "Mobile number is invalid";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())) {
      newErrors.email = "Email address is invalid";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/login", { state: { ...form } });
      toast.success("Sign up Successfully");
    }
  };

  const inputClass = (error) =>
    `w-full mb-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
      error ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 mt-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative"
        noValidate
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-orange-700">Register</h2>

        <label htmlFor="fname" className="block mb-1 font-medium text-gray-700">
          First Name
        </label>
        <input
          id="fname"
          name="fname"
          type="text"
          value={form.fname}
          onChange={handleChange}
          className={inputClass(errors.fname)}
          placeholder="Ahmed"
        />
        {errors.fname && <p className="text-red-500 text-sm mb-2">{errors.fname}</p>}

        <label htmlFor="lname" className="block mb-1 font-medium text-gray-700">
          Last Name
        </label>
        <input
          id="lname"
          name="lname"
          type="text"
          value={form.lname}
          onChange={handleChange}
          className={inputClass(errors.lname)}
          placeholder="Mohamed"
        />
        {errors.lname && <p className="text-red-500 text-sm mb-2">{errors.lname}</p>}

        <label htmlFor="mobile" className="block mb-1 font-medium text-gray-700">
          Mobile Number
        </label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          value={form.mobile}
          onChange={handleChange}
          className={inputClass(errors.mobile)}
          placeholder="01012345678"
        />
        {errors.mobile && <p className="text-red-500 text-sm mb-2">{errors.mobile}</p>}

        <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={inputClass(errors.email)}
          placeholder="Ahmed@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

        <label htmlFor="password" className="block mb-1 font-medium text-gray-700 relative">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            className={inputClass(errors.password)}
            placeholder="********"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </span>
        </div>
        {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password}</p>}

        <button type="submit" className="btn btn-primary w-full mt-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
