"use client";
import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Card,
  Grid,
  Badge,
  List,
  ActionIcon,
  SimpleGrid,
  ThemeIcon,
  Image,
  Flex,
  Box,
  Tabs,
} from "@mantine/core";
import {
  IconDownload,
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandLinkedin,
  IconBrandGithub,
  IconArrowDown,
  IconCalendar,
  IconBriefcase,
  IconCode,
  IconDeviceMobile,
  IconExternalLink,
  IconSparkles,
  IconRocket,
  IconAward,
  IconBrandReact,
  IconHeart,
} from "@tabler/icons-react";

import ParticleBackground from "./components/ParticleBackground";
import Navigation from "./components/Navigation";
import TypeWriter from "./components/TypeWriter";
import ContactForm from "./components/ContactForm";
import SkillCard from "./components/SkillCard";
import {
  experiences,
  projects,
  skills,
  contactInfo,
} from "./data/portfolioData";
import { useState } from "react";

export const theme = createTheme({
  primaryColor: "cyan",
  colors: {
    dark: [
      "#C9D1D9",
      "#B1BAC4",
      "#8B949E",
      "#6E7681",
      "#484F58",
      "#30363D",
      "#21262D",
      "#161B22",
      "#0D1117",
      "#010409",
    ],
  },
  defaultRadius: "lg",
  shadows: {
    sm: "0 2px 8px rgba(6, 182, 212, 0.1)",
    md: "0 4px 16px rgba(6, 182, 212, 0.15)",
    lg: "0 8px 32px rgba(6, 182, 212, 0.2)",
    xl: "0 16px 64px rgba(6, 182, 212, 0.25)",
  },
});

