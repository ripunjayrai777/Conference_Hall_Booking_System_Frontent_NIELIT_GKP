
import React from 'react';

const Header = () => {
  return (
    <div>
      {/* Main Header */}
      <div className="flex flex-col md:flex-row justify-between p-4 items-center bg-gray-200 shadow-md text-center md:text-left">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center mb-2 md:mb-0">
          <img src="Logo.png" alt="Logo" className="mb-2 md:mb-0 md:mr-4 w-20 h-12 md:w-24 md:h-14" />
          <div className="header-title">
            <h1 className="text-base md:text-lg text-[#1976d2] font-semibold">
              राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान
            </h1>
            <h2 className="text-xs md:text-sm text-gray-600">
              National Institute of Electronics & Information Technology
            </h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="Emblem.png"
            alt="Government of India Logo"
            className="mb-2 md:mb-0 md:mr-4 w-10 h-14 md:w-12 md:h-16"
          />
          <div className="ministry-title">
            <h3 className="text-sm md:text-base text-[#1976d2] font-medium">
              Ministry of Electronics & Information Technology
            </h3>
            <h4 className="text-xs md:text-sm text-gray-600">Government of India</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;