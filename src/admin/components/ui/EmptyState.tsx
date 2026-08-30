import type { ReactNode } from "react";
import { Stack, Text } from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";
import { AD, cardStyle } from "../../tokens";

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <Stack align="center" gap={10} py={56} style={{ ...cardStyle, borderStyle: "dashed" }}>
      <IconPhoto size={26} color={AD.textFaint} />
      <Text fw={600} c={AD.textSoft}>
        {title}
      </Text>
      <Text size="sm" c={AD.textMuted} ta="center" maw={380}>
        {description}
      </Text>
      {action}
    </Stack>
  );
}
