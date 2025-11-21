"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  TextInput,
  Textarea,
  Button,
  Stack,
  Card,
  Title,
  Text,
  Group,
  ThemeIcon,
} from "@mantine/core";
import {
  IconSend,
  IconUser,
  IconMail,
  IconMessage,
  IconCheck,
  IconSparkles,
} from "@tabler/icons-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Create mailto link with form data
    const mailtoLink = `mailto:nazem.msouti@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const inputStyles = {
    input: {
      background: "rgba(6, 182, 212, 0.05)",
      border: "1px solid rgba(6, 182, 212, 0.2)",
      borderRadius: "12px",
      color: "white",
      transition: "all 0.3s ease",
      "&:focus": {
        borderColor: "#06b6d4",
        boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)",
      },
      "&::placeholder": {
        color: "rgba(255, 255, 255, 0.4)",
      },
    },
    label: {
      color: "rgba(255, 255, 255, 0.8)",
      marginBottom: "8px",
      fontWeight: 500,
    },
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          padding="xl"
          radius="xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
            border: "1px solid rgba(6, 182, 212, 0.3)",
            backdropFilter: "blur(20px)",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <ThemeIcon
              size={80}
              radius="xl"
              variant="gradient"
              gradient={{ from: "cyan", to: "teal" }}
              mb="lg"
              mx="auto"
            >
              <IconCheck size={40} />
            </ThemeIcon>
          </motion.div>
          <Title order={3} mb="sm" c="cyan">
            Message Sent!
          </Title>
          <Text c="dimmed">
            Thank you for reaching out. I'll get back to you soon!
          </Text>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card
        padding="xl"
        radius="xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)",
          border: "1px solid rgba(6, 182, 212, 0.2)",
          backdropFilter: "blur(20px)",
        }}
      >
        <Group mb="xl">
          <ThemeIcon size={50} radius="xl" variant="light" color="cyan">
            <IconMessage size={26} />
          </ThemeIcon>
          <div>
            <Title order={3}>Send a Message</Title>
            <Text c="dimmed" size="sm">
              I'd love to hear from you
            </Text>
          </div>
        </Group>

        <form onSubmit={handleSubmit}>
          <Stack gap="lg">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <TextInput
                label="Your Name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                leftSection={<IconUser size={18} color="#06b6d4" />}
                styles={inputStyles}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                leftSection={<IconMail size={18} color="#06b6d4" />}
                styles={inputStyles}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <TextInput
                label="Subject"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
                leftSection={<IconSparkles size={18} color="#06b6d4" />}
                styles={inputStyles}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Textarea
                label="Message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                minRows={5}
                styles={inputStyles}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  variant="gradient"
                  gradient={{ from: "cyan", to: "blue", deg: 135 }}
                  leftSection={!isSubmitting && <IconSend size={20} />}
                  style={{
                    boxShadow: "0 8px 32px rgba(6, 182, 212, 0.4)",
                    height: "50px",
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>
            </motion.div>
          </Stack>
        </form>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
