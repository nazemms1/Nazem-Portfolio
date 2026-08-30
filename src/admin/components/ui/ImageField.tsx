import { useRef } from "react";
import { Box, Button, Group, Image, Stack, Text, TextInput } from "@mantine/core";
import { IconPhoto, IconUpload } from "@tabler/icons-react";
import { AD } from "../../tokens";

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

    // Convert file directly to Data URL (Base64) to save in Firestore
    const reader = new FileReader();
    reader.onload = () => {
      onChange(String(reader.result));
    };
    reader.onerror = () => {
      onError?.("Failed to read image file.");
    };
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
            placeholder="https://... or /images/project.png"
            onChange={(e) => onChange(e.currentTarget.value)}
          />
          <Group gap={8}>
            <Button
              size="xs"
              variant="light"
              leftSection={<IconUpload size={14} />}
              onClick={() => fileRef.current?.click()}
            >
              Choose Image File
            </Button>

            {value && (
              <Button
                size="xs"
                variant="subtle"
                color="gray"
                onClick={() => onChange("")}
              >
                Clear
              </Button>
            )}
            <Text size="xs" c={AD.textFaint}>
              URL or local file (100% Free)
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
