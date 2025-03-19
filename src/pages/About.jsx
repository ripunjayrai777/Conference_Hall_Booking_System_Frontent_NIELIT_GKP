import React from 'react'
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Team from '../components/Team';

const About = () => {
  return (
    <div>
      <Header />
       {/* Navbar */}
       <nav className="flex items-center justify-between px-6 py-4 bg-gray-600 bg-opacity-90 shadow-md">
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-gray-200 hover:text-gray-50">Home</Link>
          <Link to="/about" className="text-gray-200 hover:text-gray-50">About</Link>
          <Link to="/contact" className="text-gray-200 hover:text-gray-50">Contact</Link>
        </div>
      </nav>
      {/*about section open*/}
      <Team/>
      {/*about section close*/}
      <Footer />
    </div>
  )
}

export default About