import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* Footer */}
      <footer className="mt-auto bg-gray-600 text-white text-center py-6">
        <div className="container mx-auto">
          <h3 className="text-lg font-semibold text-gray-50">NIELIT Gorakhpur</h3>
          <p className="text-sm text-gray-50">Conference Hall Booking System</p>
          <p className="text-xs mt-2 text-gray-50">© {new Date().getFullYear()} NIELIT Gorakhpur. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
//checking..