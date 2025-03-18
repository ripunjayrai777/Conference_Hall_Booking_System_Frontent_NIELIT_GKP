import React from 'react'

const Header = () => {
  return (
    <div>
        {/* Main Header */}
      <div className="flex justify-between p-4 items-center bg-gray-200 shadow-md">
        {/* Left Section */}
        <div className="flex items-center">
          <img src="Logo.png" alt="Logo" className="mr-4 w-24 h-14" />
          <div className="header-title">
            <h1 className="text-lg text-[#1976d2] font-semibold">
              राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान
            </h1>
            <h2 className="text-sm text-gray-600">
              National Institute of Electronics & Information Technology
            </h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          <img
            src="Emblem.png"
            alt="Government of India Logo"
            className="mr-4 w-12 h-16"
          />
          <div className="ministry-title">
            <h3 className="text-[#1976d2] font-medium">
              Ministry of Electronics & Information Technology
            </h3>
            <h4 className="text-sm text-gray-600">Government of India</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header