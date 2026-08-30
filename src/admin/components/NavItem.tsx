import { useState } from "react";
import { Box } from "@mantine/core";
import type { Icon as TablerIcon } from "@tabler/icons-react";
import { AD, AD_FONT } from "../tokens";

export function NavItem({
  active,
  label,
  icon: Icon,
  badge,
  onClick,
}: {
  active: boolean;
  label: string;
  icon: TablerIcon;
  badge?: number;
  onClick: () => void;
}) {
  const [hover, setHover] = useState(false);

  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        cursor: "pointer",
        textAlign: "left",
        border: "none",
        borderRadius: 9,
        padding: "9px 12px",
        fontSize: "0.88rem",
        fontFamily: AD_FONT.sans,
        fontWeight: active ? 600 : 500,
        color: active ? AD.text : hover ? AD.textSoft : AD.textMuted,
        background: active ? AD.accentSoft : hover ? AD.surfaceHover : "transparent",
        boxShadow: active ? `inset 2px 0 0 ${AD.accent}` : "none",
        transition: "background 0.15s ease, color 0.15s ease",
      }}
    >
      <Icon size={17} color={active ? AD.accent : "currentColor"} />
      <span style={{ flex: 1 }}>{label}</span>
      {badge !== undefined && (
        <span
          style={{
            fontFamily: AD_FONT.mono,
            fontSize: "0.72rem",
            color: AD.textFaint,
          }}
        >
          {badge}
        </span>
      )}
    </Box>
  );
}
