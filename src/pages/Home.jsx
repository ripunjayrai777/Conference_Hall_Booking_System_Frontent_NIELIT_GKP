import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaMobileAlt, FaCalendarCheck, FaClipboardCheck } from 'react-icons/fa';


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
        <div className="flex item-center justify-center text-center gap-5">
        <Link to="/book" className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-red-500 hover:bg-gray-500 text-gray-100 hover:text-gray-50 rounded-md transition-all text-sm sm:text-base hover:shadow-2xl">Book Now</Link>
        <Link to="/availability" 
        className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-white hover:bg-gray-500 text-black hover:text-gray-50 rounded-md transition-all text-sm sm:text-base hover:shadow-2xl"
        >Check Availability</Link>
        </div>
      </div>
     
     {/* Feature Section */}
      <section className="py-16 bg-gray-200 text-center px-4 md:px-8 lg:px-16">
      <h3 className="text-gray-500 uppercase tracking-wider text-sm md:text-base lg:text-lg">Be inspired to meet, create, and innovate.</h3>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Book a space that suits you</h2>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="bg-gray-50 text-center p-6 border rounded-lg shadow-md hover:shadow-2xl transition duration-300">
          <div className="flex items-center justify-left mb-4">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-lg font-bold">01</span>
          </div>
          <FaMobileAlt className="text-gray-600 text-7xl md:text-6xl mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold mt-4">Find the perfect space</h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">Browse the marketplace and customize your search to suit your activity needs.</p>
        </div>
        
        {/* Step 2 */}
        <div className="bg-gray-50 text-center p-6 border rounded-lg shadow-md hover:shadow-2xl transition duration-300">
          <div className="flex items-center justify-left mb-4">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-lg font-bold">02</span>
          </div>
          <FaCalendarCheck className="text-gray-600 text-7xl md:text-6xl mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold mt-4">Book it with ease</h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">Once you find the ideal match, reserve the space and pay securely online with our payment system.</p>
        </div>
        
        {/* Step 3 */}
        <div className="bg-gray-50 text-center p-6 border rounded-lg shadow-md hover:shadow-2xl transition duration-300">
          <div className="flex items-center justify-left mb-4">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-lg font-bold">03</span>
          </div>
          <FaClipboardCheck className="text-gray-600 text-7xl md:text-6xl mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold mt-4">Meet, make or create</h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">Create a memorable experience in a memorable space, and enjoy!</p>
        </div>
      </div>
    </section>

      <Footer />
    </div>
  );
};

export default Home;
