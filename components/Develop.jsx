// pages/develop.js
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import headerImage from "@/public/assets/develop/header.jpg";
import videoFile from "@/public/assets/develop/video.mp4";
import VideoModal from "./ModalVideo";
import { FaPlayCircle } from 'react-icons/fa';

export default function Develop() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    container: false,
    header: false,
    media: false,
    description: false,
  });

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBackgroundVideoPlaying, setIsBackgroundVideoPlaying] = useState(true);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const mediaRef = useRef(null);
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

    const containerThreshold = isMobile ? 0 * windowHeight : 4.6 * windowHeight;
    const headerThreshold = isMobile ? 0 * windowHeight : 4.7 * windowHeight;
    const mediaThreshold = isMobile ? 0 * windowHeight : 5.1 * windowHeight;
    const descriptionThreshold = isMobile ? 0 * windowHeight : 5.1 * windowHeight;

    setIsVisible({
      container: scrollPosition >= containerThreshold,
      header: scrollPosition >= headerThreshold,
      media: scrollPosition >= mediaThreshold,
      description: scrollPosition >= descriptionThreshold,
    });
  }, [scrollY]);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const isMobile = window.innerWidth <= 1000;
    const totalContentHeight =
      windowHeight +
      (containerRef.current ? containerRef.current.offsetHeight : isMobile ? 1800 : 1250) +
      (headerRef.current ? headerRef.current.offsetHeight : isMobile ? 1800 : 1250) +
      (mediaRef.current ? mediaRef.current.offsetHeight : isMobile ? 1900 : 1350) +
      (descriptionRef.current ? descriptionRef.current.offsetHeight : isMobile ? 1900 : 1350);

    if (window.scrollY > totalContentHeight) {
      setIsVisible({
        container: false,
        header: false,
        media: false,
        description: false,
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

  const mediaVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const handleVideoClick = () => {
    if (isBackgroundVideoPlaying) {
      setIsBackgroundVideoPlaying(false);
    }

    setIsVideoModalOpen(true);
  };

  const handleModalClose = () => {
    setIsVideoModalOpen(false);

    if (!isBackgroundVideoPlaying) {
      setIsBackgroundVideoPlaying(true);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          id="our-development"
          className="container mx-auto"
          variants={containerVariants}
          initial={isVisible.container ? "visible" : "hidden"}
          animate={isVisible.container ? "visible" : "hidden"}
        >
          <h1 className="lg:text-2xl sm:text-md font-semibold mb-2">How We Develop</h1>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-4 sm:gap-0 justify-center items-center">
          <motion.div
            className="flex flex-col items-center space-y-2 text-sm mx-auto mb-4 relative"
            variants={mediaVariants}
            initial={isVisible.media ? "visible" : "hidden"}
            animate={isVisible.media ? "visible" : "hidden"}
          >
            <button
              onClick={handleVideoClick}
              className="cursor-pointer"
            >
              <video
                controls
                width="360"
              >
                <source src={videoFile} type="video/mp4" />
              </video>
            </button>
            <div
              className="absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer"
              onClick={handleVideoClick}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-10"
            >
              <FaPlayCircle
                className="text-5xl text-white cursor-pointer"
                onClick={handleVideoClick}
              />
            </div>
          </motion.div>

          <motion.div
            className="text-sm text-center mb-8"
            variants={descriptionVariants}
            initial={isVisible.description ? "visible" : "hidden"}
            animate={isVisible.description ? "visible" : "hidden"}
            ref={descriptionRef}
          >
            The vanilla beans are ready for harvest approximately 6 to 9 months after pollination. The beans must be hand-picked, one at a time, at exactly the right moment of ripeness. Too early, and they won’t have the proper flavor, and too late…they may start splitting.
          </motion.div>
        </div>
      </div>

      {isVideoModalOpen && (
        <VideoModal
          videoFile={videoFile}
          onClose={handleModalClose}
          isVideoPlaying={isBackgroundVideoPlaying}
        />
      )}
    </div>
  );
}
