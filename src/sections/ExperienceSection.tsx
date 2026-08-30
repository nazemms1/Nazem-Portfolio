import { Container, Text, Title, Badge, Group, Stack } from "@mantine/core";
import { IconCalendar, IconMapPin, IconBuildingStore } from "@tabler/icons-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { usePortfolio } from "../store/PortfolioProvider";
import { COLOR, FONT, glass } from "../styles/tokens";

export default function ExperienceSection() {
  const { experiences } = usePortfolio();

  if (!experiences || experiences.length === 0) return null;

  return (
    <section id="experience" style={{ padding: "8rem 0", position: "relative" }}>
      {/* Background ambient lighting */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "30%",
          right: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLOR.navy}15 0%, transparent 70%)`,
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <Container size={1280} px={{ base: 24, sm: 48, lg: 72 }}>
        <SectionHeading
          eyebrow="Career Journey"
          title="Professional Experience"
          description="A track record of driving frontend architecture, shipping production systems, and collaborating across engineering teams."
        />

        {/* Timeline Container */}
        <div style={{ position: "relative", maxWidth: 1040, margin: "0 auto" }}>
          {/* Vertical timeline spine */}
          <div
            style={{
              position: "absolute",
              top: 24,
              bottom: 24,
              left: 20,
              width: 2,
              background: `linear-gradient(180deg, ${COLOR.blue} 0%, ${COLOR.indigo} 50%, rgba(27,35,51,0.2) 100%)`,
              opacity: 0.6,
            }}
          />

          <Stack gap={48}>
            {experiences.map((exp, i) => (
              <Reveal key={exp.id || exp.company + i} delay={i * 0.08} distance={30}>
                <div
                  style={{
                    position: "relative",
                    paddingLeft: 56,
                  }}
                >
                  {/* Glowing Node on Timeline Spine */}
                  <div
                    style={{
                      position: "absolute",
                      left: 11,
                      top: 24,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: COLOR.bg,
                      border: `2px solid ${i === 0 ? COLOR.blue : COLOR.borderStrong}`,
                      boxShadow: i === 0 ? `0 0 16px ${COLOR.blue}` : "none",
                      display: "grid",
                      placeItems: "center",
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: i === 0 ? COLOR.blueLight : COLOR.textMuted,
                      }}
                    />
                  </div>

                  {/* Card Container */}
                  <div
                    style={{
                      background: glass.card.background,
                      backdropFilter: glass.card.backdropFilter,
                      WebkitBackdropFilter: glass.card.WebkitBackdropFilter,
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      boxShadow: glass.card.boxShadow,
                      borderRadius: 20,
                      padding: "2.2rem 2.4rem",
                      transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    {/* Header Row */}
                    <Group justify="space-between" align="flex-start" wrap="wrap" gap="md" mb="lg">
                      <div>
                        <Text
                          style={{
                            fontFamily: FONT.mono,
                            color: COLOR.blue,
                            fontSize: "0.82rem",
                            fontWeight: 600,
                            letterSpacing: "0.05em",
                            marginBottom: 6,
                            textTransform: "uppercase",
                          }}
                        >
                          {String(i + 1).padStart(2, "0")} — {exp.type}
                        </Text>
                        <Title
                          order={3}
                          style={{
                            color: COLOR.textPrimary,
                            fontWeight: 700,
                            fontSize: "1.45rem",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.25,
                          }}
                        >
                          {exp.title}
                        </Title>
                        <Group gap={8} mt={6} align="center">
                          <IconBuildingStore size={16} color={COLOR.blueLight} />
                          <Text fw={600} size="sm" style={{ color: COLOR.blueLight }}>
                            {exp.company}
                          </Text>
                        </Group>
                      </div>

                      {/* Meta Pill (Period & Location) */}
                      <Stack gap={6} align="flex-end">
                        <Badge
                          size="lg"
                          variant="outline"
                          leftSection={<IconCalendar size={14} color={COLOR.textSecondary} />}
                          style={{
                            borderColor: "rgba(255,255,255,0.1)",
                            background: "rgba(255,255,255,0.03)",
                            color: COLOR.textPrimary,
                            fontFamily: FONT.mono,
                            textTransform: "none",
                            fontWeight: 500,
                            fontSize: "0.82rem",
                            paddingLeft: 10,
                          }}
                        >
                          {exp.period}
                        </Badge>
                        {exp.location && (
                          <Group gap={4}>
                            <IconMapPin size={13} color={COLOR.textMuted} />
                            <Text size="xs" style={{ color: COLOR.textMuted }}>
                              {exp.location}
                            </Text>
                          </Group>
                        )}
                      </Stack>
                    </Group>

                    {/* Divider line */}
                    <div
                      style={{
                        height: 1,
                        background: "linear-gradient(90deg, rgba(255,255,255,0.08) 0%, transparent 100%)",
                        marginBottom: 24,
                      }}
                    />

                    {/* Bullet Points */}
                    <Stack gap={12} mb="xl">
                      {exp.description.map((item, idx) => (
                        <Group key={idx} align="flex-start" gap={12} wrap="nowrap">
                          <div
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: COLOR.blue,
                              marginTop: 8,
                              flexShrink: 0,
                              boxShadow: `0 0 8px ${COLOR.blue}`,
                            }}
                          />
                          <Text size="sm" style={{ color: COLOR.textSecondary, lineHeight: 1.8 }}>
                            {item}
                          </Text>
                        </Group>
                      ))}
                    </Stack>

                    {/* Technologies Pills */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <Group gap={8} pt="md" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            size="sm"
                            variant="outline"
                            style={{
                              borderColor: "rgba(255,255,255,0.09)",
                              color: COLOR.textMuted,
                              background: "rgba(255,255,255,0.02)",
                              fontFamily: FONT.mono,
                              fontWeight: 500,
                              textTransform: "none",
                            }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </Group>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </Stack>
        </div>
      </Container>
    </section>
  );
}
