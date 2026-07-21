import { Container, Text, Box, Stack, Anchor, Group } from "@mantine/core";
import { IconQuote, IconBrandLinkedin } from "@tabler/icons-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { recommendations } from "../data/portfolioData";
import { COLOR, FONT } from "../styles/tokens";

export default function RecommendationsSection() {
  return (
    <section id="recommendations" style={{ padding: "8rem 0", position: "relative" }}>
      <Container size={1280} px={{ base: 24, sm: 48, lg: 72 }}>
        <SectionHeading
          eyebrow="In Their Words"
          title="What it's like to work with me"
          description="Unedited, from the people who worked alongside me day to day."
        />

        <Stack gap={48}>
          {recommendations.map((rec, i) => (
            <Reveal key={rec.id} delay={i * 0.08}>
              <Box
                style={{
                  borderTop: `1px solid ${COLOR.border}`,
                  paddingTop: 40,
                }}
              >
                <Group align="flex-start" gap={28} wrap="nowrap" style={{ alignItems: "flex-start" }}>
                  <IconQuote
                    size={32}
                    color={COLOR.blue}
                    style={{ flexShrink: 0, opacity: 0.6, marginTop: 4 }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <Text
                      style={{
                        color: COLOR.textSecondary,
                        lineHeight: 1.9,
                        fontSize: "1.05rem",
                        marginBottom: 24,
                      }}
                    >
                      {rec.message}
                    </Text>

                    <Group justify="space-between" align="flex-end" wrap="wrap" gap="md">
                      <div>
                        <Text fw={700} style={{ color: COLOR.textPrimary }}>
                          {rec.name}
                        </Text>
                        <Text size="sm" style={{ color: COLOR.textMuted }}>
                          {rec.role}
                        </Text>
                        <Text
                          size="xs"
                          mt={4}
                          style={{ fontFamily: FONT.mono, color: COLOR.textFaint, letterSpacing: "0.04em" }}
                        >
                          {rec.period}
                        </Text>
                      </div>

                      {rec.linkedin && (
                        <Anchor
                          href={rec.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          underline="never"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            color: COLOR.blueLight,
                            fontSize: "0.85rem",
                            fontWeight: 500,
                          }}
                        >
                          <IconBrandLinkedin size={16} />
                          View on LinkedIn
                        </Anchor>
                      )}
                    </Group>
                  </div>
                </Group>
              </Box>
            </Reveal>
          ))}
        </Stack>
      </Container>
    </section>
  );
}
