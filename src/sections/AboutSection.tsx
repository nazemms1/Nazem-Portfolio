import { motion } from "framer-motion";
import { Container, Title, Text, Box, Badge, SimpleGrid, Grid, Card, Group, Stack, ThemeIcon, ActionIcon, Divider } from "@mantine/core";
import { IconSparkles, IconAward, IconRocket, IconCode, IconHeart, IconBriefcase, IconCalendar, IconMapPin, IconBrandLinkedin, IconBrandGithub, IconMail, IconSchool } from "@tabler/icons-react";
import StatsCounter from "../components/StatsCounter";
import { projects, skills, contactInfo } from "../data/portfolioData";

const NAVY   = "#1d4ed8";
const BLUE   = "#3b82f6";
const BLUE_L = "#93c5fd";
const INDIGO = "#4f46e5";

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "8rem 0", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: "500px", height: "400px", borderRadius: "50%", background: `radial-gradient(circle, ${NAVY}08 0%, transparent 70%)`, filter: "blur(80px)", pointerEvents: "none" }} />

      <Container size="lg" style={{ position: "relative" }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, margin: "-100px" }}>

          <Box mb={60} style={{ textAlign: "center" }}>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <Badge size="md" variant="outline" mb="md" leftSection={<IconSparkles size={14} />}
                style={{ borderColor: `${BLUE}44`, color: BLUE_L, background: `${NAVY}0d`, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em" }}>
                About Me
              </Badge>
            </motion.div>
            <Title order={2} mb="md" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: "-0.025em", background: `linear-gradient(120deg, ${BLUE_L} 0%, ${BLUE} 45%, #a5b4fc 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
              Building Digital Excellence
            </Title>
            <Text style={{ color: "#64748b", fontSize: "1rem" }}>Combining technical expertise with creative problem-solving</Text>
          </Box>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
            <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="lg" mb={60}>
              <StatsCounter value="2+"             label="Years Experience"    icon={IconAward}  color="cyan"   />
              <StatsCounter value={`${projects.length}+`} label="Projects Completed" icon={IconRocket} color="violet" />
              <StatsCounter value={`${skills.length}+`}   label="Technologies"       icon={IconCode}   color="teal"   />
              <StatsCounter value="100%"           label="Client Satisfaction" icon={IconHeart}  color="pink"   />
            </SimpleGrid>
          </motion.div>

          <Grid gutter={40}>
            {/* Education */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }} style={{ height: "100%" }}>
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 280, damping: 22 }} style={{ height: "100%" }}>
                  <Card padding="xl" radius="xl" style={{ background: "linear-gradient(145deg, rgba(15,23,42,0.97) 0%, rgba(18,25,40,0.98) 100%)", border: `1px solid ${BLUE}22`, boxShadow: "0 8px 40px rgba(0,0,0,0.3)", height: "100%", overflow: "hidden", position: "relative", transition: "box-shadow 0.3s ease" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${NAVY}22, 0 20px 60px rgba(0,0,0,0.4)`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(0,0,0,0.3)"; }}>
                    <motion.div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${BLUE}, ${NAVY})` }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.3 }} viewport={{ once: true }} />
                    <Group mb="xl">
                      <ThemeIcon size={56} radius="xl" style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${NAVY} 100%)`, boxShadow: `0 8px 24px ${NAVY}33`, border: "none" }}>
                        <IconSchool size={28} />
                      </ThemeIcon>
                      <div>
                        <Title order={3} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Education</Title>
                        <Text size="sm" fw={500} style={{ color: BLUE_L }}>Academic Background</Text>
                      </div>
                    </Group>
                    <Divider mb="lg" style={{ borderColor: `${BLUE}14` }} />
                    <Stack gap="md">
                      <div>
                        <Text fw={700} size="lg" mb="xs">Bachelor's in Software Engineering</Text>
                        <Text style={{ color: "#64748b" }} size="sm" mb={4}>Artificial Intelligence University (AIU)</Text>
                        <Text style={{ color: "#64748b" }} size="sm">Major: Software Engineering</Text>
                      </div>
                      <Group gap="xs">
                        <IconCalendar size={17} color={BLUE} />
                        <Text size="sm" fw={600} style={{ color: BLUE_L }}>2018 – 2024</Text>
                      </Group>
                    </Stack>
                    <div style={{ position: "absolute", bottom: "1rem", right: "1.5rem", fontSize: "5rem", fontWeight: 900, color: BLUE, opacity: 0.03, lineHeight: 1, userSelect: "none", pointerEvents: "none", fontFamily: "monospace" }}>BSc</div>
                  </Card>
                </motion.div>
              </motion.div>
            </Grid.Col>

            {/* Bio */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }} style={{ height: "100%" }}>
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 280, damping: 22 }} style={{ height: "100%" }}>
                  <Card padding="xl" radius="xl" style={{ background: "linear-gradient(145deg, rgba(15,23,42,0.97) 0%, rgba(18,25,40,0.98) 100%)", border: `1px solid ${INDIGO}22`, boxShadow: "0 8px 40px rgba(0,0,0,0.3)", height: "100%", overflow: "hidden", position: "relative", transition: "box-shadow 0.3s ease" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${INDIGO}22, 0 20px 60px rgba(0,0,0,0.4)`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(0,0,0,0.3)"; }}>
                    <motion.div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, #a5b4fc, ${INDIGO})` }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.4 }} viewport={{ once: true }} />
                    <Group mb="xl">
                      <ThemeIcon size={56} radius="xl" style={{ background: `linear-gradient(135deg, #6366f1 0%, ${INDIGO} 100%)`, boxShadow: `0 8px 24px ${INDIGO}33`, border: "none" }}>
                        <IconBriefcase size={28} />
                      </ThemeIcon>
                      <div>
                        <Title order={3} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>About</Title>
                        <Text size="sm" fw={500} style={{ color: "#a5b4fc" }}>Who I Am</Text>
                      </div>
                    </Group>
                    <Divider mb="lg" style={{ borderColor: `${INDIGO}14` }} />
                    <Stack gap="lg">
                      <Text size="md" style={{ lineHeight: 1.85 }}>
                        I'm a passionate{" "}
                        <Text component="span" fw={700} style={{ color: BLUE_L }} inherit>Software Engineer</Text>{" "}
                        specializing in creating exceptional digital experiences through modern web and mobile technologies.
                      </Text>
                      <Text size="sm" style={{ color: "#64748b", lineHeight: 1.85 }}>
                        With expertise in React, TypeScript, and Flutter, I transform complex challenges into elegant solutions — integrating AI technologies and building scalable, user-centric applications.
                      </Text>
                      <Group gap="xs">
                        <IconMapPin size={17} color="#a5b4fc" />
                        <Text size="sm" style={{ color: "#64748b" }}>{contactInfo.location}</Text>
                      </Group>
                      <Group gap="sm" mt="xs">
                        {[
                          { icon: IconBrandLinkedin, href: contactInfo.linkedin,           bg: `${NAVY}18`,   border: `${BLUE}33`,   color: BLUE_L  },
                          { icon: IconBrandGithub,   href: contactInfo.github,              bg: "rgba(100,116,139,0.15)", border: "rgba(100,116,139,0.3)", color: "#94a3b8" },
                          { icon: IconMail,          href: `mailto:${contactInfo.email}`,   bg: `${INDIGO}18`, border: `#6366f133`,   color: "#a5b4fc" },
                        ].map((social, i) => (
                          <motion.div key={i} whileHover={{ scale: 1.12, y: -2 }} whileTap={{ scale: 0.92 }}>
                            <ActionIcon component="a" href={social.href} target="_blank" size={46} radius="xl" style={{ background: social.bg, border: `1px solid ${social.border}`, color: social.color }}>
                              <social.icon size={22} />
                            </ActionIcon>
                          </motion.div>
                        ))}
                      </Group>
                    </Stack>
                  </Card>
                </motion.div>
              </motion.div>
            </Grid.Col>
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
}
