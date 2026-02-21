"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Stack,
  List,
  Flex,
} from "@mantine/core";
import {
  IconExternalLink,
  IconBrandGithub,
  IconCalendar,
  IconMap,
} from "@tabler/icons-react";
import type { Project } from "../types/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const getStatusColor = (status: Project["status"]): string => {
    switch (status) {
      case "completed":
        return "green";
      case "in-progress":
        return "yellow";
      case "planned":
        return "blue";
      default:
        return "gray";
    }
  };

  return (
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
          <div style={{ position: "relative", overflow: "hidden" }}>
            <Image
              src={project.image || "https://via.placeholder.com/500x300"}
              height={200}
              alt={project.title}
              fit="contain"
              style={{
                transition: "transform 0.7s ease",
                background: "rgba(15, 23, 42, 0.9)",
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
                color={getStatusColor(project.status)}
                variant="filled"
                leftSection={
                  project.status === "completed" ? (
                    <IconMap size={12} />
                  ) : (
                    <IconCalendar size={12} />
                  )
                }
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
              <IconMap size={16} color="#3b82f6" />
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
                <Badge key={i} variant="light" color="blue" size="sm">
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
  );
};

export default ProjectCard;
