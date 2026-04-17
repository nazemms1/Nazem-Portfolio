"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Group, Text, Button, Burger, Drawer, Stack, ThemeIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconHome, IconUser, IconBriefcase, IconCode,
  IconMail, IconSparkles, IconStar,
} from "@tabler/icons-react";

const NAVY = "#1d4ed8";
const BLUE = "#3b82f6";
const BLUE_L = "#93c5fd";

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [opened, { open, close }] = useDisclosure(false);

  const navItems = [
    { id: "home",            label: "Home",            icon: IconHome },
    { id: "about",           label: "About",           icon: IconUser },
    { id: "skills",          label: "Skills",          icon: IconSparkles },
    { id: "experience",      label: "Experience",      icon: IconBriefcase },
    { id: "projects",        label: "Projects",        icon: IconCode },
    { id: "recommendations", label: "Recommendations", icon: IconStar },
    { id: "contact",         label: "Contact",         icon: IconMail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
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
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          background: isScrolled ? "rgba(9,9,11,0.95)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled ? `1px solid ${NAVY}30` : "none",
          transition: "all 0.3s ease",
          padding: "1rem 0",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <Group justify="space-between" align="center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} style={{ cursor: "pointer" }} onClick={() => scrollToSection("home")}>
              <Group gap="xs">
                <ThemeIcon size={34} radius="xl" style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${NAVY} 100%)`, border: "none" }}>
                  <IconCode size={18} />
                </ThemeIcon>
                <Text size="lg" fw={700} style={{ background: `linear-gradient(120deg, ${BLUE_L} 0%, ${BLUE} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  NAZEM.MSOUTI
                </Text>
              </Group>
            </motion.div>

            <Group gap="xs" visibleFrom="md">
              {navItems.slice(1).map((item, index) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Button
                    size="sm"
                    radius="xl"
                    onClick={() => scrollToSection(item.id)}
                    leftSection={<item.icon size={15} />}
                    style={activeSection === item.id ? {
                      background: `linear-gradient(135deg, ${BLUE} 0%, ${NAVY} 100%)`,
                      color: "white",
                      boxShadow: `0 4px 16px ${NAVY}44`,
                      border: "none",
                    } : {
                      background: "transparent",
                      color: "#64748b",
                      border: "none",
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </Group>

            <Burger opened={opened} onClick={open} color={BLUE} size="sm" hiddenFrom="md" />
          </Group>
        </div>
      </motion.nav>

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="xs"
        styles={{
          content: { background: "rgba(9,9,11,0.98)", backdropFilter: "blur(20px)" },
          header: { background: "transparent" },
          close: { color: BLUE },
        }}
      >
        <Stack gap="md" p="md">
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Text size="lg" fw={700} mb="xl" style={{ background: `linear-gradient(120deg, ${BLUE_L} 0%, ${BLUE} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              NAZEM.MSOUTI
            </Text>
          </motion.div>

          <AnimatePresence>
            {navItems.map((item, index) => (
              <motion.div key={item.id} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ delay: index * 0.07 }} whileHover={{ x: 8 }}>
                <Button
                  fullWidth size="lg" radius="xl"
                  onClick={() => scrollToSection(item.id)}
                  leftSection={<item.icon size={20} />}
                  style={activeSection === item.id ? {
                    background: `linear-gradient(135deg, ${BLUE} 0%, ${NAVY} 100%)`,
                    color: "white",
                    justifyContent: "flex-start",
                    paddingLeft: "1.5rem",
                    boxShadow: `0 4px 16px ${NAVY}44`,
                    border: "none",
                  } : {
                    background: "transparent",
                    color: "#64748b",
                    justifyContent: "flex-start",
                    paddingLeft: "1.5rem",
                    border: "none",
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
