import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "./ModalImage";
import vanilla from "@/public/assets/products/vanilla.jpg";
import product1 from "@/public/assets/products/image1.png";
import product2 from "@/public/assets/products/image2.png";
import product3 from "@/public/assets/products/image3.png";
import product4 from "@/public/assets/products/image4.png";

export default function Product() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [scrollY, setScrollY] = useState(0);

    const [isVisible, setIsVisible] = useState({
        container: false,
        image: false,
        gridImages: false,
        description: false,
    });

    const containerRef = useRef(null);
    const gridRef = useRef(null);
    const descriptionRef = useRef(null);

    const products = [product1, product2, product3, product4];
    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

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
        const isMobile = window.innerWidth <= 1000;

        const containerThreshold = isMobile ? 0 * windowHeight : 0 * windowHeight;
        const imageThreshold = isMobile ? 0 * windowHeight : 0 * windowHeight;
        const gridImagesThreshold = isMobile ? 0 * windowHeight : 0.6 * windowHeight;
        const descriptionThreshold = isMobile ? 0 * windowHeight : 0.6 * windowHeight;

        setIsVisible({
            container: scrollPosition >= containerThreshold,
            image: scrollPosition >= imageThreshold,
            gridImages: scrollPosition >= gridImagesThreshold,
            description: scrollPosition >= descriptionThreshold,
        });
    }, [scrollY]);

    useEffect(() => {
        const windowHeight = window.innerHeight;
        const isMobile = window.innerWidth <= 1000;
        const totalContentHeight =
            windowHeight +
            (containerRef.current ? containerRef.current.offsetHeight : isMobile ? 1200 : 600) +
            (gridRef.current ? gridRef.current.offsetHeight : isMobile ? 1200 : 600) +
            (descriptionRef.current ? descriptionRef.current.offsetHeight : isMobile ? 1200 : 600);

        if (window.scrollY > totalContentHeight) {
            setIsVisible({
                container: false,
                image: false,
                gridImages: false,
                description: false,
            });
        }
    }, [scrollY]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
    };

    const gridImageVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } },
        hover: { scale: 1.04, rotate: -5, transition: { duration: 0.1 } },
        parallax: { scale: 1.04, rotate: -5, y: scrollY * 0.1, transition: { duration: 0.1 } },
    };

    const descriptionVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
        parallax: { opacity: 1, x: -scrollY * 0.05, transition: { duration: 0.1 } },
    };

    return (
        <div className="container mx-auto p-4 relative z-1">
            <div className="container mx-auto max-w-5xl relative z-1">
                <motion.div
                    id="our-products"
                    className="container mx-auto"
                    variants={containerVariants}
                    initial={isVisible.container ? "visible" : "hidden"}
                    animate={isVisible.container ? "visible" : "hidden"}
                    ref={containerRef}
                >
                    <h1 className="lg:text-2xl text-sm font-normal mb-2 text-white">Our Products</h1>
                </motion.div>
                <motion.div
                    className="relative w-full h-64 md:h-96 mb-6"
                    variants={imageVariants}
                    initial={isVisible.image ? "visible" : "hidden"}
                    animate={isVisible.image ? "visible" : "hidden"}
                    style={{ transform: `translateY(${scrollY * 0.06}px)` }}
                >
                    <Image
                        src={vanilla}
                        alt="Products"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-start parallax-spacing">
                    <div className="grid grid-cols-2 gap-6">
                        {products.map((product, index) => (
                            <motion.div
                                className="relative aspect-w-1 aspect-h-1"
                                key={index}
                                variants={gridImageVariants}
                                initial={isVisible.gridImages ? "visible" : "hidden"}
                                animate={isVisible.gridImages ? "visible" : "hidden"}
                                whileHover="hover"
                                onClick={() => handleImageClick(product)}
                            >
                                <Image src={product} alt={`Product ${index + 1}`} className="rounded-xl" />
                            </motion.div>

                        ))}
                        {selectedImage && <Modal imageUrl={selectedImage.src} onClose={() => setSelectedImage(null)} />}
                    </div>
                    <motion.div
                        className="flex flex-col justify-center space-y-2"
                        variants={descriptionVariants}
                        initial={isVisible.description ? "visible" : "hidden"}
                        animate={isVisible.description ? "visible" : "hidden"}
                        style={{ transform: `translateX(${scrollY * 0.2}px)` }}
                        ref={descriptionRef}
                    >
                        <div className="flex gap-4 text-sm">
                            <motion.div
                                className="flex flex-col justify-center space-y-2"
                                variants={descriptionVariants}
                                initial={isVisible.description ? "visible" : "hidden"}
                                animate={isVisible.description ? "visible" : "hidden"}
                            >
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="font-normal text-sm">Product:</div>
                                    <div className="text-sm font-light">Vanilla Planifolia Java, Gourmet, Grade A+</div>
                                    <div className="font-normal text-sm">Content:</div>
                                    <div className="text-sm font-light">Gourmet Vanilla Pods origin Java</div>
                                    <div className="font-normal text-sm">Colour, Texture, Aroma:</div>
                                    <div className="text-sm font-light">
                                        Glossy dark brown to black. Oily, structured, soft, full, and slightly leathery surface. Earthy, intense, and smoky vanilla profile with notes of chocolate and mocha. Spicy, strong, rich flavors.
                                    </div>
                                    <div className="font-normal text-sm">Packing Material:</div>
                                    <div className="text-sm font-light">Vacuumsed batches / 1 kg</div>
                                    <div className="font-normal text-sm">Index of Moisture:</div>
                                    <div className="text-sm font-light">25% - 30%</div>
                                    <div className="font-normal text-sm">Index of Vanillin:</div>
                                    <div className="text-sm font-light">min. 2.1%</div>
                                    <div className="font-normal text-sm">Measurement:</div>
                                    <div className="text-sm font-light">Length 20 – 22 cm / 6 grams</div>
                                    <div className="font-normal text-sm">Labels:</div>
                                    <div className="text-sm font-light">Bio EU Zert. Norm or Bio Javanese Norm</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
