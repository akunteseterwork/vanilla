import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function Modal({ imageUrl, onClose }) {
  useEffect(() => {
    const handleScroll = () => {
      onClose();
    };

    const handleClickOutside = (event) => {
      if (event.target.classList.contains("modalOverlay")) {
        onClose();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="modalOverlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="closeButton" onClick={onClose}>
            <div className="closeIconWrapper font-semibold text-gray-200">
              <FaTimes />
            </div>
          </div>
          <img src={imageUrl} alt="Preview" className="modalImage" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
