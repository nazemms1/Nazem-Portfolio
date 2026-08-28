import { Container, Group, Text } from "@mantine/core";
import { COLOR, FONT } from "../styles/tokens";

export default function Footer() {
  return (
    <footer style={{ padding: "2.5rem 0", borderTop: `1px solid ${COLOR.border}` }}>
      <Container size={1280} px={{ base: 24, sm: 48, lg: 72 }}>
        <Group justify="space-between" wrap="wrap" gap="md">
          <Text style={{ fontFamily: FONT.mono, fontSize: "0.85rem", color: COLOR.textFaint }}>
            Nazem Almsouti — Senior Frontend Engineer
          </Text>
          <Group gap="lg">
            {/* Discreet entry point to the content dashboard. */}
            <a
              href="#/admin"
              title="Dashboard"
              style={{ fontFamily: FONT.mono, fontSize: "0.8rem", color: COLOR.textFaint, textDecoration: "none" }}
            >
              ·
            </a>
            <Text style={{ fontFamily: FONT.mono, fontSize: "0.8rem", color: COLOR.textFaint }}>
              © 2026
            </Text>
          </Group>
        </Group>
      </Container>
    </footer>
  );
}
