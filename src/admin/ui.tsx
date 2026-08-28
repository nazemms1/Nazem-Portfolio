// Building blocks shared by every dashboard panel.

import { useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Drawer,
  Group,
  Image,
  Menu,
  Stack,
  Switch,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import {
  IconArrowDown,
  IconArrowUp,
  IconDotsVertical,
  IconEyeOff,
  IconPencil,
  IconPhoto,
  IconPlus,
  IconSearch,
  IconTrash,
  IconUpload,
  IconX,
} from "@tabler/icons-react";
import { AD, AD_FONT, cardStyle } from "./tokens";

/* ── page scaffolding ─────────────────────────────────────────── */

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

/** Pill-style segmented filter. */
export function FilterChips<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (next: T) => void;
  options: { value: T; label: string; count?: number }[];
}) {
  return (
    <Group gap={6}>
      {options.map((option) => {
        const active = option.value === value;
        return (
          <Box
            key={option.value}
            component="button"
            type="button"
            onClick={() => onChange(option.value)}
            style={{
              cursor: "pointer",
              border: `1px solid ${active ? AD.accentBorder : AD.border}`,
              background: active ? AD.accentSoft : "transparent",
              color: active ? AD.text : AD.textMuted,
              borderRadius: 999,
              padding: "6px 14px",
              fontSize: "0.82rem",
              fontFamily: AD_FONT.sans,
              fontWeight: 500,
              transition: "background 0.15s ease, border-color 0.15s ease, color 0.15s ease",
            }}
          >
            {option.label}
            {option.count !== undefined && (
              <Text
                component="span"
                ml={6}
                style={{ color: AD.textFaint, fontFamily: AD_FONT.mono, fontSize: "0.75rem" }}
              >
                {option.count}
              </Text>
            )}
          </Box>
        );
      })}
    </Group>
  );
}

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

/* ── list row ─────────────────────────────────────────────────── */

export function ListRow({
  title,
  subtitle,
  badges,
  hidden,
  onToggleHidden,
  onEdit,
  onDelete,
  onMoveUp,
  onMoveDown,
  thumbnail,
  index,
}: {
  title: string;
  subtitle?: string;
  badges?: ReactNode;
  hidden?: boolean;
  onToggleHidden: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  thumbnail?: string;
  index?: number;
}) {
  const [hover, setHover] = useState(false);

  return (
    <Group
      wrap="nowrap"
      align="center"
      gap={14}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: `1px solid ${hover ? AD.borderStrong : AD.border}`,
        borderRadius: AD.radiusSm,
        padding: "10px 12px",
        background: hover ? AD.surfaceHover : AD.surface,
        transition: "background 0.15s ease, border-color 0.15s ease",
      }}
    >
      {index !== undefined && (
        <Text
          style={{
            fontFamily: AD_FONT.mono,
            fontSize: "0.75rem",
            color: AD.textFaint,
            width: 20,
            flexShrink: 0,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </Text>
      )}

      {thumbnail !== undefined && (
        <Box
          style={{
            width: 56,
            height: 42,
            flexShrink: 0,
            borderRadius: 8,
            overflow: "hidden",
            border: `1px solid ${AD.border}`,
            background: AD.surfaceRaised,
            display: "grid",
            placeItems: "center",
            opacity: hidden ? 0.4 : 1,
          }}
        >
          {thumbnail ? (
            <Image src={thumbnail} alt="" fit="cover" w="100%" h="100%" />
          ) : (
            <IconPhoto size={15} color={AD.textFaint} />
          )}
        </Box>
      )}

      <div style={{ flex: 1, minWidth: 0, opacity: hidden ? 0.55 : 1 }}>
        <Group gap={8} wrap="nowrap">
          <Text fw={600} size="sm" c={AD.text} truncate>
            {title}
          </Text>
          {hidden && (
            <Badge
              size="xs"
              variant="light"
              color="gray"
              leftSection={<IconEyeOff size={10} />}
            >
              Hidden
            </Badge>
          )}
        </Group>
        {subtitle && (
          <Text
            size="xs"
            c={AD.textMuted}
            mt={2}
            style={{ fontFamily: AD_FONT.mono }}
            truncate
          >
            {subtitle}
          </Text>
        )}
        {badges && (
          <Group gap={5} mt={7}>
            {badges}
          </Group>
        )}
      </div>

      <Group gap={4} wrap="nowrap" style={{ flexShrink: 0 }}>
        <Tooltip label={hidden ? "Show on site" : "Hide from site"} withArrow>
          <Switch
            size="sm"
            checked={!hidden}
            onChange={onToggleHidden}
            aria-label="Toggle visibility"
          />
        </Tooltip>

        <Tooltip label="Edit" withArrow>
          <ActionIcon variant="subtle" color="gray" onClick={onEdit} aria-label="Edit">
            <IconPencil size={16} />
          </ActionIcon>
        </Tooltip>

        <Menu position="bottom-end" withinPortal shadow="md">
          <Menu.Target>
            <ActionIcon variant="subtle" color="gray" aria-label="More actions">
              <IconDotsVertical size={16} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconArrowUp size={14} />}
              disabled={!onMoveUp}
              onClick={onMoveUp}
            >
              Move up
            </Menu.Item>
            <Menu.Item
              leftSection={<IconArrowDown size={14} />}
              disabled={!onMoveDown}
              onClick={onMoveDown}
            >
              Move down
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
              color="red"
              leftSection={<IconTrash size={14} />}
              onClick={onDelete}
            >
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Group>
  );
}

