import { Badge, Box, Button, Group, SimpleGrid, Stack, Text } from "@mantine/core";
import {
  IconAlertTriangle,
  IconArrowRight,
  IconBriefcase,
  IconChevronRight,
  IconCloudUpload,
  IconEyeOff,
  IconMessage2,
  IconPlus,
  IconStack2,
  IconStar,
  IconTools,
} from "@tabler/icons-react";
import type { Icon as TablerIcon } from "@tabler/icons-react";
import { usePortfolioStore } from "../../store/PortfolioProvider";
import { AD, AD_FONT } from "../tokens";
import type { RouteKey } from "../types";
import { PanelHeader, SectionCard } from "../ui";

function StatCard({
  label,
  value,
  hidden,
  icon: Icon,
  onClick,
}: {
  label: string;
  value: number;
  hidden: number;
  icon: TablerIcon;
  onClick: () => void;
}) {
  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      style={{
        cursor: "pointer",
        textAlign: "left",
        background: AD.surface,
        border: `1px solid ${AD.border}`,
        borderRadius: AD.radius,
        padding: 18,
        transition: "border-color 0.15s ease, background 0.15s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = AD.borderStrong;
        e.currentTarget.style.background = AD.surfaceHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = AD.border;
        e.currentTarget.style.background = AD.surface;
      }}
    >
      <Group justify="space-between" mb={12}>
        <Icon size={18} color={AD.accent} />
        <IconChevronRight size={14} color={AD.textFaint} />
      </Group>
      <Text
        style={{
          fontFamily: AD_FONT.mono,
          fontSize: "1.9rem",
          fontWeight: 700,
          color: AD.text,
          lineHeight: 1.1,
        }}
      >
        {value}
      </Text>
      <Group gap={8} mt={4}>
        <Text size="sm" c={AD.textMuted}>
          {label}
        </Text>
        {hidden > 0 && (
          <Badge size="xs" variant="light" color="gray" leftSection={<IconEyeOff size={9} />}>
            {hidden}
          </Badge>
        )}
      </Group>
    </Box>
  );
}

export default function OverviewPanel({
  onNavigate,
}: {
  onNavigate: (route: RouteKey) => void;
}) {
  const { content, hasDraft, publicContent } = usePortfolioStore();

  const count = <T extends { hidden?: boolean }>(items: T[]) => ({
    total: items.length,
    hidden: items.filter((i) => i.hidden).length,
  });

  const projects = count(content.projects);
  const caseStudies = count(content.caseStudies);
  const experiences = count(content.experiences);
  const skills = count(content.skills);
  const recommendations = count(content.recommendations);

  // Case studies pointing at a project that was deleted or hidden never render.
  const brokenCaseStudies = content.caseStudies.filter((cs) => {
    const project = content.projects.find((p) => p.id === cs.projectId);
    return !cs.hidden && (!project || project.hidden);
  });

  const missingImages = content.projects.filter((p) => !p.hidden && !p.image);

  const issues = [
    ...brokenCaseStudies.map((cs) => ({
      key: `cs-${cs.projectId}`,
      text: `The case study for "${cs.projectId}" points at a project that is missing or hidden — it will not render.`,
      route: "case-studies" as RouteKey,
    })),
    ...missingImages.map((p) => ({
      key: `img-${p.id}`,
      text: `"${p.title}" has no cover image.`,
      route: "projects" as RouteKey,
    })),
  ];

  return (
    <>
      <PanelHeader
        title="Overview"
        description="Everything the public site renders, in one place. Changes save to this browser instantly — publish when you want them live."
        action={
          <Button
            leftSection={<IconPlus size={16} />}
            onClick={() => onNavigate("projects")}
          >
            Add a project
          </Button>
        }
      />

      <SimpleGrid cols={{ base: 2, sm: 3, lg: 5 }} spacing="md" mb="xl">
        <StatCard
          label="Projects"
          value={projects.total}
          hidden={projects.hidden}
          icon={IconStack2}
          onClick={() => onNavigate("projects")}
        />
        <StatCard
          label="Case studies"
          value={caseStudies.total}
          hidden={caseStudies.hidden}
          icon={IconStar}
          onClick={() => onNavigate("case-studies")}
        />
        <StatCard
          label="Roles"
          value={experiences.total}
          hidden={experiences.hidden}
          icon={IconBriefcase}
          onClick={() => onNavigate("experience")}
        />
        <StatCard
          label="Skills"
          value={skills.total}
          hidden={skills.hidden}
          icon={IconTools}
          onClick={() => onNavigate("skills")}
        />
        <StatCard
          label="Recommendations"
          value={recommendations.total}
          hidden={recommendations.hidden}
          icon={IconMessage2}
          onClick={() => onNavigate("recommendations")}
        />
      </SimpleGrid>

      <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="md">
        <SectionCard
          title="Publishing"
          description={
            hasDraft
              ? "You have edits saved in this browser that are not in the repository yet."
              : "No local edits — the site is showing the published data."
          }
          action={
            <Badge
              size="sm"
              variant="light"
              color={hasDraft ? "blue" : "gray"}
              style={{ textTransform: "none" }}
            >
              {hasDraft ? "Draft" : "In sync"}
            </Badge>
          }
        >
          <Button
            variant={hasDraft ? "filled" : "light"}
            leftSection={<IconCloudUpload size={16} />}
            onClick={() => onNavigate("data")}
          >
            {hasDraft ? "Publish changes" : "Data & publishing"}
          </Button>
        </SectionCard>

        <SectionCard
          title="On the live site right now"
          description="What a visitor sees with the current data."
        >
          <Stack gap={8}>
            {[
              { label: "Selected work case studies", value: publicContent.caseStudies.length },
              { label: "Projects in the archive", value: publicContent.archiveProjects.length },
              { label: "Recommendations", value: publicContent.recommendations.length },
              { label: "Skills in Tech & Craft", value: publicContent.skills.length },
            ].map((row) => (
              <Group key={row.label} justify="space-between">
                <Text size="sm" c={AD.textSoft}>
                  {row.label}
                </Text>
                <Text
                  size="sm"
                  style={{ fontFamily: AD_FONT.mono, color: AD.text, fontWeight: 600 }}
                >
                  {row.value}
                </Text>
              </Group>
            ))}
          </Stack>
        </SectionCard>
      </SimpleGrid>

      {issues.length > 0 && (
        <Box mt="md">
          <SectionCard
            title="Needs attention"
            action={
              <Badge size="sm" color="orange" variant="light">
                {issues.length}
              </Badge>
            }
          >
            <Stack gap={8}>
              {issues.slice(0, 6).map((issue) => (
                <Group
                  key={issue.key}
                  gap={10}
                  wrap="nowrap"
                  align="flex-start"
                  style={{
                    border: `1px solid ${AD.border}`,
                    borderRadius: AD.radiusSm,
                    padding: "10px 12px",
                  }}
                >
                  <IconAlertTriangle
                    size={16}
                    color={AD.warning}
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  <Text size="sm" c={AD.textSoft} style={{ flex: 1 }}>
                    {issue.text}
                  </Text>
                  <Button
                    size="compact-xs"
                    variant="subtle"
                    color="gray"
                    rightSection={<IconArrowRight size={13} />}
                    onClick={() => onNavigate(issue.route)}
                  >
                    Fix
                  </Button>
                </Group>
              ))}
            </Stack>
          </SectionCard>
        </Box>
      )}
    </>
  );
}
