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
  Avatar,
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
  IconBriefcase,
  IconMapPin,
  IconArrowUpRight,
} from "@tabler/icons-react";
import ProjectCarousel from "../components/ProjectCarousel";
import { projects, experiences } from "../data/portfolioData";

// ─── Per-project accent ───────────────────────────────────────────────────────
function getProjectAccent(project: (typeof projects)[0]) {
  const techs = project.technologies.join(" ").toLowerCase();
  if (techs.includes("flutter") || techs.includes("dart"))
    return { primary: "#a5b4fc", secondary: "#6366f1", glow: "rgba(99,102,241,0.16)", border: "rgba(165,180,252,0.22)", badgeFrom: "indigo", badgeTo: "violet", icon: IconDeviceMobile };
  if (techs.includes("next") || techs.includes("i18n"))
    return { primary: "#34d399", secondary: "#10b981", glow: "rgba(16,185,129,0.14)", border: "rgba(52,211,153,0.22)", badgeFrom: "teal", badgeTo: "green", icon: IconCode };
  if (techs.includes("ai") || techs.includes("llm") || techs.includes("nlp"))
    return { primary: "#f472b6", secondary: "#ec4899", glow: "rgba(236,72,153,0.14)", border: "rgba(244,114,182,0.22)", badgeFrom: "pink", badgeTo: "violet", icon: IconSparkles };
  // Default → navy/blue
  return { primary: "#3b82f6", secondary: "#1d4ed8", glow: "rgba(29,78,216,0.16)", border: "rgba(59,130,246,0.22)", badgeFrom: "blue", badgeTo: "indigo", icon: IconCode };
}

const statusConfig = {
  completed: { label: "Completed", from: "teal", to: "green" },
  "in-progress": { label: "In Progress", from: "yellow", to: "orange" },
};

// ─── Company themes ───────────────────────────────────────────────────────────
const companyTheme = {
  pharaon:  { accent: "#3b82f6", glow: "rgba(29,78,216,0.12)",  border: "rgba(59,130,246,0.2)",   badgeFrom: "blue",   badgeTo: "indigo" },
  soutify:  { accent: "#a5b4fc", glow: "rgba(99,102,241,0.12)", border: "rgba(165,180,252,0.2)",  badgeFrom: "indigo", badgeTo: "violet" },
  freelance:{ accent: "#34d399", glow: "rgba(52,211,153,0.1)",  border: "rgba(52,211,153,0.18)",  badgeFrom: "teal",   badgeTo: "green"  },
};

