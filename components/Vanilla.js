import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const VanillaProducts = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    container: false,
    paragraph: false,
  });

  const textLines = [
    "※ The Vanilla Planifolia (spiced vanilla) is a demanding plant. To ensure sustainability in cultivation, a mixture of turmeric (against stem rot) and salt, tobacco and citrus fruits (against fungal attack) is used instead of pesticides. It is fertilized with an organic mixture of chicken manure and offcuts from the rice harvest.",
    "※ The ripened vanilla beans are usually harvested at the end of the dry season, in August/September. Algi and his team examine each flower stem and determine the optimal harvest time and selection based on our quality requirements. Because of the higher production costs, growers receive a higher price.",
    "※ The pods are then cleaned and selected. Beans selected for Mount Lawu are blanched in water at 65 degrees for about 2.5 minutes.",
    "※ Next step: The pods are dried. The fermentation process follows in wooden boxes with coconut fibers and wood chips. This process is repeated every 24 hours until optimal quality is achieved. This process can take up to seven months.",
    "※ Now the pods are checked for external quality characteristics and water content. The external laboratory control takes place at Laboratory XXX.",
    "※ The pods are stored professionally and hygienically in our warehouse in Sukabumi at a constant temperature of 20 degrees Celsius.",
    "※ Delivery takes place within 5 working days of receipt of the order. Every delivery is double-checked in Switzerland. Delivery takes place in vacuum-packed PET films of 500 grams each. These are marked with the exact date of origin and packaging. The laboratory test reports and the specification list are included with every delivery."

  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    const containerThreshold = 3 * windowHeight;
    const paragraphThreshold = 3 * windowHeight;

    setIsVisible({
      container: scrollPosition >= containerThreshold,
      paragraph: scrollPosition >= paragraphThreshold,
    });
  }, [scrollY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="container mx-auto max-w-5xl relative z-1">
        <motion.div
          id="our-products"
          className="container mx-auto"
          variants={containerVariants}
          initial={isVisible.container ? "visible" : "hidden"}
          animate={isVisible.container ? "visible" : "hidden"}
        >
          <h2 className="text-md font-bold mb-6">Vanilla Products</h2>
        </motion.div>
        {textLines.map((text, index) => (
          <motion.p
            key={index}
            variants={paragraphVariants}
            initial={isVisible.paragraph ? "visible" : "hidden"}
            animate={isVisible.paragraph ? "visible" : "hidden"}
            custom={index}
            className="text-sm leading-6 mb-4"
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default VanillaProducts;
