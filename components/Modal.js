import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ show, message, onClose, onBubbleExplode }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
        >
          <motion.div
            className="bg-white p-6 rounded shadow-md"
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onAnimationComplete={() => {
              if (!show) {
                onBubbleExplode();
              }
            }}
          >
            <p className="text-center">{message}</p>
            <div className="flex justify-center mt-4">
              <motion.button
                onClick={onClose}
                className="bg-blue-500 text-white px-4 py-2 rounded font-bold"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Click Here to Login
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
