"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Group, Text, Button, Burger, Drawer, Stack, ThemeIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconCode,
  IconMail,
  IconSparkles,
} from "@tabler/icons-react";

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [opened, { open, close }] = useDisclosure(false);

  const navItems = [
    { id: "home", label: "Home", icon: IconHome },
    { id: "about", label: "About", icon: IconUser },
    { id: "skills", label: "Skills", icon: IconSparkles },
    { id: "experience", label: "Experience", icon: IconBriefcase },
    { id: "projects", label: "Projects", icon: IconCode },
    { id: "contact", label: "Contact", icon: IconMail },
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
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    close();
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: isScrolled ? "rgba(13, 17, 23, 0.95)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(6, 182, 212, 0.2)"
            : "none",
          transition: "all 0.3s ease",
          padding: "1rem 0",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <Group justify="space-between" align="center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ cursor: "pointer" }}
              onClick={() => scrollToSection("home")}
            >
              <Group gap="xs">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <ThemeIcon
                    size={35}
                    radius="xl"
                    variant="gradient"
                    gradient={{ from: "cyan", to: "blue" }}
                  >
                    <IconCode size={20} />
                  </ThemeIcon>
                </motion.div>
                <Text
                  size="lg"
                  fw={700}
                  variant="gradient"
                  gradient={{ from: "cyan", to: "blue", deg: 45 }}
                >
                  NAZEM.MSOUTI
                </Text>
              </Group>
            </motion.div>

            <Group gap="xs" visibleFrom="md">
              {navItems.slice(1).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={activeSection === item.id ? "gradient" : "subtle"}
                    gradient={
                      activeSection === item.id
                        ? { from: "cyan", to: "blue" }
                        : undefined
                    }
                    color={activeSection === item.id ? undefined : "gray"}
                    size="sm"
                    radius="xl"
                    onClick={() => scrollToSection(item.id)}
                    leftSection={<item.icon size={16} />}
                    style={{
                      boxShadow:
                        activeSection === item.id
                          ? "0 4px 20px rgba(6, 182, 212, 0.3)"
                          : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </Group>

            <Burger
              opened={opened}
              onClick={open}
              color="#06b6d4"
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
            background: "rgba(13, 17, 23, 0.98)",
            backdropFilter: "blur(20px)",
          },
          header: {
            background: "transparent",
          },
          close: {
            color: "#06b6d4",
          },
        }}
      >
        <Stack gap="md" p="md">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Text
              size="lg"
              fw={700}
              variant="gradient"
              gradient={{ from: "cyan", to: "blue" }}
              mb="xl"
            >
              NAZEM.MSOUTI
            </Text>
          </motion.div>

          <AnimatePresence>
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <Button
                  variant={activeSection === item.id ? "gradient" : "subtle"}
                  gradient={
                    activeSection === item.id
                      ? { from: "cyan", to: "blue" }
                      : undefined
                  }
                  color={activeSection === item.id ? undefined : "gray"}
                  fullWidth
                  size="lg"
                  radius="xl"
                  onClick={() => scrollToSection(item.id)}
                  leftSection={<item.icon size={20} />}
                  style={{
                    justifyContent: "flex-start",
                    paddingLeft: "1.5rem",
                    boxShadow:
                      activeSection === item.id
                        ? "0 4px 20px rgba(6, 182, 212, 0.3)"
                        : "none",
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
