import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Container,
  Title,
  Text,
  Box,
  Badge,
  Grid,
  Card,
  Stack,
  Group,
  List,
  ThemeIcon,
  Flex,
  Button,
  Divider,
} from "@mantine/core";
import {
  IconSparkles,
  IconCalendar,
  IconExternalLink,
  IconBrandGithub,
  IconChevronDown,
  IconChevronUp,
  IconCode,
  IconDeviceMobile,
} from "@tabler/icons-react";
import ProjectCarousel from "../components/ProjectCarousel";
import { projects } from "../data/portfolioData";

// Per-project accent based on tech stack
function getProjectAccent(project: (typeof projects)[0]) {
  const techs = project.technologies.join(" ").toLowerCase();
  if (techs.includes("flutter") || techs.includes("dart")) {
    return {
      primary: "#818cf8",   // indigo
      secondary: "#6366f1",
      glow: "rgba(99,102,241,0.18)",
      border: "rgba(129,140,248,0.25)",
      badgeFrom: "indigo",
      badgeTo: "violet",
      icon: IconDeviceMobile,
    };
  }
  if (techs.includes("next") || techs.includes("i18n")) {
    return {
      primary: "#34d399",   // emerald
      secondary: "#10b981",
      glow: "rgba(16,185,129,0.15)",
      border: "rgba(52,211,153,0.25)",
      badgeFrom: "teal",
      badgeTo: "green",
      icon: IconCode,
    };
  }
  if (techs.includes("ai") || techs.includes("llm") || techs.includes("nlp")) {
    return {
      primary: "#f472b6",   // pink
      secondary: "#ec4899",
      glow: "rgba(236,72,153,0.15)",
      border: "rgba(244,114,182,0.25)",
      badgeFrom: "pink",
      badgeTo: "violet",
      icon: IconSparkles,
    };
  }
  // Default: cyan-blue
  return {
    primary: "#06b6d4",
    secondary: "#3b82f6",
    glow: "rgba(6,182,212,0.15)",
    border: "rgba(6,182,212,0.25)",
    badgeFrom: "cyan",
    badgeTo: "blue",
    icon: IconCode,
  };
}

const statusConfig = {
  completed: { label: "Completed", from: "teal", to: "green" },
  "in-progress": { label: "In Progress", from: "amber", to: "orange" },
};