/* ── form drawer ──────────────────────────────────────────────── */

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

/** Groups related fields inside a drawer. */
export function FieldGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <Stack gap={14}>
      <Text
        size="xs"
        style={{
          fontFamily: AD_FONT.mono,
          color: AD.textFaint,
          textTransform: "uppercase",
          letterSpacing: "0.09em",
          borderBottom: `1px solid ${AD.border}`,
          paddingBottom: 8,
        }}
      >
        {label}
      </Text>
      {children}
    </Stack>
  );
}

/* ── list of free-text lines (features, bullets, tech tags) ───── */

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

/* ── image: paste a URL or embed a local file as a data URL ───── */

const MAX_INLINE_IMAGE = 400 * 1024; // keeps localStorage well under quota

export function ImageField({
  label,
  value,
  onChange,
  onError,
}: {
  label: string;
  value: string;
  onChange: (next: string) => void;
  onError?: (message: string) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  const pick = (file: File | undefined) => {
    if (!file) return;
    if (file.size > MAX_INLINE_IMAGE) {
      onError?.(
        `"${file.name}" is ${(file.size / 1024).toFixed(0)} KB. Embedded images must stay under 400 KB — put larger files in /public/images and reference them by path instead.`
      );
      return;
    }
    const reader = new FileReader();
    reader.onload = () => onChange(String(reader.result));
    reader.readAsDataURL(file);
  };

  return (
    <Stack gap={8}>
      <Text size="sm" fw={600} c={AD.text}>
        {label}
      </Text>
      <Group gap={14} align="flex-start" wrap="nowrap">
        <Box
          onClick={() => fileRef.current?.click()}
          style={{
            width: 108,
            height: 76,
            flexShrink: 0,
            borderRadius: AD.radiusSm,
            overflow: "hidden",
            border: `1px dashed ${AD.borderStrong}`,
            background: AD.surfaceRaised,
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
          }}
        >
          {value ? (
            <Image src={value} alt="" fit="cover" w="100%" h="100%" />
          ) : (
            <IconPhoto size={20} color={AD.textFaint} />
          )}
        </Box>
        <Stack gap={8} style={{ flex: 1 }}>
          <TextInput
            value={value}
            placeholder="/images/project.png or https://…"
            onChange={(e) => onChange(e.currentTarget.value)}
          />
          <Group gap={8}>
            <Button
              size="xs"
              variant="light"
              leftSection={<IconUpload size={14} />}
              onClick={() => fileRef.current?.click()}
            >
              Upload
            </Button>
            {value && (
              <Button size="xs" variant="subtle" color="gray" onClick={() => onChange("")}>
                Clear
              </Button>
            )}
            <Text size="xs" c={AD.textFaint}>
              max 400 KB inline
            </Text>
          </Group>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              pick(e.currentTarget.files?.[0]);
              e.currentTarget.value = "";
            }}
          />
        </Stack>
      </Group>
    </Stack>
  );
}

/** Reorder helper shared by every list panel. */
export function move<T>(items: T[], from: number, to: number): T[] {
  if (to < 0 || to >= items.length) return items;
  const next = [...items];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}
