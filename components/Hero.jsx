import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import lawu from "@/public/assets/lawu.jpg";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxValue = -scrollY * 0.15;

  return (
    <section className="container-5xl relative">
      <div className="flex justify-center p-4">
        <div className="max-w-7xl w-full relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-96 relative"
            style={{ transform: `translateY(${parallaxValue}px)` }}
          >
            <Image
              src={lawu}
              alt="Mount Lawu"
              layout="fill"
              objectFit="cover"
              style={{ opacity: 0.7 }}
              className="rounded-xl"
            />
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-left"
          >
            <p className="text-sm mt-2">
            More than 18500 tropical Islands form the archipelago of Indonesia. A balanced tropical climate, fertile soils with high nutrient content and exceptional biodiversity form a good ground to plant a wide variety of spices and herbs.
              Situated in the West of Java, Mount Lawu offers a natural environment, surrounded by countless lush gardens. They belong mostly to small farmers who have maintained and cultivated their gardens with love and care for centuries.
              Mount Lawu imports selected Indonesian agricultural products exclusively to Switzerland. The highest quality standards are adhered to during cultivation and processing.
              Do you have any special requests or would you like to get to know Mount Lawu products? We are looking forward to your contact!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
