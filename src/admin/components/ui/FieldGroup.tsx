import type { ReactNode } from "react";
import { Stack, Text } from "@mantine/core";
import { AD, AD_FONT } from "../../tokens";

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
