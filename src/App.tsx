import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "./theme";

import Navigation from "./components/Navigation";
import CustomCursor from "./components/CustomCursor";
import AmbientBackground from "./components/AmbientBackground";

import HeroSection from "./sections/HeroSection";
import PhilosophySection from "./sections/PhilosophySection";
import SelectedWorkSection from "./sections/SelectedWorkSection";
import MoreWorkSection from "./sections/MoreWorkSection";
import LeadershipSection from "./sections/LeadershipSection";
import RecommendationsSection from "./sections/RecommendationsSection";
import CraftSection from "./sections/CraftSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications />
      <div
        style={{
          minHeight: "100vh",
          background: "#08090b",
          color: "white",
          position: "relative",
        }}
      >
        <AmbientBackground />
        <CustomCursor />
        <Navigation />

        <div style={{ position: "relative", zIndex: 1 }}>
          <HeroSection />
          <PhilosophySection />
          <SelectedWorkSection />
          <MoreWorkSection />
          <LeadershipSection />
          <RecommendationsSection />
          <CraftSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </MantineProvider>
  );
}
