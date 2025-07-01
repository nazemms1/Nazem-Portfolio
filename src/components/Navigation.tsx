"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Group, Text, Button, Burger, Drawer, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [opened, { open, close }] = useDisclosure(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
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
          background: isScrolled ? "rgba(15, 23, 42, 0.95)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(148, 163, 184, 0.2)"
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
              <Text
                size="xl"
                fw={700}
                variant="gradient"
                gradient={{ from: "gray.3", to: "blue.4", deg: 45 }}
              >
                NAZEM.MSOUTI
              </Text>
            </motion.div>

            <Group gap="xs" visibleFrom="md">
              {navItems.slice(1).map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={activeSection === item.id ? "light" : "subtle"}
                    color={activeSection === item.id ? "blue" : "gray"}
                    size="sm"
                    radius="xl"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </Group>

            <Burger
              opened={opened}
              onClick={open}
              hiddenFrom="md"
              color="white"
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
            background: "rgba(15, 23, 42, 0.95)",
            backdropFilter: "blur(20px)",
          },
        }}
      >
        <Stack gap="md" p="md">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "light" : "subtle"}
              color={activeSection === item.id ? "blue" : "gray"}
              fullWidth
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </>
  );
};

export default Navigation;
