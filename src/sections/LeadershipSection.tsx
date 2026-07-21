import { Container, Text, SimpleGrid, Box } from "@mantine/core";
import { IconUsersGroup, IconGitPullRequest, IconStack2, IconTargetArrow } from "@tabler/icons-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import CountUp from "../components/CountUp";
import { COLOR, FONT } from "../styles/tokens";

const impactAreas = [
  {
    icon: IconUsersGroup,
    title: "Team Leadership",
    text: "Led the frontend team at Pharaon Group across Askonnect, Mata Elite, Glovent, and Texpo — setting technical direction and unblocking engineers day to day.",
  },
  {
    icon: IconGitPullRequest,
    title: "Code Review Standards",
    text: "Own the review bar for every PR that ships from the team — pattern consistency, type safety, and performance are checked before merge, not after launch.",
  },
  {
    icon: IconStack2,
    title: "Architecture Decisions",
    text: "Made the call on state management, component boundaries, and i18n/RTL strategy across multiple bilingual products — decisions that outlive any single feature.",
  },
  {
    icon: IconTargetArrow,
    title: "Cross-Team Delivery",
    text: "Coordinated with backend, design, and product on Pyramind and Askonnect to keep API contracts and UI scope aligned through delivery, not just at kickoff.",
  },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" style={{ padding: "8rem 0", position: "relative", background: COLOR.surface }}>
      <Container size={1280} px={{ base: 24, sm: 48, lg: 72 }}>
        <SectionHeading
          eyebrow="Leadership & Impact"
          title="Impact beyond my own commits"
          description="Senior work shows up in what a team ships without you in the room."
        />

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" mb={80}>
          {impactAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.08}>
              <Box p="xl" style={{ background: COLOR.surfaceElevated, border: `1px solid ${COLOR.border}`, borderRadius: 14, height: "100%" }}>
                <area.icon size={26} color={COLOR.blueLight} style={{ marginBottom: 16 }} />
                <Text fw={700} mb="xs" style={{ color: COLOR.textPrimary }}>{area.title}</Text>
                <Text size="sm" style={{ color: COLOR.textMuted, lineHeight: 1.8 }}>{area.text}</Text>
              </Box>
            </Reveal>
          ))}
        </SimpleGrid>

        <Reveal delay={0.1}>
          <SimpleGrid cols={{ base: 3 }} spacing="xl">
            {[
              { value: 4, suffix: "", label: "Company projects led end-to-end" },
              { value: 2, suffix: "", label: "Teams collaborated with cross-functionally" },
              { value: 100, suffix: "%", label: "PRs reviewed before merge on led projects" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <Text style={{ fontFamily: FONT.mono, fontWeight: 800, fontSize: "2.2rem", color: COLOR.textPrimary }}>
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </Text>
                <Text size="sm" style={{ color: COLOR.textMuted }}>{stat.label}</Text>
              </div>
            ))}
          </SimpleGrid>
        </Reveal>
      </Container>
    </section>
  );
}
