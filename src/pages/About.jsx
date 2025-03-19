
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Team from '../components/Team';
import { FaBars, FaTimes } from "react-icons/fa";

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
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
      {/* About Section */}
      <Team />
    
      {/* Features Section */}
      <div className="text-center bg-gray-200 px-4 sm:px-6 md:px-12 lg:px-20 py-8">
        <h1 className='text-2xl font-semibold text-gray-500'>Arena Features</h1>
        <div className='text-gray-600 text-justify max-w-4xl mx-auto text-sm sm:text-base leading-relaxed mt-4'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor corporis rem, asperiores impedit nesciunt quas Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione doloremque nesciunt consequuntur iure veniam odio ullam, distinctio vel sed cum laudantium provident dignissimos. Saepe ullam repellat quaerat earum culpa?</p>
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor corporis rem, asperiores impedit nesciunt quas Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa et voluptas?</p>
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor corporis rem, asperiores impedit nesciunt quas Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptas illum quo, nesciunt consectetur sapiente rerum doloribus voluptates commodi sequi porro error ut labore, aperiam corporis dignissimos nulla. Explicabo cumque in non dolorum autem perferendis blanditiis debitis earum porro assumenda?</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
