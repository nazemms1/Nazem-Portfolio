import { motion } from "framer-motion";
import { Container, Stack, Text } from "@mantine/core";

const NAVY = "#1d4ed8";
const BLUE_L = "#93c5fd";
const BLUE = "#3b82f6";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "3rem 0",
        borderTop: `1px solid ${NAVY}20`,
        background: "rgba(9,9,11,0.8)",
        backdropFilter: "blur(20px)",
      }}
    >
      <Container size="lg">
        <Stack align="center" gap="md">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Text
              size="xl"
              fw={700}
              ta="center"
              style={{
                background: `linear-gradient(120deg, ${BLUE_L} 0%, ${BLUE} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              NAZEM.MSOUTI
            </Text>
          </motion.div>
          <Text style={{ color: "#334155" }} ta="center" size="sm">
            © 2026 Nazem Almsouti. Crafted with passion and precision.
          </Text>
        </Stack>
      </Container>
    </footer>
  );
}
