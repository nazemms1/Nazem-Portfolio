import { motion } from "framer-motion";

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FloatingElement({ children, delay = 0 }: FloatingElementProps) {
  return (
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
