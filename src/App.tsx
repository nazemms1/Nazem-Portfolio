import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "./theme";

import ParticleBackground from "./components/ParticleBackground";
import Navigation from "./components/Navigation";
import RecommendationsSection from "./components/RecommendationCard";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications />
      <div
        style={{
          minHeight: "100vh",
          background: "#0D1117",
          color: "white",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <ParticleBackground />
        <Navigation />

        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <RecommendationsSection />
        <ContactSection />
        <Footer />
      </div>
    </MantineProvider>
  );
}
