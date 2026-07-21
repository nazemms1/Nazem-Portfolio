import { Container, Title, Text, Grid, Stack, Group } from "@mantine/core";
import { IconMail, IconPhone, IconMapPin, IconBrandLinkedin, IconBrandGithub, IconArrowUpRight } from "@tabler/icons-react";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";
import { contactInfo } from "../data/portfolioData";
import { COLOR, FONT } from "../styles/tokens";

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: "8rem 0 6rem", position: "relative" }}>
      <Container size={1280} px={{ base: 24, sm: 48, lg: 72 }}>
        <Grid gutter={60}>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Reveal direction="left">
              <Text style={{ fontFamily: FONT.mono, color: COLOR.blue, fontSize: "0.85rem", marginBottom: 16 }}>
                Get in touch
              </Text>
              <Title
                order={2}
                mb="lg"
                style={{ color: COLOR.textPrimary, fontWeight: 700, letterSpacing: "-0.03em", fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
              >
                Have a team that needs a senior hand on the frontend?
              </Title>
              <Text mb={40} style={{ color: COLOR.textMuted, lineHeight: 1.8, maxWidth: 440 }}>
                I'm open to roles and engagements where ownership matters —
                architecture, team leadership, or hands-on delivery. If that's
                what you're building, let's talk.
              </Text>

              <Stack gap="md" mb={40}>
                {[
                  { icon: IconMail, label: contactInfo.email, href: `mailto:${contactInfo.email}` },
                  { icon: IconPhone, label: contactInfo.phone, href: `tel:${contactInfo.phone}` },
                  { icon: IconMapPin, label: contactInfo.location, href: undefined },
                ].map((item) => (
                  <Group key={item.label} gap="sm">
                    <item.icon size={18} color={COLOR.textMuted} />
                    {item.href ? (
                      <a href={item.href} style={{ color: COLOR.textSecondary, textDecoration: "none", fontSize: "0.95rem" }}>
                        {item.label}
                      </a>
                    ) : (
                      <Text style={{ color: COLOR.textSecondary, fontSize: "0.95rem" }}>{item.label}</Text>
                    )}
                  </Group>
                ))}
              </Stack>

              <Group gap="lg">
                {[
                  { icon: IconBrandLinkedin, href: contactInfo.linkedin, label: "LinkedIn" },
                  { icon: IconBrandGithub, href: contactInfo.github, label: "GitHub" },
                ].map((social) => (
                  <Magnetic key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        color: COLOR.textPrimary,
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                      }}
                    >
                      <social.icon size={18} />
                      {social.label}
                      <IconArrowUpRight size={14} />
                    </a>
                  </Magnetic>
                ))}
              </Group>
            </Reveal>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <ContactForm />
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
