import { useState, useRef } from "react";
import { Container, Title, Text, Box, Anchor } from "@mantine/core";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { recommendations } from "../data/portfolioData";
import { IconChevronLeft, IconChevronRight, IconBrandLinkedin } from "@tabler/icons-react";

const NAVY   = "#1d4ed8";
const BLUE   = "#3b82f6";
const BLUE_L = "#93c5fd";

export function RecommendationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => { setDirection(next > current ? 1 : -1); setCurrent(next); };
  const prev = () => go((current - 1 + recommendations.length) % recommendations.length);
  const next = () => go((current + 1) % recommendations.length);
  const rec = recommendations[current];

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 64 : -64 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -64 : 64 }),
  };

  return (
    <Box id="recommendations" ref={ref} style={{ padding: "8rem 0", position: "relative", overflow: "hidden" }}>
       
      <Box style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "300px", borderRadius: "50%", background: `radial-gradient(ellipse, ${NAVY}10 0%, transparent 70%)`, filter: "blur(60px)", pointerEvents: "none" }} />

      <Container size="md">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <Title order={2} style={{ textAlign: "center", marginBottom: "0.75rem", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", background: `linear-gradient(120deg, ${BLUE_L} 0%, ${BLUE} 45%, #a5b4fc 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Recommendations
          </Title>
          <Text style={{ textAlign: "center", color: "#475569", marginBottom: "3rem", fontSize: "1rem" }}>
            What colleagues say about working with me
          </Text>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
          <Box style={{ position: "relative", border: `1px solid ${BLUE}22`, borderRadius: "20px", padding: "3rem 3.5rem", background: "linear-gradient(145deg, rgba(15,23,42,0.96) 0%, rgba(18,25,40,0.96) 100%)", boxShadow: `0 20px 60px rgba(0,0,0,0.35), inset 0 1px 0 ${BLUE}10`, minHeight: "320px", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden" }}>

            {/* Decorative quote mark */}
            <Box style={{ position: "absolute", top: "-0.5rem", left: "2rem", fontSize: "9rem", lineHeight: 1, color: BLUE, opacity: 0.06, fontFamily: "Georgia, serif", userSelect: "none", pointerEvents: "none" }}>"</Box>

            <Box style={{ position: "relative", flex: 1 }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div key={current} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease: "easeInOut" }}>
                  <Text style={{ color: "#cbd5e1", fontSize: "clamp(0.95rem, 2vw, 1.05rem)", lineHeight: 1.9, fontStyle: "italic", marginBottom: "2.5rem", fontWeight: 400 }}>
                    "{rec.message}"
                  </Text>

                  <Box style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
                    {/* Avatar */}
                    <Box style={{ width: "50px", height: "50px", borderRadius: "50%", background: `linear-gradient(135deg, ${BLUE} 0%, ${NAVY} 100%)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1rem", fontWeight: 700, color: "white", boxShadow: `0 4px 12px ${NAVY}44`, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {rec.name.split(" ").slice(0, 2).map((n) => n[0]).join("")}
                    </Box>

                    <Box>
                      <Text style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "1rem", lineHeight: 1.3 }}>{rec.name}</Text>
                      <Text style={{ color: BLUE_L, fontSize: "0.875rem", fontWeight: 500 }}>{rec.role}</Text>
                      <Text style={{ color: "#475569", fontSize: "0.8rem", marginTop: "0.1rem" }}>{rec.period}</Text>
                      {rec.linkedin && (
                        <Anchor href={rec.linkedin} target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", marginTop: "0.4rem", color: BLUE_L, fontSize: "0.8rem", fontWeight: 500, textDecoration: "none" }}>
                          <IconBrandLinkedin size={13} /> LinkedIn
                        </Anchor>
                      )}
                    </Box>

                    <Box style={{ marginLeft: "auto" }}>
                      <Box style={{ background: `${NAVY}18`, border: `1px solid ${BLUE}33`, borderRadius: "999px", padding: "0.3rem 1rem", display: "inline-block" }}>
                        <Text style={{ color: BLUE_L, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap", fontFamily: "'Inter', sans-serif" }}>
                          {rec.expertise}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </AnimatePresence>
            </Box>
          </Box>

          {/* Navigation */}
          <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", marginTop: "2rem" }}>
            <motion.button onClick={prev} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }} disabled={recommendations.length <= 1}
              style={{ width: "42px", height: "42px", borderRadius: "50%", border: `1px solid ${BLUE}33`, background: `${NAVY}12`, color: "#94a3b8", cursor: recommendations.length <= 1 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: recommendations.length <= 1 ? 0.3 : 1 }}>
              <IconChevronLeft size={19} />
            </motion.button>

            <Box style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              {recommendations.map((_, i) => (
                <motion.button key={i} onClick={() => go(i)} whileHover={{ scale: 1.2 }}
                  style={{ width: i === current ? "22px" : "7px", height: "7px", borderRadius: "999px", border: "none", background: i === current ? BLUE : "rgba(100,116,139,0.4)", cursor: "pointer", padding: 0, transition: "all 0.25s ease" }} />
              ))}
            </Box>

            <motion.button onClick={next} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }} disabled={recommendations.length <= 1}
              style={{ width: "42px", height: "42px", borderRadius: "50%", border: `1px solid ${BLUE}33`, background: `${NAVY}12`, color: "#94a3b8", cursor: recommendations.length <= 1 ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: recommendations.length <= 1 ? 0.3 : 1 }}>
              <IconChevronRight size={19} />
            </motion.button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default RecommendationsSection;
