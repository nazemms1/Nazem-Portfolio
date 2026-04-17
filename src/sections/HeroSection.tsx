import { motion } from "framer-motion";
import {
  Container, Title, Text, Button, Group, Grid,
  Badge, ThemeIcon, Card,
} from "@mantine/core";
import {
  IconDownload, IconMail, IconArrowDown,
  IconCode, IconDeviceMobile, IconRocket, IconAward,
} from "@tabler/icons-react";
import TypeWriter from "../components/TypeWriter";
import FloatingElement from "../components/FloatingElement";
import { projects, skills, contactInfo } from "../data/portfolioData";
import cvFile from "../assets/files/Nazem_Almsouti_CV.pdf";

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp    = (d = 0) => ({ initial: { opacity: 0, y: 20 },  animate: { opacity: 1, y: 0 },  transition: { duration: 0.55, delay: d, ease: EASE } });
const fadeLeft  = (d = 0) => ({ initial: { opacity: 0, x: -32 }, animate: { opacity: 1, x: 0 },  transition: { duration: 0.60, delay: d, ease: EASE } });
const fadeRight = (d = 0) => ({ initial: { opacity: 0, x: 32 },  animate: { opacity: 1, x: 0 },  transition: { duration: 0.60, delay: d, ease: EASE } });

// ── Navy palette tokens ────────────────────────────────────────
const NAVY    = "#1d4ed8";   // blue-700 — deep primary
const BLUE    = "#3b82f6";   // blue-500 — lighter gradient end
const BLUE_L  = "#93c5fd";   // blue-300 — text accents on dark
const INDIGO  = "#4f46e5";   // indigo-600 — secondary accent
const INDIGO_L = "#a5b4fc";  // indigo-300

