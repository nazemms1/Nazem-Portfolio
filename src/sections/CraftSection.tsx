import { Container, Text, SimpleGrid, Box, Group } from "@mantine/core";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { usePortfolio } from "../store/PortfolioProvider";
import { COLOR, FONT } from "../styles/tokens";

const categoryLabels: Record<string, string> = {
  frontend: "Frontend Architecture",
  mobile: "Mobile & Cross-Platform",
  backend: "Backend & Platform",
  tools: "Process & Tooling",
  "soft-skills": "Ways of Working",
};

const categoryOrder = ["frontend", "mobile", "backend", "tools", "soft-skills"];


export default function CraftSection() {
  const { skills } = usePortfolio();

  const domains = categoryOrder
    .map((category) => ({
      title: categoryLabels[category] ?? category,
      items: skills.filter((s) => s.category === category).map((s) => s.name),
    }))
    .filter((domain) => domain.items.length > 0);

  if (domains.length === 0) return null;

  return (
    <section id="craft" style={{ padding: "8rem 0", position: "relative" }}>
      <Container size={1280} px={{ base: 24, sm: 48, lg: 72 }}>
        <SectionHeading
          eyebrow="Tech & Craft"
          title="The toolkit behind the systems"
          description="Grouped by where it earns its place — not a wall of badges."
        />

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
          {domains.map((domain, i) => (
            <Reveal key={domain.title} delay={i * 0.06}>
              <Box>
                <Text
                  size="xs"
                  mb="md"
                  style={{
                    fontFamily: FONT.mono,
                    color: COLOR.textFaint,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    borderBottom: `1px solid ${COLOR.border}`,
                    paddingBottom: 12,
                  }}
                >
                  {domain.title}
                </Text>
                <Group gap="xs">
                  {domain.items.map((item) => (
                    <Text
                      key={item}
                      size="sm"
                      style={{
                        color: COLOR.textSecondary,
                        padding: "6px 12px",
                        borderRadius: 6,
                        border: `1px solid ${COLOR.border}`,
                        transition: "border-color 0.2s ease, color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${COLOR.blue}55`;
                        (e.currentTarget as HTMLElement).style.color = COLOR.blueLight;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = COLOR.border;
                        (e.currentTarget as HTMLElement).style.color = COLOR.textSecondary;
                      }}
                    >
                      {item}
                    </Text>
                  ))}
                </Group>
              </Box>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
