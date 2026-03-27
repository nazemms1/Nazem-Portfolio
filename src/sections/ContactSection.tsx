import { motion } from "framer-motion";
import {
  Container,
  Title,
  Text,
  Box,
  Badge,
  Grid,
  Card,
  Stack,
  Group,
  ThemeIcon,
  ActionIcon,
} from "@mantine/core";
import {
  IconSparkles,
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import ContactForm from "../components/ContactForm";
import { contactInfo } from "../data/portfolioData";

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: "8rem 0 4rem", position: "relative" }}>
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Box mb={60} style={{ textAlign: "center" }}>
            <Badge
              size="lg"
              variant="light"
              color="cyan"
              mb="md"
              leftSection={<IconSparkles size={16} />}
            >
              Get in Touch
            </Badge>
            <Title
              order={2}
              size="3rem"
              mb="md"
              style={{
                background:
                  "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 800,
              }}
            >
              Let's Work Together
            </Title>
            <Text c="dimmed" size="lg" maw={600} mx="auto">
              Open to new opportunities and exciting collaborations
            </Text>
          </Box>

          <Grid gutter={30}>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Stack gap="lg">
                {[
                  {
                    icon: IconMail,
                    title: "Email",
                    value: contactInfo.email,
                    href: `mailto:${contactInfo.email}`,
                    color: "cyan",
                  },
                  {
                    icon: IconPhone,
                    title: "Phone",
                    value: contactInfo.phone,
                    href: `tel:${contactInfo.phone}`,
                    color: "blue",
                  },
                  {
                    icon: IconMapPin,
                    title: "Location",
                    value: contactInfo.location,
                    href: undefined,
                    color: "violet",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ x: 10, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card
                        component={item.href ? "a" : "div"}
                        href={item.href}
                        padding="lg"
                        radius="xl"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)",
                          border: "1px solid rgba(6, 182, 212, 0.2)",
                          backdropFilter: "blur(20px)",
                          textDecoration: "none",
                          color: "inherit",
                          cursor: item.href ? "pointer" : "default",
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <ThemeIcon size={50} radius="xl" variant="light" color={item.color}>
                          <item.icon size={24} />
                        </ThemeIcon>
                        <div>
                          <Text size="sm" c="dimmed">
                            {item.title}
                          </Text>
                          <Text fw={600}>{item.value}</Text>
                        </div>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Group gap="md" mt="md">
                    {[
                      { icon: IconBrandLinkedin, href: contactInfo.linkedin, color: "blue" },
                      { icon: IconBrandGithub, href: contactInfo.github, color: "gray" },
                      { icon: IconMail, href: `mailto:${contactInfo.email}`, color: "cyan" },
                    ].map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ActionIcon
                          component="a"
                          href={social.href}
                          target="_blank"
                          size={55}
                          radius="xl"
                          variant="gradient"
                          gradient={{ from: social.color, to: "blue" }}
                          style={{ boxShadow: "0 8px 32px rgba(6, 182, 212, 0.3)" }}
                        >
                          <social.icon size={26} />
                        </ActionIcon>
                      </motion.div>
                    ))}
                  </Group>
                </motion.div>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 7 }}>
              <ContactForm />
            </Grid.Col>
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
}
