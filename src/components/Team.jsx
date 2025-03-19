

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
          src="https://scontent.fvns5-1.fna.fbcdn.net/v/t39.30808-6/478519399_959297856378938_5335656658079427977_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QCCrPz0V9VwQ7kNvgHgcjYk&_nc_oc=Adl3pZ0z-S_m9oR-9dzugjGXwJn0raivhN8rqFvYf8YAb3yYZ5QOQ6CMJXuy4M2pc0I&_nc_zt=23&_nc_ht=scontent.fvns5-1.fna&_nc_gid=XkSZcBI8cqeHZIXEJ5_LKQ&oh=00_AYETuz1G1R5XMIEceCuu0HzzvYtnDAg_FmnPK4V1N01W9Q&oe=67E0D5BE"
          alt="image_1"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-lg shadow-lg hover:scale-110 transition-all duration-500"
        />
        <motion.img
          src="https://scontent.fvns5-1.fna.fbcdn.net/v/t39.30808-6/484869801_1209687957184405_1358548422979599698_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MffV8dI9dy4Q7kNvgEIQ3gQ&_nc_oc=Adl8J7YXYNMgYhB4wMvIptC0xOyPiAfp4DupjPykoCj2pKMG8xik9H7jrTGfOcQgip4&_nc_zt=23&_nc_ht=scontent.fvns5-1.fna&_nc_gid=r8taHwAUq5XQk085Mqcgww&oh=00_AYEUaDNHf85rhUNFTfT7nivqEN5t3kz5Yj-_L7pLU7-F4w&oe=67E0DF74"
          alt="image_2"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-lg shadow-lg hover:scale-110 transition-all duration-500"
        />
        <motion.img
          src="https://scontent.fvns5-1.fna.fbcdn.net/v/t39.30808-6/482977728_962618162718876_7313326085850992060_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=erowebQIyCkQ7kNvgGik72E&_nc_oc=AdkpuJ8tll2OeJFKsUK8rZO5qOk3K5n-WgPM9bU-ALi29YjEF5w-2_5TvjndRm6gKWk&_nc_zt=23&_nc_ht=scontent.fvns5-1.fna&_nc_gid=ldBZVNVFyXRqNqrKAKrerA&oh=00_AYEepThVCPsyHG_E1p9ykuzpN3hkUAa4R9mGjszxxiM4AA&oe=67E0D775"
          alt="image_3"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-lg shadow-lg hover:scale-110 transition-all duration-500"
        />
      </div>
    </section>
  );
};

export default TeamSection;
