"use client";
import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { motion } from "framer-motion";
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
  Progress,
  ThemeIcon,
  Image,
  Flex,
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
  IconServer,
  IconTool,
  IconUsers,
  IconExternalLink,
} from "@tabler/icons-react";

import AnimatedBackground from "./components/AnimatedBackground";
import Navigation from "./components/Navigation";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import {
  experiences,
  projects,
  skills,
  contactInfo,
} from "./data/portfolioData";
import type { Skill } from "./types/portfolio";

const theme = createTheme({
  colors: {
    dark: [
      "#C1C2C5",
      "#A6A7AB",
      "#909296",
      "#5c5f66",
      "#373A40",
      "#2C2E33",
      "#25262b",
      "#1A1B1E",
      "#141517",
      "#101113",
    ],
  },
  primaryColor: "blue",
  defaultRadius: "md",
});

function App() {
  const isVisible = useScrollAnimation();

  const handleContactClick = (): void => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const getSkillIcon = (category: Skill["category"]) => {
    switch (category) {
      case "frontend":
        return <IconCode size={24} />;
      case "mobile":
        return <IconDeviceMobile size={24} />;
      case "backend":
        return <IconServer size={24} />;
      case "tools":
        return <IconTool size={24} />;
      case "soft-skills":
        return <IconUsers size={24} />;
      default:
        return <IconCode size={24} />;
    }
  };

  const getSkillColor = (category: Skill["category"]): string => {
    switch (category) {
      case "frontend":
        return "blue";
      case "mobile":
        return "green";
      case "backend":
        return "violet";
      case "tools":
        return "orange";
      case "soft-skills":
        return "pink";
      default:
        return "gray";
    }
  };
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = " file/ Nazem-Resume.pdf";
    link.download = "Nazem_Almsouti_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications />
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1e3a8a 100%)",
          color: "white",
          overflow: "hidden",
        }}
      >
        <AnimatedBackground />
        <Navigation />

        <section
          id="home"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            paddingTop: "80px",
          }}
        >
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
              style={{ textAlign: "center" }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ marginBottom: "2rem" }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "128px",
                    height: "128px",
                    margin: "0 auto 2rem",
                  }}
                >
                  <motion.div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(45deg, #94a3b8, #3b82f6)",
                      borderRadius: "50%",
                      zIndex: 1,
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                      scale: {
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      },
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: "4px",
                      background: "#0f172a",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 2,
                    }}
                  >
                    <img
                      src={" images/nazem.jpg"}
                      alt="Nazem Almsouti"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                        border: "2px solid #0f172a",
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Title
                  order={1}
                  size="4rem"
                  mb="lg"
                  style={{ lineHeight: 1.1 }}
                >
                  NAZEM ALMSOUTI
                </Title>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ marginBottom: "2rem" }}
              >
                <Title order={2} size="1.5rem" c="gray.3" mb="md">
                  Software Engineer
                </Title>
                <Group justify="center" gap="lg">
                  <Group gap="xs">
                    <IconCode size={16} />
                    <Text size="sm" c="gray.4">
                      Frontend Development
                    </Text>
                  </Group>
                  <Group gap="xs">
                    <IconBriefcase size={16} />
                    <Text size="sm" c="gray.4">
                      Mobile Development
                    </Text>
                  </Group>
                  <Group gap="xs">
                    <Text size="sm" c="gray.4">
                      React & TypeScript Expert
                    </Text>
                  </Group>
                </Group>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Text
                  size="lg"
                  c="gray.4"
                  mb="xl"
                  maw={800}
                  mx="auto"
                  style={{ lineHeight: 1.6 }}
                >
                  Passionate about building modern, scalable applications with
                  React, TypeScript, and Flutter. Experienced in delivering
                  clean, responsive, and user-centered interfaces with
                  cutting-edge technologies including Generative AI, LLMs, and
                  advanced state management solutions.
                </Text>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Group justify="center" gap="md" mb="xl">
                  <Button
                    size="lg"
                    leftSection={<IconDownload size={20} />}
                    onClick={handleDownloadCV}
                    variant="gradient"
                    radius="xl"
                    style={{ boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)" }}
                  >
                    Download CV
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    color="blue"
                    leftSection={<IconMail size={20} />}
                    onClick={handleContactClick}
                    radius="xl"
                  >
                    Get In Touch
                  </Button>
                </Group>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <IconArrowDown
                    size={32}
                    color="#3b82f6"
                    style={{ margin: "0 auto" }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        <section id="about" style={{ padding: "5rem 0" }}>
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "4rem" }}
            >
              <Title order={2} size="3rem" mb="md" variant="gradient">
                About Me
              </Title>
              <div
                style={{
                  width: "96px",
                  height: "4px",
                  background: "linear-gradient(45deg, #94a3b8, #3b82f6)",
                  margin: "0 auto",
                  borderRadius: "2px",
                }}
              />
            </motion.div>

            <Grid gutter="xl" align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card
                    shadow="xl"
                    padding="xl"
                    radius="md"
                    style={{
                      background: "rgba(15, 23, 42, 0.8)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(148, 163, 184, 0.2)",
                    }}
                  >
                    <Group mb="lg">
                      <Title order={3} c="blue.4">
                        Education
                      </Title>
                    </Group>
                    <Stack gap="sm">
                      <Title order={4} size="lg" c="gray.2">
                        Bachelor's Degree in Information and Communication
                        Engineering
                      </Title>
                      <Text c="gray.4">University of Business Excellence</Text>
                      <Text c="gray.4">Major in Software Engineering</Text>
                      <Group gap="xs" mt="md">
                        <IconCalendar size={16} color="#3b82f6" />
                        <Text size="sm" c="blue.4">
                          2018 - 2024
                        </Text>
                      </Group>
                    </Stack>
                  </Card>
                </motion.div>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Stack gap="lg">
                    <Text size="lg" c="gray.3" style={{ lineHeight: 1.6 }}>
                      I'm a passionate{" "}
                      <strong style={{ color: "#3b82f6" }}>
                        Software Engineer
                      </strong>{" "}
                      with expertise in Frontend Web and Mobile Development. I
                      hold a Bachelor's degree in Information Technology with a
                      focus on Software Engineering.
                    </Text>
                    <Text size="lg" c="gray.3" style={{ lineHeight: 1.6 }}>
                      I specialize in building modern web applications using{" "}
                      <strong style={{ color: "#3b82f6" }}>
                        React and TypeScript
                      </strong>
                      , and developing cross-platform mobile apps with{" "}
                      <strong style={{ color: "#3b82f6" }}>
                        Flutter and Dart
                      </strong>
                      . I'm passionate about integrating cutting-edge
                      technologies such as Generative AI, LLMs, and RAG into
                      real-world projects.
                    </Text>
                    <Text size="lg" c="gray.3" style={{ lineHeight: 1.6 }}>
                      Strong team player with a commitment to code quality,
                      scalability, and seamless user experience. Always eager to
                      learn new technologies and tackle challenging problems.
                    </Text>
                    <Group gap="md" pt="md">
                      <IconMapPin size={20} color="#3b82f6" />
                      <Text c="gray.4">{contactInfo.location}</Text>
                    </Group>
                  </Stack>
                </motion.div>
              </Grid.Col>
            </Grid>
          </Container>
        </section>

        <section style={{ padding: "5rem 0" }}>
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "4rem" }}
            >
              <Title order={2} size="3rem" mb="md" variant="gradient">
                Technical Skills
              </Title>
              <div
                style={{
                  width: "96px",
                  height: "4px",
                  background: "linear-gradient(45deg, #94a3b8, #3b82f6)",
                  margin: "0 auto",
                  borderRadius: "2px",
                }}
              />
              <Text c="gray.4" mt="md" size="lg" maw={600} mx="auto">
                Proficient in modern technologies and frameworks with a focus on
                performance and user experience
              </Text>
            </motion.div>

            <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing="lg">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  viewport={{ once: true }}
                >
                  <Card
                    shadow="md"
                    padding="lg"
                    radius="md"
                    withBorder
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      cursor: "pointer",
                      height: "100%",
                    }}
                  >
                    <Group justify="center" mb="md">
                      <ThemeIcon
                        size="xl"
                        radius="md"
                        variant="light"
                        color={getSkillColor(skill.category)}
                      >
                        {getSkillIcon(skill.category)}
                      </ThemeIcon>
                    </Group>

                    <Text ta="center" fw={600} mb="xs" c="white">
                      {skill.name}
                    </Text>

                    <Text
                      ta="center"
                      size="xs"
                      c="dimmed"
                      mb="md"
                      tt="capitalize"
                    >
                      {skill.category.replace("-", " ")}
                    </Text>

                    <Progress
                      value={skill.proficiency}
                      color={getSkillColor(skill.category)}
                      size="sm"
                      radius="xl"
                      mb="xs"
                      animated
                    />

                    <Text ta="center" size="xs" c="dimmed">
                      {skill.proficiency}%
                    </Text>
                  </Card>
                </motion.div>
              ))}
            </SimpleGrid>
          </Container>
        </section>

        <section id="experience" style={{ padding: "5rem 0" }}>
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "4rem" }}
            >
              <Title order={2} size="3rem" mb="md" variant="gradient">
                Professional Experience
              </Title>
              <div
                style={{
                  width: "96px",
                  height: "4px",
                  background: "linear-gradient(45deg, #94a3b8, #3b82f6)",
                  margin: "0 auto",
                  borderRadius: "2px",
                }}
              />
            </motion.div>

            <Stack gap="xl">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card
                    shadow="xl"
                    padding="xl"
                    radius="md"
                    style={{
                      background: "rgba(15, 23, 42, 0.8)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(148, 163, 184, 0.2)",
                    }}
                  >
                    <Grid>
                      <Grid.Col span={{ base: 12, lg: 8 }}>
                        <Title order={3} c="blue.4" mb="xs">
                          {exp.title}
                        </Title>
                        <Title order={4} c="gray.2" mb="md">
                          {exp.company}
                        </Title>
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, lg: 4 }}>
                        <Stack gap="xs">
                          <Group gap="xs">
                            <IconCalendar size={16} />
                            <Text c="gray.4">{exp.period}</Text>
                          </Group>
                          <Group gap="xs">
                            <IconMapPin size={16} />
                            <Text c="gray.4">{exp.location}</Text>
                          </Group>
                        </Stack>
                      </Grid.Col>
                    </Grid>

                    <Badge
                      color={exp.type === "Fulltime" ? "green" : "blue"}
                      variant="light"
                      mb="lg"
                    >
                      {exp.type}
                    </Badge>

                    <List spacing="sm" mb="lg">
                      {exp.description.map((item, i) => (
                        <List.Item
                          key={i}
                          c="gray.3"
                          style={{ lineHeight: 1.6 }}
                        >
                          {item}
                        </List.Item>
                      ))}
                    </List>

                    {exp.technologies && (
                      <div>
                        <Text size="sm" fw={600} c="blue.4" mb="sm">
                          Technologies Used:
                        </Text>
                        <Group gap="xs">
                          {exp.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="light"
                              color="blue"
                              size="sm"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </Group>
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </Stack>
          </Container>
        </section>

        <section id="projects" style={{ padding: "5rem 0" }}>
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "4rem" }}
            >
              <Title order={2} size="3rem" mb="md" variant="gradient">
                Featured Projects
              </Title>
              <div
                style={{
                  width: "96px",
                  height: "4px",
                  background: "linear-gradient(45deg, #94a3b8, #3b82f6)",
                  margin: "0 auto",
                  borderRadius: "2px",
                }}
              />
              <Text c="gray.4" mt="md" size="lg" maw={600} mx="auto">
                Showcasing my expertise in modern web and mobile development
              </Text>
            </motion.div>

            <Grid gutter="xl">
              {projects.map((project, index) => (
                <Grid.Col key={project.id} span={{ base: 12, md: 6 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    style={{ height: "100%" }}
                  >
                    <Card
                      shadow="xl"
                      padding="lg"
                      radius="md"
                      withBorder
                      style={{
                        background: "rgba(15, 23, 42, 0.8)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(148, 163, 184, 0.2)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Card.Section>
                        <div
                          style={{ position: "relative", overflow: "hidden" }}
                        >
                          <Image
                            src={project.image || "/placeholder.svg"}
                            height={200}
                            alt={project.title}
                            style={{
                              transition: "transform 0.7s ease",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: 16,
                              right: 16,
                            }}
                          >
                            <Badge
                              color={
                                project.status === "completed"
                                  ? "green"
                                  : "blue"
                              }
                              variant="filled"
                            >
                              {project.status.replace("-", " ")}
                            </Badge>
                          </div>
                        </div>
                      </Card.Section>

                      <Stack gap="md" style={{ flex: 1 }}>
                        <div>
                          <Text fw={600} size="lg" c="blue.4" mb="xs">
                            {project.title}
                          </Text>
                          <Group gap="xs" mb="sm">
                            <IconCalendar size={16} color="gray" />
                            <Text size="sm" c="dimmed">
                              {project.period}
                            </Text>
                          </Group>
                        </div>

                        <Text size="sm" c="gray.3" style={{ lineHeight: 1.6 }}>
                          {project.description}
                        </Text>

                        <div>
                          <Group gap="xs" mb="sm">
                            <Text size="sm" fw={600} c="blue.4">
                              Key Features
                            </Text>
                          </Group>
                          <List size="sm" spacing="xs">
                            {project.features.slice(0, 3).map((feature, i) => (
                              <List.Item key={i} c="gray.3">
                                {feature}
                              </List.Item>
                            ))}
                          </List>
                        </div>

                        <div>
                          <Text size="sm" fw={600} c="blue.4" mb="sm">
                            Technologies
                          </Text>
                          <Flex wrap="wrap" gap="xs">
                            {project.technologies.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="light"
                                color="blue"
                                size="sm"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </Flex>
                        </div>

                        <Group gap="sm" mt="auto">
                          {project.demoUrl && (
                            <Button
                              variant="outline"
                              color="blue"
                              size="sm"
                              leftSection={<IconExternalLink size={16} />}
                              component="a"
                              href={project.demoUrl}
                              target="_blank"
                              style={{ flex: 1 }}
                            >
                              Live Demo
                            </Button>
                          )}

                          {project.githubUrl && (
                            <Button
                              variant="outline"
                              color="gray"
                              size="sm"
                              leftSection={<IconBrandGithub size={16} />}
                              component="a"
                              href={project.githubUrl}
                              target="_blank"
                              style={{ flex: 1 }}
                            >
                              Source
                            </Button>
                          )}
                        </Group>
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid.Col>
              ))}
            </Grid>
          </Container>
        </section>

        <section id="contact" style={{ padding: "5rem 0" }}>
          <Container size="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "4rem" }}
            >
              <Title order={2} size="3rem" mb="md" variant="gradient">
                Let's Work Together
              </Title>
              <div
                style={{
                  width: "96px",
                  height: "4px",
                  background: "linear-gradient(45deg, #94a3b8, #3b82f6)",
                  margin: "0 auto",
                  borderRadius: "2px",
                }}
              />
              <Text size="xl" c="gray.3" mt="md" maw={600} mx="auto">
                I'm always open to discussing new opportunities and interesting
                projects.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Grid gutter="xl" mb="xl">
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Card
                      shadow="xl"
                      padding="xl"
                      radius="md"
                      style={{
                        background: "rgba(15, 23, 42, 0.8)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(148, 163, 184, 0.2)",
                        textAlign: "center",
                        height: "100%",
                      }}
                    >
                      <IconMail
                        size={48}
                        color="#3b82f6"
                        style={{ margin: "0 auto 1rem" }}
                      />
                      <Title order={4} mb="sm">
                        Email
                      </Title>
                      <Text c="gray.4">{contactInfo.email}</Text>
                    </Card>
                  </motion.div>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 4 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Card
                      shadow="xl"
                      padding="xl"
                      radius="md"
                      style={{
                        background: "rgba(15, 23, 42, 0.8)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(148, 163, 184, 0.2)",
                        textAlign: "center",
                        height: "100%",
                      }}
                    >
                      <IconPhone
                        size={48}
                        color="#3b82f6"
                        style={{ margin: "0 auto 1rem" }}
                      />
                      <Title order={4} mb="sm">
                        Phone
                      </Title>
                      <Text c="gray.4">{contactInfo.phone}</Text>
                    </Card>
                  </motion.div>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 4 }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Card
                      shadow="xl"
                      padding="xl"
                      radius="md"
                      style={{
                        background: "rgba(15, 23, 42, 0.8)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(148, 163, 184, 0.2)",
                        textAlign: "center",
                        height: "100%",
                      }}
                    >
                      <IconMapPin
                        size={48}
                        color="#3b82f6"
                        style={{ margin: "0 auto 1rem" }}
                      />
                      <Title order={4} mb="sm">
                        Location
                      </Title>
                      <Text c="gray.4">{contactInfo.location}</Text>
                    </Card>
                  </motion.div>
                </Grid.Col>
              </Grid>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                style={{ textAlign: "center" }}
              >
                <Group justify="center" gap="lg">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ActionIcon
                      size="xl"
                      radius="xl"
                      variant="filled"
                      color="blue"
                      component="a"
                      href={`mailto:${contactInfo.email}`}
                      style={{
                        boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
                      }}
                    >
                      <IconMail size={24} />
                    </ActionIcon>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ActionIcon
                      size="xl"
                      radius="xl"
                      variant="filled"
                      color="blue"
                      component="a"
                      href={contactInfo.linkedin}
                      style={{
                        boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
                      }}
                    >
                      <IconBrandLinkedin size={24} />
                    </ActionIcon>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ActionIcon
                      size="xl"
                      radius="xl"
                      variant="filled"
                      color="gray"
                      component="a"
                      href={contactInfo.github}
                      style={{
                        boxShadow: "0 4px 20px rgba(107, 114, 128, 0.3)",
                      }}
                    >
                      <IconBrandGithub size={24} />
                    </ActionIcon>
                  </motion.div>
                </Group>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        <footer
          style={{
            padding: "2rem 0",
            borderTop: "1px solid rgba(148, 163, 184, 0.2)",
            background: "rgba(15, 23, 42, 0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Container size="lg">
            <Text ta="center" c="gray.4">
              © 2025 Nazem Almsouti.
            </Text>
          </Container>
        </footer>
      </div>
    </MantineProvider>
  );
}

export default App;