export default function HeroSection() {
  const typingTexts = [
    "Software Engineer",
    "Frontend Developer",
    "Mobile Developer",
    "React Specialist",
    "Flutter Developer",
  ];

  const handleContactClick = () => { window.location.href = `mailto:${contactInfo.email}`; };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Nazem_Almsouti_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "80px", position: "relative", zIndex: 1 }}>

      {/* Ambient glows — static */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-15%", left: "-8%", width: "560px", height: "560px", borderRadius: "50%", background: `radial-gradient(circle, ${NAVY}18 0%, transparent 68%)`, filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "-5%", right: "-8%", width: "500px", height: "500px", borderRadius: "50%", background: `radial-gradient(circle, ${INDIGO}12 0%, transparent 68%)`, filter: "blur(80px)" }} />
      </div>

      <Container size="xl" style={{ position: "relative" }}>
        <Grid align="center" gutter={60}>

          {/* ── Left ─────────────────────────────────────────── */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div {...fadeLeft(0)}>

              <motion.div {...fadeUp(0.1)}>
                <Badge size="md" variant="outline" mb="xl" style={{ borderColor: `${BLUE}44`, color: BLUE_L, background: `${NAVY}12`, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em" }}>
                  Available for Opportunities
                </Badge>
              </motion.div>

              <motion.div {...fadeUp(0.2)}>
                <Title order={1} mb="sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: "-0.035em", color: "#f1f5f9" }}>
                  Hi, I'm{" "}
                  <span style={{ background: `linear-gradient(120deg, ${BLUE_L} 0%, ${BLUE} 45%, ${INDIGO_L} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Nazem Almsouti
                  </span>
                </Title>
              </motion.div>

              <motion.div {...fadeUp(0.3)}>
                <Title order={2} mb="lg" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#64748b", minHeight: "2.2rem", letterSpacing: "-0.01em" }}>
                  <TypeWriter texts={typingTexts} speed={75} />
                </Title>
              </motion.div>

              <motion.div {...fadeUp(0.4)}>
                <Text mb="xl" maw={500} style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "1rem", fontFamily: "'Inter', sans-serif" }}>
                  Building production-grade web and mobile applications with{" "}
                  <span style={{ color: BLUE_L, fontWeight: 600 }}>React</span>,{" "}
                  <span style={{ color: BLUE_L, fontWeight: 600 }}>TypeScript</span>, and{" "}
                  <span style={{ color: INDIGO_L, fontWeight: 600 }}>Flutter</span>.
                  {" "}Focused on clean architecture, real performance, and interfaces that feel right.
                </Text>
              </motion.div>

              <motion.div {...fadeUp(0.5)}>
                <Group gap="sm" mb="xl">
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                    <Button size="md" leftSection={<IconDownload size={17} />} onClick={handleDownloadCV}
                      style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${NAVY} 100%)`, boxShadow: `0 4px 20px ${NAVY}44`, border: "none", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                      Download CV
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                    <Button size="md" variant="subtle" leftSection={<IconMail size={17} />} onClick={handleContactClick}
                      style={{ color: "#94a3b8", border: "1px solid #1e293b", background: "rgba(15,23,42,0.6)", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                      Get In Touch
                    </Button>
                  </motion.div>
                </Group>
              </motion.div>

              <motion.div {...fadeUp(0.6)}>
                <Group gap="lg">
                  {[
                    { icon: IconCode,        label: "Frontend", sub: "React · TS · Next.js", color: BLUE_L,   bg: `${NAVY}1a`,   border: `${BLUE}33`   },
                    { icon: IconDeviceMobile, label: "Mobile",   sub: "Flutter · Dart",       color: INDIGO_L, bg: `${INDIGO}1a`, border: `${INDIGO}33` },
                  ].map((item, i) => (
                    <Group key={i} gap="xs">
                      <ThemeIcon size={34} radius="md" style={{ background: item.bg, border: `1px solid ${item.border}`, color: item.color }}>
                        <item.icon size={16} />
                      </ThemeIcon>
                      <div>
                        <Text size="sm" fw={600} style={{ color: "#e2e8f0", lineHeight: 1.3 }}>{item.label}</Text>
                        <Text size="xs" style={{ color: "#475569" }}>{item.sub}</Text>
                      </div>
                    </Group>
                  ))}
                </Group>
              </motion.div>

            </motion.div>
          </Grid.Col>

          {/* ── Right ────────────────────────────────────────── */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div {...fadeRight(0.2)} style={{ position: "relative", padding: "2rem 3rem" }}>
              <FloatingElement delay={0.4}>
                <div style={{ position: "relative", width: "100%", maxWidth: "400px", margin: "0 auto" }}>

                  {/* Border ring */}
                  <div style={{ position: "absolute", inset: -1, borderRadius: "20px", background: `linear-gradient(135deg, ${BLUE}55, ${INDIGO}33)` }} />

                  <div style={{ position: "relative", background: "#0f172a", borderRadius: "19px", padding: "6px" }}>
                    <div style={{ width: "100%", aspectRatio: "4 / 3", borderRadius: "14px", background: `radial-gradient(ellipse at 38% 32%, ${NAVY}10 0%, #0f172a 60%)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>

                      {/* Dot grid */}
                      <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle, ${BLUE}22 1px, transparent 1px)`, backgroundSize: "24px 24px", opacity: 0.4 }} />

                      {/* Rings */}
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                        style={{ position: "absolute", width: "62%", height: "84%", borderRadius: "50%", border: `1px solid ${BLUE}22`, willChange: "transform" }} />
                      <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ position: "absolute", width: "42%", height: "58%", borderRadius: "50%", border: `1px dashed ${INDIGO}22`, willChange: "transform" }} />

                      {/* Initials */}
                      <div style={{ position: "relative", width: "136px", height: "136px", borderRadius: "50%", background: `linear-gradient(145deg, ${NAVY}18 0%, ${INDIGO}0d 100%)`, border: `1.5px solid ${BLUE}44`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: `0 0 40px ${NAVY}22, inset 0 0 20px ${NAVY}08` }}>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "2.4rem", fontWeight: 800, letterSpacing: "0.03em", background: `linear-gradient(135deg, ${BLUE_L} 0%, ${INDIGO_L} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1 }}>
                          NA
                        </span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.5rem", color: `${BLUE}88`, letterSpacing: "0.18em", marginTop: "6px", textTransform: "uppercase" }}>
                          Dev · Mobile
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stat cards */}
                  <motion.div {...fadeLeft(0.9)} style={{ position: "absolute", top: "8%", left: "-24%" }} whileHover={{ y: -3 }}>
                    <Card padding="sm" radius="lg" style={{ background: "rgba(15,23,42,0.95)", border: `1px solid ${BLUE}28`, boxShadow: "0 8px 24px rgba(0,0,0,0.45)", minWidth: "120px" }}>
                      <Group gap="xs" align="flex-start">
                        <IconAward size={18} color={BLUE} style={{ marginTop: 2 }} />
                        <div>
                          <Text size="xs" style={{ color: "#475569", marginBottom: 4 }}>Experience</Text>
                          <Group gap={6}><IconCode size={11} color={BLUE} /><Text size="xs" fw={600} style={{ color: BLUE_L }}>2yr Web</Text></Group>
                          <Group gap={6}><IconDeviceMobile size={11} color={BLUE} /><Text size="xs" fw={600} style={{ color: BLUE_L }}>3yr Mobile</Text></Group>
                        </div>
                      </Group>
                    </Card>
                  </motion.div>

                  <motion.div {...fadeRight(1.05)} style={{ position: "absolute", bottom: "14%", right: "-24%" }} whileHover={{ y: -3 }}>
                    <Card padding="sm" radius="lg" style={{ background: "rgba(15,23,42,0.95)", border: `1px solid ${INDIGO}33`, boxShadow: "0 8px 24px rgba(0,0,0,0.45)", minWidth: "110px" }}>
                      <Group gap="xs">
                        <IconRocket size={18} color={INDIGO_L} />
                        <div>
                          <Text size="xs" style={{ color: "#475569" }}>Projects</Text>
                          <Text fw={700} size="sm" style={{ color: INDIGO_L }}>{projects.length}+ Done</Text>
                        </div>
                      </Group>
                    </Card>
                  </motion.div>

                  <motion.div {...fadeUp(1.2)} style={{ position: "absolute", bottom: "-7%", left: "20%" }} whileHover={{ y: -3 }}>
                    <Card padding="sm" radius="lg" style={{ background: "rgba(15,23,42,0.95)", border: `1px solid ${NAVY}44`, boxShadow: "0 8px 24px rgba(0,0,0,0.45)", minWidth: "110px" }}>
                      <Group gap="xs">
                        <IconCode size={18} color={BLUE} />
                        <div>
                          <Text size="xs" style={{ color: "#475569" }}>Technologies</Text>
                          <Text fw={700} size="sm" style={{ color: BLUE_L }}>{skills.length}+</Text>
                        </div>
                      </Group>
                    </Card>
                  </motion.div>

                </div>
              </FloatingElement>
            </motion.div>
          </Grid.Col>

        </Grid>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 0.6 }} style={{ textAlign: "center", marginTop: "4rem" }}>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} style={{ willChange: "transform", display: "inline-block" }}>
            <IconArrowDown size={22} color={BLUE} style={{ opacity: 0.5 }} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
