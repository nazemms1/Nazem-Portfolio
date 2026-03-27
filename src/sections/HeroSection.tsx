import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Grid,
  Badge,
  ThemeIcon,
  Card,
} from "@mantine/core";
import {
  IconDownload,
  IconMail,
  IconArrowDown,
  IconCode,
  IconDeviceMobile,
  IconSparkles,
  IconRocket,
  IconAward,
} from "@tabler/icons-react";
import TypeWriter from "../components/TypeWriter";
import FloatingElement from "../components/FloatingElement";
import { projects, skills, contactInfo } from "../data/portfolioData";
import cvFile from "../assets/files/Nazem Almsouti CV.pdf";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const rawOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]);
  const rawY = useTransform(scrollYProgress, [0, 0.25], [0, 60]);
  const opacity = useSpring(rawOpacity, { stiffness: 80, damping: 20 });
  const scale = useSpring(rawScale, { stiffness: 80, damping: 20 });
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });

  const typingTexts = [
    "Software Engineer",
    "Frontend Developer",
    "Mobile Developer",
    "React Specialist",
    "Flutter Developer",
  ];

  const handleContactClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Nazem_Almsouti_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Background mesh gradients */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          style={{
            position: "absolute",
            bottom: "0%",
            right: "-5%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <Container size="xl" style={{ position: "relative" }}>
        <motion.div style={{ opacity, scale, y }}>
          <Grid align="center" gutter={60}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <Badge
                    size="lg"
                    variant="gradient"
                    gradient={{ from: "cyan", to: "blue" }}
                    mb="xl"
                    leftSection={
                      <motion.div
                        animate={{ rotate: [0, 15, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <IconSparkles size={16} />
                      </motion.div>
                    }
                    style={{ boxShadow: "0 4px 24px rgba(6,182,212,0.35)" }}
                  >
                    Available for Opportunities
                  </Badge>
                </motion.div>

                <Title
                  order={1}
                  mb="md"
                  style={{
                    lineHeight: 1.08,
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                  }}
                >
                  Hi, I'm{" "}
                  <motion.span
                    style={{
                      background:
                        "linear-gradient(135deg, #06b6d4 0%, #3b82f6 45%, #8b5cf6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      display: "inline-block",
                      backgroundSize: "200% 200%",
                    }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  >
                    Nazem Almsouti
                  </motion.span>
                </Title>

                <Title
                  order={2}
                  c="dimmed"
                  mb="xl"
                  fw={500}
                  style={{
                    letterSpacing: "-0.01em",
                    minHeight: "2.5rem",
                    fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                  }}
                >
                  <TypeWriter texts={typingTexts} speed={80} />
                </Title>

                <Text
                  size="lg"
                  c="dimmed"
                  mb="xl"
                  maw={520}
                  style={{ lineHeight: 1.8, fontSize: "1.05rem" }}
                >
                  Crafting exceptional digital experiences with{" "}
                  <Text component="span" fw={600} c="cyan" inherit>React</Text>,{" "}
                  <Text component="span" fw={600} c="cyan" inherit>TypeScript</Text>, and{" "}
                  <Text component="span" fw={600} c="violet" inherit>Flutter</Text>.
                  {" "}Specializing in modern web applications with AI integration and
                  cutting-edge technologies.
                </Text>

                <Group gap="md" mb="xl">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      leftSection={<IconDownload size={20} />}
                      onClick={handleDownloadCV}
                      variant="gradient"
                      gradient={{ from: "cyan", to: "blue", deg: 135 }}
                      style={{
                        boxShadow: "0 8px 40px rgba(6,182,212,0.45)",
                        fontWeight: 700,
                        letterSpacing: "0.01em",
                      }}
                    >
                      Download CV
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="light"
                      color="cyan"
                      leftSection={<IconMail size={20} />}
                      onClick={handleContactClick}
                      style={{
                        border: "1px solid rgba(6,182,212,0.3)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      Get In Touch
                    </Button>
                  </motion.div>
                </Group>

                <Group gap="xl">
                  {[
                    { icon: IconCode, label: "Frontend", color: "cyan", sub: "React · TS · Next" },
                    { icon: IconDeviceMobile, label: "Mobile", color: "violet", sub: "Flutter · Dart" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + i * 0.15 }}
                      whileHover={{ y: -3 }}
                    >
                      <Group gap="xs">
                        <ThemeIcon
                          size="md"
                          variant="gradient"
                          gradient={item.color === "cyan" ? { from: "cyan", to: "blue" } : { from: "violet", to: "indigo" }}
                          radius="xl"
                          style={{ boxShadow: `0 4px 16px rgba(6,182,212,0.25)` }}
                        >
                          <item.icon size={14} />
                        </ThemeIcon>
                        <div>
                          <Text size="sm" fw={600}>{item.label}</Text>
                          <Text size="xs" c="dimmed">{item.sub}</Text>
                        </div>
                      </Group>
                    </motion.div>
                  ))}
                </Group>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ position: "relative", padding: "2rem 3rem" }}
              >
                <FloatingElement delay={0.5}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: "420px",
                      margin: "0 auto",
                    }}
                  >
                    {/* Animated border */}
                    <motion.div
                      style={{
                        position: "absolute",
                        inset: -5,
                        borderRadius: "26px",
                        backgroundSize: "300% 300%",
                        background:
                          "linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)",
                      }}
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    />

                    <div
                      style={{
                        position: "relative",
                        background: "#0D1117",
                        borderRadius: "22px",
                        padding: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          aspectRatio: "4 / 3",
                          borderRadius: "16px",
                          background:
                            "radial-gradient(ellipse at 40% 35%, rgba(6,182,212,0.06) 0%, #0D1117 65%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        {/* Grid texture */}
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage:
                              "linear-gradient(rgba(6,182,212,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.035) 1px, transparent 1px)",
                            backgroundSize: "28px 28px",
                          }}
                        />

                        {/* Outer spinning ring */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                          style={{
                            position: "absolute",
                            width: "65%",
                            height: "88%",
                            borderRadius: "50%",
                            border: "1.5px dashed rgba(6,182,212,0.18)",
                          }}
                        />
                        {/* Inner counter ring */}
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                          style={{
                            position: "absolute",
                            width: "46%",
                            height: "63%",
                            borderRadius: "50%",
                            border: "1.5px dashed rgba(139,92,246,0.16)",
                          }}
                        />
                        {/* Pulse ring */}
                        <motion.div
                          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          style={{
                            position: "absolute",
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            border: "1px solid rgba(6,182,212,0.4)",
                          }}
                        />

                        {/* Central initials */}
                        <div
                          style={{
                            position: "relative",
                            width: "148px",
                            height: "148px",
                            borderRadius: "50%",
                            background:
                              "linear-gradient(145deg, rgba(6,182,212,0.1) 0%, rgba(139,92,246,0.08) 100%)",
                            border: "1.5px solid rgba(6,182,212,0.4)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow:
                              "0 0 60px rgba(6,182,212,0.18), inset 0 0 30px rgba(6,182,212,0.05)",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "2.6rem",
                              fontWeight: 900,
                              letterSpacing: "0.04em",
                              background: "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                              lineHeight: 1,
                            }}
                          >
                            NA
                          </span>
                          <span
                            style={{
                              fontSize: "0.52rem",
                              color: "rgba(6,182,212,0.55)",
                              letterSpacing: "0.16em",
                              marginTop: "6px",
                              textTransform: "uppercase",
                            }}
                          >
                            Dev · Mobile
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stat cards */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0, duration: 0.6 }}
                      style={{ position: "absolute", top: "8%", left: "-22%" }}
                      whileHover={{ scale: 1.08, y: -4 }}
                    >
                      <Card
                        padding="md"
                        radius="lg"
                        style={{
                          background: "rgba(13,17,23,0.96)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(6,182,212,0.3)",
                          boxShadow: "0 8px 40px rgba(6,182,212,0.22)",
                        }}
                      >
                        <Group gap="xs" align="flex-start">
                          <IconAward color="#06b6d4" size={22} style={{ marginTop: 2 }} />
                          <div>
                            <Text size="xs" c="dimmed" mb={4}>Experience</Text>
                            <Group gap="xs">
                              <IconCode size={12} color="#06b6d4" />
                              <Text size="xs" fw={700} c="cyan">2yr Web</Text>
                            </Group>
                            <Group gap="xs">
                              <IconDeviceMobile size={12} color="#06b6d4" />
                              <Text size="xs" fw={700} c="cyan">3yr Mobile</Text>
                            </Group>
                          </div>
                        </Group>
                      </Card>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                      style={{ position: "absolute", bottom: "14%", right: "-22%" }}
                      whileHover={{ scale: 1.08, y: -4 }}
                    >
                      <Card
                        padding="md"
                        radius="lg"
                        style={{
                          background: "rgba(13,17,23,0.96)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(139,92,246,0.35)",
                          boxShadow: "0 8px 40px rgba(139,92,246,0.22)",
                        }}
                      >
                        <Group gap="xs">
                          <IconRocket color="#8b5cf6" size={22} />
                          <div>
                            <Text size="xs" c="dimmed">Projects</Text>
                            <Text fw={800} c="violet" size="md">{projects.length}+ Done</Text>
                          </div>
                        </Group>
                      </Card>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4, duration: 0.6 }}
                      style={{ position: "absolute", bottom: "-6%", left: "18%" }}
                      whileHover={{ scale: 1.08, y: -4 }}
                    >
                      <Card
                        padding="md"
                        radius="lg"
                        style={{
                          background: "rgba(13,17,23,0.96)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(20,184,166,0.3)",
                          boxShadow: "0 8px 40px rgba(20,184,166,0.2)",
                        }}
                      >
                        <Group gap="xs">
                          <IconCode color="#14b8a6" size={22} />
                          <div>
                            <Text size="xs" c="dimmed">Technologies</Text>
                            <Text fw={800} c="teal" size="md">{skills.length}+</Text>
                          </div>
                        </Group>
                      </Card>
                    </motion.div>
                  </div>
                </FloatingElement>
              </motion.div>
            </Grid.Col>
          </Grid>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            style={{ textAlign: "center", marginTop: "4rem" }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <IconArrowDown size={32} color="#06b6d4" style={{ filter: "drop-shadow(0 0 8px rgba(6,182,212,0.5))" }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
