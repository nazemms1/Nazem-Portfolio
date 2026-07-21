import { Container, Text, SimpleGrid, Box } from "@mantine/core";
import { IconSitemap, IconShieldCheck, IconUsers, IconGitBranch } from "@tabler/icons-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { COLOR, FONT } from "../styles/tokens";

const principles = [
  {
    icon: IconSitemap,
    number: "01",
    title: "Architecture before code",
    text: "Every feature starts with a question: how does this scale, and what does it cost the next person to change? I design component boundaries and state ownership before writing a single line of UI.",
  },
  {
    icon: IconShieldCheck,
    number: "02",
    title: "Quality is not negotiable",
    text: "Type safety, code review, and consistent patterns aren't overhead — they're what let a team move fast for years instead of quarters. I hold that bar in every PR I touch.",
  },
  {
    icon: IconUsers,
    number: "03",
    title: "Ownership over tickets",
    text: "I don't wait for a spec to be perfect. I ask the right questions early, flag risk before it becomes a blocker, and take responsibility for outcomes — not just output.",
  },
  {
    icon: IconGitBranch,
    number: "04",
    title: "Mentorship compounds",
    text: "The fastest way to raise a team's ceiling is to raise every engineer on it. I invest in code reviews that teach, not just approve, and pairing sessions that transfer judgment, not just answers.",
  },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" style={{ padding: "8rem 0", position: "relative" }}>
      <Container size={1280} px={{ base: 24, sm: 48, lg: 72 }}>
        <SectionHeading
          eyebrow="How I Think"
          title="Principles that hold up under pressure"
          description="Seniority isn't a title — it's a set of habits that show up when the deadline is tight and the spec is unclear."
        />

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={1} style={{ border: `1px solid ${COLOR.border}`, borderRadius: 16, overflow: "hidden" }}>
          {principles.map((p, i) => (
            <Reveal key={p.number} delay={i * 0.08} direction="up">
              <Box
                p="xl"
                style={{
                  background: COLOR.surface,
                  height: "100%",
                  borderRight: i % 2 === 0 ? `1px solid ${COLOR.border}` : undefined,
                  borderBottom: i < 2 ? `1px solid ${COLOR.border}` : undefined,
                  transition: "background 0.25s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = COLOR.surfaceElevated; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = COLOR.surface; }}
              >
                <Text style={{ fontFamily: FONT.mono, fontSize: "0.85rem", color: COLOR.blue, marginBottom: 20 }}>
                  {p.number}
                </Text>
                <p.icon size={26} color={COLOR.blueLight} style={{ marginBottom: 18 }} />
                <Text fw={700} size="lg" mb="sm" style={{ color: COLOR.textPrimary }}>
                  {p.title}
                </Text>
                <Text size="sm" style={{ color: COLOR.textMuted, lineHeight: 1.8 }}>
                  {p.text}
                </Text>
              </Box>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