// Featured (first 2) get a wide spotlight card
function SpotlightCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const accent = getProjectAccent(project);
  const status = statusConfig[project.status as keyof typeof statusConfig] ?? statusConfig["completed"];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        <Card
          padding={0}
          radius="xl"
          style={{
            background: `linear-gradient(135deg, rgba(13,17,23,0.95) 0%, rgba(21,26,35,0.98) 100%)`,
            border: `1px solid ${accent.border}`,
            boxShadow: `0 0 0 0px ${accent.glow}, 0 20px 60px rgba(0,0,0,0.4)`,
            overflow: "hidden",
            transition: "box-shadow 0.4s ease, border-color 0.4s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${accent.glow}, 0 30px 80px rgba(0,0,0,0.5)`;
            (e.currentTarget as HTMLElement).style.borderColor = accent.primary + "60";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0px ${accent.glow}, 0 20px 60px rgba(0,0,0,0.4)`;
            (e.currentTarget as HTMLElement).style.borderColor = accent.border;
          }}
        >
          {/* Accent top bar */}
          <motion.div
            style={{
              height: "3px",
              background: `linear-gradient(90deg, ${accent.primary}, ${accent.secondary})`,
            }}
            initial={{ scaleX: 0, transformOrigin: isEven ? "left" : "right" }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            viewport={{ once: true }}
          />

          <Grid gutter={0} style={{ minHeight: "340px" }}>
            {/* Image side */}
            <Grid.Col
              span={{ base: 12, md: 5 }}
              order={{ base: 1, md: isEven ? 1 : 2 }}
              style={{ position: "relative", minHeight: "280px" }}
            >
              <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
                <ProjectCarousel
                  images={project.images && project.images.length > 0 ? project.images : [project.image || "/placeholder.svg"]}
                  title={project.title}
                  height={340}
                />
                {/* Gradient fade into content */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: isEven
                      ? "linear-gradient(to right, transparent 60%, rgba(13,17,23,0.95) 100%)"
                      : "linear-gradient(to left, transparent 60%, rgba(13,17,23,0.95) 100%)",
                    pointerEvents: "none",
                  }}
                />
                {/* Status badge */}
                <div style={{ position: "absolute", top: 16, left: 16, zIndex: 3 }}>
                  <Badge
                    size="md"
                    variant="gradient"
                    gradient={{ from: status.from, to: status.to }}
                    style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.4)" }}
                  >
                    {status.label}
                  </Badge>
                </div>
              </div>
            </Grid.Col>

            {/* Content side */}
            <Grid.Col
              span={{ base: 12, md: 7 }}
              order={{ base: 2, md: isEven ? 2 : 1 }}
            >
              <Stack gap="md" p="xl" style={{ height: "100%", justifyContent: "center" }}>
                {/* Period */}
                <Group gap="xs">
                  <IconCalendar size={13} color={accent.primary} />
                  <Text size="xs" c="dimmed">{project.period}</Text>
                </Group>

                {/* Title */}
                <Title
                  order={3}
                  size="h2"
                  style={{
                    color: accent.primary,
                    lineHeight: 1.25,
                    fontWeight: 800,
                  }}
                >
                  {project.title}
                </Title>

                {/* Description */}
                <Text c="dimmed" size="sm" style={{ lineHeight: 1.8 }}>
                  {project.description}
                </Text>

                {/* Features — toggleable */}
                <div>
                  <Group gap="xs" mb="sm">
                    <Text size="sm" fw={700} style={{ color: accent.primary }}>
                      Key Features
                    </Text>
                    <motion.button
                      onClick={() => setExpanded((v) => !v)}
                      style={{
                        background: "none",
                        border: `1px solid ${accent.border}`,
                        borderRadius: "999px",
                        padding: "2px 10px",
                        cursor: "pointer",
                        color: accent.primary,
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "0.72rem",
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {expanded ? (
                        <><IconChevronUp size={11} /> Less</>
                      ) : (
                        <><IconChevronDown size={11} /> All {project.features.length}</>
                      )}
                    </motion.button>
                  </Group>

                  <AnimatePresence initial={false}>
                    <List
                      size="sm"
                      spacing={4}
                      icon={
                        <ThemeIcon size={16} radius="xl" variant="light" color={status.from}>
                          <IconSparkles size={9} />
                        </ThemeIcon>
                      }
                    >
                      {(expanded ? project.features : project.features.slice(0, 4)).map((f, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04 }}
                        >
                          <List.Item>
                            <Text c="dimmed" size="sm" style={{ lineHeight: 1.6 }}>{f}</Text>
                          </List.Item>
                        </motion.div>
                      ))}
                    </List>
                  </AnimatePresence>
                </div>

                {/* Tech stack */}
                <div>
                  <Text size="xs" fw={700} c="dimmed" mb="xs" style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Stack
                  </Text>
                  <Flex wrap="wrap" gap={6}>
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.04 + 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge
                          variant="light"
                          size="sm"
                          style={{
                            background: `rgba(${accent.primary === "#06b6d4" ? "6,182,212" : accent.primary === "#818cf8" ? "129,140,248" : accent.primary === "#34d399" ? "52,211,153" : "244,114,182"},0.1)`,
                            color: accent.primary,
                            border: `1px solid ${accent.border}`,
                          }}
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </Flex>
                </div>

                {/* Actions */}
                <Group gap="sm" mt="xs">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        variant="gradient"
                        gradient={{ from: accent.badgeFrom, to: accent.badgeTo }}
                        leftSection={<IconExternalLink size={15} />}
                        component="a"
                        href={project.demoUrl}
                        target="_blank"
                        style={{ boxShadow: `0 8px 24px ${accent.glow}` }}
                      >
                        Live Demo
                      </Button>
                    </motion.div>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        variant="light"
                        color="gray"
                        leftSection={<IconBrandGithub size={15} />}
                        component="a"
                        href={project.githubUrl}
                        target="_blank"
                      >
                        Source
                      </Button>
                    </motion.div>
                  )}
                </Group>
              </Stack>
            </Grid.Col>
          </Grid>
        </Card>
      </motion.div>
    </motion.div>
  );
}

// Compact grid card for remaining projects
function GridCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const accent = getProjectAccent(project);
  const status = statusConfig[project.status as keyof typeof statusConfig] ?? statusConfig["completed"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.55,
        delay: (index % 4) * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true, margin: "-40px" }}
      style={{ height: "100%" }}
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        style={{ height: "100%" }}
      >
        <Card
          padding={0}
          radius="xl"
          style={{
            background: "linear-gradient(145deg, rgba(13,17,23,0.97) 0%, rgba(18,23,32,0.98) 100%)",
            border: `1px solid ${accent.border}`,
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            transition: "box-shadow 0.35s ease, border-color 0.35s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 32px ${accent.glow}, 0 16px 48px rgba(0,0,0,0.45)`;
            (e.currentTarget as HTMLElement).style.borderColor = accent.primary + "50";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)";
            (e.currentTarget as HTMLElement).style.borderColor = accent.border;
          }}
        >
          {/* Accent bar */}
          <motion.div
            style={{
              height: "2px",
              background: `linear-gradient(90deg, ${accent.primary}, ${accent.secondary})`,
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: (index % 4) * 0.08 + 0.3 }}
            viewport={{ once: true }}
          />

          {/* Image */}
          <Card.Section style={{ position: "relative", overflow: "hidden" }}>
            <ProjectCarousel
              images={project.images && project.images.length > 0 ? project.images : [project.image || "/placeholder.svg"]}
              title={project.title}
              height={200}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(13,17,23,0.92) 0%, transparent 55%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "absolute", top: 12, right: 12, zIndex: 3 }}>
              <Badge
                size="sm"
                variant="gradient"
                gradient={{ from: status.from, to: status.to }}
              >
                {status.label}
              </Badge>
            </div>
          </Card.Section>

          <Stack gap="sm" p="lg" style={{ flex: 1 }}>
            {/* Period */}
            <Group gap={6}>
              <IconCalendar size={12} color={accent.primary} />
              <Text size="xs" c="dimmed">{project.period}</Text>
            </Group>

            {/* Title */}
            <Title
              order={4}
              style={{
                color: accent.primary,
                lineHeight: 1.3,
                fontWeight: 700,
                fontSize: "1rem",
                minHeight: "2.6rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {project.title}
            </Title>

            {/* Description */}
            <Text
              c="dimmed"
              size="xs"
              style={{
                lineHeight: 1.7,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {project.description}
            </Text>

            <Divider style={{ borderColor: accent.border }} />

            {/* Features */}
            <div>
              <Group gap={6} mb="xs">
                <Text size="xs" fw={700} style={{ color: accent.primary }}>Features</Text>
                <motion.button
                  onClick={() => setExpanded((v) => !v)}
                  style={{
                    background: "none",
                    border: `1px solid ${accent.border}`,
                    borderRadius: "999px",
                    padding: "1px 8px",
                    cursor: "pointer",
                    color: accent.primary,
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                    fontSize: "0.68rem",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {expanded ? <IconChevronUp size={10} /> : <IconChevronDown size={10} />}
                  {expanded ? "Less" : `+${project.features.length - 2} more`}
                </motion.button>
              </Group>

              <List
                size="xs"
                spacing={3}
                icon={
                  <ThemeIcon size={14} radius="xl" variant="light" color={status.from}>
                    <IconSparkles size={8} />
                  </ThemeIcon>
                }
              >
                {(expanded ? project.features : project.features.slice(0, 2)).map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <List.Item>
                      <Text c="dimmed" size="xs" style={{ lineHeight: 1.6 }}>{f}</Text>
                    </List.Item>
                  </motion.div>
                ))}
              </List>
            </div>

            {/* Tech */}
            <Flex wrap="wrap" gap={5} mt="auto">
              {project.technologies.slice(0, 4).map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge
                    variant="light"
                    size="xs"
                    style={{
                      background: `rgba(6,182,212,0.07)`,
                      color: accent.primary,
                      border: `1px solid ${accent.border}`,
                    }}
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="light" size="xs" color="gray">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </Flex>

            {/* CTA */}
            {project.demoUrl && project.demoUrl !== "#" && (
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="gradient"
                  gradient={{ from: accent.badgeFrom, to: accent.badgeTo }}
                  size="xs"
                  leftSection={<IconExternalLink size={13} />}
                  component="a"
                  href={project.demoUrl}
                  target="_blank"
                  fullWidth
                  mt="xs"
                  style={{ boxShadow: `0 6px 20px ${accent.glow}` }}
                >
                  Live Demo
                </Button>
              </motion.div>
            )}
          </Stack>
        </Card>
      </motion.div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 2);
  const gridProjects = projects.slice(2);

  return (
    <section id="projects" style={{ padding: "8rem 0", position: "relative" }}>
      {/* Section background glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(6,182,212,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <Container size="lg" style={{ position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
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
                gradient={{ from: "cyan", to: "blue" }}
                mb="md"
                leftSection={<IconSparkles size={16} />}
                style={{ boxShadow: "0 4px 20px rgba(6,182,212,0.35)" }}
              >
                Portfolio
              </Badge>
            </motion.div>

            <Title
              order={2}
              mb="md"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.1,
              }}
            >
              Featured Projects
            </Title>
            <Text c="dimmed" size="lg" maw={550} mx="auto" style={{ lineHeight: 1.7 }}>
              {projects.length} projects across web, mobile, and AI — showcasing full-stack thinking and production-grade quality
            </Text>
          </Box>
        </motion.div>

        {/* Spotlight — first 2 */}
        <Stack gap={40} mb={70}>
          {featuredProjects.map((project, index) => (
            <SpotlightCard key={project.id} project={project} index={index} />
          ))}
        </Stack>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Group gap="lg" mb={50} style={{ justifyContent: "center" }}>
            <Divider style={{ flex: 1, borderColor: "rgba(6,182,212,0.15)" }} />
            <Text size="sm" c="dimmed" fw={500} style={{ whiteSpace: "nowrap" }}>
              More Projects
            </Text>
            <Divider style={{ flex: 1, borderColor: "rgba(6,182,212,0.15)" }} />
          </Group>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <Grid gutter={24}>
            {gridProjects.map((project, index) => (
              <Grid.Col key={project.id} span={{ base: 12, sm: 6, lg: 4 }}>
                <GridCard project={project} index={index} />
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
}
