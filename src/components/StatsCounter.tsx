import { motion } from "framer-motion";
import { Card, ThemeIcon, Text } from "@mantine/core";

const BLUE = "#3b82f6";
const BLUE_L = "#93c5fd";
const NAVY = "#1d4ed8";

interface StatsCounterProps {
  value: string;
  label: string;
  icon: React.ElementType;
  color: string;
}

export default function StatsCounter({
  value,
  label,
  icon: Icon,
  color,
}: StatsCounterProps) {
  const iconColor =
    color === "cyan" || color === "blue"
      ? BLUE
      : color === "violet" || color === "indigo"
        ? "#6366f1"
        : color === "teal"
          ? "#2dd4bf"
          : color === "pink"
            ? "#f472b6"
            : BLUE;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <Card
        padding="lg"
        radius="xl"
        style={{
          background: "rgba(15,23,42,0.85)",
          border: `1px solid ${NAVY}28`,
          textAlign: "center",
        }}
      >
        <ThemeIcon
          size={48}
          radius="xl"
          mb="sm"
          style={{
            background: `${iconColor}18`,
            border: `1px solid ${iconColor}33`,
            color: iconColor,
            margin: "0 auto",
          }}
        >
          <Icon size={24} />
        </ThemeIcon>
        <Text
          size="xl"
          fw={800}
          style={{
            background: `linear-gradient(120deg, ${BLUE_L}, ${BLUE})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {value}
        </Text>
        <Text size="sm" style={{ color: "#64748b" }}>
          {label}
        </Text>
      </Card>
    </motion.div>
  );
}
