import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Group, Text, Button, Burger, Drawer, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { COLOR, FONT, EASE, glass } from "../styles/tokens";

const navItems = [
  { id: "home", label: "Home" },
  { id: "philosophy", label: "Philosophy" },
  { id: "work", label: "Work" },
  { id: "leadership", label: "Leadership" },
  { id: "craft", label: "Craft" },
  { id: "contact", label: "Contact" },
];

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    close();
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "1.1rem clamp(1rem, 4vw, 2.5rem) 0",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            margin: "0 auto",
            borderRadius: 999,
            background: isScrolled
              ? glass.nav.background
              : "rgba(17,24,38,0.35)",
            backdropFilter: glass.nav.backdropFilter,
            WebkitBackdropFilter: glass.nav.backdropFilter,
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: isScrolled
              ? `${glass.nav.boxShadow}, 0 12px 40px rgba(0,0,0,0.35)`
              : glass.nav.boxShadow,
            padding: "0 0.6rem 0 1.3rem",
            transition: "background 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <Group justify="space-between" align="center" style={{ width: "100%" }}>
            <Text
              onClick={() => scrollToSection("home")}
              style={{
                cursor: "pointer",
                fontFamily: FONT.mono,
                fontWeight: 600,
                fontSize: "0.95rem",
                letterSpacing: "0.02em",
                color: COLOR.textPrimary,
              }}
            >
              N.A<span style={{ color: COLOR.blue }}>.</span>
            </Text>

            <Group gap={4} visibleFrom="md">
              {navItems.slice(1).map((item) => (
                <Button
                  key={item.id}
                  size="sm"
                  variant="subtle"
                  radius="xl"
                  onClick={() => scrollToSection(item.id)}
                  styles={{
                    root: {
                      color:
                        activeSection === item.id
                          ? COLOR.textPrimary
                          : COLOR.textMuted,
                      background: "transparent",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                size="sm"
                radius="xl"
                ml="sm"
                onClick={() => scrollToSection("contact")}
                style={{
                  background: COLOR.textPrimary,
                  color: COLOR.bg,
                  fontWeight: 600,
                }}
              >
                Let's Talk
              </Button>
            </Group>

            <Burger
              opened={opened}
              onClick={open}
              color={COLOR.textPrimary}
              size="sm"
              hiddenFrom="md"
            />
          </Group>
        </div>
      </motion.nav>

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="xs"
        styles={{
          content: {
            background: "rgba(8,9,11,0.7)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          },
          header: { background: "transparent" },
          close: { color: COLOR.blueLight },
        }}
      >
        <Stack gap="xs" p="md">
          <AnimatePresence>
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ delay: index * 0.06 }}
              >
                <Button
                  fullWidth
                  size="lg"
                  variant="subtle"
                  onClick={() => scrollToSection(item.id)}
                  styles={{
                    inner: { justifyContent: "flex-start" },
                    root: {
                      color:
                        activeSection === item.id
                          ? COLOR.textPrimary
                          : COLOR.textMuted,
                      fontWeight: 500,
                    },
                  }}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </Stack>
      </Drawer>
    </>
  );
};

export default Navigation;
