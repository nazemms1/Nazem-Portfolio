import { useState } from "react";
import { ActionIcon, Badge, Button, Group, Stack, Text, TextInput } from "@mantine/core";
import { IconArrowUp, IconPlus, IconX } from "@tabler/icons-react";
import { AD, AD_FONT } from "../../tokens";

export function StringListField({
  label,
  description,
  value,
  onChange,
  placeholder = "Add an item",
}: {
  label: string;
  description?: string;
  value: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
}) {
  const [draft, setDraft] = useState("");

  const add = () => {
    const text = draft.trim();
    if (!text) return;
    onChange([...value, text]);
    setDraft("");
  };

  return (
    <Stack gap={8}>
      <div>
        <Group gap={8}>
          <Text size="sm" fw={600} c={AD.text}>
            {label}
          </Text>
          <Badge size="xs" variant="light" color="gray">
            {value.length}
          </Badge>
        </Group>
        {description && (
          <Text size="xs" c={AD.textMuted} mt={2}>
            {description}
          </Text>
        )}
      </div>

      <Stack gap={6}>
        {value.map((item, i) => (
          <Group key={i} gap={6} wrap="nowrap" align="center">
            <Text
              style={{
                fontFamily: AD_FONT.mono,
                fontSize: "0.72rem",
                color: AD.textFaint,
                width: 18,
                flexShrink: 0,
              }}
            >
              {i + 1}
            </Text>
            <TextInput
              value={item}
              onChange={(e) => {
                const next = [...value];
                next[i] = e.currentTarget.value;
                onChange(next);
              }}
              style={{ flex: 1 }}
            />
            <ActionIcon
              variant="subtle"
              color="gray"
              disabled={i === 0}
              onClick={() => {
                const next = [...value];
                [next[i - 1], next[i]] = [next[i], next[i - 1]];
                onChange(next);
              }}
              aria-label="Move up"
            >
              <IconArrowUp size={15} />
            </ActionIcon>
            <ActionIcon
              variant="subtle"
              color="red"
              onClick={() => onChange(value.filter((_, index) => index !== i))}
              aria-label="Remove"
            >
              <IconX size={15} />
            </ActionIcon>
          </Group>
        ))}
      </Stack>

      <Group gap={6} wrap="nowrap">
        <TextInput
          value={draft}
          placeholder={placeholder}
          onChange={(e) => setDraft(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              add();
            }
          }}
          style={{ flex: 1 }}
        />
        <Button variant="light" leftSection={<IconPlus size={15} />} onClick={add}>
          Add
        </Button>
      </Group>
    </Stack>
  );
}
