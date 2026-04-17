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

const NAVY = "#1d4ed8";
const BLUE = "#3b82f6";
const BLUE_L = "#93c5fd";

const typeConfig = {
  Fulltime: {
    accent: "#2dd4bf",
    glow: "rgba(45,212,191,0.15)",
    border: "rgba(45,212,191,0.22)",
    from: "#2dd4bf",
    to: BLUE,
  },
  Freelance: {
    accent: "#a5b4fc",
    glow: "rgba(165,180,252,0.15)",
    border: "rgba(165,180,252,0.22)",
    from: "#a5b4fc",
    to: "#6366f1",
  },
  Contract: {
    accent: BLUE,
    glow: `${NAVY}22`,
    border: `${BLUE}28`,
    from: BLUE_L,
    to: NAVY,
  },
};

function getTypeConfig(type: string) {
  return typeConfig[type as keyof typeof typeConfig] ?? typeConfig.Contract;
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{ padding: "8rem 0", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${NAVY}08 0%, transparent 70%)`,
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <Container size="lg" style={{ position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Box mb={70} style={{ textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge
                size="md"
                variant="outline"
                mb="md"
                leftSection={<IconBriefcase size={14} />}
                style={{
                  borderColor: `${BLUE}44`,
                  color: BLUE_L,
                  background: `${NAVY}0d`,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.06em",
                }}
              >
                Career Journey
              </Badge>
            </motion.div>
            <Title
              order={2}
              mb="md"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                background: `linear-gradient(120deg, ${BLUE_L} 0%, ${BLUE} 45%, #a5b4fc 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              }}
            >
              Professional Experience
            </Title>
            <Text style={{ color: "#64748b" }}>
              Building impactful solutions across diverse projects and companies
            </Text>
          </Box>

          <Stack gap={32}>
            {experiences.map((exp, index) => {
              const cfg = getTypeConfig(exp.type);
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -48 : 48, y: 16 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 280, damping: 24 }}
                  >
                    <Card
                      padding="xl"
                      radius="xl"
                      style={{
                        background:
                          "linear-gradient(145deg, rgba(15,23,42,0.97) 0%, rgba(18,25,40,0.98) 100%)",
                        border: `1px solid ${cfg.border}`,
                        boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
                        position: "relative",
                        overflow: "hidden",
                        transition:
                          "box-shadow 0.3s ease, border-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          `0 0 40px ${cfg.glow}, 0 20px 60px rgba(0,0,0,0.4)`;
                        (e.currentTarget as HTMLElement).style.borderColor =
                          cfg.accent + "44";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 8px 40px rgba(0,0,0,0.3)";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          cfg.border;
                      }}
                    >
                      <motion.div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "3px",
                          background: `linear-gradient(90deg, ${cfg.from}, ${cfg.to})`,
                          transformOrigin: index % 2 === 0 ? "left" : "right",
                        }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.9, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: "3px",
                          background: `linear-gradient(to bottom, ${cfg.accent}, transparent)`,
                          borderRadius: "0 2px 2px 0",
                        }}
                      />

                      <Grid gutter="xl">
                        <Grid.Col span={{ base: 12, md: 8 }}>
                          <Group mb="md" gap="md">
                            {exp.logo && (
                              <motion.div
                                whileHover={{
                                  rotate: [0, -6, 6, 0],
                                  scale: 1.08,
                                }}
                                transition={{ duration: 0.45 }}
                              >
                                <Image
                                  src={exp.logo}
                                  alt={exp.company}
                                  width={50}
                                  height={50}
                                  radius="lg"
                                  fit="contain"
                                  style={{
                                    background: "white",
                                    padding: "7px",
                                    boxShadow: `0 4px 14px ${cfg.glow}`,
                                  }}
                                />
                              </motion.div>
                            )}
                            <div>
                              <Title
                                order={3}
                                style={{
                                  color: cfg.accent,
                                  fontWeight: 700,
                                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                                  fontSize: "1.1rem",
                                }}
                              >
                                {exp.title}
                              </Title>
                              <Text
                                size="md"
                                fw={600}
                                style={{ color: "#e2e8f0" }}
                              >
                                {exp.company}
                              </Text>
                            </div>
                          </Group>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, md: 4 }}>
                          <Stack gap="sm" align="flex-start">
                            <Badge
                              size="sm"
                              variant="outline"
                              leftSection={<IconBriefcase size={11} />}
                              style={{
                                borderColor: `${cfg.accent}44`,
                                color: cfg.accent,
                                background: `${cfg.accent}0d`,
                                fontFamily: "'Inter', sans-serif",
                              }}
                            >
                              {exp.type}
                            </Badge>
                            <Group gap="xs">
                              <IconCalendar size={14} color={cfg.accent} />
                              <Text size="sm" style={{ color: "#64748b" }}>
                                {exp.period}
                              </Text>
                            </Group>
                            <Group gap="xs">
                              <IconMapPin size={14} color={cfg.accent} />
                              <Text size="sm" style={{ color: "#64748b" }}>
                                {exp.location}
                              </Text>
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
                            size={18}
                            radius="xl"
                            style={{
                              background: `${cfg.accent}18`,
                              border: `1px solid ${cfg.accent}33`,
                              color: cfg.accent,
                            }}
                          >
                            <IconCode size={10} />
                          </ThemeIcon>
                        }
                      >
                        {exp.description.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.07 + 0.2 }}
                            viewport={{ once: true }}
                          >
                            <List.Item>
                              <Text
                                style={{ color: "#94a3b8", lineHeight: 1.75 }}
                                size="sm"
                              >
                                {item}
                              </Text>
                            </List.Item>
                          </motion.div>
                        ))}
                      </List>

                      {exp.technologies && (
                        <div>
                          <Text
                            size="xs"
                            fw={600}
                            mb="sm"
                            style={{
                              color: "#475569",
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                              fontFamily: "'Inter', sans-serif",
                            }}
                          >
                            Technologies
                          </Text>
                          <Flex wrap="wrap" gap="xs">
                            {exp.technologies.map((tech, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.7 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.04 + 0.3 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.08, y: -1 }}
                              >
                                <Badge
                                  variant="outline"
                                  size="sm"
                                  style={{
                                    borderColor: `${cfg.accent}33`,
                                    color: cfg.accent,
                                    background: `${cfg.accent}0a`,
                                    fontFamily: "'Inter', sans-serif",
                                  }}
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </Flex>
                        </div>
                      )}

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
        </motion.div>
      </Container>
    </section>
  );
}
