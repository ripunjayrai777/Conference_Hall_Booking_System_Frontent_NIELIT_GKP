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
          <Link to="/" className="text-gray-200  hover:text-gray-50">Home</Link>
          <Link to="/about" className="text-gray-200 hover:text-gray-50">About</Link>
          <Link to="/contact" className="text-gray-200 hover:text-gray-50">Contact</Link>
        </div>
      </nav>
      {/*about section open*/}
      <Team/>
    
      {/*Feature of Our Halls*/}
      <div className="text-center bg-gray-200">
        <h1 className='text-2xl font-semibold text-gray-500 '>Arena Features</h1>
        <div className='text-gray-600 p-15 text-justify'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor corporis rem, asperiores impedit nesciunt quas dolore maiores illum perspiciatis possimus explicabo sit soluta in facere laboriosam eveniet commodi veritatis ratione?  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia laudantium, aliquid ipsa sit maiores quos exercitationem nobis eaque atque velit nesciunt voluptatum aliquam dolorem unde illo facilis quo assumenda neque?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor corporis rem, asperiores impedit nesciunt quas dolore maiores illum perspiciatis possimus explicabo sit soluta in facere laboriosam eveniet commodi veritatis ratione?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor corporis rem, asperiores impedit nesciunt quas dolore maiores illum perspiciatis possimus explicabo sit soluta in facere laboriosam eveniet commodi veritatis ratione?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolores ex cupiditate provident, dolorum nisi omnis repellat sapiente harum suscipit maiores earum dignissimos delectus, mollitia vel molestiae numquam? Similique, enim.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About