// ─── Spotlight card ───────────────────────────────────────────────────────────
function SpotlightCard({ project, flip }: { project: (typeof projects)[0]; flip?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const accent = getProjectAccent(project);
  const status = statusConfig[project.status as keyof typeof statusConfig] ?? statusConfig.completed;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 280, damping: 28 }}>
        <Card
          padding={0}
          radius="xl"
          style={{
            background: "rgba(13,17,23,0.95)",
            border: `1px solid ${accent.border}`,
            boxShadow: `0 24px 64px rgba(0,0,0,0.45)`,
            overflow: "hidden",
            transition: "box-shadow 0.4s ease, border-color 0.4s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 48px ${accent.glow}, 0 32px 80px rgba(0,0,0,0.5)`;
            (e.currentTarget as HTMLElement).style.borderColor = accent.primary + "55";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 64px rgba(0,0,0,0.45)`;
            (e.currentTarget as HTMLElement).style.borderColor = accent.border;
          }}
        >
          {/* Top accent line */}
          <motion.div
            style={{ height: "3px", background: `linear-gradient(90deg, ${accent.primary}, ${accent.secondary}, transparent)` }}
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <Grid gutter={0} style={{ minHeight: "380px" }}>
            {/* Image */}
            <Grid.Col
              span={{ base: 12, md: 5 }}
              order={{ base: 1, md: flip ? 2 : 1 }}
              style={{ position: "relative", minHeight: "300px" }}
            >
              <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                <ProjectCarousel
                  images={project.images?.length ? project.images : [project.image || "/placeholder.svg"]}
                  title={project.title}
                  height={380}
                  fill
                />
                {/* Fade into content */}
                <div style={{
                  position: "absolute", inset: 0, pointerEvents: "none",
                  background: flip
                    ? "linear-gradient(to left, transparent 50%, rgba(13,17,23,0.97) 95%)"
                    : "linear-gradient(to right, transparent 50%, rgba(13,17,23,0.97) 95%)",
                }} />
                {/* Bottom fade on mobile */}
                <div style={{
                  position: "absolute", inset: 0, pointerEvents: "none",
                  background: "linear-gradient(to top, rgba(13,17,23,0.97) 0%, transparent 40%)",
                }} />
                <div style={{ position: "absolute", top: 16, left: 16, zIndex: 3 }}>
                  <Badge size="sm" variant="gradient" gradient={{ from: status.from, to: status.to }}
                    style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.5)", letterSpacing: "0.03em" }}>
                    {status.label}
                  </Badge>
                </div>
              </div>
            </Grid.Col>

            {/* Content */}
            <Grid.Col span={{ base: 12, md: 7 }} order={{ base: 2, md: flip ? 1 : 2 }}>
              <Stack gap="lg" p={{ base: "xl", md: "2rem 2.5rem" }} style={{ height: "100%", justifyContent: "center" }}>

                <Group gap="xs">
                  <IconCalendar size={12} color={accent.primary} style={{ opacity: 0.8 }} />
                  <Text size="xs" c="dimmed" style={{ letterSpacing: "0.03em" }}>{project.period}</Text>
                </Group>

                <div>
                  <Title
                    order={3}
                    style={{ color: "white", lineHeight: 1.2, fontWeight: 800, fontSize: "clamp(1.25rem, 2vw, 1.6rem)", marginBottom: "0.75rem" }}
                  >
                    {project.title}
                  </Title>
                  <Text c="dimmed" size="sm" style={{ lineHeight: 1.85 }}>
                    {project.description}
                  </Text>
                </div>

                {/* Features */}
                <div>
                  <Group gap="xs" mb="sm" align="center">
                    <Text size="xs" fw={600} style={{ color: accent.primary, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                      Key Features
                    </Text>
                    <motion.button
                      onClick={() => setExpanded((v) => !v)}
                      style={{
                        background: `${accent.primary}14`, border: `1px solid ${accent.border}`,
                        borderRadius: "999px", padding: "2px 10px", cursor: "pointer",
                        color: accent.primary, display: "flex", alignItems: "center", gap: "3px", fontSize: "0.7rem",
                      }}
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    >
                      {expanded ? <><IconChevronUp size={10} /> Less</> : <><IconChevronDown size={10} /> +{project.features.length - 4} more</>}
                    </motion.button>
                  </Group>

                  <AnimatePresence initial={false}>
                    <List
                      size="sm" spacing={6}
                      icon={<ThemeIcon size={16} radius="xl" variant="light" color={status.from} style={{ marginTop: 1 }}><IconSparkles size={8} /></ThemeIcon>}
                    >
                      {(expanded ? project.features : project.features.slice(0, 4)).map((f, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.035 }}>
                          <List.Item>
                            <Text c="dimmed" size="sm" style={{ lineHeight: 1.65 }}>{f}</Text>
                          </List.Item>
                        </motion.div>
                      ))}
                    </List>
                  </AnimatePresence>
                </div>

                {/* Stack */}
                <Flex wrap="wrap" gap={6}>
                  {project.technologies.map((tech, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 + 0.1 }} viewport={{ once: true }} whileHover={{ y: -2 }}>
                      <Badge variant="light" size="sm" style={{ background: `${accent.primary}12`, color: accent.primary, border: `1px solid ${accent.border}`, fontWeight: 500 }}>
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </Flex>

                {/* CTA */}
                <Group gap="sm">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
                      <Button size="sm" variant="gradient" gradient={{ from: accent.badgeFrom, to: accent.badgeTo }}
                        leftSection={<IconExternalLink size={14} />} component="a" href={project.demoUrl} target="_blank"
                        style={{ boxShadow: `0 8px 24px ${accent.glow}` }}>
                        Live Demo
                      </Button>
                    </motion.div>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
                      <Button size="sm" variant="subtle" color="gray" leftSection={<IconBrandGithub size={14} />}
                        component="a" href={project.githubUrl} target="_blank">
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

// ─── Grid card ────────────────────────────────────────────────────────────────
function GridCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const accent = getProjectAccent(project);
  const status = statusConfig[project.status as keyof typeof statusConfig] ?? statusConfig.completed;
  const hasDemo = project.demoUrl && project.demoUrl !== "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.09, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-40px" }}
      style={{ height: "100%" }}
    >
      <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 320, damping: 24 }} style={{ height: "100%" }}>
        <Card
          padding={0}
          radius="xl"
          style={{
            background: "rgba(13,17,23,0.96)",
            border: `1px solid ${accent.border}`,
            boxShadow: "0 8px 32px rgba(0,0,0,0.28)",
            overflow: "hidden", height: "100%", display: "flex", flexDirection: "column",
            transition: "box-shadow 0.35s ease, border-color 0.35s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 36px ${accent.glow}, 0 20px 48px rgba(0,0,0,0.4)`;
            (e.currentTarget as HTMLElement).style.borderColor = accent.primary + "44";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.28)";
            (e.currentTarget as HTMLElement).style.borderColor = accent.border;
          }}
        >
          {/* Top accent line */}
          <motion.div
            style={{ height: "2px", background: `linear-gradient(90deg, ${accent.primary}, ${accent.secondary}, transparent)`, flexShrink: 0 }}
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: (index % 3) * 0.07 + 0.25 }}
            viewport={{ once: true }}
          />

          {/* Image */}
          <Card.Section style={{ position: "relative", overflow: "hidden", flexShrink: 0 }}>
            <ProjectCarousel
              images={project.images?.length ? project.images : [project.image || "/placeholder.svg"]}
              title={project.title}
              height={195}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,17,23,0.95) 0%, rgba(13,17,23,0.1) 55%)", pointerEvents: "none" }} />

            {/* Status + demo link overlay */}
            <div style={{ position: "absolute", top: 12, left: 12, zIndex: 3 }}>
              <Badge size="xs" variant="gradient" gradient={{ from: status.from, to: status.to }}>{status.label}</Badge>
            </div>
            {hasDemo && (
              <motion.a
                href={project.demoUrl} target="_blank"
                style={{
                  position: "absolute", top: 12, right: 12, zIndex: 3,
                  width: 32, height: 32, borderRadius: "50%",
                  background: `${accent.primary}22`, border: `1px solid ${accent.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: accent.primary, textDecoration: "none",
                }}
                whileHover={{ scale: 1.15, background: `${accent.primary}40` }}
                whileTap={{ scale: 0.9 }}
              >
                <IconArrowUpRight size={15} />
              </motion.a>
            )}
          </Card.Section>

          <Stack gap="sm" p="lg" style={{ flex: 1 }}>
            <Group gap={5}>
              <IconCalendar size={11} color={accent.primary} style={{ opacity: 0.75 }} />
              <Text size="xs" c="dimmed" style={{ letterSpacing: "0.02em" }}>{project.period}</Text>
            </Group>

            <Title
              order={4}
              style={{
                color: "white", lineHeight: 1.3, fontWeight: 700, fontSize: "0.95rem",
                display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
              }}
            >
              {project.title}
            </Title>

            <Text c="dimmed" size="xs" style={{ lineHeight: 1.75, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", flex: 1 }}>
              {project.description}
            </Text>

            {/* Tech badges */}
            <Flex wrap="wrap" gap={5} mt="auto" pt="xs" style={{ borderTop: `1px solid ${accent.border}` }}>
              {project.technologies.slice(0, 4).map((tech, i) => (
                <Badge key={i} variant="light" size="xs" style={{ background: `${accent.primary}10`, color: accent.primary, border: `1px solid ${accent.border}`, fontWeight: 500 }}>
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="light" size="xs" color="gray">+{project.technologies.length - 4}</Badge>
              )}
            </Flex>
          </Stack>
        </Card>
      </motion.div>
    </motion.div>
  );
}

// ─── Company header ───────────────────────────────────────────────────────────
function CompanyHeader({ companyKey, groupIndex }: { companyKey: keyof typeof companyTheme; groupIndex: number }) {
  const theme = companyTheme[companyKey];
  const exp = experiences.find((e) =>
    companyKey === "pharaon" ? e.id === "pharaon-2025" :
    companyKey === "soutify" ? e.id === "soutify-2025" :
    e.id === "freelancer-2024"
  );
  if (!exp) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: groupIndex * 0.04, ease: "easeOut" }}
      viewport={{ once: true, margin: "-60px" }}
    >
      {/* Full-width rule with company accent */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ flex: 1, height: "1px", background: `linear-gradient(to right, ${theme.accent}40, transparent)` }} />
        <Badge size="md" variant="light" style={{ background: `${theme.accent}14`, color: theme.accent, border: `1px solid ${theme.border}`, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 700, fontSize: "0.7rem" }}>
          {exp.type === "Freelance" ? "Freelance & Client Work" : exp.type}
        </Badge>
        <div style={{ flex: 1, height: "1px", background: `linear-gradient(to left, ${theme.accent}40, transparent)` }} />
      </div>

      {/* Company identity block */}
      <Group gap="xl" mb={40} align="flex-start">
        {/* Logo */}
        {exp.logo ? (
          <Avatar src={exp.logo} size={64} radius="lg"
            style={{ border: `2px solid ${theme.border}`, background: "rgba(255,255,255,0.03)", flexShrink: 0 }} />
        ) : (
          <Avatar size={64} radius="lg"
            style={{ border: `2px solid ${theme.border}`, background: `${theme.accent}14`, flexShrink: 0 }}>
            <IconBriefcase size={28} color={theme.accent} />
          </Avatar>
        )}

        <Stack gap={4}>
          <Title order={2} style={{ color: "white", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2rem)", lineHeight: 1.15 }}>
            {exp.company}
          </Title>
          <Text size="sm" style={{ color: theme.accent, fontWeight: 500, opacity: 0.9 }}>{exp.title}</Text>
          <Group gap="lg" mt={4} wrap="wrap">
            <Group gap={5}>
              <IconCalendar size={13} color={theme.accent} style={{ opacity: 0.7 }} />
              <Text size="xs" c="dimmed">{exp.period}</Text>
            </Group>
            <Group gap={5}>
              <IconMapPin size={13} color={theme.accent} style={{ opacity: 0.7 }} />
              <Text size="xs" c="dimmed">{exp.location}</Text>
            </Group>
          </Group>
        </Stack>
      </Group>
    </motion.div>
  );
}

// ─── Company group ────────────────────────────────────────────────────────────
function CompanyGroup({ companyKey, groupProjects, groupIndex }: { companyKey: keyof typeof companyTheme; groupProjects: typeof projects; groupIndex: number }) {
  const theme = companyTheme[companyKey];
  const [spotlight, ...rest] = groupProjects;

  return (
    <Box mb={96}>
      <CompanyHeader companyKey={companyKey} groupIndex={groupIndex} />

      {/* Spotlight */}
      <Box mb={rest.length > 0 ? 32 : 0}>
        <SpotlightCard project={spotlight} flip={groupIndex % 2 !== 0} />
      </Box>

      {/* Grid */}
      {rest.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <Grid gutter={20} mt={4}>
            {rest.map((project, i) => (
              <Grid.Col key={project.id} span={{ base: 12, sm: 6, lg: 4 }}>
                <GridCard project={project} index={i} />
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>
      )}

      {/* Section end separator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "4rem" }}
      >
        <div style={{ flex: 1, height: "1px", background: `linear-gradient(to right, transparent, ${theme.accent}25, transparent)` }} />
        <Text size="xs" c="dimmed" style={{ whiteSpace: "nowrap", letterSpacing: "0.05em" }}>
          {groupProjects.length} project{groupProjects.length !== 1 ? "s" : ""}
        </Text>
        <div style={{ flex: 1, height: "1px", background: `linear-gradient(to right, transparent, ${theme.accent}25, transparent)` }} />
      </motion.div>
    </Box>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
const groups: { key: keyof typeof companyTheme; label: string }[] = [
  { key: "pharaon",  label: "Pharaon Group" },
  { key: "soutify",  label: "Soutify" },
  { key: "freelance", label: "Freelance" },
];

export default function ProjectsSection() {
  const grouped = groups.map(({ key }) => ({ key, items: projects.filter((p) => p.company === key) }));
  const total = projects.length;

  return (
    <section id="projects" style={{ padding: "8rem 0", position: "relative" }}>
      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
        width: "1000px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(29,78,216,0.05) 0%, transparent 65%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <Container size="lg" style={{ position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <Box mb={80} style={{ textAlign: "center" }}>
            <Badge
              size="md"
              variant="outline"
              mb="lg"
              leftSection={<IconSparkles size={14} />}
              style={{ borderColor: "rgba(59,130,246,0.4)", color: "#93c5fd", background: "rgba(29,78,216,0.08)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em" }}
            >
              Portfolio
            </Badge>

            <Title
              order={2}
              mb="md"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                background: "linear-gradient(120deg, #93c5fd 0%, #3b82f6 45%, #a5b4fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.1,
              }}
            >
              Work by Company
            </Title>

            <Text c="dimmed" size="md" maw={500} mx="auto" style={{ lineHeight: 1.75 }}>
              {total} projects across {groups.length} engagements — organized by the company and context they were built in
            </Text>

            {/* Summary pills */}
            <Group gap="md" justify="center" mt={32}>
              {groups.map(({ key, label }) => {
                const t = companyTheme[key];
                const count = grouped.find((g) => g.key === key)?.items.length ?? 0;
                return (
                  <motion.div key={key} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Group gap={6} style={{
                      background: `${t.accent}0e`, border: `1px solid ${t.border}`,
                      borderRadius: "999px", padding: "6px 16px",
                    }}>
                      <div style={{ width: 7, height: 7, borderRadius: "50%", background: t.accent }} />
                      <Text size="sm" style={{ color: t.accent, fontWeight: 600 }}>{label}</Text>
                      <Text size="xs" c="dimmed">· {count}</Text>
                    </Group>
                  </motion.div>
                );
              })}
            </Group>
          </Box>
        </motion.div>

        {/* Groups */}
        {grouped.map(({ key, items }, i) =>
          items.length > 0 ? (
            <CompanyGroup key={key} companyKey={key} groupProjects={items} groupIndex={i} />
          ) : null
        )}
      </Container>
    </section>
  );
}
