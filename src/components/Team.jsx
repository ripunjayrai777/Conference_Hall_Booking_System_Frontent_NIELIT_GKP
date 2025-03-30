

import React from "react";
import { motion } from "framer-motion";

const TeamSection = () => {
  return (
    <section className="relative py-16 bg-gray-200">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">
          Meet Our<br />
          <span className="italic text-gray-600">Arena</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-8 relative">
        <motion.img
          src="https://demo.webdevia.com/uspace-locations-and-venues-listing-wordpress-theme/wp-content/uploads/2022/11/image-11-6.jpg"
          alt="image_1"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-lg shadow-lg hover:scale-110 transition-all duration-500"
        />
        <motion.img
          src="https://demo.webdevia.com/uspace-locations-and-venues-listing-wordpress-theme/wp-content/uploads/2022/11/image-11-2.jpg"
          alt="image_2"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-lg shadow-lg hover:scale-110 transition-all duration-500"
        />
        <motion.img
          src="https://demo.webdevia.com/uspace-locations-and-venues-listing-wordpress-theme/wp-content/uploads/2022/11/product-1.webp"
          alt="image_3"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-lg shadow-lg hover:scale-110 transition-all duration-500"
        />
      </div>
    </section>
  );
};

export default TeamSection;
