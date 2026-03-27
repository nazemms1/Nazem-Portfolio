import { motion } from "framer-motion";
import { Container, Stack, Text } from "@mantine/core";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "3rem 0",
        borderTop: "1px solid rgba(6, 182, 212, 0.1)",
        background: "rgba(13, 17, 23, 0.8)",
        backdropFilter: "blur(20px)",
      }}
    >
      <Container size="lg">
        <Stack align="center" gap="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Text
              size="xl"
              fw={700}
              variant="gradient"
              gradient={{ from: "cyan", to: "blue" }}
              ta="center"
            >
              NAZEM.MSOUTI
            </Text>
          </motion.div>

          <Text c="dimmed" ta="center" size="sm">
            © 2025 Nazem Almsouti. Crafted with passion and precision.
          </Text>
        </Stack>
      </Container>
    </footer>
  );
}
