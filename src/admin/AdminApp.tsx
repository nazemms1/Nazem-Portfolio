import { useEffect, useState } from "react";
import {
  Alert,
  AppShell,
  Badge,
  Box,
  Burger,
  Button,
  Group,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import {
  IconAlertTriangle,
  IconArrowUpRight,
  IconCloudCheck,
  IconLogout,
} from "@tabler/icons-react";
import type { User } from "firebase/auth";
import { usePortfolioStore } from "../store/PortfolioProvider";
import { logoutAdmin, subscribeToAuthState } from "./auth";
import { Gate } from "./components/Gate";
import { NavItem } from "./components/NavItem";
import { navGroups, routeTitles } from "./constants";
import CaseStudiesPanel from "./panels/CaseStudiesPanel";
import ContactPanel from "./panels/ContactPanel";
import DataPanel from "./panels/DataPanel";
import ExperiencesPanel from "./panels/ExperiencesPanel";
import OverviewPanel from "./panels/OverviewPanel";
import ProjectsPanel from "./panels/ProjectsPanel";
import RecommendationsPanel from "./panels/RecommendationsPanel";
import SkillsPanel from "./panels/SkillsPanel";
import { AD, AD_FONT } from "./tokens";
import type { RouteKey } from "./types";

export type { RouteKey };

export default function AdminApp() {
  const [user, setUser] = useState<User | null>(null);
  const [authInitializing, setAuthInitializing] = useState(true);
  const [route, setRoute] = useState<RouteKey>("overview");
  const [mobileOpened, { toggle: toggleMobile, close: closeMobile }] =
    useDisclosure(false);
  const { isFirebaseSynced, lastError, content } = usePortfolioStore();

  useEffect(() => {
    const unsub = subscribeToAuthState((currentUser) => {
      setUser(currentUser);
      setAuthInitializing(false);
    });
    return () => unsub();
  }, []);

  if (authInitializing) {
    return (
      <Box
        style={{
          minHeight: "100vh",
          background: AD.bg,
          display: "grid",
          placeItems: "center",
        }}
      >
        <Text size="sm" c={AD.textMuted}>
          Connecting to System...
        </Text>
      </Box>
    );
  }

  if (!user) return <Gate />;

  const counts: Partial<Record<RouteKey, number>> = {
    projects: content.projects.length,
    "case-studies": content.caseStudies.length,
    experience: content.experiences.length,
    skills: content.skills.length,
    recommendations: content.recommendations.length,
  };

  const go = (next: RouteKey) => {
    setRoute(next);
    closeMobile();
    window.scrollTo({ top: 0 });
  };

  const panels: Record<RouteKey, JSX.Element> = {
    overview: <OverviewPanel onNavigate={go} />,
    projects: <ProjectsPanel />,
    "case-studies": <CaseStudiesPanel />,
    experience: <ExperiencesPanel />,
    skills: <SkillsPanel />,
    recommendations: <RecommendationsPanel />,
    contact: <ContactPanel />,
    data: <DataPanel />,
  };

  return (
    <AppShell
      header={{ height: AD.headerHeight }}
      navbar={{
        width: AD.navWidth,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened },
      }}
      padding={0}
      styles={{
        main: { background: AD.bg, minHeight: "100vh" },
        header: { background: AD.surface, borderColor: AD.border },
        navbar: { background: AD.surface, borderColor: AD.border },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px={20} justify="space-between" wrap="nowrap">
          <Group gap={12} wrap="nowrap">
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
              color={AD.textSoft}
            />
            <Text fw={700} c={AD.text} style={{ letterSpacing: "-0.02em" }}>
              {routeTitles[route]}
            </Text>
            <Badge
              size="sm"
              variant="light"
              color={isFirebaseSynced ? "teal" : "orange"}
              style={{ textTransform: "none" }}
            >
              {isFirebaseSynced ? "Live Synced" : "Local / Offline"}
            </Badge>
          </Group>

          <Group gap={8} wrap="nowrap">
            <Tooltip label="Open the public site" withArrow>
              <Button
                size="xs"
                variant="subtle"
                color="gray"
                component="a"
                href="#/"
                rightSection={<IconArrowUpRight size={14} />}
                visibleFrom="xs"
              >
                View site
              </Button>
            </Tooltip>
            <Button
              size="xs"
              variant="light"
              color="teal"
              leftSection={<IconCloudCheck size={14} />}
              onClick={() => go("data")}
            >
              System Status
            </Button>
            <Tooltip label={`Sign out (${user.email})`} withArrow>
              <Button
                size="xs"
                variant="subtle"
                color="red"
                px={9}
                onClick={async () => {
                  await logoutAdmin();
                  notifications.show({ color: "blue", message: "Signed out of session." });
                }}
                aria-label="Sign out"
              >
                <IconLogout size={15} />
              </Button>
            </Tooltip>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p={14}>
        <Stack gap={22}>
          <Group gap={10} px={4} pt={4}>
            <Box
              style={{
                width: 30,
                height: 30,
                borderRadius: 9,
                background: AD.accentSoft,
                border: `1px solid ${AD.accentBorder}`,
                display: "grid",
                placeItems: "center",
              }}
            >
              <Text fw={800} size="sm" c={AD.accent} style={{ fontFamily: AD_FONT.mono }}>
                N
              </Text>
            </Box>
            <div>
              <Text size="sm" fw={700} c={AD.text} lh={1.2}>
                Portfolio CMS
              </Text>
              <Text size="xs" c={AD.textFaint} lh={1.2} style={{ maxWidth: 140 }} truncate>
                {user.email || "nazem almsouti"}
              </Text>
            </div>
          </Group>

          {navGroups.map((group) => (
            <Stack key={group.label} gap={3}>
              <Text
                size="xs"
                px={12}
                mb={4}
                style={{
                  fontFamily: AD_FONT.mono,
                  color: AD.textFaint,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "0.68rem",
                }}
              >
                {group.label}
              </Text>
              {group.items.map((item) => (
                <NavItem
                  key={item.key}
                  active={route === item.key}
                  label={item.label}
                  icon={item.icon}
                  badge={counts[item.key]}
                  onClick={() => go(item.key)}
                />
              ))}
            </Stack>
          ))}
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <Box
          px={{ base: 18, sm: 32, md: 40 }}
          py={{ base: 22, sm: 30 }}
          style={{ maxWidth: 1440, margin: "0 auto" }}
        >
          {lastError && (
            <Alert
              icon={<IconAlertTriangle size={16} />}
              color="red"
              variant="light"
              mb="lg"
            >
              {lastError}
            </Alert>
          )}

          {panels[route]}

          <Text
            size="xs"
            c={AD.textFaint}
            mt={56}
            style={{ fontFamily: AD_FONT.mono }}
          >
            Last edit {new Date(content.updatedAt).toLocaleString()}
          </Text>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
