import React, { useState } from "react";
import { motion } from "framer-motion";

const TeamSection = () => {
  const [hoverEffect, setHoverEffect] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setHoverEffect({
      x: (clientX / window.innerWidth - 0.5) * 20,
      y: (clientY / window.innerHeight - 0.5) * 20,
    });
  };

  return (
    <section
      className="relative py-16 bg-gray-100"
      onMouseMove={handleMouseMove}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          Meet ouR<br />
          <span className="italic text-purple-600">Team</span>
        </h2>
      </div>
      <div className="flex justify-center gap-6 mt-8 relative">
        <motion.img
          src="https://cdn.prod.website-files.com/64a3d5b18529a87c8cf9472a/651e919c0680c2e7af8d1de8_TH%201.jpg"
          alt="David Bromley and Yuge Bromley dancing with little gold painted girls"
          className="w-48 h-48 object-cover rounded-lg shadow-lg"
          animate={{ x: hoverEffect.x, y: hoverEffect.y }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        />
        <motion.img
          src="https://cdn.prod.website-files.com/64a3d5b18529a87c8cf9472a/651e919c5cfda45e13ff65d7_TH%202.jpg"
          alt="Children’s feet on ornate floor"
          className="w-48 h-48 object-cover rounded-lg shadow-lg"
          animate={{ x: -hoverEffect.x, y: -hoverEffect.y }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        />
        <motion.div
          className="w-48 h-48 rounded-lg overflow-hidden shadow-lg"
          animate={{ x: hoverEffect.x / 2, y: hoverEffect.y / 2 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.prod.website-files.com/64a3d5b18529a87c8cf9472a/64f1a1bced886d13a67383a2_test-clip-cropped-transcode.mp4" type="video/mp4" />
            <source src="https://cdn.prod.website-files.com/64a3d5b18529a87c8cf9472a/64f1a1bced886d13a67383a2_test-clip-cropped-transcode.webm" type="video/webm" />
          </video>
        </motion.div>
      </div>
      <div className="mt-8 text-center">
        <a
          href="/team"
          className="text-black font-medium underline decoration-black hover:text-gray-700"
        >
          Meet the team
        </a>
      </div>
    </section>
  );
};

export default TeamSection;
