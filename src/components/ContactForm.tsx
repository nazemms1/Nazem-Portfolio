"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { TextInput, Textarea, Button, Stack, Card, Title, Text, Group, ThemeIcon } from "@mantine/core";
import { IconSend, IconUser, IconMail, IconMessage, IconCheck, IconSparkles } from "@tabler/icons-react";

const NAVY   = "#1d4ed8";
const BLUE   = "#3b82f6";
const BLUE_L = "#93c5fd";

interface FormData { name: string; email: string; subject: string; message: string; }

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const mailtoLink = `mailto:nazem.msouti@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => { setIsSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }, 3000);
  };

  const inputStyles = {
    input: {
      background: `${NAVY}0a`,
      border: `1px solid ${NAVY}30`,
      borderRadius: "10px",
      color: "white",
      transition: "all 0.2s ease",
      "&:focus": { borderColor: BLUE, boxShadow: `0 0 16px ${NAVY}28` },
      "&::placeholder": { color: "rgba(255,255,255,0.3)" },
    },
    label: { color: "rgba(255,255,255,0.75)", marginBottom: "6px", fontWeight: 500, fontFamily: "'Inter', sans-serif" },
  };

  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }}>
        <Card padding="xl" radius="xl" style={{ background: `${NAVY}0d`, border: `1px solid ${BLUE}33`, textAlign: "center" }}>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }}>
            <ThemeIcon size={72} radius="xl" mb="lg" mx="auto" style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${NAVY} 100%)`, border: "none" }}>
              <IconCheck size={36} />
            </ThemeIcon>
          </motion.div>
          <Title order={3} mb="sm" style={{ color: BLUE_L }}>Message Sent!</Title>
          <Text style={{ color: "#64748b" }}>Thank you for reaching out. I'll get back to you soon!</Text>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}>
      <Card padding="xl" radius="xl" style={{ background: `${NAVY}0a`, border: `1px solid ${NAVY}30` }}>
        <Group mb="xl">
          <ThemeIcon size={48} radius="xl" style={{ background: `${BLUE}18`, border: `1px solid ${BLUE}33`, color: BLUE }}>
            <IconMessage size={24} />
          </ThemeIcon>
          <div>
            <Title order={3} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Send a Message</Title>
            <Text size="sm" style={{ color: "#64748b" }}>I'd love to hear from you</Text>
          </div>
        </Group>

        <form onSubmit={handleSubmit}>
          <Stack gap="lg">
            {[
              { name: "name",    label: "Your Name",      placeholder: "John Doe",           type: "text",  icon: IconUser     },
              { name: "email",   label: "Email Address",  placeholder: "john@example.com",   type: "email", icon: IconMail     },
              { name: "subject", label: "Subject",        placeholder: "Project Inquiry",    type: "text",  icon: IconSparkles },
            ].map((field, i) => (
              <motion.div key={field.name} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
                <TextInput
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.name as keyof FormData]}
                  onChange={handleChange}
                  required
                  leftSection={<field.icon size={17} color={BLUE} />}
                  styles={inputStyles}
                />
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.24 }} viewport={{ once: true }}>
              <Textarea label="Message" name="message" placeholder="Tell me about your project..." value={formData.message} onChange={handleChange} required minRows={5} styles={inputStyles} />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" size="lg" fullWidth loading={isSubmitting} leftSection={!isSubmitting && <IconSend size={19} />}
                  style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${NAVY} 100%)`, boxShadow: `0 6px 24px ${NAVY}44`, border: "none", height: "48px", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
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
