"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Card, Stack, Text, ThemeIcon } from "@mantine/core";
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

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
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
        return "cyan";
      case "mobile":
        return "teal";
      case "backend":
        return "indigo";
      case "tools":
        return "violet";
      case "soft-skills":
        return "pink";
      default:
        return "gray";
    }
  };

  const getGradient = (category: Skill["category"]): string => {
    switch (category) {
      case "frontend":
        return "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0.05) 100%)";
      case "mobile":
        return "linear-gradient(135deg, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.05) 100%)";
      case "backend":
        return "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 100%)";
      case "tools":
        return "linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 100%)";
      case "soft-skills":
        return "linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0.05) 100%)";
      default:
        return "linear-gradient(135deg, rgba(107, 114, 128, 0.15) 0%, rgba(107, 114, 128, 0.05) 100%)";
    }
  };

  const color = getSkillColor(skill.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{ y: -10, scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Card
          padding="lg"
          radius="xl"
          style={{
            background: getGradient(skill.category),
            border: `1px solid rgba(6, 182, 212, 0.15)`,
            backdropFilter: "blur(20px)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            overflow: "hidden",
            position: "relative",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = `rgba(6, 182, 212, 0.5)`;
            e.currentTarget.style.boxShadow = `0 20px 40px rgba(6, 182, 212, 0.2)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = `rgba(6, 182, 212, 0.15)`;
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Glow effect */}
          <motion.div
            style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background: `radial-gradient(circle at center, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`,
              opacity: 0,
              transition: "opacity 0.3s ease",
              pointerEvents: "none",
            }}
            whileHover={{ opacity: 1 }}
          />

          <Stack align="center" gap="md" style={{ position: "relative" }}>
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <ThemeIcon
                size={56}
                radius="xl"
                variant="light"
                color={color}
                style={{
                  boxShadow: `0 8px 24px rgba(6, 182, 212, 0.2)`,
                }}
              >
                {getSkillIcon(skill.category)}
              </ThemeIcon>
            </motion.div>

            <Text fw={600} ta="center" size="md">
              {skill.name}
            </Text>

            <Text
              size="xs"
              c={color}
              fw={500}
              style={{
                padding: "4px 12px",
                background: `rgba(6, 182, 212, 0.1)`,
                borderRadius: "20px",
                textTransform: "capitalize",
              }}
            >
              {skill.category.replace("-", " ")}
            </Text>
          </Stack>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
