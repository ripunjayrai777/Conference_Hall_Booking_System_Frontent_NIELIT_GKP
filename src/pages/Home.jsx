

import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    
      
    <div className="min-h-screen flex flex-col">
      <Header/>
      

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-600 bg-opacity-90 shadow-md">
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-gray-200 hover:text-gray-50">Home</Link>
          <Link to="/about" className="text-gray-200 hover:text-gray-50">About</Link>
          <Link to="/contact" className="text-gray-200 hover:text-gray-50">Contact</Link>
        </div>
        <div className="space-x-4">
          <Link to="/book" className="px-4 py-2 bg-red-500 hover:bg-red-700 text-gray-100 hover:text-white rounded-full transition-all">Book Now</Link>
          <Link to="/login" className="px-4 py-2 bg-yellow-500 hover:bg-yellow-700 text-gray-100 hover:text-white rounded-full transition-all">Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center bg-gray-200 text-gray-900 px-6 py-32 bg-opacity-50 min-h-[80vh]">
        <h1 className="text-5xl font-bold mb-4">Book It!</h1>
        <p className="text-lg max-w-2xl">Your perfect venue for unforgettable events awaits you!</p>
        <Link to="/get-started" className="mt-6 px-6 py-3 bg-white hover:bg-gray-500 text-black hover:text-gray-50 rounded-md transition-all">Get Started</Link>
      </div>

      
      
    
    <Footer/>
    </div>
  );
};

export default Home;
