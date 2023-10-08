import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function VanillaProducts() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    container: false,
    description: false,
  });

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const containerRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const isMobile = window.innerWidth <= 1000;

    const containerThreshold = isMobile ? 0 * windowHeight : 3 * windowHeight;
    const descriptionThreshold = isMobile ? 0 * windowHeight : 3 * windowHeight;

    setIsVisible({
      container: scrollPosition >= containerThreshold,
      description: scrollPosition >= descriptionThreshold,
    });
  }, [scrollY]);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const isMobile = window.innerWidth <= 1000;
    const totalContentHeight =
      windowHeight +
      (containerRef.current ? containerRef.current.offsetHeight : isMobile ? 1850 : 1000) +
      (descriptionRef.current ? descriptionRef.current.offsetHeight : isMobile ? 1850 : 1000)

    if (window.scrollY > totalContentHeight) {
      setIsVisible({
        container: false,
        description: false,
      });
    }
  }, [scrollY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.4 } },
  };


  return (
    <div className="container mx-auto p-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="container mx-auto"
          variants={containerVariants}
          initial={isVisible.container ? "visible" : "hidden"}
          animate={isVisible.container ? "visible" : "hidden"}
        >
          <h2 className="text-md font-bold mb-2">Vanilla Products</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row lg:gap-4 sm:gap-0 justify-center items-center md:justify-between">
          <motion.div
            className="flex flex-col justify-center space-y-2 text-sm mb-4"
            variants={descriptionVariants}
            initial={isVisible.description ? "visible" : "hidden"}
            animate={isVisible.description ? "visible" : "hidden"}
          >
            <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "wrap", lineHeight: "1.6"}}>
            ※ The Vanilla Planifolia (spiced vanilla) is a demanding plant. To ensure sustainability in cultivation, a mixture of turmeric (against stem rot) and salt, tobacco and citrus fruits (against fungal attack) is used instead of pesticides. It is fertilized with an organic mixture of chicken manure and offcuts from the rice harvest. <br/>
            ※ The ripened vanilla beans are usually harvested at the end of the dry season, in August/September. Algi and his team examine each flower stem and determine the optimal harvest time and selection based on our quality requirements. Because of the higher production costs, growers receive a higher price. <br/>
            ※ The pods are then cleaned and selected. Beans selected for Mount Lawu are blanched in water at 65 degrees for about 2.5 minutes. <br/>
            ※ Next step: The pods are dried. The fermentation process follows in wooden boxes with coconut fibers and wood chips. This process is repeated every 24 hours until optimal quality is achieved. This process can take up to seven months. <br/>
            ※ Now the pods are checked for external quality characteristics and water content. The external laboratory control takes place at Laboratory XXX. <br/>
            ※ The pods are stored professionally and hygienically in our warehouse in Sukabumi at a constant temperature of 20 degrees Celsius. <br/>
            ※ Delivery takes place within 5 working days of receipt of the order. Every delivery is double-checked in Switzerland. Delivery takes place in vacuum-packed PET films of 500 grams each. These are marked with the exact date of origin and packaging. The laboratory test reports and the specification list are included with every delivery.
            </div>
          </motion.div>
        </div>

       

      </div>
    </div>
  );
}
