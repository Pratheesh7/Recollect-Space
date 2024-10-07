import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-black npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p">
      {/* Navbar */}
      <header className="fixed w-full bg-transparent z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold text-cyan-400">
            <h1>META MEMORIES</h1>
          </div>
          <ul className="hidden md:flex space-x-8 text-white">
            <li>
              <a href="#" className="hover:text-cyan-400">Home</a>
            </li>
            <li>
              <a href="#services" className="hover:text-cyan-400">Services</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-cyan-400">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400">Contact</a>
            </li>
          </ul>
          <div className="hidden md:block">
            <a href="#" className="bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-400">
              Get Started
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen text-center text-white">
        <video
          autoPlay
          muted
          loop
          id="bg-video"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="https://example.com/background-video.mp4" type="video/mp4" />
        </video>
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Transforming Your Memories
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Remembarable For Ever  (Access Anytime,wherever)
          </p>
          <a
            href="#"
            className="bg-cyan-400 text-white py-2 px-8 rounded-full text-lg hover:bg-cyan-500"
          >
            Explore More
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Professional Services</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-10 px-6">
          <div className="bg-cyan-400 text-white p-8 rounded-lg shadow-lg transition-transform transform hover:-translate-y-3">
            <i className="fas fa-laptop-code text-4xl mb-4"></i>
            <h3 className="text-2xl font-semibold mb-2">Affordable</h3>
            <p>Less Expensive,More services</p>
          </div>
          <div className="bg-cyan-400 text-white p-8 rounded-lg shadow-lg transition-transform transform hover:-translate-y-3">
            <i className="fas fa-bullhorn text-4xl mb-4"></i>
            <h3 className="text-2xl font-semibold mb-2">Secured</h3>
            <p>Your Memories are safe with us</p>
          </div>
          <div className="bg-cyan-400 text-white p-8 rounded-lg shadow-lg transition-transform transform hover:-translate-y-3">
            <i className="fas fa-chart-line text-4xl mb-4"></i>
            <h3 className="text-2xl font-semibold mb-2">USER Friendly</h3>
            <p>Easy Accesible,Simply Better </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
    <section id="testimonials" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-10 px-6">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="italic mb-4">
              "Amazing service! Our website saw a 300% increase in traffic."
            </p>
            <h4 className="font-semibold">Natesan,Techhnical Head META & Co </h4>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="italic mb-4">
              "Professional, reliable, and creative team. Couldn't ask for more."
            </p>
            <h4 className="font-semibold">Mukilan T,Chair person META & Co.</h4>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="italic mb-4">
              "They transformed our digital marketing strategy and boosted our ROI."
            </p>
            <h4 className="font-semibold">Lokesh, Director META & Co</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Get in Touch</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block text-left font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-left font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-left font-semibold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-cyan-400 text-white py-3 px-6 rounded-full hover:bg-cyan-500">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-cyan-400 py-6">
        <div className="text-center text-white mb-4">
          <p>&copy; 2024 META MEMORIES. All Rights Reserved.</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-white">
            <FaInstagram />
          </a>
          <a href="#" className="text-white">
            <FaLinkedinIn />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
