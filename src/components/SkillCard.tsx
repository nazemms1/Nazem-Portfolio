"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, Text, Progress, Group, ThemeIcon } from "@mantine/core"
import { IconCode, IconDeviceMobile, IconServer, IconTool, IconUsers } from "@tabler/icons-react"
import type { Skill } from "../types/portfolio"

interface SkillCardProps {
  skill: Skill
  index: number
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const getIcon = (category: Skill["category"]) => {
    switch (category) {
      case "frontend":
        return <IconCode size={24} />
      case "mobile":
        return <IconDeviceMobile size={24} />
      case "backend":
        return <IconServer size={24} />
      case "tools":
        return <IconTool size={24} />
      case "soft-skills":
        return <IconUsers size={24} />
      default:
        return <IconCode size={24} />
    }
  }

  const getCategoryColor = (category: Skill["category"]): string => {
    switch (category) {
      case "frontend":
        return "blue"
      case "mobile":
        return "green"
      case "backend":
        return "violet"
      case "tools":
        return "orange"
      case "soft-skills":
        return "pink"
      default:
        return "gray"
    }
  }

  return (
    <motion.div
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
          <ThemeIcon size="xl" radius="md" variant="light" color={getCategoryColor(skill.category)}>
            {getIcon(skill.category)}
          </ThemeIcon>
        </Group>

        <Text ta="center" fw={600} mb="xs" c="white">
          {skill.name}
        </Text>

        <Text ta="center" size="xs" c="dimmed" mb="md" tt="capitalize">
          {skill.category.replace("-", " ")}
        </Text>

        <Progress
          value={skill.proficiency}
          color={getCategoryColor(skill.category)}
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
  )
}

export default SkillCard
