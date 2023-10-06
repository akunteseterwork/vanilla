import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import workImage1 from "@/public/assets/our-work/image1.jpg";
import workImage2 from "@/public/assets/our-work/image2.jpg";

const images = [workImage1, workImage2];
const descriptions = [
  "The island of Java is around 2.5 times the size of Switzerland...",
  "Algi Febrian is our quality manager on site: He studied organic agriculture...",
];

export default function OurWork() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleDotClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
        <div id="our-work">
          <h1 className="lg:text-2xl sm:text-md font-semibold mb-2 text-center">
            How We Work
          </h1>
        </div>

        <div className="carousel-container relative mb-4">
          <AnimatePresence wait>
            <motion.div
              key={selectedImageIndex}
              className="carousel-image relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Image
                src={images[selectedImageIndex]}
                alt={`Work Image ${selectedImageIndex + 1}`}
                layout="fill"
                className="rounded-xl"
                objectFit="cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="carousel-description mb-4 text-center text-white">
          {descriptions[selectedImageIndex]}
        </div>

        <div className="carousel-dots flex justify-center">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === selectedImageIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
  );
}
