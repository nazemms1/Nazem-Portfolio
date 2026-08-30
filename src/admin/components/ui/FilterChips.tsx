import { Box, Group, Text } from "@mantine/core";
import { AD, AD_FONT } from "../../tokens";

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
