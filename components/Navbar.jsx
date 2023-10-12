"use client"
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const linkDelays = [0, 0.2, 0.4, 0.6, 0.8];

  const links = [
    { text: "Our Products", href: "#our-products" },
    { text: "How we work", href: "#our-work" },
    { text: "How we ensure Quality", href: "#our-quality" },
    { text: "How we develop", href: "#our-development" },
    { text: "Team & Contact", href: "#our-team" },
  ];

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full px-8 py-2">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-2">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Link href="/">
              <Image src={logo} alt="Logo" width={200} />
              </Link>
            </motion.div>
          </div>
          <div className="md:hidden">
            {isMobileMenuOpen ? (
              <FaTimes
                className="text-2xl cursor-pointer ml-auto"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ) : (
              <FaBars
                className="text-2xl cursor-pointer ml-auto"
                onClick={() => setIsMobileMenuOpen(true)}
              />
            )}
          </div>
          <div className="hidden md:flex justify-center items-center">
            <ul
              className={`flex font-semibold text-sm ${
                isMobileMenuOpen ? "hidden" : ""
              }`}
            >
              {links.map((link, index) => (
                <motion.li
                  className="text-md"
                  key={index}
                  initial={isMobileMenuOpen ? {} : { opacity: 0, y: -20 }}
                  animate={isMobileMenuOpen ? {} : { opacity: 1, y: 0 }}
                  variants={linkVariants}
                  transition={{ delay: linkDelays[index] }}
                >
                  {link.href.startsWith("#") ? (
                    <motion.a
                    className="px-4 py-2 text-white font-normal"
                    whileHover={{
                      color: "#FFA500", 
                      scale: 1.1,
                      transition: { duration: 0.3, ease: "easeInOut" }, 
                    }}
                    
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      scrollToSection(link.href.substring(1));
                    }}
                  >
                    {link.text}
                  </motion.a>
                  
                  ) : (
                    <Link href={link.href}>
                      {link.text}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2">
            <ul
              className={`flex flex-col font-semibold ${
                isMobileMenuOpen ? "text-center" : ""
              }`}
            >
              {links.map((link, index) => (
                <li className="my-2 text-md" key={index}>
                  {link.href.startsWith("#") ? (
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        scrollToSection(link.href.substring(1));
                      }}
                    >
                      {link.text}
                    </Link>
                    
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
            <hr className="mt-2 border-gray-600" />
      </div>
    </nav>
  );
}
