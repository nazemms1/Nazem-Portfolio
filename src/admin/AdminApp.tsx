import { useEffect, useState } from "react";
import {
  Alert,
  AppShell,
  Badge,
  Box,
  Burger,
  Button,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import {
  IconAlertTriangle,
  IconArrowUpRight,
  IconBriefcase,
  IconCloudCheck,
  IconDatabase,
  IconLayoutDashboard,
  IconLogout,
  IconMessage2,
  IconShieldLock,
  IconStack2,
  IconStar,
  IconTools,
  IconUser,
} from "@tabler/icons-react";
import type { User } from "firebase/auth";
import { usePortfolioStore } from "../store/PortfolioProvider";
import {
  loginAdmin,
  logoutAdmin,
  subscribeToAuthState,
} from "./auth";
import OverviewPanel from "./panels/OverviewPanel";
import ProjectsPanel from "./panels/ProjectsPanel";
import CaseStudiesPanel from "./panels/CaseStudiesPanel";
import ExperiencesPanel from "./panels/ExperiencesPanel";
import SkillsPanel from "./panels/SkillsPanel";
import RecommendationsPanel from "./panels/RecommendationsPanel";
import ContactPanel from "./panels/ContactPanel";
import DataPanel from "./panels/DataPanel";
import { AD, AD_FONT } from "./tokens";

export type RouteKey =
  | "overview"
  | "projects"
  | "case-studies"
  | "experience"
  | "skills"
  | "recommendations"
  | "contact"
  | "data";

const navGroups: {
  label: string;
  items: {
    key: RouteKey;
    label: string;
    icon: typeof IconStack2;
  }[];
}[] = [
  {
    label: "Workspace",
    items: [{ key: "overview", label: "Overview", icon: IconLayoutDashboard }],
  },
  {
    label: "Content",
    items: [
      { key: "projects", label: "Projects", icon: IconStack2 },
      { key: "case-studies", label: "Selected work", icon: IconStar },
      { key: "experience", label: "Experience", icon: IconBriefcase },
      { key: "skills", label: "Skills", icon: IconTools },
      { key: "recommendations", label: "Recommendations", icon: IconMessage2 },
    ],
  },
  {
    label: "Settings",
    items: [
      { key: "contact", label: "Contact details", icon: IconUser },
      { key: "data", label: "Data & publishing", icon: IconDatabase },
    ],
  },
];

const routeTitles: Record<RouteKey, string> = {
  overview: "Overview",
  projects: "Projects",
  "case-studies": "Selected work",
  experience: "Experience",
  skills: "Skills",
  recommendations: "Recommendations",
  contact: "Contact details",
  data: "Data & publishing",
};

/* ── Firebase Auth Gate ────────────────────────────────────────── */

function Gate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!email.trim() || !password.trim()) {
      notifications.show({ color: "red", message: "Please enter email and password." });
      return;
    }

    setBusy(true);
    try {
      await loginAdmin(email.trim(), password);
      notifications.show({ color: "blue", message: "Logged in successfully." });
    } catch (err: any) {
      console.error("Auth error:", err);
      const msg = err?.message || "Authentication failed. Check your email and password.";
      notifications.show({ color: "red", message: msg, autoClose: 6000 });
    } finally {
      setBusy(false);
    }
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        background: AD.bg,
        display: "grid",
        placeItems: "center",
        padding: 24,
      }}
    >
      <Box
        style={{
          width: "100%",
          maxWidth: 420,
          background: AD.surface,
          border: `1px solid ${AD.border}`,
          borderRadius: 18,
          padding: 32,
        }}
      >
        <form onSubmit={submit}>
          <Stack gap="lg">
            <Group gap={12}>
              <Box
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 11,
                  background: AD.accentSoft,
                  border: `1px solid ${AD.accentBorder}`,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <IconShieldLock size={20} color={AD.accent} />
              </Box>
              <div>
                <Text fw={700} c={AD.text} style={{ fontSize: "1.15rem" }}>
                  Portfolio Dashboard
                </Text>
                <Text size="xs" c={AD.textMuted}>
                  Sign in with your admin account.
                </Text>
              </div>
            </Group>

            <TextInput
              label="Email"
              placeholder="admin@example.com"
              type="email"
              required
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />

            <PasswordInput
              label="Password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />

            <Button fullWidth loading={busy} type="submit">
              Sign In
            </Button>

            <Group justify="flex-end" align="center">
              <Button variant="subtle" color="gray" size="xs" component="a" href="#/">
                Back to site
              </Button>
            </Group>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

/* ── navigation item ──────────────────────────────────────────── */

function NavItem({
  active,
  label,
  icon: Icon,
  badge,
  onClick,
}: {
  active: boolean;
  label: string;
  icon: typeof IconStack2;
  badge?: number;
  onClick: () => void;
}) {
  const [hover, setHover] = useState(false);

  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        cursor: "pointer",
        textAlign: "left",
        border: "none",
        borderRadius: 9,
        padding: "9px 12px",
        fontSize: "0.88rem",
        fontFamily: AD_FONT.sans,
        fontWeight: active ? 600 : 500,
        color: active ? AD.text : hover ? AD.textSoft : AD.textMuted,
        background: active ? AD.accentSoft : hover ? AD.surfaceHover : "transparent",
        boxShadow: active ? `inset 2px 0 0 ${AD.accent}` : "none",
        transition: "background 0.15s ease, color 0.15s ease",
      }}
    >
      <Icon size={17} color={active ? AD.accent : "currentColor"} />
      <span style={{ flex: 1 }}>{label}</span>
      {badge !== undefined && (
        <span
          style={{
            fontFamily: AD_FONT.mono,
            fontSize: "0.72rem",
            color: AD.textFaint,
          }}
        >
          {badge}
        </span>
      )}
    </Box>
  );
}

/* ── shell ────────────────────────────────────────────────────── */

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
          px={{ base: 18, sm: 32 }}
          py={{ base: 22, sm: 30 }}
          style={{ maxWidth: 1120, margin: "0 auto" }}
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
