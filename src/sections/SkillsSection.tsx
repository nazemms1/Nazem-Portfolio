import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Container,
  Title,
  Text,
  Box,
  Badge,
  Tabs,
  SimpleGrid,
} from "@mantine/core";
import {
  IconSparkles,
  IconBrandReact,
  IconDeviceMobile,
  IconHeart,
  IconTool,
} from "@tabler/icons-react";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/portfolioData";

const tabConfig = [
  {
    value: "frontend",
    label: "Frontend",
    icon: IconBrandReact,
    color: "cyan",
    gradient: { from: "cyan", to: "blue" },
  },
  {
    value: "mobile",
    label: "Mobile",
    icon: IconDeviceMobile,
    color: "violet",
    gradient: { from: "violet", to: "indigo" },
  },
  {
    value: "tools",
    label: "Tools",
    icon: IconTool,
    color: "teal",
    gradient: { from: "teal", to: "green" },
  },
  {
    value: "soft-skills",
    label: "Soft Skills",
    icon: IconHeart,
    color: "pink",
    gradient: { from: "pink", to: "rose" },
  },
];

export default function SkillsSection() {
  const [activeSkillTab, setActiveSkillTab] = useState<string | null>(
    "frontend",
  );

  const filteredSkills =
    activeSkillTab === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeSkillTab);

  const activeConfig =
    tabConfig.find((t) => t.value === activeSkillTab) ?? tabConfig[0];

  return (
    <section id="skills" style={{ padding: "8rem 0", position: "relative" }}>
       <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-8%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)",
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
                gradient={{ from: "violet", to: "cyan" }}
                mb="md"
                leftSection={<IconSparkles size={16} />}
                style={{ boxShadow: "0 4px 20px rgba(139,92,246,0.3)" }}
              >
                Skills & Expertise
              </Badge>
            </motion.div>
            <Title
              order={2}
              mb="md"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                background:
                  "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Technical Arsenal
            </Title>
            <Text c="dimmed" size="lg" maw={600} mx="auto">
              Modern technologies powering production-grade solutions
            </Text>
          </Box>

          <Tabs
            value={activeSkillTab}
            onChange={setActiveSkillTab}
            variant="pills"
            radius="xl"
            mb={50}
            styles={{
              root: { display: "flex", justifyContent: "center" },
              list: {
                background: "rgba(255,255,255,0.02)",
                padding: "8px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.06)",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "4px",
              },
              tab: {
                fontWeight: 600,
                fontSize: "0.85rem",
                transition: "all 0.25s ease",
                color: "rgba(255,255,255,0.5)",
                "&[data-active]": {
                  color: "white",
                },
              },
            }}
          >
            <Tabs.List>
              {tabConfig.map((tab) => (
                <Tabs.Tab
                  key={tab.value}
                  value={tab.value}
                  leftSection={<tab.icon size={15} />}
                  style={
                    activeSkillTab === tab.value
                      ? {
                          background: `linear-gradient(135deg, var(--mantine-color-${tab.gradient.from}-6), var(--mantine-color-${tab.gradient.to}-7))`,
                          boxShadow: `0 4px 20px rgba(6,182,212,0.3)`,
                          color: "white",
                        }
                      : {}
                  }
                >
                  {tab.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>

          {/* Animated active category label */}
          <motion.div
            key={activeSkillTab}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            <Text size="sm" c="dimmed">
              <Text component="span" fw={700} c={activeConfig.color} inherit>
                {filteredSkills.length}
              </Text>{" "}
              skills in this category
            </Text>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkillTab}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing="lg">
                {filteredSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </SimpleGrid>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
