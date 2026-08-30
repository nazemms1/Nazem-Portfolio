import type { ReactNode } from "react";
import { ActionIcon, Box, Button, Drawer, Group, Stack, Text } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { AD } from "../../tokens";

export function FormDrawer({
  opened,
  onClose,
  title,
  subtitle,
  onSubmit,
  submitLabel,
  children,
}: {
  opened: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  onSubmit: () => void;
  submitLabel: string;
  children: ReactNode;
}) {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      position="right"
      size={620}
      padding={0}
      withCloseButton={false}
      overlayProps={{ backgroundOpacity: 0.55, blur: 2 }}
      styles={{ content: { background: AD.bg }, body: { height: "100%" } }}
    >
      <Stack gap={0} style={{ height: "100%" }}>
        <Group
          justify="space-between"
          px={24}
          py={16}
          style={{ borderBottom: `1px solid ${AD.border}`, background: AD.surface }}
        >
          <div>
            <Text fw={700} c={AD.text}>
              {title}
            </Text>
            {subtitle && (
              <Text size="xs" c={AD.textMuted} mt={2}>
                {subtitle}
              </Text>
            )}
          </div>
          <ActionIcon variant="subtle" color="gray" onClick={onClose} aria-label="Close">
            <IconX size={18} />
          </ActionIcon>
        </Group>

        <Box style={{ flex: 1, overflowY: "auto", padding: 24 }}>{children}</Box>

        <Group
          justify="flex-end"
          gap={10}
          px={24}
          py={14}
          style={{ borderTop: `1px solid ${AD.border}`, background: AD.surface }}
        >
          <Button variant="subtle" color="gray" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onSubmit}>{submitLabel}</Button>
        </Group>
      </Stack>
    </Drawer>
  );
}
