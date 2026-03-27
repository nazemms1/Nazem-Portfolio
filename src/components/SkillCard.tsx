"use client";

import type React from "react";
import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Card, Stack, Text, ThemeIcon, Box } from "@mantine/core";
import {
  IconCode,
  IconDeviceMobile,
  IconServer,
  IconTool,
  IconUsers,
} from "@tabler/icons-react";
import type { Skill } from "../types/portfolio";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const categoryConfig: Record<Skill["category"], { color: string; hex: string; from: string; to: string; icon: React.ReactNode }> = {
  frontend: {
    color: "cyan",
    hex: "#06b6d4",
    from: "cyan",
    to: "blue",
    icon: <IconCode size={22} />,
  },
  mobile: {
    color: "violet",
    hex: "#8b5cf6",
    from: "violet",
    to: "indigo",
    icon: <IconDeviceMobile size={22} />,
  },
  backend: {
    color: "indigo",
    hex: "#6366f1",
    from: "indigo",
    to: "blue",
    icon: <IconServer size={22} />,
  },
  tools: {
    color: "teal",
    hex: "#14b8a6",
    from: "teal",
    to: "green",
    icon: <IconTool size={22} />,
  },
  "soft-skills": {
    color: "pink",
    hex: "#ec4899",
    from: "pink",
    to: "rose",
    icon: <IconUsers size={22} />,
  },
};

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const cfg = categoryConfig[skill.category] ?? categoryConfig.frontend;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-50, 50], [8, -8]);
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8]);
  const springRotX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.88 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.45,
        delay: index * 0.055,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotX,
          rotateY: springRotY,
          transformPerspective: 600,
        }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
      >
        <Card
          padding="lg"
          radius="xl"
          style={{
            background: `linear-gradient(145deg, rgba(13,17,23,0.97) 0%, rgba(18,23,32,0.98) 100%)`,
            border: `1px solid rgba(${cfg.hex === "#06b6d4" ? "6,182,212" : cfg.hex === "#8b5cf6" ? "139,92,246" : cfg.hex === "#6366f1" ? "99,102,241" : cfg.hex === "#14b8a6" ? "20,184,166" : "236,72,153"},0.2)`,
            backdropFilter: "blur(20px)",
            cursor: "pointer",
            overflow: "hidden",
            position: "relative",
            transition: "box-shadow 0.3s ease, border-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px rgba(${cfg.hex === "#06b6d4" ? "6,182,212" : cfg.hex === "#8b5cf6" ? "139,92,246" : cfg.hex === "#6366f1" ? "99,102,241" : cfg.hex === "#14b8a6" ? "20,184,166" : "236,72,153"},0.25)`;
            (e.currentTarget as HTMLElement).style.borderColor = cfg.hex + "50";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
            (e.currentTarget as HTMLElement).style.borderColor = "";
          }}
        >
          {/* Radial glow on hover */}
          <motion.div
            style={{
              position: "absolute",
              top: "-60%",
              left: "-60%",
              width: "220%",
              height: "220%",
              background: `radial-gradient(circle at center, ${cfg.hex}18 0%, transparent 55%)`,
              opacity: 0,
              pointerEvents: "none",
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Proficiency bar at bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <motion.div
              style={{
                height: "100%",
                background: `linear-gradient(90deg, ${cfg.hex}, ${cfg.hex}88)`,
                borderRadius: "1px",
              }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.proficiency}%` }}
              transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          <Stack align="center" gap="md" style={{ position: "relative" }}>
            <motion.div
              whileHover={{ rotate: [0, -12, 12, 0] }}
              transition={{ duration: 0.5 }}
            >
              <ThemeIcon
                size={56}
                radius="xl"
                variant="gradient"
                gradient={{ from: cfg.from, to: cfg.to }}
                style={{
                  boxShadow: `0 8px 28px ${cfg.hex}35`,
                }}
              >
                {cfg.icon}
              </ThemeIcon>
            </motion.div>

            <Text fw={700} ta="center" size="sm" style={{ letterSpacing: "0.01em" }}>
              {skill.name}
            </Text>

            {/* Proficiency percentage */}
            <Box
              style={{
                padding: "3px 10px",
                background: `${cfg.hex}15`,
                border: `1px solid ${cfg.hex}30`,
                borderRadius: "999px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Text
                size="xs"
                fw={700}
                style={{ color: cfg.hex }}
              >
                {skill.proficiency}%
              </Text>
            </Box>
          </Stack>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
