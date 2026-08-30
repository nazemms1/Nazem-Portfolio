import type { ReactNode } from "react";
import { ActionIcon, Group, TextInput } from "@mantine/core";
import { IconSearch, IconX } from "@tabler/icons-react";

export function Toolbar({
  search,
  onSearch,
  placeholder = "Search…",
  children,
  right,
}: {
  search: string;
  onSearch: (value: string) => void;
  placeholder?: string;
  children?: ReactNode;
  right?: ReactNode;
}) {
  return (
    <Group justify="space-between" gap="sm" mb="md" wrap="wrap">
      <Group gap="sm" wrap="wrap">
        <TextInput
          value={search}
          onChange={(e) => onSearch(e.currentTarget.value)}
          placeholder={placeholder}
          leftSection={<IconSearch size={15} />}
          rightSection={
            search ? (
              <ActionIcon
                size="sm"
                variant="subtle"
                color="gray"
                onClick={() => onSearch("")}
                aria-label="Clear search"
              >
                <IconX size={13} />
              </ActionIcon>
            ) : null
          }
          style={{ width: 260 }}
        />
        {children}
      </Group>
      {right}
    </Group>
  );
}
