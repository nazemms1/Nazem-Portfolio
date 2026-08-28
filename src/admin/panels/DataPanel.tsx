import { useRef, useState } from "react";
import {
  Alert,
  Badge,
  Box,
  Button,
  Code,
  Group,
  PasswordInput,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  IconAlertTriangle,
  IconCopy,
  IconDownload,
  IconKey,
  IconRotate,
  IconUpload,
} from "@tabler/icons-react";
import { usePortfolioStore } from "../../store/PortfolioProvider";
import { normalizeContent } from "../../store/content";
import { setPasscode } from "../auth";
import { PanelHeader, SectionCard } from "../ui";
import { AD, AD_FONT } from "../tokens";

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <Group gap={12} wrap="nowrap" align="flex-start">
      <Box
        style={{
          width: 22,
          height: 22,
          flexShrink: 0,
          borderRadius: 999,
          background: AD.accentSoft,
          border: `1px solid ${AD.accentBorder}`,
          display: "grid",
          placeItems: "center",
          fontFamily: AD_FONT.mono,
          fontSize: "0.72rem",
          color: AD.accent,
        }}
      >
        {n}
      </Box>
      <Text size="sm" c={AD.textSoft} style={{ lineHeight: 1.6 }}>
        {children}
      </Text>
    </Group>
  );
}

export default function DataPanel() {
  const { content, hasDraft, replaceContent, discardDraft, resetToSeed } =
    usePortfolioStore();
  const fileRef = useRef<HTMLInputElement>(null);
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const json = JSON.stringify(content, null, 2);
  const sizeKb = (new Blob([json]).size / 1024).toFixed(1);

  const download = () => {
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "portfolio.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const importFile = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        replaceContent(normalizeContent(parsed));
        notifications.show({ color: "blue", message: `Imported ${file.name}.` });
      } catch {
        notifications.show({ color: "red", message: "That file is not valid JSON." });
      }
    };
    reader.readAsText(file);
  };

  const changePasscode = async () => {
    if (newPass.length < 4) {
      notifications.show({ color: "red", message: "Use at least 4 characters." });
      return;
    }
    if (newPass !== confirmPass) {
      notifications.show({ color: "red", message: "The two entries differ." });
      return;
    }
    await setPasscode(newPass);
    setNewPass("");
    setConfirmPass("");
    notifications.show({ color: "blue", message: "Passcode updated." });
  };

  const stats = [
    { label: "Projects", value: content.projects.length },
    { label: "Case studies", value: content.caseStudies.length },
    { label: "Roles", value: content.experiences.length },
    { label: "Skills", value: content.skills.length },
    { label: "Recommendations", value: content.recommendations.length },
    { label: "File size", value: `${sizeKb} KB` },
  ];

  return (
    <>
      <PanelHeader
        title="Data & publishing"
        description="Edits are saved in this browser as you make them. Publishing means committing the exported data file to the repository."
        action={
          <Badge
            size="lg"
            variant="light"
            color={hasDraft ? "blue" : "gray"}
            style={{ textTransform: "none" }}
          >
            {hasDraft ? "Unpublished draft" : "In sync"}
          </Badge>
        }
      />

      <Stack gap="md" maw={860}>
        <SectionCard title="What you are about to publish">
          <SimpleGrid cols={{ base: 2, sm: 3, lg: 6 }} spacing="md">
            {stats.map((stat) => (
              <div key={stat.label}>
                <Text
                  style={{
                    fontFamily: AD_FONT.mono,
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: AD.text,
                  }}
                >
                  {stat.value}
                </Text>
                <Text size="xs" c={AD.textMuted}>
                  {stat.label}
                </Text>
              </div>
            ))}
          </SimpleGrid>
        </SectionCard>

        <SectionCard
          title="Publish"
          description="The site is a static build, so there is no server to save to — the JSON file is the source of truth."
        >
          <Stack gap={12} mb="lg">
            <Step n={1}>
              Download <Code>portfolio.json</Code>.
            </Step>
            <Step n={2}>
              Save it as <Code>public/portfolio.json</Code> in the repository
              (create the file the first time).
            </Step>
            <Step n={3}>
              Run <Code>npm run build</Code>, then <Code>npm run deploy</Code>.
            </Step>
          </Stack>

          <Group gap={10}>
            <Button leftSection={<IconDownload size={16} />} onClick={download}>
              Download portfolio.json
            </Button>
            <Button
              variant="light"
              leftSection={<IconCopy size={16} />}
              onClick={() =>
                navigator.clipboard.writeText(json).then(
                  () =>
                    notifications.show({
                      color: "blue",
                      message: "JSON copied to clipboard.",
                    }),
                  () =>
                    notifications.show({
                      color: "red",
                      message: "Clipboard access was blocked.",
                    })
                )
              }
            >
              Copy JSON
            </Button>
            <Button
              variant="light"
              color="gray"
              leftSection={<IconUpload size={16} />}
              onClick={() => fileRef.current?.click()}
            >
              Import a file
            </Button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json"
              hidden
              onChange={(e) => {
                importFile(e.currentTarget.files?.[0]);
                e.currentTarget.value = "";
              }}
            />
          </Group>
        </SectionCard>

        <SectionCard
          title="Dashboard passcode"
          description="Stored as a hash in this browser only. It keeps the editor closed on a shared machine — it is not server-side protection."
        >
          <Group align="flex-end" gap={10} wrap="wrap">
            <PasswordInput
              label="New passcode"
              value={newPass}
              onChange={(e) => setNewPass(e.currentTarget.value)}
              style={{ width: 220 }}
            />
            <PasswordInput
              label="Confirm"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.currentTarget.value)}
              style={{ width: 220 }}
            />
            <Button variant="light" leftSection={<IconKey size={16} />} onClick={changePasscode}>
              Update
            </Button>
          </Group>
        </SectionCard>

        <SectionCard title="Danger zone">
          <Alert
            icon={<IconAlertTriangle size={16} />}
            color="orange"
            variant="light"
            mb="md"
          >
            Both actions discard local edits. Download your JSON first if you might
            want it back.
          </Alert>
          <Group gap={10}>
            <Button
              variant="light"
              color="orange"
              leftSection={<IconRotate size={16} />}
              disabled={!hasDraft}
              onClick={() => {
                if (
                  window.confirm("Discard the local draft and reload the published data?")
                ) {
                  discardDraft();
                  notifications.show({ color: "blue", message: "Local draft discarded." });
                }
              }}
            >
              Discard local draft
            </Button>
            <Button
              variant="light"
              color="red"
              leftSection={<IconRotate size={16} />}
              onClick={() => {
                if (
                  window.confirm("Reset everything to the data shipped in the source code?")
                ) {
                  resetToSeed();
                  notifications.show({ color: "blue", message: "Reset to source data." });
                }
              }}
            >
              Reset to source data
            </Button>
          </Group>
        </SectionCard>
      </Stack>
    </>
  );
}
