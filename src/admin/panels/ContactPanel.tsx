import { useEffect, useState } from "react";
import { Badge, Box, Button, Group, Stack, Text, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconDeviceFloppy,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { usePortfolioStore } from "../../store/PortfolioProvider";
import { PanelHeader, SectionCard } from "../ui";
import { AD } from "../tokens";

export default function ContactPanel() {
  const { content, updateSection } = usePortfolioStore();
  const [draft, setDraft] = useState(content.contactInfo);

  useEffect(() => setDraft(content.contactInfo), [content.contactInfo]);

  const dirty = JSON.stringify(draft) !== JSON.stringify(content.contactInfo);

  return (
    <>
      <PanelHeader
        title="Contact details"
        description="Used by the hero call-to-action, the contact section, and the footer links."
        action={
          <Group gap={10}>
            {dirty && (
              <Badge size="sm" variant="light" color="yellow" style={{ textTransform: "none" }}>
                Unsaved
              </Badge>
            )}
            <Button
              leftSection={<IconDeviceFloppy size={16} />}
              disabled={!dirty}
              onClick={() => {
                updateSection("contactInfo", draft);
                notifications.show({ color: "blue", message: "Contact details saved." });
              }}
            >
              Save
            </Button>
          </Group>
        }
      />

      <Box maw={680}>
        <Stack gap="md">
          <SectionCard title="Direct">
            <Stack gap="md">
              <TextInput
                label="Email"
                leftSection={<IconMail size={15} />}
                value={draft.email}
                onChange={(e) => setDraft({ ...draft, email: e.currentTarget.value })}
              />
              <TextInput
                label="Phone"
                leftSection={<IconPhone size={15} />}
                value={draft.phone}
                onChange={(e) => setDraft({ ...draft, phone: e.currentTarget.value })}
              />
              <TextInput
                label="Location"
                leftSection={<IconMapPin size={15} />}
                value={draft.location}
                onChange={(e) => setDraft({ ...draft, location: e.currentTarget.value })}
              />
            </Stack>
          </SectionCard>

          <SectionCard title="Profiles">
            <Stack gap="md">
              <TextInput
                label="LinkedIn"
                leftSection={<IconBrandLinkedin size={15} />}
                placeholder="https://www.linkedin.com/in/…"
                value={draft.linkedin ?? ""}
                onChange={(e) => setDraft({ ...draft, linkedin: e.currentTarget.value })}
              />
              <TextInput
                label="GitHub"
                leftSection={<IconBrandGithub size={15} />}
                placeholder="https://github.com/…"
                value={draft.github ?? ""}
                onChange={(e) => setDraft({ ...draft, github: e.currentTarget.value })}
              />
            </Stack>
          </SectionCard>

          <Text size="xs" c={AD.textFaint}>
            These values are published with the site — treat them as public.
          </Text>
        </Stack>
      </Box>
    </>
  );
}
