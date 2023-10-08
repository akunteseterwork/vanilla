import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import headerImage from "@/public/assets/our-quality/header.jpg";

export default function Quality() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    container: false,
    header: false,
    description1: false,
    description2: false,
    description3: false,
    description4: false,
  });

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const description1Ref = useRef(null);
  const description2Ref = useRef(null);
  const description3Ref = useRef(null);
  const description4Ref = useRef(null);

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

    const containerThreshold = isMobile ? 0 * windowHeight : 3.6 * windowHeight;
    const headerThreshold = isMobile ? 0 * windowHeight : 3.7 * windowHeight;
    const description1Threshold = isMobile ? 0 * windowHeight : 3.8 * windowHeight;
    const description2Threshold = isMobile ? 0 * windowHeight : 3.82 * windowHeight;
    const description3Threshold = isMobile ? 0 * windowHeight : 3.84 * windowHeight;
    const description4Threshold = isMobile ? 0 * windowHeight : 3.86 * windowHeight;

    setIsVisible({
      container: scrollPosition >= containerThreshold,
      header: scrollPosition >= headerThreshold,
      description1: scrollPosition >= description1Threshold,
      description2: scrollPosition >= description2Threshold,
      description3: scrollPosition >= description3Threshold,
      description4: scrollPosition >= description4Threshold,
    });
  }, [scrollY]);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const isMobile = window.innerWidth <= 1000;
    const totalContentHeight =
      windowHeight +
      (containerRef.current ? containerRef.current.offsetHeight : isMobile ? 1500 : 540) +
      (headerRef.current ? headerRef.current.offsetHeight : isMobile ? 1500 : 540) +
      (description1Ref.current ? description1Ref.current.offsetHeight : isMobile ? 1500 : 540) +
      (description2Ref.current ? description2Ref.current.offsetHeight : isMobile ? 1500 : 540) +
      (description3Ref.current ? description3Ref.current.offsetHeight : isMobile ? 1500 : 540) +
      (description4Ref.current ? description4Ref.current.offsetHeight : isMobile ? 1500 : 540);

    if (window.scrollY > totalContentHeight) {
      setIsVisible({
        container: false,
        header: false,
        description1: false,
        description2: false,
        description3: false,
        description4: false,
      });
    }
  }, [scrollY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.1 } },
  };

  const description1Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 } },
  };

  const description2Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
  };

  const description3Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.6 } },
  };
  const description4Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.8 } },
  };

  return (
    <div className="container mx-auto p-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          id="our-quality"
          className="container mx-auto"
          variants={containerVariants}
          initial={isVisible.container ? "visible" : "hidden"}
          animate={isVisible.container ? "visible" : "hidden"}
        >
          <h1 className="lg:text-2xl sm:text-md font-semibold mb-2">How We Ensure Quality</h1>
        </motion.div>
        <motion.div
          className="relative w-full h-64 md:h-96 mb-6"
          variants={headerVariants}
          initial={isVisible.header ? "visible" : "hidden"}
          animate={isVisible.header ? "visible" : "hidden"}
        >
          <Image
            src={headerImage}
            alt="Our Work Header"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </motion.div>

        <div className="flex flex-col md:flex-row lg:gap-4 sm:gap-0 justify-center items-center md:justify-between">
          <motion.div
            className="flex flex-col justify-center space-y-2 text-sm mb-4"
            variants={description1Variants}
            initial={isVisible.description1 ? "visible" : "hidden"}
            animate={isVisible.description1 ? "visible" : "hidden"}
          >
            <h2 className="text-md font-bold">Personal and on cordial terms</h2>
            <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "wrap", lineHeight: "1.6" }}>
              ※ We maintain personal and close relationships with our farmers and suppliers. <br />
              ※ Traceability is guaranteed at all times in the production and supply chain. Each delivery is marked with the exact origin of the batches and packing date.<br />
              ※ We assure to operate in a way which is ethical, transparent and sustainable. In order to maintain long-term supply chain and cooperation, we want to ensure sustainable production. Therefore, we commit our farmers to reduce the environmental impact. Pesticides are not used in either cultivation or processing.<br />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row lg:gap-4 sm:gap-0 justify-center items-center md:justify-between">
          <motion.div
            className="flex flex-col justify-center space-y-2 text-sm mb-4"
            variants={description2Variants}
            initial={isVisible.description2 ? "visible" : "hidden"}
            animate={isVisible.description2 ? "visible" : "hidden"}
          >
            <h2 className="text-md font-bold">Quality orientated and double tested</h2>
            <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "wrap", lineHeight: "1.6" }}>
              ※ Our products are grown in agroecologically diversified gardens. <br />
              ※ Each delivery is handpicked by our local experts. <br />
              ※ On request, we deliver certified organic products according to EU standards.
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row lg:gap-4 sm:gap-0 justify-center items-center md:justify-between">
          <motion.div
            className="flex flex-col justify-center space-y-2 text-sm mb-4"
            variants={description3Variants}
            initial={isVisible.description3 ? "visible" : "hidden"}
            animate={isVisible.description3 ? "visible" : "hidden"}
          >
            <h2 className="text-md font-bold">Open to your concerns</h2>
            <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "wrap" }}>
              ※ We deal with your inquiries and concerns quickly and easily with all the necessary information. <br />
              ※ With our competent and experienced partners in logistics for the food sector, reliable delivery is guaranteed. We take care of all questions and clarifications on logistics, import regulations, declarations and customs. <br />
              ※ We check your concerns with our partners in Indonesia. Let us know if you have any special requirements for labels.
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row lg:gap-4 sm:gap-0 justify-center items-center md:justify-between">
          <motion.div
            className="flex flex-col justify-center space-y-2 text-sm mb-4"
            variants={description4Variants}
            initial={isVisible.description4 ? "visible" : "hidden"}
            animate={isVisible.description4 ? "visible" : "hidden"}
          >
            <h2 className="text-md font-bold">Focussed on Vanilla products</h2>
            <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "wrap", lineHeight: "1.6" }}>
              ※ Our vanilla beans are tested for the following characteristics before export in Indonesia: water content, vanillin content, texture, colour and weight. <br />
              ※ In Switzerland, our vanilla beans are regularly tested by Veritas Laboratory in Zurich.<br />
              ※ We provide the test results to our customers with every delivery.
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
