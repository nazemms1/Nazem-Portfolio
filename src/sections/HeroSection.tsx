import { motion } from "framer-motion";
import { Container, Title, Text, Grid, Badge, Group } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import Magnetic from "../components/Magnetic";
import TerminalPanel from "../components/TerminalPanel";
import CountUp from "../components/CountUp";
import { contactInfo } from "../data/portfolioData";
import cvFile from "../assets/files/Nazem_Almsouti_CV.pdf";
import { COLOR, FONT, EASE, gradientText, glass } from "../styles/tokens";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: EASE },
});

export default function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Nazem_Almsouti_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 90, position: "relative", zIndex: 1 }}>
      {/* Ambient mesh glow */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <motion.div
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: 620,
            height: 620,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${COLOR.navy}1c 0%, transparent 68%)`,
            filter: "blur(90px)",
          }}
        />
        <motion.div
          animate={{ opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-8%",
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${COLOR.indigo}14 0%, transparent 68%)`,
            filter: "blur(90px)",
          }}
        />
        {/* faint grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${COLOR.border}22 1px, transparent 1px), linear-gradient(90deg, ${COLOR.border}22 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
          }}
        />
      </div>

      <Container size={1280} px={{ base: 24, sm: 48, lg: 72 }} style={{ position: "relative" }}>
        <Grid align="center" gutter={60}>
          <Grid.Col span={{ base: 12, lg: 7 }}>
            <motion.div {...fadeUp(0)}>
              <Badge
                size="md"
                variant="outline"
                mb="xl"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  color: COLOR.blueLight,
                  background: glass.card.background,
                  backdropFilter: glass.card.backdropFilter,
                  WebkitBackdropFilter: glass.card.WebkitBackdropFilter,
                  boxShadow: glass.card.boxShadow,
                  fontFamily: FONT.mono,
                }}
              >
                Available for select projects
              </Badge>
            </motion.div>

            <motion.div {...fadeUp(0.1)}>
              <Title
                order={1}
                mb="xl"
                style={{
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.12,
                  color: COLOR.textPrimary,
                  fontSize: "clamp(2.6rem, 5.6vw, 4.6rem)",
                }}
              >
                Nazem Almsouti
                <br />
                <span style={gradientText}>Frontend Engineer.</span>
              </Title>
            </motion.div>

            <motion.div {...fadeUp(0.22)}>
              <Text mb={40} maw={520} style={{ color: COLOR.textSecondary, lineHeight: 1.85, fontSize: "1.1rem" }}>
                Pharaon Group · React & TypeScript
              </Text>
            </motion.div>

            <motion.div {...fadeUp(0.34)}>
              <Group gap="md" mb={56}>
                <Magnetic>
                  <button
                    onClick={handleDownloadCV}
                    style={{
                      padding: "14px 28px",
                      borderRadius: 8,
                      border: "none",
                      background: COLOR.textPrimary,
                      color: COLOR.bg,
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      cursor: "pointer",
                      fontFamily: FONT.sans,
                    }}
                  >
                    Download CV
                  </button>
                </Magnetic>
                <Magnetic>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    style={{
                      padding: "14px 28px",
                      borderRadius: 8,
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: glass.card.background,
                      backdropFilter: glass.card.backdropFilter,
                      WebkitBackdropFilter: glass.card.WebkitBackdropFilter,
                      boxShadow: glass.card.boxShadow,
                      color: COLOR.textSecondary,
                      fontWeight: 500,
                      fontSize: "0.95rem",
                      textDecoration: "none",
                      display: "inline-block",
                      fontFamily: FONT.sans,
                    }}
                  >
                    Get in touch
                  </a>
                </Magnetic>
              </Group>
            </motion.div>

            <motion.div {...fadeUp(0.46)}>
              <Group
                gap={48}
                style={{
                  background: glass.card.background,
                  backdropFilter: glass.card.backdropFilter,
                  WebkitBackdropFilter: glass.card.WebkitBackdropFilter,
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: glass.card.boxShadow,
                  borderRadius: 16,
                  padding: "1.4rem 1.8rem",
                }}
              >
                {[
                  { value: 4, suffix: "+", label: "Years shipping production code" },
                  { value: 15, suffix: "+", label: "Platforms shipped to production" },
                  { value: 3, suffix: "", label: "Teams led on client delivery" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <Text
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: 800,
                        color: COLOR.textPrimary,
                        fontFamily: FONT.mono,
                      }}
                    >
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </Text>
                    <Text size="sm" style={{ color: COLOR.textMuted, maxWidth: 140 }}>
                      {stat.label}
                    </Text>
                  </div>
                ))}
              </Group>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <TerminalPanel />
            </motion.div>
          </Grid.Col>
        </Grid>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{ textAlign: "center", marginTop: "4.5rem" }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: "inline-block" }}
          >
            <IconArrowDown size={20} color={COLOR.textMuted} style={{ opacity: 0.6 }} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
