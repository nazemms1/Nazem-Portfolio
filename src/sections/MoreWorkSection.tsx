import { Container, Text, SimpleGrid, Box, Group, Badge, Image } from "@mantine/core";
import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/portfolioData";
import { caseStudies } from "../data/caseStudies";
import { COLOR, FONT, glass } from "../styles/tokens";

const featuredIds = new Set(caseStudies.map((cs) => cs.projectId));
const restProjects = projects.filter((p) => !featuredIds.has(p.id));

const companyLabel: Record<string, string> = {
  pharaon: "Pharaon Group",
  soutify: "Soutify",
  freelance: "Freelance",
};

export default function MoreWorkSection() {
  return (
    <section id="more-work" style={{ padding: "6rem 0 8rem", position: "relative" }}>
      <Container size={1280} px={{ base: 24, sm: 48, lg: 72 }}>
        <SectionHeading
          eyebrow="Full Archive"
          title="More shipped work"
          description="Additional projects across web, mobile, and dashboard products — smaller in scope, still shipped to production."
        />

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {restProjects.map((project, i) => {
            const hasLink = project.demoUrl && project.demoUrl !== "#";
            const hasGithub = project.githubUrl && project.githubUrl !== "#";
            return (
              <Reveal key={project.id} delay={(i % 6) * 0.05}>
                <Box
                  style={{
                    border: `1px solid ${COLOR.border}`,
                    borderRadius: 14,
                    overflow: "hidden",
                    background: glass.card.background,
                    backdropFilter: glass.card.backdropFilter,
                    WebkitBackdropFilter: glass.card.WebkitBackdropFilter,
                    boxShadow: glass.card.boxShadow,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "border-color 0.25s ease, transform 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${COLOR.blue}44`;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = COLOR.border;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ aspectRatio: "16 / 10", background: COLOR.surfaceElevated, overflow: "hidden" }}>
                    <Image src={project.image} alt={project.title} fit="cover" style={{ width: "100%", height: "100%" }} />
                  </div>

                  <Box p="lg" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <Group justify="space-between" align="flex-start" mb="xs">
                      <Text fw={700} size="sm" style={{ color: COLOR.textPrimary, lineHeight: 1.4 }}>
                        {project.title}
                      </Text>
                    </Group>

                    <Text size="xs" style={{ fontFamily: FONT.mono, color: COLOR.textFaint, marginBottom: 10 }}>
                      {companyLabel[project.company]} · {project.period}
                    </Text>

                    <Text size="sm" style={{ color: COLOR.textMuted, lineHeight: 1.7, flex: 1, marginBottom: 14 }}>
                      {project.description.length > 140
                        ? project.description.slice(0, 140).trimEnd() + "…"
                        : project.description}
                    </Text>

                    <Group gap={6} mb="md">
                      {project.technologies.slice(0, 3).map((t) => (
                        <Badge
                          key={t}
                          size="sm"
                          variant="outline"
                          style={{ borderColor: `${COLOR.blue}2a`, color: COLOR.textSecondary, background: "transparent" }}
                        >
                          {t}
                        </Badge>
                      ))}
                    </Group>

                    {(hasLink || hasGithub) && (
                      <Group gap="md" mt="auto">
                        {hasLink && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            style={{ display: "inline-flex", alignItems: "center", gap: 4, color: COLOR.blueLight, fontSize: "0.82rem", fontWeight: 500, textDecoration: "none" }}
                          >
                            Live <IconArrowUpRight size={13} />
                          </a>
                        )}
                        {hasGithub && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            style={{ display: "inline-flex", alignItems: "center", gap: 4, color: COLOR.textMuted, fontSize: "0.82rem", fontWeight: 500, textDecoration: "none" }}
                          >
                            <IconBrandGithub size={13} /> Code
                          </a>
                        )}
                      </Group>
                    )}
                  </Box>
                </Box>
              </Reveal>
            );
          })}
        </SimpleGrid>
      </Container>
    </section>
  );
}
