"use client";

import type React from "react";
import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Card, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconCode, IconDeviceMobile, IconServer, IconTool, IconUsers } from "@tabler/icons-react";
import type { Skill } from "../types/portfolio";

interface SkillCardProps { skill: Skill; index: number; }

// Each category maps to a navy/blue-family color
const categoryConfig: Record<Skill["category"], { color: string; bg: string; border: string; icon: React.ReactNode }> = {
  frontend:     { color: "#3b82f6", bg: "rgba(29,78,216,0.12)",  border: "rgba(59,130,246,0.25)",  icon: <IconCode size={22} /> },
  mobile:       { color: "#a5b4fc", bg: "rgba(79,70,229,0.12)",  border: "rgba(99,102,241,0.25)",  icon: <IconDeviceMobile size={22} /> },
  backend:      { color: "#818cf8", bg: "rgba(99,102,241,0.12)", border: "rgba(129,140,248,0.25)", icon: <IconServer size={22} /> },
  tools:        { color: "#2dd4bf", bg: "rgba(20,184,166,0.12)", border: "rgba(45,212,191,0.25)",  icon: <IconTool size={22} /> },
  "soft-skills":{ color: "#f472b6", bg: "rgba(236,72,153,0.12)", border: "rgba(244,114,182,0.25)", icon: <IconUsers size={22} /> },
};

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const cfg = categoryConfig[skill.category] ?? categoryConfig.frontend;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-50, 50], [7, -7]);
  const rotateY = useTransform(mouseX, [-50, 50], [-7, 7]);
  const springRotX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springRotX, rotateY: springRotY, transformPerspective: 600 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
      >
        <Card
          padding="lg"
          radius="xl"
          style={{
            background: "rgba(15,23,42,0.9)",
            border: `1px solid ${cfg.border}`,
            cursor: "pointer",
            overflow: "hidden",
            position: "relative",
            transition: "box-shadow 0.25s ease, border-color 0.25s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 32px ${cfg.color}22`;
            (e.currentTarget as HTMLElement).style.borderColor = cfg.color + "55";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
            (e.currentTarget as HTMLElement).style.borderColor = cfg.border;
          }}
        >
          {/* Radial hover glow */}
          <motion.div
            style={{ position: "absolute", top: "-60%", left: "-60%", width: "220%", height: "220%", background: `radial-gradient(circle at center, ${cfg.color}12 0%, transparent 55%)`, opacity: 0, pointerEvents: "none" }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          />

          {/* Bottom progress bar */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "rgba(255,255,255,0.04)" }}>
            <motion.div
              style={{ height: "100%", background: `linear-gradient(90deg, ${cfg.color}, ${cfg.color}66)`, borderRadius: "1px" }}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.9, delay: index * 0.05 + 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          <Stack align="center" gap="md" style={{ position: "relative" }}>
            <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.45 }}>
              <ThemeIcon size={52} radius="xl" style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.color, boxShadow: `0 6px 20px ${cfg.color}22` }}>
                {cfg.icon}
              </ThemeIcon>
            </motion.div>
            <Text fw={600} ta="center" size="sm" style={{ letterSpacing: "0.01em", color: "#e2e8f0" }}>
              {skill.name}
            </Text>
          </Stack>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
