import { Container, Text, Title, Badge, Group, Grid, Image } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";
import SectionHeading from "../components/SectionHeading";
import { usePortfolio } from "../store/PortfolioProvider";
import { COLOR, FONT } from "../styles/tokens";

export default function SelectedWorkSection() {
  const { caseStudies } = usePortfolio();

  if (caseStudies.length === 0) return null;

  return (
    <section id="work" style={{ padding: "8rem 0", position: "relative" }}>
      <Container size={1280} px={{ base: 24, sm: 48, lg: 72 }}>
        <SectionHeading
          eyebrow="Selected Work"
          title="Systems shipped, not just screens"
          description="Four projects where I owned the outcome end to end — from architecture decisions to what shipped to production."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.projectId} delay={0} distance={40}>
              <div
                style={{
                  padding: "4.5rem 0",
                  borderTop: `1px solid ${COLOR.border}`,
                }}
              >
                <Grid gutter={56} align="center">
                  <Grid.Col span={{ base: 12, md: 5 }} order={{ base: 2, md: i % 2 === 0 ? 1 : 2 }}>
                    <Text style={{ fontFamily: FONT.mono, color: COLOR.blue, fontSize: "0.85rem", marginBottom: 16 }}>
                      {String(i + 1).padStart(2, "0")} — {cs.role}
                    </Text>

                    <Title order={3} mb="lg" style={{ color: COLOR.textPrimary, fontWeight: 700, letterSpacing: "-0.02em", fontSize: "1.7rem" }}>
                      {cs.project.title}
                    </Title>

                    <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 28 }}>
                      <div>
                        <Text size="xs" style={{ fontFamily: FONT.mono, color: COLOR.textFaint, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
                          Problem
                        </Text>
                        <Text size="sm" style={{ color: COLOR.textMuted, lineHeight: 1.8 }}>{cs.problem}</Text>
                      </div>
                      <div>
                        <Text size="xs" style={{ fontFamily: FONT.mono, color: COLOR.textFaint, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
                          Approach
                        </Text>
                        <Text size="sm" style={{ color: COLOR.textMuted, lineHeight: 1.8 }}>{cs.approach}</Text>
                      </div>
                      <div>
                        <Text size="xs" style={{ fontFamily: FONT.mono, color: COLOR.blueLight, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
                          Outcome
                        </Text>
                        <Text size="sm" style={{ color: COLOR.textSecondary, lineHeight: 1.8 }}>{cs.outcome}</Text>
                      </div>
                    </div>

                    <Group gap="lg" mb={28}>
                      {cs.metrics.map((m) => (
                        <div key={m.label}>
                          <Text style={{ fontFamily: FONT.mono, fontWeight: 700, fontSize: "1.15rem", color: COLOR.textPrimary }}>
                            {m.value}
                          </Text>
                          <Text size="xs" style={{ color: COLOR.textMuted }}>{m.label}</Text>
                        </div>
                      ))}
                    </Group>

                    <Group gap="xs" mb={28}>
                      {cs.project.technologies.slice(0, 4).map((t) => (
                        <Badge key={t} variant="outline" size="sm" style={{ borderColor: `${COLOR.blue}33`, color: COLOR.blueLight, background: "transparent" }}>
                          {t}
                        </Badge>
                      ))}
                    </Group>

                    {cs.project.demoUrl && cs.project.demoUrl !== "#" && (
                      <Magnetic>
                        <a
                          href={cs.project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            color: COLOR.textPrimary,
                            fontWeight: 600,
                            fontSize: "0.9rem",
                            textDecoration: "none",
                            borderBottom: `1px solid ${COLOR.border}`,
                            paddingBottom: 3,
                          }}
                        >
                          View live <IconArrowUpRight size={16} />
                        </a>
                      </Magnetic>
                    )}
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, md: 7 }} order={{ base: 1, md: i % 2 === 0 ? 2 : 1 }}>
                    <div
                      style={{
                        borderRadius: 16,
                        overflow: "hidden",
                        border: `1px solid ${COLOR.border}`,
                        background: COLOR.surface,
                        aspectRatio: "16 / 10",
                      }}
                    >
                      <Image src={cs.project.image} alt={cs.project.title} fit="cover" style={{ width: "100%", height: "100%" }} />
                    </div>
                  </Grid.Col>
                </Grid>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
