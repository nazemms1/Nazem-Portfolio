"use client";

import { motion } from "framer-motion";
import { Card, Text, Group, Avatar, Stack, ThemeIcon } from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";
import type { Recommendation } from "../types/portfolio";

interface RecommendationCardProps {
  recommendation: Recommendation;
  index: number;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  recommendation,
  index,
}) => {
  const initials = recommendation.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const avatarColors = ["cyan", "blue", "violet", "teal", "indigo", "pink"];
  const color = avatarColors[index % avatarColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.02 }}
      style={{ height: "100%" }}
    >
      <Card
        padding="xl"
        radius="xl"
        h="100%"
        style={{
          background: "rgba(13, 17, 23, 0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(6, 182, 212, 0.15)",
          display: "flex",
          flexDirection: "column",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        }}
        styles={{
          root: {
            "&:hover": {
              borderColor: "rgba(6, 182, 212, 0.4)",
              boxShadow: "0 8px 32px rgba(6, 182, 212, 0.15)",
            },
          },
        }}
      >
         <ThemeIcon
          size={40}
          radius="xl"
          variant="light"
          color="cyan"
          mb="md"
          style={{ opacity: 0.7 }}
        >
          <IconQuote size={20} />
        </ThemeIcon>

         <Text
          size="sm"
          c="dimmed"
          lh={1.8}
          style={{ flex: 1, fontStyle: "italic" }}
          mb="xl"
        >
          "{recommendation.message}"
        </Text>

         <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, rgba(6,182,212,0.4) 0%, transparent 100%)",
            marginBottom: "1rem",
          }}
        />

         <Group gap="md" wrap="nowrap">
          <Avatar
            size={48}
            radius="xl"
            color={color}
            variant="gradient"
            gradient={{ from: color, to: "blue" }}
            src={recommendation.avatar}
          >
            {initials}
          </Avatar>
          <Stack gap={2}>
            <Text fw={700} size="sm" c="white">
              {recommendation.name}
            </Text>
            <Text size="xs" c="cyan.4">
              {recommendation.title}
            </Text>
            <Text size="xs" c="dimmed">
              {recommendation.company}
            </Text>
          </Stack>
        </Group>
      </Card>
    </motion.div>
  );
};

export default RecommendationCard;
