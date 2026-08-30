import type { ReactNode } from "react";
import { Group, Text } from "@mantine/core";
import { AD } from "../../tokens";

export function PanelHeader({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <Group justify="space-between" align="flex-start" wrap="wrap" gap="md" mb="xl">
      <div style={{ maxWidth: 560 }}>
        <Text
          fw={700}
          style={{ fontSize: "1.45rem", color: AD.text, letterSpacing: "-0.02em" }}
        >
          {title}
        </Text>
        <Text size="sm" c={AD.textMuted} mt={4} style={{ lineHeight: 1.6 }}>
          {description}
        </Text>
      </div>
      {action}
    </Group>
  );
}
