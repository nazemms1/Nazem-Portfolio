import { useState } from "react";
import type { ReactNode } from "react";
import {
  ActionIcon,
  Badge,
  Box,
  Group,
  Image,
  Menu,
  Switch,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  IconArrowDown,
  IconArrowUp,
  IconDotsVertical,
  IconEyeOff,
  IconPencil,
  IconPhoto,
  IconTrash,
} from "@tabler/icons-react";
import { AD, AD_FONT } from "../../tokens";

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
