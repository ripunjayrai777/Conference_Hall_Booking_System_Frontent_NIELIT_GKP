import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaMobileAlt, FaCalendarCheck, FaClipboardCheck } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();


  const heroImages = [
    "https://demo.webdevia.com/uspace-locations-and-venues-listing-wordpress-theme/wp-content/uploads/2022/11/image-11-2.jpg",
    "https://demo.webdevia.com/uspace-locations-and-venues-listing-wordpress-theme/wp-content/uploads/2022/11/image-11-6.jpg",
    "https://demo.webdevia.com/uspace-locations-and-venues-listing-wordpress-theme/wp-content/uploads/2022/11/product-1.webp",
    "https://demo.webdevia.com/uspace-locations-and-venues-listing-wordpress-theme/wp-content/uploads/2022/11/image-11-1.jpg",
  ];


  const popularLocations = [
    {
      id: 1,
      title: "Beautiful Event Space",
      price: "INR 1999.00/ Hour",
      image: "https://demo.webdevia.com/uspace-locations-and-venues-listing-wordpress-theme/wp-content/uploads/2022/11/image-11-2-490x490.jpg",
    },
    {
      id: 2,
      title: "Cosy Modern Private SoHo Penthouse",
      price: "INR 2990.00/ Hour",
      image: "https://demo.webdevia.com/uspace-locations-and-venues-listing-wordpress-theme/wp-content/uploads/2022/11/image-11-6-490x490.jpg",
    },
    {
      id: 3,
      title: "Charming Happy House in East Cobb",
      price: "INR 1990.00/ Hour",
      image: "https://demo.webdevia.com/uspace-locations-and-venues-listing-wordpress-theme/wp-content/uploads/2022/11/product-1.webp",
    },
    {
      id: 4,
      title: "Modern Star Island Home",
      price: "INR 1999.00/ Hour",
      image: "https://demo.webdevia.com/uspace-locations-and-venues-listing-wordpress-theme/wp-content/uploads/2022/11/image-11-1-490x490.jpg",
    },
  ];

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
      {/* <div className="flex flex-col items-center justify-center text-center bg-gray-200 text-gray-900 px-4 sm:px-6 py-20 sm:py-32 bg-opacity-50 min-h-[60vh] sm:min-h-[80vh]">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Book It!</h1>
        <p className="text-sm sm:text-lg max-w-md sm:max-w-2xl">Your perfect venue for unforgettable events awaits you!</p>
        <div className="flex item-center justify-center text-center gap-5">
        <Link to="/book" className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-red-500 hover:bg-gray-500 text-gray-100 hover:text-gray-50 rounded-md transition-all text-sm sm:text-base hover:shadow-2xl">Book Now</Link>
        <Link to="/availability" 
        className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-green-600 hover:bg-gray-500 text-white hover:text-gray-50 rounded-md transition-all text-sm sm:text-base hover:shadow-2xl"
        >Check Availability</Link>
        </div>
      </div> */}


        {/* Hero Section with Carousel Background */}
      <div className="relative w-full min-h-[60vh] sm:min-h-[80vh]">
        {/* Swiper Background */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="absolute inset-0 w-full h-full"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover absolute inset-0"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Book It!</h1>
          <p className="text-sm sm:text-lg max-w-md sm:max-w-2xl">
            Your perfect venue for unforgettable events awaits you!!!
          </p>
          <div className="flex item-center justify-center text-center gap-5">
            <Link
              to="/book"
              className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-red-500 hover:bg-gray-500 text-gray-100 hover:text-gray-50 rounded-md transition-all text-sm sm:text-base hover:shadow-2xl"
            >
              Book Now
            </Link>
            <Link
              to="/availability"
              className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-green-600 hover:bg-gray-500 text-white hover:text-gray-50 rounded-md transition-all text-sm sm:text-base hover:shadow-2xl"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </div>



     

     {/* Feature Section */}


      <section className="py-16 bg-gray-200 text-center px-4 md:px-8 lg:px-16">
      <h3 className="text-gray-500 uppercase tracking-wider text-sm md:text-base lg:text-lg">Be inspired to meet, create, and innovate.</h3>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Book a space that suits you</h2>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="bg-gray-50 text-center p-6 border rounded-lg shadow-md hover:shadow-2xl transition durat ion-300 transition-transform hover:scale-105">
          <div className="flex items-center justify-left mb-4">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-lg font-bold">01</span>
          </div>
          <FaMobileAlt className="text-gray-600 text-7xl md:text-6xl mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold mt-4">Find the perfect space</h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">Browse the marketplace and customize your search to suit your activity needs.</p>
        </div>
        
        {/* Step 2 */}
        <div className="bg-gray-50 text-center p-6 border rounded-lg shadow-md hover:shadow-2xl transition duration-300 transition-transform hover:scale-105">
          <div className="flex items-center justify-left mb-4">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-lg font-bold">02</span>
          </div>
          <FaCalendarCheck className="text-gray-600 text-7xl md:text-6xl mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold mt-4">Book it with ease</h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">Once you find the ideal match, reserve the space and pay securely online with our payment system.</p>
        </div>
        
        {/* Step 3 */}
        <div className="bg-gray-50 text-center p-6 border rounded-lg shadow-md hover:shadow-2xl transition duration-300 transition-transform hover:scale-105">
          <div className="flex items-center justify-left mb-4">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-lg font-bold">03</span>
          </div>
          <FaClipboardCheck className="text-gray-600 text-7xl md:text-6xl mx-auto" />
          <h3 className="text-lg md:text-xl font-semibold mt-4">Meet, make or create</h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base">Create a memorable experience in a memorable space, and enjoy!</p>
        </div>
      </div>
    </section>

      {/* Popular Locations */}


      <section className="py-16 bg-gray-200 text-center px-4 md:px-8 lg:px-16">
      <h3 className="text-gray-500 uppercase tracking-wider text-sm md:text-base lg:text-lg">
        Be inspired to meet, create, and innovate.
      </h3>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
        Our most popular halls
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {popularLocations.map((location) => (
          <div
            key={location.id}
            className="group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={location.image}
              alt={location.title}
              width={300}
              height={200}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{location.title}</h3>
              <p className="text-gray-600">{location.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button
          onClick={() => navigate("/halls")}
          className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition duration-300"
        >
          View All Details
        </button>
      </div>
    </section>
      <Footer />
    </div>
  );
};

export default Home;
