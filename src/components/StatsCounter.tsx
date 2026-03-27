import { motion } from "framer-motion";
import { Card, ThemeIcon, Text } from "@mantine/core";

interface StatsCounterProps {
  value: string;
  label: string;
  icon: React.ElementType;
  color: string;
}

export default function StatsCounter({ value, label, icon: Icon, color }: StatsCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      viewport={{ once: true }}
    >
      <Card
        padding="lg"
        radius="xl"
        style={{
          background: "rgba(13, 17, 23, 0.8)",
          backdropFilter: "blur(20px)",
          border: `1px solid rgba(6, 182, 212, 0.2)`,
          textAlign: "center",
        }}
      >
        <ThemeIcon size={50} radius="xl" variant="light" color={color} mb="sm">
          <Icon size={26} />
        </ThemeIcon>
        <Text
          size="xl"
          fw={800}
          variant="gradient"
          gradient={{ from: "cyan", to: "blue" }}
        >
          {value}
        </Text>
        <Text size="sm" c="dimmed">
          {label}
        </Text>
      </Card>
    </motion.div>
  );
}
