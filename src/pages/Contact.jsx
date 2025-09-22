import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Contact() {
    const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your Message has been sent!");

    };
  return (
    <section className="bg-orange-500 py-4 mt-26 " id="contact">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        
        <div className="text-white flex flex-col justify-center gap-10">
          <div>
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <h2 className="text-xl font-semibold mb-2">Get in touch</h2>
          </div>
          <p className="text-base">
            Do you have any questions or comments for our team? Don’t hesitate to get in touch!
          </p>
        </div>

        <div className="text-white w-full">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                className="border-b placeholder-white/80 border-white focus:outline-none py-2"
                type="text"
                placeholder="First Name *"
                required
              />
              <input
                className="border-b placeholder-white/80 border-white focus:outline-none py-2"
                type="text"
                placeholder="Last Name *"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                className="border-b placeholder-white/80 border-white focus:outline-none py-2"
                type="email"
                placeholder="Email *"
                required
              />
              <input
                className="border-b placeholder-white/80 border-white focus:outline-none py-2"
                type="tel"
                placeholder="Mobile *"
                required
              />
            </div>

            <input
              className="border-b placeholder-white/80 border-white focus:outline-none py-2"
              type="text"
              placeholder="Country *"
              required
            />

            <textarea
              className="border-b placeholder-white/80 border-white focus:outline-none py-2 resize-none"
              placeholder="Message *"
              rows="2"
              required
            ></textarea>

            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" required className="mt-1" />
              <span>
                I declare that I have read and understood the{" "}
                <Link to="/privacy-policy" className="underline">
                  Privacy Policy
                </Link>{" "}*
              </span>
            </label>

            <button
              type="submit"
              className="w-fit px-8 py-3 border cursor-pointer border-white rounded-full text-white font-semibold hover:bg-white hover:text-orange-500 transition"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
