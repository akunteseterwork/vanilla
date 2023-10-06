"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "./ModalImage";
import workImage1 from "@/public/assets/our-work/image1.jpg";
import workImage2 from "@/public/assets/our-work/image2.jpg";
import workImage3 from "@/public/assets/our-work/image3.jpg";
import headerImage from "@/public/assets/our-work/header.jpg";

export default function OurWork() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isVisible, setIsVisible] = useState({
        container: false,
        header: false,
        image1: false,
        image2: false,
        image3: false,
        description1: false,
        description2: false,
        description3: false
    });

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            const containerThreshold = 1.4 * windowHeight;
            const headerThreshold = 1.6 * windowHeight;
            const image1Threshold = 1.8 * windowHeight;
            const image2Threshold = 1.8 * windowHeight;
            const image3Threshold = 1.8 * windowHeight;
            const description1Threshold = 1.8 * windowHeight;

            setIsVisible({
                container: scrollPosition >= containerThreshold,
                header: scrollPosition >= headerThreshold,
                image1: scrollPosition >= image1Threshold,
                image2: scrollPosition >= image2Threshold,
                image3: scrollPosition >= image3Threshold,
                description1: scrollPosition >= description1Threshold,
                description2: scrollPosition >= description1Threshold,
                description3: scrollPosition >= description1Threshold,
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const headerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
    };

    const image1Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
        hover: { scale: 1.05, transition: { duration: 0.1 } },
    };

    const description1Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } },
    };

    const image2Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } },
        hover: { scale: 1.05, transition: { duration: 0.1 } },
    };

    const description2Variants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.2, delay: 0.6 } },
    };
    const image3Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.4, delay: 1 } },
        hover: { scale: 1.05, transition: { duration: 0.1 } },
    };

    const description3Variants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.6, delay: 1 } },
    };

    return (
        <div className="container mx-auto p-4">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    id="our-work"
                    className="container mx-auto"
                    variants={containerVariants}
                    initial={isVisible.container ? "visible" : "hidden"}
                    animate={isVisible.container ? "visible" : "hidden"}
                >
                    <h1 className="lg:text-2xl sm:text-md font-semibold mb-2">How We Work</h1>
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
                {selectedImage && <Modal imageUrl={selectedImage.src} onClose={() => setSelectedImage(null)} />}

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
                    <motion.div
                        className="flex flex-col justify-center space-y-2 text-sm"
                        variants={description1Variants}
                        initial={isVisible.description1 ? "visible" : "hidden"}
                        animate={isVisible.description1 ? "visible" : "hidden"}
                    >
                        <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "wrap" }}>
                            The island of Java is around 2.5 times the size of Switzerland. The cultivation of spices, fruits and herbs has a centuries-old tradition that has been constantly developed over the years. The Mount Lawu project includes specially selected gardens between 1 and 10 hectares. The farms do not practice monoculture. Various products, such as avocado, mango, cloves, vanilla, cinnamon or citrus fruits are grown in the same gardens. Sufficient open spaces are maintained to prevent overuse of the soil.
                        </div>
                    </motion.div>
                    <motion.div
                        className="relative w-full h-40 mb-4"
                        style={{ flexBasis: "200px", flexShrink: 0 }}
                        variants={image1Variants}
                        initial={isVisible.image1 ? "visible" : "hidden"}
                        animate={isVisible.image1 ? "visible" : "hidden"}
                        whileHover="hover"
                        onClick={() => setSelectedImage(workImage1)}
                    >
                        <Image
                            src={workImage1}
                            alt="Work Image 1"
                            layout="fill"
                            className="rounded-xl"
                            objectFit="cover"
                        />
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
                    <motion.div
                        className="relative w-full h-40 mb-4"
                        style={{ flexBasis: "200px", flexShrink: 0 }}
                        variants={image2Variants}
                        initial={isVisible.image1 ? "visible" : "hidden"}
                        animate={isVisible.image1 ? "visible" : "hidden"}
                        whileHover="hover"
                        onClick={() => setSelectedImage(workImage2)}
                    >
                        <Image
                            src={workImage2}
                            alt="Work Image 2"
                            layout="fill"
                            className="rounded-xl"
                            objectFit="cover"
                        />
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center space-y-2 text-sm"
                        variants={description2Variants}
                        initial={isVisible.description1 ? "visible" : "hidden"}
                        animate={isVisible.description1 ? "visible" : "hidden"}
                    >
                        <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "wrap" }}>
                            Algi Febrian is our quality manager on site: He studied organic agriculture. Working with dozens of local farmers, he has developed a method to grow Mount Lawu produce using organic and sustainable principles. He trains and coordinates the small farmers and ensures the supply chain.                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
                    <motion.div
                        className="flex flex-col justify-center space-y-2 text-sm"
                        variants={description3Variants}
                        initial={isVisible.description1 ? "visible" : "hidden"}
                        animate={isVisible.description1 ? "visible" : "hidden"}
                    >
                        <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "wrap" }}>
                            <p>Sustainable production and processing form our principles.</p>
                            <p>● Socially acceptable: The small farmers and other people who work on Mount Lawu are paid fairly. Mount Lawu also contributes to the costs of insurance and training.</p>
                            <p>● Ecologically. The various products are grown exclusively according to ecological principles and are tailored to specific needs. </p>
                            <p>Mount Lawu works with SDS Indonesia, Sustainable Development Services. SDS advises and carries out certification according to EU standard XXX.   </p>                     </div>
                    </motion.div>
                    <motion.div
                        className="relative w-full h-40 mb-4"
                        style={{ flexBasis: "200px", flexShrink: 0 }}
                        variants={image3Variants}
                        initial={isVisible.image1 ? "visible" : "hidden"}
                        animate={isVisible.image1 ? "visible" : "hidden"}
                        whileHover="hover"
                        onClick={() => setSelectedImage(workImage3)}
                    >
                        <Image
                            src={workImage3}
                            alt="Work Image 1"
                            layout="fill"
                            className="rounded-xl"
                            objectFit="cover"
                        />
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
