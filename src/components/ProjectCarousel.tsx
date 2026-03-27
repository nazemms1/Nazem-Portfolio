"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Image, ActionIcon } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface ProjectCarouselProps {
  images: string[];
  title: string;
  height?: number;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  images,
  title,
  height = 250,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-height / 2, height / 2], [3, -3]);
  const rotateY = useTransform(mouseX, [-200, 200], [-5, 5]);

  // Auto-advance if multiple images
  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setDirection(1);
      setCurrentIndex((p) => (p + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images.length]);

  const goTo = (next: number, dir: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setDirection(dir);
    setCurrentIndex(next);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.04,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.96,
    }),
  };

  if (images.length === 1) {
    return (
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ position: "relative", overflow: "hidden", height: `${height}px` }}
      >
        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 800, height: "100%" }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
        >
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ height: "100%" }}
          >
            <Image
              src={images[0]}
              height={height}
              alt={title}
              fit="cover"
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", overflow: "hidden", height: `${height}px` }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 900, height: "100%" }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              height={height}
              alt={`${title} — ${currentIndex + 1}`}
              fit="cover"
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Prev/Next — only visible on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <ActionIcon
          onClick={(e) => goTo((currentIndex - 1 + images.length) % images.length, -1, e)}
          size="lg"
          radius="xl"
          variant="filled"
          color="dark"
          style={{
            pointerEvents: "all",
            background: "rgba(13,17,23,0.75)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <IconChevronLeft size={18} />
        </ActionIcon>

        <ActionIcon
          onClick={(e) => goTo((currentIndex + 1) % images.length, 1, e)}
          size="lg"
          radius="xl"
          variant="filled"
          color="dark"
          style={{
            pointerEvents: "all",
            background: "rgba(13,17,23,0.75)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <IconChevronRight size={18} />
        </ActionIcon>
      </motion.div>

      {/* Dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "6px",
          zIndex: 3,
        }}
      >
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goTo(index, index > currentIndex ? 1 : -1);
            }}
            animate={{
              width: currentIndex === index ? 20 : 6,
              background: currentIndex === index ? "#06b6d4" : "rgba(255,255,255,0.35)",
            }}
            style={{
              height: "6px",
              borderRadius: "3px",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.25 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
