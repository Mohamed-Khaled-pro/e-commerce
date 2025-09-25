import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
export default function Contact() {
    const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your Message has been sent!");

    };
    const location = useLocation()
  return (
    <section className={` py-4  bg-orange-700 ${location.pathname =="/contact" ? "mt-36 h-full max-w-7xl mx-auto rounded-3xl  flex-col items-center justify-center" : "mt-3 " }`}   id="contact">
      <div className={`container mx-auto grid grid-cols-1  gap-12 px-6  ${location.pathname =="/contact" ? "!md:grid-cols-1 text" : "md:grid-cols-2"}`}>
        
        <div className="text-white flex flex-col justify-center gap-10">
          <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
          <h2 className="text-md md:text-lg font-semibold mb-2">Get in touch</h2>
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
                <Link to="/privacy" className="underline">
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
