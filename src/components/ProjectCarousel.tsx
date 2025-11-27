"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // If only one image, show it without controls
  if (images.length === 1) {
    return (
      <div style={{ position: "relative", overflow: "hidden" }}>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
          <Image src={images[0]} height={height} alt={title} />
        </motion.div>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        height: `${height}px`,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          style={{ height: "100%" }}
        >
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            height={height}
            alt={`${title} - ${currentIndex + 1}`}
            fit="cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <ActionIcon
            onClick={prevSlide}
            size="lg"
            radius="xl"
            variant="filled"
            color="cyan"
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              opacity: 0.9,
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.9";
            }}
          >
            <IconChevronLeft size={20} />
          </ActionIcon>

          <ActionIcon
            onClick={nextSlide}
            size="lg"
            radius="xl"
            variant="filled"
            color="cyan"
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              opacity: 0.9,
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.9";
            }}
          >
            <IconChevronRight size={20} />
          </ActionIcon>

          {/* Indicators */}
          <div
            style={{
              position: "absolute",
              bottom: 10,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "8px",
              zIndex: 2,
            }}
          >
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                style={{
                  width: currentIndex === index ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  border: "none",
                  background:
                    currentIndex === index
                      ? "#06b6d4"
                      : "rgba(255, 255, 255, 0.5)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCarousel;
