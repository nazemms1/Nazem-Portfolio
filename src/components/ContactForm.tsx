"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { TextInput, Textarea, Button, Stack, Card, Title, Text } from "@mantine/core";
import { IconSend, IconCheck } from "@tabler/icons-react";
import { COLOR, glass } from "../styles/tokens";

const BLUE   = COLOR.blue;
const BLUE_L = COLOR.blueLight;

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
      background: "rgba(255,255,255,0.04)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      border: `1px solid ${COLOR.border}`,
      borderRadius: "8px",
      color: COLOR.textPrimary,
      transition: "border-color 0.2s ease",
    },
    label: { color: COLOR.textSecondary, marginBottom: "6px", fontWeight: 500, fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" },
  };

  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }}>
        <Card padding="xl" radius="md" style={{ background: glass.panel.background, backdropFilter: glass.panel.backdropFilter, WebkitBackdropFilter: glass.panel.WebkitBackdropFilter, boxShadow: glass.panel.boxShadow, border: `1px solid ${BLUE}33`, textAlign: "center" }}>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }} style={{ display: "inline-flex" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: `${BLUE}18`, border: `1px solid ${BLUE}44`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <IconCheck size={30} color={BLUE_L} />
            </div>
          </motion.div>
          <Title order={3} mb="sm" style={{ color: COLOR.textPrimary }}>Message sent</Title>
          <Text style={{ color: COLOR.textMuted }}>Thanks for reaching out — I'll get back to you soon.</Text>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}>
      <Card padding="xl" radius="md" style={{ background: glass.panel.background, backdropFilter: glass.panel.backdropFilter, WebkitBackdropFilter: glass.panel.WebkitBackdropFilter, boxShadow: glass.panel.boxShadow, border: `1px solid ${COLOR.border}` }}>
        <form onSubmit={handleSubmit}>
          <Stack gap="lg">
            {[
              { name: "name",    label: "Name",      placeholder: "Your name",       type: "text"  },
              { name: "email",   label: "Email",     placeholder: "you@company.com", type: "email" },
              { name: "subject", label: "Subject",   placeholder: "What's this about?", type: "text" },
            ].map((field) => (
              <TextInput
                key={field.name}
                label={field.label}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name as keyof FormData]}
                onChange={handleChange}
                required
                styles={inputStyles}
              />
            ))}

            <Textarea label="Message" name="message" placeholder="Tell me about the project…" value={formData.message} onChange={handleChange} required minRows={5} styles={inputStyles} />

            <Button
              type="submit"
              size="md"
              fullWidth
              loading={isSubmitting}
              leftSection={!isSubmitting && <IconSend size={17} />}
              style={{ background: COLOR.textPrimary, color: COLOR.bg, border: "none", height: "48px" }}
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </Button>
          </Stack>
        </form>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
