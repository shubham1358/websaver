"use client";
// This component is a simple text cycling animation using Framer Motion.
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TextCycle: React.FC<{ textArray: string[] }> = ({ textArray }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textArray.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [textArray.length]);

  return (
    <div style={{ display: "inline-block", height: "1em" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index} // Trigger animation on text change
          initial={{ opacity: 0, y: -20 }} // Start off-screen above
          animate={{ opacity: 1, y: 0 }} // Animate to visible position
          exit={{ opacity: 0, y: 20 }} // Animate out when removed
          transition={{ duration: 0.8, ease: "easeInOut" }} // Adjust duration if needed
          style={{ display: "inline-block" }} // Ensure proper inline animation
        >
          {textArray[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TextCycle;
