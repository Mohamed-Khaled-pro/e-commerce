import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Contact() {
    const handleSubmit = (e) => {
    e.preventDefault();
    // Example success toast
    toast.success("Your request has been sent!");
    // Example error toast
    // toast.error("Something went wrong!");
    };
  return (
    <section className="bg-orange-500 py-12" id="contact">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        
        {/* Left Section */}
        <div className="text-white flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <h2 className="text-xl font-semibold mb-4">Get in touch</h2>
          <p className="text-base">
            Do you have any questions or comments for our team? Don’t hesitate to get in touch!
          </p>
        </div>

        {/* Right Form */}
        <div className="text-white w-full">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            
            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                className="border-b border-white focus:outline-none py-2"
                type="text"
                placeholder="First Name *"
                required
              />
              <input
                className="border-b border-white focus:outline-none py-2"
                type="text"
                placeholder="Last Name *"
                required
              />
            </div>

            {/* Email & Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                className="border-b border-white focus:outline-none py-2"
                type="email"
                placeholder="Email *"
                required
              />
              <input
                className="border-b border-white focus:outline-none py-2"
                type="tel"
                placeholder="Mobile *"
                required
              />
            </div>

            {/* Country */}
            <input
              className="border-b border-white focus:outline-none py-2"
              type="text"
              placeholder="Country *"
              required
            />

            {/* Message */}
            <textarea
              className="border-b border-white focus:outline-none py-2 resize-none"
              placeholder="Message *"
              rows="3"
              required
            ></textarea>

            {/* Checkbox */}
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" required className="mt-1" />
              <span>
                I declare that I have read and understood the{" "}
                <Link to="/privacy-policy" className="underline">
                  Privacy Policy
                </Link>{" "}*
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-fit px-8 py-3 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-orange-500 transition"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
