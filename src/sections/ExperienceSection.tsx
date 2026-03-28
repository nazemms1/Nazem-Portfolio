import { motion } from "framer-motion";
import {
  Container,
  Title,
  Text,
  Box,
  Badge,
  Stack,
  Card,
  Grid,
  Group,
  List,
  ThemeIcon,
  Flex,
  Image,
} from "@mantine/core";
import {
  IconCalendar,
  IconMapPin,
  IconBriefcase,
  IconCode,
} from "@tabler/icons-react";
import { experiences } from "../data/portfolioData";

const typeConfig = {
  Fulltime: {
    from: "teal",
    to: "green",
    accent: "#14b8a6",
    glow: "rgba(20,184,166,0.18)",
    border: "rgba(20,184,166,0.25)",
  },
  Freelance: {
    from: "violet",
    to: "indigo",
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.18)",
    border: "rgba(139,92,246,0.25)",
  },
  Contract: {
    from: "cyan",
    to: "blue",
    accent: "#06b6d4",
    glow: "rgba(6,182,212,0.18)",
    border: "rgba(6,182,212,0.25)",
  },
};

function getTypeConfig(type: string) {
  return typeConfig[type as keyof typeof typeConfig] ?? typeConfig["Contract"];
}

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "8rem 0", position: "relative" }}>
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(20,184,166,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <Container size="lg" style={{ position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Box mb={70} style={{ textAlign: "center" }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              viewport={{ once: true }}
            >
              <Badge
                size="lg"
                variant="gradient"
                gradient={{ from: "teal", to: "cyan" }}
                mb="md"
                leftSection={<IconBriefcase size={15} />}
                style={{ boxShadow: "0 4px 20px rgba(20,184,166,0.3)" }}
              >
                Career Journey
              </Badge>
            </motion.div>
            <Title
              order={2}
              mb="md"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Professional Experience
            </Title>
            <Text c="dimmed" size="lg" maw={600} mx="auto">
              Building impactful solutions across diverse projects and companies
            </Text>
          </Box>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "1px",
                background: "linear-gradient(to bottom, transparent, rgba(6,182,212,0.3) 15%, rgba(139,92,246,0.3) 85%, transparent)",
                transform: "translateX(-50%)",
                display: "none",
              }}
            />

            <Stack gap={32}>
              {experiences.map((exp, index) => {
                const cfg = getTypeConfig(exp.type);
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.12,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    viewport={{ once: true, margin: "-60px" }}
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 280, damping: 24 }}
                    >
                      <Card
                        padding="xl"
                        radius="xl"
                        style={{
                          background: "linear-gradient(145deg, rgba(13,17,23,0.97) 0%, rgba(18,23,32,0.98) 100%)",
                          border: `1px solid ${cfg.border}`,
                          boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
                          position: "relative",
                          overflow: "hidden",
                          transition: "box-shadow 0.35s ease, border-color 0.35s ease",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${cfg.glow}, 0 20px 60px rgba(0,0,0,0.4)`;
                          (e.currentTarget as HTMLElement).style.borderColor = cfg.accent + "55";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(0,0,0,0.3)";
                          (e.currentTarget as HTMLElement).style.borderColor = cfg.border;
                        }}
                      >
                        {/* Top accent bar */}
                        <motion.div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "3px",
                            background: `linear-gradient(90deg, ${cfg.accent}, #3b82f6)`,
                            transformOrigin: index % 2 === 0 ? "left" : "right",
                          }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.9, delay: index * 0.12 + 0.2 }}
                          viewport={{ once: true }}
                        />

                        {/* Left glow accent */}
                        <div
                          style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: "4px",
                            background: `linear-gradient(to bottom, ${cfg.accent}, transparent)`,
                            borderRadius: "0 2px 2px 0",
                          }}
                        />

                        <Grid gutter="xl">
                          <Grid.Col span={{ base: 12, md: 8 }}>
                            <Group mb="md" gap="md">
                              {exp.logo && (
                                <motion.div
                                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <Image
                                    src={exp.logo}
                                    alt={exp.company}
                                    width={52}
                                    height={52}
                                    radius="lg"
                                    fit="contain"
                                    style={{
                                      background: "white",
                                      padding: "8px",
                                      boxShadow: `0 4px 16px ${cfg.glow}`,
                                    }}
                                  />
                                </motion.div>
                              )}
                              <div>
                                <Title
                                  order={3}
                                  size="h3"
                                  style={{ color: cfg.accent, fontWeight: 700 }}
                                >
                                  {exp.title}
                                </Title>
                                <Text size="lg" fw={600} c="white">
                                  {exp.company}
                                </Text>
                              </div>
                            </Group>
                          </Grid.Col>

                          <Grid.Col span={{ base: 12, md: 4 }}>
                            <Stack gap="sm" align="flex-start">
                              <Badge
                                size="md"
                                variant="gradient"
                                gradient={{ from: cfg.from, to: cfg.to }}
                                style={{ boxShadow: `0 4px 16px ${cfg.glow}` }}
                                leftSection={<IconBriefcase size={12} />}
                              >
                                {exp.type}
                              </Badge>
                              <Group gap="xs">
                                <IconCalendar size={15} color={cfg.accent} />
                                <Text size="sm" c="dimmed">{exp.period}</Text>
                              </Group>
                              <Group gap="xs">
                                <IconMapPin size={15} color={cfg.accent} />
                                <Text size="sm" c="dimmed">{exp.location}</Text>
                              </Group>
                            </Stack>
                          </Grid.Col>
                        </Grid>

                        <List
                          spacing="sm"
                          mt="xl"
                          mb="xl"
                          icon={
                            <ThemeIcon
                              size={20}
                              radius="xl"
                              variant="light"
                              color={cfg.from}
                            >
                              <IconCode size={11} />
                            </ThemeIcon>
                          }
                        >
                          {exp.description.map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -16 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.08 + 0.2 }}
                              viewport={{ once: true }}
                            >
                              <List.Item>
                                <Text c="dimmed" size="sm" style={{ lineHeight: 1.75 }}>{item}</Text>
                              </List.Item>
                            </motion.div>
                          ))}
                        </List>

                        {exp.technologies && (
                          <div>
                            <Text size="xs" fw={700} c="dimmed" mb="sm" style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>
                              Technologies
                            </Text>
                            <Flex wrap="wrap" gap="xs">
                              {exp.technologies.map((tech, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.6 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.05 + 0.3 }}
                                  viewport={{ once: true }}
                                  whileHover={{ scale: 1.1, y: -2 }}
                                >
                                  <Badge
                                    variant="light"
                                    size="sm"
                                    style={{
                                      background: `rgba(${cfg.accent === "#14b8a6" ? "20,184,166" : cfg.accent === "#8b5cf6" ? "139,92,246" : "6,182,212"},0.1)`,
                                      color: cfg.accent,
                                      border: `1px solid ${cfg.border}`,
                                    }}
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </Flex>
                          </div>
                        )}

                        {/* Index number watermark */}
                        <div
                          style={{
                            position: "absolute",
                            top: "1rem",
                            right: "1.5rem",
                            fontSize: "4rem",
                            fontWeight: 900,
                            color: cfg.accent,
                            opacity: 0.04,
                            lineHeight: 1,
                            userSelect: "none",
                            pointerEvents: "none",
                            fontFamily: "monospace",
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}
            </Stack>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
