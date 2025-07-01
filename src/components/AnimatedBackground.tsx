"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";

const AnimatedBackground: React.FC = () => {
  const mousePosition = useMousePosition();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Mouse follower */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 30,
        }}
      />

      {/* Static background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-slate-500/3 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/3 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
    </div>
  );
};

export default AnimatedBackground;
