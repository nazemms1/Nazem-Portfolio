import { useState } from "react";
import {
  Box,
  Button,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconShieldLock } from "@tabler/icons-react";
import { loginAdmin } from "../auth";
import { AD } from "../tokens";

export function Gate() {
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
