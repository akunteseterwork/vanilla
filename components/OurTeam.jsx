import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "./ModalImage";
import headerImage from "@/public/assets/our-team/header.jpg";
import member1 from "@/public/assets/our-team/1.png";
import member2 from "@/public/assets/our-team/2.png";
import member3 from "@/public/assets/our-team/3.png";
import member4 from "@/public/assets/our-team/4.png";
import member5 from "@/public/assets/our-team/5.png";
import member6 from "@/public/assets/our-team/6.png";

export default function OurTeam() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    container: false,
    header: false,
    member1: false,
    member2: false,
    member3: false,
    member4: false,
    member5: false,
    member6: false,
  });

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const member1Ref = useRef(null);
  const member2Ref = useRef(null);
  const member3Ref = useRef(null);
  const member4Ref = useRef(null);
  const member5Ref = useRef(null);
  const member6Ref = useRef(null);

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

    const containerThreshold = isMobile ? 0 * windowHeight : 4.5 * windowHeight;
    const headerThreshold = isMobile ? 0 * windowHeight : 4.5 * windowHeight;
    const member1Threshold = isMobile ? 0 * windowHeight : 4.8 * windowHeight;
    const member2Threshold = isMobile ? 0 * windowHeight : 4.82 * windowHeight;
    const member3Threshold = isMobile ? 0 * windowHeight : 4.84 * windowHeight;
    const member4Threshold = isMobile ? 0 * windowHeight : 4.86 * windowHeight;
    const member5Threshold = isMobile ? 0 * windowHeight : 4.88 * windowHeight;
    const member6Threshold = isMobile ? 0 * windowHeight : 4.89 * windowHeight;

    setIsVisible({
      container: scrollPosition >= containerThreshold,
      header: scrollPosition >= headerThreshold,
      member1: scrollPosition >= member1Threshold,
      member2: scrollPosition >= member2Threshold,
      member3: scrollPosition >= member3Threshold,
      member4: scrollPosition >= member4Threshold,
      member5: scrollPosition >= member5Threshold,
      member6: scrollPosition >= member6Threshold,
    });
  }, [scrollY]);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const isMobile = window.innerWidth <= 1000;
    const totalContentHeight =
      windowHeight +
      (containerRef.current ? containerRef.current.offsetHeight : isMobile ? 3800 : 1860) +
      (headerRef.current ? headerRef.current.offsetHeight : isMobile ? 3800 : 1860) +
      (member1Ref.current ? member1Ref.current.offsetHeight : isMobile ? 3800 : 1860) +
      (member2Ref.current ? member2Ref.current.offsetHeight : isMobile ? 3800 : 1860) +
      (member3Ref.current ? member3Ref.current.offsetHeight : isMobile ? 3800 : 1860) +
      (member4Ref.current ? member4Ref.current.offsetHeight : isMobile ? 3800 : 1860) +
      (member5Ref.current ? member5Ref.current.offsetHeight : isMobile ? 3800 : 1860) +
      (member6Ref.current ? member6Ref.current.offsetHeight : isMobile ? 3800 : 1860);

    if (window.scrollY > totalContentHeight) {
      setIsVisible({
        container: false,
        header: false,
        member1: false,
        member2: false,
        member3: false,
        member4: false,
      });
    }
  }, [scrollY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
  };

  const memberVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.2 } },
    hover: { scale: 1.05, transition: { duration: 0.1 } },
  };

  return (
    <div className="container mx-auto p-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          id="our-team"
          className="container mx-auto"
          variants={containerVariants}
          initial={isVisible.container ? "visible" : "hidden"}
          animate={isVisible.container ? "visible" : "hidden"}
        >
          <h1 className="lg:text-2xl text-sm font-normal mb-2 text-white">Our Team</h1>
        </motion.div>
        <motion.div
          className="relative w-full h-64 md:h-96 mb-6"
          variants={headerVariants}
          initial={isVisible.header ? "visible" : "hidden"}
          animate={isVisible.header ? "visible" : "hidden"}
        >
          <Image
            src={headerImage}
            alt="Our Team Header"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </motion.div>
        {selectedImage && <Modal imageUrl={selectedImage.src} onClose={() => setSelectedImage(null)} />}

        <div className="flex flex-wrap justify-center mt-12">

          <motion.div
            className="flex flex-col items-center justify-center mb-20 p-2"
            style={{ flexBasis: "150px" }}
            variants={memberVariants}
            initial={isVisible.member1 ? "visible" : "hidden"}
            animate={isVisible.member1 ? "visible" : "hidden"}
            whileHover="hover"
            onClick={() => setSelectedImage(member1)}
            ref={member1Ref}
          >
            <Image
              src={member1}
              alt="Team Member 1"
              width={150}
              className="rounded-xl"
            />
            <div className="text-center text-normal text-white text-sm mt-2">
              <span>Lina & Donat Eltschinger</span>
            </div>
              <span className="font-light">Position</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center mb-20"
            style={{ flexBasis: "150px" }}
            variants={memberVariants}
            initial={isVisible.member2 ? "visible" : "hidden"}
            animate={isVisible.member2 ? "visible" : "hidden"}
            whileHover="hover"
            onClick={() => setSelectedImage(member2)}
            ref={member2Ref}
          >
            <Image
              src={member2}
              alt="Team Member 1"
              width={150}
              className="rounded-xl"
            />
            <div className="text-center text-normal text-white text-sm mt-2">
              <span>Boris Ramuz</span>
            </div>
              <span className="font-light">Position</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center mb-20"
            style={{ flexBasis: "150px" }}
            variants={memberVariants}
            initial={isVisible.member3 ? "visible" : "hidden"}
            animate={isVisible.member3 ? "visible" : "hidden"}
            whileHover="hover"
            onClick={() => setSelectedImage(member3)}
            ref={member3Ref}
          >
            <Image
              src={member3}
              alt="Team Member 1"
              width={150}
              className="rounded-xl"
            />
            <div className="text-center text-normal text-white text-sm mt-2">
              <span>Algi Febrian</span>
            </div>
              <span className="font-light">Position</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center mb-20"
            style={{ flexBasis: "150px" }}
            variants={memberVariants}
            initial={isVisible.member4 ? "visible" : "hidden"}
            animate={isVisible.member4 ? "visible" : "hidden"}
            whileHover="hover"
            onClick={() => setSelectedImage(member4)}
            ref={member4Ref}
          >
            <Image
              src={member4}
              alt="Team Member 1"
              width={150}
              className="rounded-xl"
            />
            <div className="text-center text-normal text-white text-sm mt-2">
              <span>Co-worker(s) Algi</span>
            </div>
              <span className="font-light">Position</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center mb-20"
            style={{ flexBasis: "150px" }}
            variants={memberVariants}
            initial={isVisible.member5 ? "visible" : "hidden"}
            animate={isVisible.member5 ? "visible" : "hidden"}
            whileHover="hover"
            onClick={() => setSelectedImage(member5)}
            ref={member5Ref}
          >
            <Image
              src={member5}
              alt="Team Member 1"
              width={150}
              className="rounded-xl"
            />
            <div className="text-center text-normal text-white text-sm mt-2">
              <span>Bauer als Beispiel, mit Familie</span>
            </div>
              <span className="font-light">Position</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center mb-20"
            style={{ flexBasis: "150px" }}
            variants={memberVariants}
            initial={isVisible.member6 ? "visible" : "hidden"}
            animate={isVisible.member6 ? "visible" : "hidden"}
            whileHover="hover"
            onClick={() => setSelectedImage(member6)}
            ref={member6Ref}
          >
            <Image
              src={member6}
              alt="Team Member 1"
              width={150}
              className="rounded-xl"
            />
            <div className="text-center text-normal text-white text-sm mt-2">
              <span>Yussuf Prayogo</span>
            </div>
              <span className="font-light">Position</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
