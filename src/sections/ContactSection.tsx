import { motion } from "framer-motion";
import { Container, Title, Text, Box, Badge, Grid, Card, Stack, Group, ThemeIcon, ActionIcon } from "@mantine/core";
import { IconSparkles, IconMail, IconPhone, IconMapPin, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import ContactForm from "../components/ContactForm";
import { contactInfo } from "../data/portfolioData";

const NAVY   = "#1d4ed8";
const BLUE   = "#3b82f6";
const BLUE_L = "#93c5fd";
const INDIGO = "#4f46e5";

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: "8rem 0 4rem", position: "relative" }}>
      <Container size="lg">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, margin: "-100px" }}>

          <Box mb={60} style={{ textAlign: "center" }}>
            <Badge size="md" variant="outline" mb="md" leftSection={<IconSparkles size={14} />}
              style={{ borderColor: `${BLUE}44`, color: BLUE_L, background: `${NAVY}0d`, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em" }}>
              Get in Touch
            </Badge>
            <Title order={2} mb="md" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: "-0.025em", background: `linear-gradient(120deg, ${BLUE_L} 0%, ${BLUE} 45%, #a5b4fc 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Let's Work Together
            </Title>
            <Text style={{ color: "#64748b" }}>Open to new opportunities and exciting collaborations</Text>
          </Box>

          <Grid gutter={30}>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Stack gap="lg">
                {[
                  { icon: IconMail,    title: "Email",    value: contactInfo.email,    href: `mailto:${contactInfo.email}`, color: BLUE_L,   border: `${BLUE}28`,   bg: `${NAVY}0a`   },
                  { icon: IconPhone,   title: "Phone",    value: contactInfo.phone,    href: `tel:${contactInfo.phone}`,   color: "#a5b4fc", border: `${INDIGO}28`, bg: `${INDIGO}0a` },
                  { icon: IconMapPin,  title: "Location", value: contactInfo.location, href: undefined,                    color: "#94a3b8",  border: "rgba(100,116,139,0.25)", bg: "rgba(100,116,139,0.06)" },
                ].map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}>
                    <motion.div whileHover={{ x: 8 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                      <Card component={item.href ? "a" : "div"} href={item.href} padding="lg" radius="xl"
                        style={{ background: item.bg, border: `1px solid ${item.border}`, textDecoration: "none", color: "inherit", cursor: item.href ? "pointer" : "default", display: "flex", alignItems: "center", gap: "1rem", transition: "border-color 0.2s ease" }}>
                        <ThemeIcon size={46} radius="xl" style={{ background: item.bg, border: `1px solid ${item.border}`, color: item.color, flexShrink: 0 }}>
                          <item.icon size={22} />
                        </ThemeIcon>
                        <div>
                          <Text size="sm" style={{ color: "#475569" }}>{item.title}</Text>
                          <Text fw={600} style={{ color: "#e2e8f0" }}>{item.value}</Text>
                        </div>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.35 }} viewport={{ once: true }}>
                  <Group gap="md" mt="md">
                    {[
                      { icon: IconBrandLinkedin, href: contactInfo.linkedin,         bg: `${NAVY}18`,   border: `${BLUE}33`,   color: BLUE_L   },
                      { icon: IconBrandGithub,   href: contactInfo.github,            bg: "rgba(100,116,139,0.15)", border: "rgba(100,116,139,0.3)", color: "#94a3b8" },
                      { icon: IconMail,          href: `mailto:${contactInfo.email}`, bg: `${INDIGO}18`, border: `#6366f133`,   color: "#a5b4fc" },
                    ].map((social, i) => (
                      <motion.div key={i} whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.92 }}>
                        <ActionIcon component="a" href={social.href} target="_blank" size={52} radius="xl" style={{ background: social.bg, border: `1px solid ${social.border}`, color: social.color }}>
                          <social.icon size={24} />
                        </ActionIcon>
                      </motion.div>
                    ))}
                  </Group>
                </motion.div>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 7 }}>
              <ContactForm />
            </Grid.Col>
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
}
