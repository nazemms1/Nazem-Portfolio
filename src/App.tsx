import { useEffect, useState } from "react";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "./theme";

import { PortfolioProvider } from "./store/PortfolioProvider";
import AdminApp from "./admin/AdminApp";

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

// Hash routing keeps the dashboard reachable on static hosting (GitHub Pages
// has no rewrite rules, so /admin as a real path would 404 on refresh).
function useIsAdminRoute() {
  const read = () => window.location.hash.replace(/^#/, "").startsWith("/admin");
  const [isAdmin, setIsAdmin] = useState(read);

  useEffect(() => {
    const onChange = () => setIsAdmin(read());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return isAdmin;
}

function SiteApp() {
  return (
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
  );
}

export default function App() {
  const isAdmin = useIsAdminRoute();

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications />
      <PortfolioProvider>{isAdmin ? <AdminApp /> : <SiteApp />}</PortfolioProvider>
    </MantineProvider>
  );
}
