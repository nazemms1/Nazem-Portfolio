import { motion } from "framer-motion";
import {
  Container,
  Title,
  Text,
  Box,
  Badge,
  SimpleGrid,
  Grid,
  Card,
  Group,
  Stack,
  ThemeIcon,
  ActionIcon,
  Divider,
} from "@mantine/core";
import {
  IconSparkles,
  IconAward,
  IconRocket,
  IconCode,
  IconHeart,
  IconBriefcase,
  IconCalendar,
  IconMapPin,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconSchool,
} from "@tabler/icons-react";
import StatsCounter from "../components/StatsCounter";
import { projects, skills, contactInfo } from "../data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "8rem 0", position: "relative" }}>
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "500px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
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
          <Box mb={60} style={{ textAlign: "center" }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              viewport={{ once: true }}
            >
              <Badge
                size="lg"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
                mb="md"
                leftSection={<IconSparkles size={16} />}
                style={{ boxShadow: "0 4px 20px rgba(59,130,246,0.3)" }}
              >
                About Me
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
              Building Digital Excellence
            </Title>
            <Text c="dimmed" size="lg" maw={600} mx="auto">
              Combining technical expertise with creative problem-solving
            </Text>
          </Box>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="lg" mb={60}>
              <StatsCounter value="2+" label="Years Experience" icon={IconAward} color="cyan" />
              <StatsCounter value={`${projects.length}+`} label="Projects Completed" icon={IconRocket} color="violet" />
              <StatsCounter value={`${skills.length}+`} label="Technologies" icon={IconCode} color="teal" />
              <StatsCounter value="100%" label="Client Satisfaction" icon={IconHeart} color="pink" />
            </SimpleGrid>
          </motion.div>

          <Grid gutter={40}>
            {/* Education card */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  style={{ height: "100%" }}
                >
                  <Card
                    padding="xl"
                    radius="xl"
                    style={{
                      background: "linear-gradient(145deg, rgba(13,17,23,0.97) 0%, rgba(18,23,32,0.98) 100%)",
                      border: "1px solid rgba(6,182,212,0.22)",
                      boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
                      height: "100%",
                      overflow: "hidden",
                      position: "relative",
                      transition: "box-shadow 0.35s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(6,182,212,0.18), 0 20px 60px rgba(0,0,0,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(0,0,0,0.3)";
                    }}
                  >
                    {/* Top accent */}
                    <motion.div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.9, delay: 0.3 }}
                      viewport={{ once: true }}
                    />

                    <Group mb="xl">
                      <ThemeIcon
                        size={60}
                        radius="xl"
                        variant="gradient"
                        gradient={{ from: "cyan", to: "blue" }}
                        style={{ boxShadow: "0 8px 28px rgba(6,182,212,0.3)" }}
                      >
                        <IconSchool size={30} />
                      </ThemeIcon>
                      <div>
                        <Title order={3} size="h2">Education</Title>
                        <Text c="cyan" size="sm" fw={500}>Academic Background</Text>
                      </div>
                    </Group>

                    <Divider mb="lg" style={{ borderColor: "rgba(6,182,212,0.12)" }} />

                    <Stack gap="md">
                      <div>
                        <Text fw={700} size="lg" mb="xs">
                          Bachelor's in Software Engineering
                        </Text>
                        <Text c="dimmed" size="sm" mb={4}>
                          Artificial Intelligence University (AIU)
                        </Text>
                        <Text c="dimmed" size="sm">
                          Major: Software Engineering
                        </Text>
                      </div>
                      <Group gap="xs">
                        <IconCalendar size={18} color="#06b6d4" />
                        <Text size="sm" c="cyan" fw={600}>2018 – 2024</Text>
                      </Group>
                    </Stack>

                    {/* Watermark */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "1rem",
                        right: "1.5rem",
                        fontSize: "5rem",
                        fontWeight: 900,
                        color: "#06b6d4",
                        opacity: 0.03,
                        lineHeight: 1,
                        userSelect: "none",
                        pointerEvents: "none",
                        fontFamily: "monospace",
                      }}
                    >
                      BSc
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            </Grid.Col>

            {/* Bio card */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  style={{ height: "100%" }}
                >
                  <Card
                    padding="xl"
                    radius="xl"
                    style={{
                      background: "linear-gradient(145deg, rgba(13,17,23,0.97) 0%, rgba(18,23,32,0.98) 100%)",
                      border: "1px solid rgba(139,92,246,0.22)",
                      boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
                      height: "100%",
                      overflow: "hidden",
                      position: "relative",
                      transition: "box-shadow 0.35s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(139,92,246,0.18), 0 20px 60px rgba(0,0,0,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(0,0,0,0.3)";
                    }}
                  >
                    {/* Top accent */}
                    <motion.div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: "linear-gradient(90deg, #8b5cf6, #3b82f6)",
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.9, delay: 0.4 }}
                      viewport={{ once: true }}
                    />

                    <Group mb="xl">
                      <ThemeIcon
                        size={60}
                        radius="xl"
                        variant="gradient"
                        gradient={{ from: "violet", to: "blue" }}
                        style={{ boxShadow: "0 8px 28px rgba(139,92,246,0.3)" }}
                      >
                        <IconBriefcase size={30} />
                      </ThemeIcon>
                      <div>
                        <Title order={3} size="h2">About</Title>
                        <Text c="violet" size="sm" fw={500}>Who I Am</Text>
                      </div>
                    </Group>

                    <Divider mb="lg" style={{ borderColor: "rgba(139,92,246,0.12)" }} />

                    <Stack gap="lg">
                      <Text size="md" style={{ lineHeight: 1.85 }}>
                        I'm a passionate{" "}
                        <Text component="span" fw={700} c="cyan" inherit>
                          Software Engineer
                        </Text>{" "}
                        specializing in creating exceptional digital experiences through modern
                        web and mobile technologies.
                      </Text>

                      <Text size="sm" c="dimmed" style={{ lineHeight: 1.85 }}>
                        With expertise in React, TypeScript, and Flutter, I transform complex
                        challenges into elegant solutions — integrating AI technologies and
                        building scalable, user-centric applications.
                      </Text>

                      <Group gap="xs">
                        <IconMapPin size={18} color="#8b5cf6" />
                        <Text c="dimmed" size="sm">{contactInfo.location}</Text>
                      </Group>

                      <Group gap="sm" mt="xs">
                        {[
                          { icon: IconBrandLinkedin, href: contactInfo.linkedin, color: "blue", gradient: { from: "blue", to: "cyan" } },
                          { icon: IconBrandGithub, href: contactInfo.github, color: "gray", gradient: { from: "gray", to: "dark" } },
                          { icon: IconMail, href: `mailto:${contactInfo.email}`, color: "cyan", gradient: { from: "cyan", to: "teal" } },
                        ].map((social, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.15, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ActionIcon
                              component="a"
                              href={social.href}
                              target="_blank"
                              size={48}
                              radius="xl"
                              variant="gradient"
                              gradient={social.gradient}
                              style={{ boxShadow: "0 8px 28px rgba(6,182,212,0.25)" }}
                            >
                              <social.icon size={22} />
                            </ActionIcon>
                          </motion.div>
                        ))}
                      </Group>
                    </Stack>
                  </Card>
                </motion.div>
              </motion.div>
            </Grid.Col>
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
}
