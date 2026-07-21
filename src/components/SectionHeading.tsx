import { Badge, Title, Text, Box } from "@mantine/core";
import Reveal from "./Reveal";
import { COLOR, FONT } from "../styles/tokens";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <Box mb={64} style={{ textAlign: align }}>
      <Reveal delay={0}>
        <Badge
          size="md"
          variant="outline"
          mb="lg"
          style={{
            borderColor: `${COLOR.blue}33`,
            color: COLOR.blueLight,
            background: `${COLOR.navy}0d`,
            fontFamily: FONT.mono,
          }}
        >
          {eyebrow}
        </Badge>
      </Reveal>
      <Reveal delay={0.08}>
        <Title
          order={2}
          mb={description ? "md" : 0}
          style={{
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: COLOR.textPrimary,
            maxWidth: align === "left" ? 640 : undefined,
            marginInline: align === "center" ? "auto" : undefined,
          }}
        >
          {title}
        </Title>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <Text
            style={{
              color: COLOR.textMuted,
              fontSize: "1.05rem",
              maxWidth: 560,
              marginInline: align === "center" ? "auto" : undefined,
            }}
          >
            {description}
          </Text>
        </Reveal>
      )}
    </Box>
  );
}
