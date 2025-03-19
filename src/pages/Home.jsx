import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Navbar */}
      <nav className="relative bg-gray-600 bg-opacity-90 shadow-md px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            className="md:hidden text-white text-2xl p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="hidden md:flex space-x-4 sm:space-x-6">
            <Link to="/" className="text-gray-200 hover:text-gray-50">Home</Link>
            <Link to="/about" className="text-gray-200 hover:text-gray-50">About</Link>
            <Link to="/contact" className="text-gray-200 hover:text-gray-50">Contact</Link>
          </div>
          <div className="flex space-x-2 sm:space-x-4">
            <Link to="/book" className="px-3 sm:px-4 py-2 bg-red-500 hover:bg-red-700 text-gray-100 hover:text-white rounded-full transition-all text-sm sm:text-base">Book Now</Link>
            <Link to="/login" className="px-3 sm:px-4 py-2 bg-yellow-500 hover:bg-yellow-700 text-gray-100 hover:text-white rounded-full transition-all text-sm sm:text-base">Login</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden flex flex-col bg-gray-700 text-white mt-2 space-y-2 p-4 rounded-lg transition-all ${
            menuOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <Link to="/" className="block py-2 text-lg hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block py-2 text-lg hover:text-gray-300" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="block py-2 text-lg hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center bg-gray-200 text-gray-900 px-4 sm:px-6 py-20 sm:py-32 bg-opacity-50 min-h-[60vh] sm:min-h-[80vh]">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Book It!</h1>
        <p className="text-sm sm:text-lg max-w-md sm:max-w-2xl">Your perfect venue for unforgettable events awaits you!</p>
        <Link to="/get-started" className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-white hover:bg-gray-500 text-black hover:text-gray-50 rounded-md transition-all text-sm sm:text-base">Get Started</Link>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
