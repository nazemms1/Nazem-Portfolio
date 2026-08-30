import { useEffect, useState } from "react";
import { Badge, Box, Button, Group, NumberInput, SimpleGrid, Stack, Text, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  IconBadge,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconDeviceFloppy,
  IconFileCv,
  IconMail,
  IconMapPin,
  IconPhone,
  IconUser,
} from "@tabler/icons-react";
import { usePortfolioStore } from "../../store/PortfolioProvider";
import { PanelHeader, SectionCard } from "../ui";
import { AD } from "../tokens";

const defaultHeroContact = {
  name: "Nazem Almsouti",
  title: "Frontend Engineer.",
  subtitle: "Pharaon Group · React & TypeScript",
  badge: "Available for select projects",
  yearsExperience: 4,
  platformsShipped: 15,
  teamsLed: 3,
  cvUrl: "",
};

export default function ContactPanel() {
  const { content, updateSection } = usePortfolioStore();
  const [draft, setDraft] = useState(() => ({
    ...defaultHeroContact,
    ...content.contactInfo,
  }));

  useEffect(() => {
    setDraft({
      ...defaultHeroContact,
      ...content.contactInfo,
    });
  }, [content.contactInfo]);

  const dirty = JSON.stringify(draft) !== JSON.stringify({ ...defaultHeroContact, ...content.contactInfo });

  return (
    <>
      <PanelHeader
        title="Profile & Hero Details"
        description="Manage your personal profile, hero section titles, statistics, CV link, and contact details."
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
              onClick={async () => {
                await updateSection("contactInfo", draft);
                notifications.show({ color: "teal", message: "Profile & Hero details saved!" });
              }}
            >
              Save Changes
            </Button>
          </Group>
        }
      />

      <Box maw={760}>
        <Stack gap="md">
          <SectionCard title="Hero Section Branding">
            <Stack gap="md">
              <Group grow>
                <TextInput
                  label="Full Name"
                  leftSection={<IconUser size={15} />}
                  value={draft.name ?? "Nazem Almsouti"}
                  onChange={(e) => setDraft({ ...draft, name: e.currentTarget.value })}
                />
                <TextInput
                  label="Professional Title"
                  leftSection={<IconBriefcase size={15} />}
                  placeholder="Frontend Engineer."
                  value={draft.title ?? "Frontend Engineer."}
                  onChange={(e) => setDraft({ ...draft, title: e.currentTarget.value })}
                />
              </Group>

              <TextInput
                label="Hero Subtitle / Headline"
                placeholder="Pharaon Group · React & TypeScript"
                value={draft.subtitle ?? "Pharaon Group · React & TypeScript"}
                onChange={(e) => setDraft({ ...draft, subtitle: e.currentTarget.value })}
              />

              <TextInput
                label="Availability Badge Text"
                leftSection={<IconBadge size={15} />}
                placeholder="Available for select projects"
                value={draft.badge ?? "Available for select projects"}
                onChange={(e) => setDraft({ ...draft, badge: e.currentTarget.value })}
              />
            </Stack>
          </SectionCard>

          <SectionCard title="Hero Quick Stats">
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
              <NumberInput
                label="Years Experience"
                min={0}
                max={50}
                value={draft.yearsExperience ?? 4}
                onChange={(val) =>
                  setDraft({ ...draft, yearsExperience: typeof val === "number" ? val : 4 })
                }
              />
              <NumberInput
                label="Platforms Shipped"
                min={0}
                max={200}
                value={draft.platformsShipped ?? 15}
                onChange={(val) =>
                  setDraft({ ...draft, platformsShipped: typeof val === "number" ? val : 15 })
                }
              />
              <NumberInput
                label="Teams Led"
                min={0}
                max={50}
                value={draft.teamsLed ?? 3}
                onChange={(val) =>
                  setDraft({ ...draft, teamsLed: typeof val === "number" ? val : 3 })
                }
              />
            </SimpleGrid>
          </SectionCard>

          <SectionCard title="CV / Resume File Link">
            <TextInput
              label="CV Direct Download URL (optional)"
              leftSection={<IconFileCv size={15} />}
              placeholder="https://example.com/my-cv.pdf (leave blank to use default PDF)"
              value={draft.cvUrl ?? ""}
              onChange={(e) => setDraft({ ...draft, cvUrl: e.currentTarget.value })}
            />
          </SectionCard>

          <SectionCard title="Direct Contact Details">
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

          <SectionCard title="Social Profiles">
            <Stack gap="md">
              <TextInput
                label="LinkedIn URL"
                leftSection={<IconBrandLinkedin size={15} />}
                placeholder="https://www.linkedin.com/in/…"
                value={draft.linkedin ?? ""}
                onChange={(e) => setDraft({ ...draft, linkedin: e.currentTarget.value })}
              />
              <TextInput
                label="GitHub URL"
                leftSection={<IconBrandGithub size={15} />}
                placeholder="https://github.com/…"
                value={draft.github ?? ""}
                onChange={(e) => setDraft({ ...draft, github: e.currentTarget.value })}
              />
            </Stack>
          </SectionCard>

          <Text size="xs" c={AD.textFaint}>
            These values sync live across your portfolio site and Firestore.
          </Text>
        </Stack>
      </Box>
    </>
  );
}
