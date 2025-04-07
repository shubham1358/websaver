"use client";
// This component is a simple text cycling animation using Framer Motion.
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// const textArray = ["Welcome", "Hello", "Bonjour", "Hola", "Ciao"];

const TextCycle: React.FC<{ textArray: string[] }> = ({ textArray }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textArray.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <motion.span
      key={index} // Trigger animation on text change
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {textArray[index]}
    </motion.span>
  );
};

export default TextCycle;
