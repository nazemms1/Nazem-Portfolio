import { useRef } from "react";
import {
  Badge,
  Box,
  Button,
  Group,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  IconCloudCheck,
  IconCloudUpload,
  IconCopy,
  IconDownload,
  IconUpload,
} from "@tabler/icons-react";
import { usePortfolioStore } from "../../store/PortfolioProvider";
import { normalizeContent } from "../../store/content";
import { getCurrentAdmin } from "../auth";
import { PanelHeader, SectionCard } from "../ui";
import { AD, AD_FONT } from "../tokens";

export default function DataPanel() {
  const { content, isFirebaseSynced, replaceContent } = usePortfolioStore();
  const fileRef = useRef<HTMLInputElement>(null);
  const currentAdmin = getCurrentAdmin();

  const json = JSON.stringify(content, null, 2);
  const sizeKb = (new Blob([json]).size / 1024).toFixed(1);

  const syncToCloud = async () => {
    try {
      await replaceContent(content);
      notifications.show({
        color: "teal",
        message: "Successfully pushed data to cloud storage!",
      });
    } catch {
      notifications.show({
        color: "red",
        message: "Failed to push to cloud storage.",
      });
    }
  };

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

  const importFile = async (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        await replaceContent(normalizeContent(parsed));
        notifications.show({
          color: "teal",
          message: `Imported ${file.name} and synced with cloud database.`,
        });
      } catch {
        notifications.show({
          color: "red",
          message: "That file is not valid JSON.",
        });
      }
    };
    reader.readAsText(file);
  };

  const stats = [
    { label: "Projects", value: content.projects.length },
    { label: "Case studies", value: content.caseStudies.length },
    { label: "Roles", value: content.experiences.length },
    { label: "Skills", value: content.skills.length },
    { label: "Recommendations", value: content.recommendations.length },
    { label: "Data size", value: `${sizeKb} KB` },
  ];

  return (
    <>
      <PanelHeader
        title="Data & System Sync"
        description="Your portfolio changes are automatically synchronized in real-time with the cloud database."
        action={
          <Badge
            size="lg"
            variant="light"
            color={isFirebaseSynced ? "teal" : "orange"}
            style={{ textTransform: "none" }}
          >
            {isFirebaseSynced ? "Live Synced" : "Local Draft"}
          </Badge>
        }
      />

      <Stack gap="md" maw={860}>
        <SectionCard title="Portfolio Data Summary">
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
          title="Cloud Realtime Sync"
          description="Edits made in the CMS are immediately reflected across the website in real-time."
        >
          <Group gap={10}>
            <Button
              color="teal"
              leftSection={<IconCloudUpload size={16} />}
              onClick={syncToCloud}
            >
              Push Current Data to Cloud
            </Button>
            <Button
              variant="light"
              leftSection={<IconDownload size={16} />}
              onClick={download}
            >
              Export portfolio.json
            </Button>
            <Button
              variant="light"
              leftSection={<IconCopy size={16} />}
              onClick={() =>
                navigator.clipboard.writeText(json).then(
                  () =>
                    notifications.show({
                      color: "teal",
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
              Import JSON File
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
          title="Admin Account Session"
          description="Authenticated admin user controlling the system."
        >
          <Group gap={12} align="center">
            <Box
              style={{
                padding: "10px 16px",
                borderRadius: 8,
                background: AD.accentSoft,
                border: `1px solid ${AD.accentBorder}`,
              }}
            >
              <Text size="xs" c={AD.textMuted}>
                Logged in as:
              </Text>
              <Text fw={600} c={AD.text} style={{ fontFamily: AD_FONT.mono }}>
                {currentAdmin?.email || "Unknown user"}
              </Text>
            </Box>
            <Badge size="md" color="teal" variant="light" leftSection={<IconCloudCheck size={12} />}>
              Session Active
            </Badge>
          </Group>
        </SectionCard>
      </Stack>
    </>
  );
}
