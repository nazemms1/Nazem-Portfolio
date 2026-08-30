import type { ReactNode } from "react";
import { Box, Group, Text } from "@mantine/core";
import { AD, cardStyle } from "../../tokens";

export function SectionCard({
  title,
  description,
  action,
  children,
  padding = 20,
}: {
  title?: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  padding?: number;
}) {
  return (
    <Box style={{ ...cardStyle, padding }}>
      {(title || action) && (
        <Group justify="space-between" align="flex-start" mb={description ? 4 : 16}>
          {title && (
            <Text fw={600} c={AD.text}>
              {title}
            </Text>
          )}
          {action}
        </Group>
      )}
      {description && (
        <Text size="sm" c={AD.textMuted} mb={16} style={{ lineHeight: 1.6 }}>
          {description}
        </Text>
      )}
      {children}
    </Box>
  );
}