// Floating Animation Component
const FloatingElement = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    animate={{
      y: [-10, 10, -10],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

// Stats Counter Component
const StatsCounter = ({
  value,
  label,
  icon: Icon,
  color,
}: {
  value: string;
  label: string;
  icon: React.ElementType;
  color: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    viewport={{ once: true }}
  >
    <Card
      padding="lg"
      radius="xl"
      style={{
        background: "rgba(13, 17, 23, 0.8)",
        backdropFilter: "blur(20px)",
        border: `1px solid rgba(6, 182, 212, 0.2)`,
        textAlign: "center",
      }}
    >
      <ThemeIcon size={50} radius="xl" variant="light" color={color} mb="sm">
        <Icon size={26} />
      </ThemeIcon>
      <Text
        size="xl"
        fw={800}
        variant="gradient"
        gradient={{ from: "cyan", to: "blue" }}
      >
        {value}
      </Text>
      <Text size="sm" c="dimmed">
        {label}
      </Text>
    </Card>
  </motion.div>
);

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const [activeSkillTab, setActiveSkillTab] = useState<string | null>(
    "frontend"
  );

  const handleContactClick = (): void => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/file/Nazem-Resume.pdf";
    link.download = "Nazem_Almsouti_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const typingTexts = [
    "Software Engineer",
    "Frontend Developer",
    "Mobile Developer",
    "React Specialist",
    "Flutter Developer",
  ];

  const filteredSkills =
    activeSkillTab === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeSkillTab);

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications />
      <div
        style={{
          minHeight: "100vh",
          background: "#0D1117",
          color: "white",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Particle Background */}
        <ParticleBackground />
        <Navigation />

        {/* Hero Section */}
        <section
          id="home"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            paddingTop: "80px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Container size="lg">
            <motion.div style={{ opacity, scale }}>
              <Grid align="center" gutter="xl">
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Badge
                        size="lg"
                        variant="gradient"
                        gradient={{ from: "cyan", to: "blue" }}
                        mb="xl"
                        leftSection={<IconSparkles size={16} />}
                        style={{
                          boxShadow: "0 4px 20px rgba(6, 182, 212, 0.3)",
                        }}
                      >
                        Available for Opportunities
                      </Badge>
                    </motion.div>

                    <Title
                      order={1}
                      size="3.5rem"
                      mb="md"
                      style={{
                        lineHeight: 1.1,
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      Hi, I'm{" "}
                      <motion.span
                        style={{
                          background:
                            "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          display: "inline-block",
                        }}
                        animate={{
                          backgroundPosition: ["0%", "100%", "0%"],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        Nazem Almsouti
                      </motion.span>
                    </Title>

                    <Title
                      order={2}
                      size="1.8rem"
                      c="dimmed"
                      mb="xl"
                      fw={500}
                      style={{
                        letterSpacing: "-0.01em",
                        minHeight: "2.5rem",
                      }}
                    >
                      <TypeWriter texts={typingTexts} speed={80} />
                    </Title>

                    <Text
                      size="lg"
                      c="dimmed"
                      mb="xl"
                      maw={550}
                      style={{ lineHeight: 1.7 }}
                    >
                      Crafting exceptional digital experiences with React,
                      TypeScript, and Flutter. Specializing in modern web
                      applications with AI integration and cutting-edge
                      technologies.
                    </Text>

                    <Group gap="md" mb="xl">
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="lg"
                          leftSection={<IconDownload size={20} />}
                          onClick={handleDownloadCV}
                          variant="gradient"
                          gradient={{ from: "cyan", to: "blue", deg: 135 }}
                          style={{
                            boxShadow: "0 8px 32px rgba(6, 182, 212, 0.4)",
                          }}
                        >
                          Download CV
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="lg"
                          variant="light"
                          color="cyan"
                          leftSection={<IconMail size={20} />}
                          onClick={handleContactClick}
                        >
                          Get In Touch
                        </Button>
                      </motion.div>
                    </Group>

                    <Group gap="lg">
                      {[
                        { icon: IconCode, label: "Frontend", color: "cyan" },
                        {
                          icon: IconDeviceMobile,
                          label: "Mobile",
                          color: "teal",
                        },
                        // { icon: IconRocket, label: "AI/ML", color: "violet" },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Group gap="xs">
                            <ThemeIcon
                              size="sm"
                              variant="light"
                              color={item.color}
                              radius="xl"
                            >
                              <item.icon size={14} />
                            </ThemeIcon>
                            <Text size="sm" c="dimmed">
                              {item.label}
                            </Text>
                          </Group>
                        </motion.div>
                      ))}
                    </Group>
                  </motion.div>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ position: "relative" }}
                  >
                    <FloatingElement delay={0.5}>
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          maxWidth: "400px",
                          margin: "0 auto",
                        }}
                      >
                        {/* Animated Border */}
                        <motion.div
                          style={{
                            position: "absolute",
                            inset: -4,
                            background:
                              "linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)",
                            borderRadius: "24px",
                            backgroundSize: "300% 300%",
                          }}
                          animate={{
                            backgroundPosition: [
                              "0% 50%",
                              "100% 50%",
                              "0% 50%",
                            ],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        <div
                          style={{
                            position: "relative",
                            background: "#0D1117",
                            borderRadius: "20px",
                            padding: "8px",
                          }}
                        >
                          <img
                            src={"/images/nazem.jpg"}
                            alt="Nazem Almsouti"
                            style={{
                              width: "100%",
                              height: "auto",
                              borderRadius: "16px",
                              display: "block",
                            }}
                          />
                        </div>

                        {/* Floating Stats */}
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1, duration: 0.6 }}
                          style={{
                            position: "absolute",
                            top: "10%",
                            left: "-15%",
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Card
                            padding="md"
                            radius="lg"
                            style={{
                              background: "rgba(13, 17, 23, 0.95)",
                              backdropFilter: "blur(20px)",
                              border: "1px solid rgba(6, 182, 212, 0.3)",
                              boxShadow: "0 8px 32px rgba(6, 182, 212, 0.2)",
                            }}
                          >
                            <Group gap="xs">
                              <IconAward color="#06b6d4" size={20} />
                              <div>
                                <Text size="xs" c="dimmed">
                                  Experience
                                </Text>
                                <Text fw={700} c="cyan">
                                  1+ Years
                                </Text>
                              </div>
                            </Group>
                          </Card>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.2, duration: 0.6 }}
                          style={{
                            position: "absolute",
                            bottom: "15%",
                            right: "-15%",
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Card
                            padding="md"
                            radius="lg"
                            style={{
                              background: "rgba(13, 17, 23, 0.95)",
                              backdropFilter: "blur(20px)",
                              border: "1px solid rgba(139, 92, 246, 0.3)",
                              boxShadow: "0 8px 32px rgba(139, 92, 246, 0.2)",
                            }}
                          >
                            <Group gap="xs">
                              <IconRocket color="#8b5cf6" size={20} />
                              <div>
                                <Text size="xs" c="dimmed">
                                  Projects
                                </Text>
                                <Text fw={700} c="violet">
                                  {projects.length}+ Done
                                </Text>
                              </div>
                            </Group>
                          </Card>
                        </motion.div>

                        {/* New floating stat */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.4, duration: 0.6 }}
                          style={{
                            position: "absolute",
                            bottom: "-5%",
                            left: "20%",
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Card
                            padding="md"
                            radius="lg"
                            style={{
                              background: "rgba(13, 17, 23, 0.95)",
                              backdropFilter: "blur(20px)",
                              border: "1px solid rgba(20, 184, 166, 0.3)",
                              boxShadow: "0 8px 32px rgba(20, 184, 166, 0.2)",
                            }}
                          >
                            <Group gap="xs">
                              <IconCode color="#14b8a6" size={20} />
                              <div>
                                <Text size="xs" c="dimmed">
                                  Technologies
                                </Text>
                                <Text fw={700} c="teal">
                                  {skills.length}+
                                </Text>
                              </div>
                            </Group>
                          </Card>
                        </motion.div>
                      </div>
                    </FloatingElement>
                  </motion.div>
                </Grid.Col>
              </Grid>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{ textAlign: "center", marginTop: "4rem" }}
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <IconArrowDown size={32} color="#06b6d4" />
                </motion.div>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* About Section */}
        <section id="about" style={{ padding: "8rem 0", position: "relative" }}>
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Box mb={60} style={{ textAlign: "center" }}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  viewport={{ once: true }}
                >
                  <Badge
                    size="lg"
                    variant="light"
                    color="cyan"
                    mb="md"
                    leftSection={<IconSparkles size={16} />}
                  >
                    About Me
                  </Badge>
                </motion.div>
                <Title
                  order={2}
                  size="3rem"
                  mb="md"
                  style={{
                    background:
                      "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 800,
                  }}
                >
                  Building Digital Excellence
                </Title>
                <Text c="dimmed" size="lg" maw={600} mx="auto">
                  Combining technical expertise with creative problem-solving
                </Text>
              </Box>

              {/* Stats Row */}
              <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="lg" mb={60}>
                <StatsCounter
                  value="1+"
                  label="Years Experience"
                  icon={IconAward}
                  color="cyan"
                />
                <StatsCounter
                  value={`${projects.length}+`}
                  label="Projects Completed"
                  icon={IconRocket}
                  color="violet"
                />
                <StatsCounter
                  value={`${skills.length}+`}
                  label="Technologies"
                  icon={IconCode}
                  color="teal"
                />
                <StatsCounter
                  value="100%"
                  label="Client Satisfaction"
                  icon={IconHeart}
                  color="pink"
                />
              </SimpleGrid>

              <Grid gutter={40}>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      padding="xl"
                      radius="xl"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)",
                        border: "1px solid rgba(6, 182, 212, 0.2)",
                        backdropFilter: "blur(20px)",
                        height: "100%",
                      }}
                    >
                      <Group mb="xl">
                        <ThemeIcon
                          size={60}
                          radius="xl"
                          variant="light"
                          color="cyan"
                        >
                          <IconBriefcase size={32} />
                        </ThemeIcon>
                        <div>
                          <Title order={3} size="h2">
                            Education
                          </Title>
                          <Text c="cyan" size="sm">
                            Academic Background
                          </Text>
                        </div>
                      </Group>

                      <Stack gap="md">
                        <div>
                          <Text fw={600} size="lg" mb="xs">
                            Bachelor's in Software Engineering
                          </Text>
                          <Text c="dimmed" size="sm">
                            Artificial Intelligence University (AIU)
                          </Text>
                          <Text c="dimmed" size="sm">
                            Major: Software Engineering
                          </Text>
                        </div>
                        <Group gap="xs">
                          <IconCalendar size={18} color="#06b6d4" />
                          <Text size="sm" c="cyan">
                            2018 - 2024
                          </Text>
                        </Group>
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Stack gap="lg" style={{ height: "100%" }}>
                      <Text size="lg" style={{ lineHeight: 1.8 }}>
                        I'm a passionate{" "}
                        <Text
                          component="span"
                          fw={700}
                          variant="gradient"
                          gradient={{ from: "cyan", to: "blue" }}
                        >
                          Software Engineer
                        </Text>{" "}
                        specializing in creating exceptional digital experiences
                        through modern web and mobile technologies.
                      </Text>

                      <Text size="md" c="dimmed" style={{ lineHeight: 1.8 }}>
                        With expertise in React, TypeScript, and Flutter, I
                        transform complex challenges into elegant solutions.
                        Passionate about integrating cutting-edge AI
                        technologies and creating scalable, user-centric
                        applications.
                      </Text>

                      <Group gap="md">
                        <IconMapPin size={20} color="#06b6d4" />
                        <Text c="dimmed">{contactInfo.location}</Text>
                      </Group>

                      {/* Social Links */}
                      <Group gap="sm" mt="md">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ActionIcon
                            component="a"
                            href={contactInfo.linkedin}
                            target="_blank"
                            size={45}
                            radius="xl"
                            variant="light"
                            color="blue"
                          >
                            <IconBrandLinkedin size={22} />
                          </ActionIcon>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ActionIcon
                            component="a"
                            href={contactInfo.github}
                            target="_blank"
                            size={45}
                            radius="xl"
                            variant="light"
                            color="gray"
                          >
                            <IconBrandGithub size={22} />
                          </ActionIcon>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ActionIcon
                            component="a"
                            href={`mailto:${contactInfo.email}`}
                            size={45}
                            radius="xl"
                            variant="light"
                            color="cyan"
                          >
                            <IconMail size={22} />
                          </ActionIcon>
                        </motion.div>
                      </Group>
                    </Stack>
                  </motion.div>
                </Grid.Col>
              </Grid>
            </motion.div>
          </Container>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          style={{ padding: "8rem 0", position: "relative" }}
        >
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Box mb={60} style={{ textAlign: "center" }}>
                <Badge
                  size="lg"
                  variant="light"
                  color="cyan"
                  mb="md"
                  leftSection={<IconSparkles size={16} />}
                >
                  Skills & Expertise
                </Badge>
                <Title
                  order={2}
                  size="3rem"
                  mb="md"
                  style={{
                    background:
                      "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 800,
                  }}
                >
                  Technical Arsenal
                </Title>
                <Text c="dimmed" size="lg" maw={600} mx="auto">
                  Modern technologies powering exceptional solutions
                </Text>
              </Box>

              {/* Skill Category Tabs */}
              <Tabs
                value={activeSkillTab}
                onChange={setActiveSkillTab}
                variant="pills"
                radius="xl"
                mb={40}
                styles={{
                  root: {
                    display: "flex",
                    justifyContent: "center",
                  },
                  list: {
                    background: "rgba(6, 182, 212, 0.05)",
                    padding: "8px",
                    borderRadius: "20px",
                    border: "1px solid rgba(6, 182, 212, 0.1)",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  },
                  tab: {
                    fontWeight: 500,
                    transition: "all 0.3s ease",
                    "&[data-active]": {
                      background:
                        "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
                      boxShadow: "0 4px 20px rgba(6, 182, 212, 0.4)",
                    },
                  },
                }}
              >
                <Tabs.List>
                  <Tabs.Tab
                    value="frontend"
                    leftSection={<IconBrandReact size={16} />}
                  >
                    Frontend
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="mobile"
                    leftSection={<IconDeviceMobile size={16} />}
                  >
                    Mobile
                  </Tabs.Tab>

                  {/* <Tabs.Tab
                    value="tools"
                    leftSection={<IconSettings size={16} />}
                  >
                    Tools
                  </Tabs.Tab> */}
                  <Tabs.Tab
                    value="soft-skills"
                    leftSection={<IconHeart size={16} />}
                  >
                    Soft Skills
                  </Tabs.Tab>
                </Tabs.List>
              </Tabs>

              <motion.div
                key={activeSkillTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <SimpleGrid
                  cols={{ base: 2, sm: 3, md: 4, lg: 5 }}
                  spacing="lg"
                >
                  {filteredSkills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </SimpleGrid>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Experience Section with Timeline */}
        <section
          id="experience"
          style={{ padding: "8rem 0", position: "relative" }}
        >
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Box mb={60} style={{ textAlign: "center" }}>
                <Badge
                  size="lg"
                  variant="light"
                  color="cyan"
                  mb="md"
                  leftSection={<IconSparkles size={16} />}
                >
                  Career Journey
                </Badge>
                <Title
                  order={2}
                  size="3rem"
                  mb="md"
                  style={{
                    background:
                      "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 800,
                  }}
                >
                  Professional Experience
                </Title>
                <Text c="dimmed" size="lg" maw={600} mx="auto">
                  Building impactful solutions across diverse projects
                </Text>
              </Box>

              {/* Timeline Experience */}
              <div style={{ position: "relative" }}>
                {/* Timeline Line */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 0,
                    bottom: 0,
                    width: "2px",
                    background:
                      "linear-gradient(180deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
                    transform: "translateX(-50%)",
                    display: "none",
                  }}
                  className="timeline-line"
                />

                <Stack gap={30}>
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        whileHover={{ x: 10, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card
                          padding="xl"
                          radius="xl"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)",
                            border: "1px solid rgba(6, 182, 212, 0.2)",
                            backdropFilter: "blur(20px)",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          {/* Top gradient bar */}
                          <motion.div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              height: "4px",
                              background:
                                "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)",
                            }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                          />

                          {/* Timeline dot */}
                          <motion.div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "-30px",
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              background:
                                "linear-gradient(135deg, #06b6d4, #3b82f6)",
                              border: "3px solid #0D1117",
                              transform: "translateY(-50%)",
                              boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
                            }}
                            animate={{
                              boxShadow: [
                                "0 0 20px rgba(6, 182, 212, 0.5)",
                                "0 0 30px rgba(6, 182, 212, 0.8)",
                                "0 0 20px rgba(6, 182, 212, 0.5)",
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />

                          <Grid gutter="xl">
                            <Grid.Col span={{ base: 12, md: 8 }}>
                              <Group mb="md">
                                {exp.logo && (
                                  <motion.div
                                    whileHover={{ rotate: [0, -5, 5, 0] }}
                                    transition={{ duration: 0.5 }}
                                  >
                                    <Image
                                      src={exp.logo}
                                      alt={exp.company}
                                      width={50}
                                      height={50}
                                      radius="md"
                                      fit="contain"
                                      style={{
                                        background: "white",
                                        padding: "8px",
                                      }}
                                    />
                                  </motion.div>
                                )}
                                <div>
                                  <Title order={3} size="h3" c="cyan">
                                    {exp.title}
                                  </Title>
                                  <Text size="lg" fw={500}>
                                    {exp.company}
                                  </Text>
                                </div>
                              </Group>
                            </Grid.Col>

                            <Grid.Col span={{ base: 12, md: 4 }}>
                              <Stack gap="xs">
                                <Badge
                                  size="lg"
                                  variant="gradient"
                                  gradient={{
                                    from:
                                      exp.type === "Fulltime" ? "teal" : "cyan",
                                    to:
                                      exp.type === "Fulltime"
                                        ? "green"
                                        : "blue",
                                  }}
                                >
                                  {exp.type}
                                </Badge>
                                <Group gap="xs">
                                  <IconCalendar size={16} color="#06b6d4" />
                                  <Text size="sm" c="dimmed">
                                    {exp.period}
                                  </Text>
                                </Group>
                                <Group gap="xs">
                                  <IconMapPin size={16} color="#06b6d4" />
                                  <Text size="sm" c="dimmed">
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
                                size={20}
                                radius="xl"
                                variant="light"
                                color="cyan"
                              >
                                <IconSparkles size={12} />
                              </ThemeIcon>
                            }
                          >
                            {exp.description.map((item, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <List.Item style={{ lineHeight: 1.7 }}>
                                  <Text c="dimmed">{item}</Text>
                                </List.Item>
                              </motion.div>
                            ))}
                          </List>

                          {exp.technologies && (
                            <div>
                              <Text size="sm" fw={600} c="cyan" mb="sm">
                                Technologies:
                              </Text>
                              <Flex wrap="wrap" gap="xs">
                                {exp.technologies.map((tech, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.1 }}
                                  >
                                    <Badge
                                      variant="light"
                                      color="cyan"
                                      size="md"
                                      style={{ cursor: "default" }}
                                    >
                                      {tech}
                                    </Badge>
                                  </motion.div>
                                ))}
                              </Flex>
                            </div>
                          )}
                        </Card>
                      </motion.div>
                    </motion.div>
                  ))}
                </Stack>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          style={{ padding: "8rem 0", position: "relative" }}
        >
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Box mb={60} style={{ textAlign: "center" }}>
                <Badge
                  size="lg"
                  variant="light"
                  color="cyan"
                  mb="md"
                  leftSection={<IconSparkles size={16} />}
                >
                  Portfolio
                </Badge>
                <Title
                  order={2}
                  size="3rem"
                  mb="md"
                  style={{
                    background:
                      "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 800,
                  }}
                >
                  Featured Projects
                </Title>
                <Text c="dimmed" size="lg" maw={600} mx="auto">
                  Showcasing innovation and technical excellence
                </Text>
              </Box>

              <Grid gutter={30}>
                {projects.map((project, index) => (
                  <Grid.Col key={project.id} span={{ base: 12, md: 6 }}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        style={{ height: "100%" }}
                      >
                        <Card
                          padding={0}
                          radius="xl"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)",
                            border: "1px solid rgba(6, 182, 212, 0.2)",
                            backdropFilter: "blur(20px)",
                            overflow: "hidden",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Card.Section>
                            <div
                              style={{
                                position: "relative",
                                overflow: "hidden",
                              }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                              >
                                <Image
                                  src={project.image || "/placeholder.svg"}
                                  height={250}
                                  alt={project.title}
                                />
                              </motion.div>
                              <div
                                style={{
                                  position: "absolute",
                                  inset: 0,
                                  background:
                                    "linear-gradient(to top, rgba(13, 17, 23, 0.9) 0%, transparent 60%)",
                                }}
                              />
                              <div
                                style={{
                                  position: "absolute",
                                  top: 20,
                                  right: 20,
                                }}
                              >
                                <Badge
                                  size="lg"
                                  variant="gradient"
                                  gradient={{
                                    from:
                                      project.status === "completed"
                                        ? "teal"
                                        : "cyan",
                                    to:
                                      project.status === "completed"
                                        ? "green"
                                        : "blue",
                                  }}
                                  style={{
                                    boxShadow:
                                      "0 4px 20px rgba(6, 182, 212, 0.3)",
                                  }}
                                >
                                  {project.status.replace("-", " ")}
                                </Badge>
                              </div>
                            </div>
                          </Card.Section>

                          <Stack gap="lg" p="xl" style={{ flex: 1 }}>
                            <div>
                              <Group justify="space-between" mb="xs">
                                <Title order={3} size="h3" c="cyan">
                                  {project.title}
                                </Title>
                              </Group>
                              <Group gap="xs" mb="sm">
                                <IconCalendar size={14} color="#06b6d4" />
                                <Text size="xs" c="dimmed">
                                  {project.period}
                                </Text>
                              </Group>
                              <Text c="dimmed" style={{ lineHeight: 1.7 }}>
                                {project.description}
                              </Text>
                            </div>

                            <div>
                              <Text size="sm" fw={600} c="cyan" mb="sm">
                                Key Features
                              </Text>
                              <List
                                size="sm"
                                spacing="xs"
                                icon={
                                  <ThemeIcon
                                    size={16}
                                    radius="xl"
                                    variant="light"
                                    color="cyan"
                                  >
                                    <IconSparkles size={10} />
                                  </ThemeIcon>
                                }
                              >
                                {project.features
                                  .slice(0, 3)
                                  .map((feature, i) => (
                                    <List.Item key={i}>
                                      <Text c="dimmed" size="sm">
                                        {feature}
                                      </Text>
                                    </List.Item>
                                  ))}
                              </List>
                            </div>

                            <div>
                              <Text size="sm" fw={600} c="cyan" mb="sm">
                                Tech Stack
                              </Text>
                              <Flex wrap="wrap" gap="xs">
                                {project.technologies.map((tech, i) => (
                                  <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.1 }}
                                  >
                                    <Badge
                                      variant="light"
                                      color="cyan"
                                      size="sm"
                                    >
                                      {tech}
                                    </Badge>
                                  </motion.div>
                                ))}
                              </Flex>
                            </div>

                            <Group gap="sm" mt="auto">
                              {project.demoUrl && project.demoUrl !== "#" && (
                                <motion.div
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  style={{ flex: 1 }}
                                >
                                  <Button
                                    variant="gradient"
                                    gradient={{ from: "cyan", to: "blue" }}
                                    size="md"
                                    leftSection={<IconExternalLink size={18} />}
                                    component="a"
                                    href={project.demoUrl}
                                    target="_blank"
                                    fullWidth
                                  >
                                    Live Demo
                                  </Button>
                                </motion.div>
                              )}
                              {project.githubUrl &&
                                project.githubUrl !== "#" && (
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{ flex: 1 }}
                                  >
                                    <Button
                                      variant="light"
                                      color="gray"
                                      size="md"
                                      leftSection={
                                        <IconBrandGithub size={18} />
                                      }
                                      component="a"
                                      href={project.githubUrl}
                                      target="_blank"
                                      fullWidth
                                    >
                                      Source
                                    </Button>
                                  </motion.div>
                                )}
                            </Group>
                          </Stack>
                        </Card>
                      </motion.div>
                    </motion.div>
                  </Grid.Col>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          style={{ padding: "8rem 0 4rem", position: "relative" }}
        >
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Box mb={60} style={{ textAlign: "center" }}>
                <Badge
                  size="lg"
                  variant="light"
                  color="cyan"
                  mb="md"
                  leftSection={<IconSparkles size={16} />}
                >
                  Get in Touch
                </Badge>
                <Title
                  order={2}
                  size="3rem"
                  mb="md"
                  style={{
                    background:
                      "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 800,
                  }}
                >
                  Let's Work Together
                </Title>
                <Text c="dimmed" size="lg" maw={600} mx="auto">
                  Open to new opportunities and exciting collaborations
                </Text>
              </Box>

              <Grid gutter={30}>
                {/* Contact Info Cards */}
                <Grid.Col span={{ base: 12, md: 5 }}>
                  <Stack gap="lg">
                    {[
                      {
                        icon: IconMail,
                        title: "Email",
                        value: contactInfo.email,
                        href: `mailto:${contactInfo.email}`,
                        color: "cyan",
                      },
                      {
                        icon: IconPhone,
                        title: "Phone",
                        value: contactInfo.phone,
                        href: `tel:${contactInfo.phone}`,
                        color: "blue",
                      },
                      {
                        icon: IconMapPin,
                        title: "Location",
                        value: contactInfo.location,
                        color: "violet",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          whileHover={{ x: 10, scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Card
                            component={item.href ? "a" : "div"}
                            href={item.href}
                            padding="lg"
                            radius="xl"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)",
                              border: "1px solid rgba(6, 182, 212, 0.2)",
                              backdropFilter: "blur(20px)",
                              textDecoration: "none",
                              color: "inherit",
                              cursor: item.href ? "pointer" : "default",
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                            }}
                          >
                            <ThemeIcon
                              size={50}
                              radius="xl"
                              variant="light"
                              color={item.color}
                            >
                              <item.icon size={24} />
                            </ThemeIcon>
                            <div>
                              <Text size="sm" c="dimmed">
                                {item.title}
                              </Text>
                              <Text fw={600}>{item.value}</Text>
                            </div>
                          </Card>
                        </motion.div>
                      </motion.div>
                    ))}

                    {/* Social Links */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Group gap="md" mt="md">
                        {[
                          {
                            icon: IconBrandLinkedin,
                            href: contactInfo.linkedin,
                            color: "blue",
                            label: "LinkedIn",
                          },
                          {
                            icon: IconBrandGithub,
                            href: contactInfo.github,
                            color: "gray",
                            label: "GitHub",
                          },
                          {
                            icon: IconMail,
                            href: `mailto:${contactInfo.email}`,
                            color: "cyan",
                            label: "Email",
                          },
                        ].map((social, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ActionIcon
                              component="a"
                              href={social.href}
                              target="_blank"
                              size={55}
                              radius="xl"
                              variant="gradient"
                              gradient={{ from: social.color, to: "blue" }}
                              style={{
                                boxShadow: "0 8px 32px rgba(6, 182, 212, 0.3)",
                              }}
                            >
                              <social.icon size={26} />
                            </ActionIcon>
                          </motion.div>
                        ))}
                      </Group>
                    </motion.div>
                  </Stack>
                </Grid.Col>

                {/* Contact Form */}
                <Grid.Col span={{ base: 12, md: 7 }}>
                  <ContactForm />
                </Grid.Col>
              </Grid>
            </motion.div>
          </Container>
        </section>

        {/* Footer */}
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

              <Group gap="xs">
                <Text size="xs" c="dimmed">
                  Built with
                </Text>
                <Text
                  size="xs"
                  fw={600}
                  variant="gradient"
                  gradient={{ from: "cyan", to: "blue" }}
                >
                  React · TypeScript · Mantine · Framer Motion
                </Text>
              </Group>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <IconHeart size={20} color="#06b6d4" />
              </motion.div>
            </Stack>
          </Container>
        </footer>
      </div>
    </MantineProvider>
  );
}

export default App;
