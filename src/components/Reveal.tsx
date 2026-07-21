import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "../styles/tokens";

type Direction = "up" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  left: { x: -36 },
  right: { x: 36 },
  none: {},
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance,
  once = true,
  style,
  className,
}: RevealProps) {
  const offset = offsets[direction];
  const initial = {
    opacity: 0,
    ...(offset.y !== undefined ? { y: distance ?? offset.y } : {}),
    ...(offset.x !== undefined
      ? { x: distance ?? offset.x }
      : {}),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: EASE }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}
