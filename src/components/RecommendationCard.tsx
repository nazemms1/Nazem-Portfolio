import { useState, useRef } from "react";
import { Container, Title, Text, Box, Anchor } from "@mantine/core";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { recommendations } from "../data/portfolioData";
import {
  IconChevronLeft,
  IconChevronRight,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export function RecommendationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };

  const prev = () =>
    go((current - 1 + recommendations.length) % recommendations.length);
  const next = () => go((current + 1) % recommendations.length);

  const rec = recommendations[current];

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  return (
    <Box
      id="recommendations"
      ref={ref}
      style={{
        padding: "8rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <Title
            order={2}
            style={{
              textAlign: "center",
              marginBottom: "0.75rem",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              background:
                "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Recommendations
          </Title>
          <Text
            style={{
              textAlign: "center",
              color: "#8B949E",
              marginBottom: "3rem",
              fontSize: "1rem",
            }}
          >
            What colleagues say about working with me
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box
            style={{
              position: "relative",
              border: "1px solid rgba(6,182,212,0.25)",
              borderRadius: "20px",
              padding: "3rem 3.5rem",
              background:
                "linear-gradient(145deg, rgba(13,17,23,0.95) 0%, rgba(21,26,35,0.95) 100%)",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(6,182,212,0.12)",
              minHeight: "320px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Large decorative quote mark */}
            <Box
              style={{
                position: "absolute",
                top: "-0.5rem",
                left: "2rem",
                fontSize: "9rem",
                lineHeight: 1,
                color: "#06b6d4",
                opacity: 0.08,
                fontFamily: "Georgia, serif",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              "
            </Box>

            <Box style={{ position: "relative", flex: 1 }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <Text
                    style={{
                      color: "#C9D1D9",
                      fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                      lineHeight: 1.9,
                      fontStyle: "italic",
                      marginBottom: "2.5rem",
                      fontWeight: 400,
                    }}
                  >
                    "{rec.message}"
                  </Text>

                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* Avatar */}
                    <Box
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, #06b6d4, #3b82f6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "white",
                        boxShadow: "0 4px 12px rgba(6,182,212,0.4)",
                      }}
                    >
                      {rec.name
                        .split(" ")
                        .slice(0, 2)
                        .map((n) => n[0])
                        .join("")}
                    </Box>

                    {/* Name / role / period */}
                    <Box>
                      <Text
                        style={{
                          color: "#C9D1D9",
                          fontWeight: 700,
                          fontSize: "1rem",
                          lineHeight: 1.3,
                        }}
                      >
                        {rec.name}
                      </Text>
                      <Text
                        style={{
                          color: "#06b6d4",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        {rec.role}
                      </Text>
                      <Text
                        style={{
                          color: "#8B949E",
                          fontSize: "0.8rem",
                          marginTop: "0.1rem",
                        }}
                      >
                        {rec.period}
                      </Text>
                      {rec.linkedin && (
                        <Anchor
                          href={rec.linkedin}
                          target="_blank"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.3rem",
                            marginTop: "0.4rem",
                            color: "#06b6d4",
                            fontSize: "0.8rem",
                            fontWeight: 500,
                            textDecoration: "none",
                          }}
                        >
                          <IconBrandLinkedin size={14} />
                          LinkedIn
                        </Anchor>
                      )}
                    </Box>

                    {/* Expertise badge */}
                    <Box style={{ marginLeft: "auto" }}>
                      <Box
                        style={{
                          backgroundColor: "rgba(6,182,212,0.1)",
                          border: "1px solid rgba(6,182,212,0.35)",
                          borderRadius: "999px",
                          padding: "0.3rem 1rem",
                          display: "inline-block",
                        }}
                      >
                        <Text
                          style={{
                            color: "#06b6d4",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {rec.expertise}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </AnimatePresence>
            </Box>
          </Box>

          {/* Navigation controls */}
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={recommendations.length <= 1}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid rgba(6,182,212,0.35)",
                backgroundColor: "rgba(6,182,212,0.1)",
                color: "#C9D1D9",
                cursor: recommendations.length <= 1 ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: recommendations.length <= 1 ? 0.3 : 1,
              }}
            >
              <IconChevronLeft size={20} />
            </motion.button>

            <Box
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              {recommendations.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => go(i)}
                  whileHover={{ scale: 1.2 }}
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "999px",
                    border: "none",
                    backgroundColor:
                      i === current ? "#06b6d4" : "rgba(139,148,158,0.4)",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </Box>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={recommendations.length <= 1}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid rgba(6,182,212,0.35)",
                backgroundColor: "rgba(6,182,212,0.1)",
                color: "#C9D1D9",
                cursor: recommendations.length <= 1 ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: recommendations.length <= 1 ? 0.3 : 1,
              }}
            >
              <IconChevronRight size={20} />
            </motion.button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default RecommendationsSection;
