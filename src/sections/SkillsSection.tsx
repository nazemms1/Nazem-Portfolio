import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Title, Text, Box, Badge, Tabs, SimpleGrid } from "@mantine/core";
import { IconSparkles, IconBrandReact, IconDeviceMobile, IconHeart, IconTool } from "@tabler/icons-react";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/portfolioData";

const NAVY   = "#1d4ed8";
const BLUE   = "#3b82f6";
const BLUE_L = "#93c5fd";
const INDIGO = "#4f46e5";

const tabConfig = [
  { value: "frontend",    label: "Frontend",    icon: IconBrandReact,    activeColor: BLUE,    activeBg: `${NAVY}18`   },
  { value: "mobile",      label: "Mobile",      icon: IconDeviceMobile,  activeColor: "#a5b4fc", activeBg: `${INDIGO}18` },
  { value: "tools",       label: "Tools",       icon: IconTool,          activeColor: "#2dd4bf", activeBg: "rgba(20,184,166,0.15)" },
  { value: "soft-skills", label: "Soft Skills", icon: IconHeart,         activeColor: "#f472b6", activeBg: "rgba(236,72,153,0.15)" },
];

export default function SkillsSection() {
  const [activeSkillTab, setActiveSkillTab] = useState<string | null>("frontend");
  const filteredSkills = activeSkillTab === "all" ? skills : skills.filter((s) => s.category === activeSkillTab);
  const activeConfig = tabConfig.find((t) => t.value === activeSkillTab) ?? tabConfig[0];

  return (
    <section id="skills" style={{ padding: "8rem 0", position: "relative" }}>
      <div style={{ position: "absolute", top: "20%", left: "-8%", width: "500px", height: "500px", borderRadius: "50%", background: `radial-gradient(circle, ${INDIGO}08 0%, transparent 70%)`, filter: "blur(80px)", pointerEvents: "none" }} />

      <Container size="lg" style={{ position: "relative" }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, margin: "-100px" }}>

          <Box mb={60} style={{ textAlign: "center" }}>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <Badge size="md" variant="outline" mb="md" leftSection={<IconSparkles size={14} />}
                style={{ borderColor: `${INDIGO}44`, color: "#a5b4fc", background: `${INDIGO}0d`, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em" }}>
                Skills & Expertise
              </Badge>
            </motion.div>
            <Title order={2} mb="md" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: "-0.025em", background: `linear-gradient(120deg, ${BLUE_L} 0%, ${BLUE} 45%, #a5b4fc 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
              Technical Arsenal
            </Title>
            <Text style={{ color: "#64748b", fontSize: "1rem" }}>Modern technologies powering production-grade solutions</Text>
          </Box>

          <Tabs value={activeSkillTab} onChange={setActiveSkillTab} variant="pills" radius="xl" mb={50}
            styles={{
              root: { display: "flex", justifyContent: "center" },
              list: { background: "rgba(255,255,255,0.02)", padding: "8px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.05)", flexWrap: "wrap", justifyContent: "center", gap: "4px" },
              tab: { fontWeight: 600, fontSize: "0.85rem", fontFamily: "'Inter', sans-serif", transition: "all 0.2s ease", color: "rgba(255,255,255,0.4)" },
            }}>
            <Tabs.List>
              {tabConfig.map((tab) => (
                <Tabs.Tab
                  key={tab.value}
                  value={tab.value}
                  leftSection={<tab.icon size={14} />}
                  style={activeSkillTab === tab.value ? {
                    background: tab.activeBg,
                    border: `1px solid ${tab.activeColor}44`,
                    color: tab.activeColor,
                    boxShadow: `0 4px 16px ${tab.activeColor}22`,
                  } : {}}
                >
                  {tab.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>

          <motion.div key={activeSkillTab} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} style={{ textAlign: "center", marginBottom: "2rem" }}>
            <Text size="sm" style={{ color: "#475569" }}>
              <Text component="span" fw={700} style={{ color: activeConfig.activeColor }} inherit>{filteredSkills.length}</Text>{" "}skills in this category
            </Text>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={activeSkillTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease: "easeOut" }}>
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
