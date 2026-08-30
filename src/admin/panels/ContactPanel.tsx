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
import { AD } from "../tokens";
import { PanelHeader, SectionCard } from "../ui";
import { defaultHeroContact } from "../utils/adminHelpers";

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

  const dirty =
    JSON.stringify(draft) !==
    JSON.stringify({ ...defaultHeroContact, ...content.contactInfo });

  return (
    <>
      <PanelHeader
        title="Profile & Hero Details"
        description="Manage your personal profile, hero section titles, quick statistics, CV download link, and direct contact options."
        action={
          <Group gap={10}>
            {dirty && (
              <Badge size="sm" variant="light" color="yellow" style={{ textTransform: "none" }}>
                Unsaved Edits
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

      <Stack gap="lg">
        {/* Section 1: Hero Identity & Quick Stats */}
        <SectionCard
          title="Hero Identity & Stats"
          description="Branding titles, availability badge, quick numbers, and CV link rendered in the website hero section."
        >
          <Stack gap="md">
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
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
            </SimpleGrid>

            <TextInput
              label="Hero Subtitle / Headline"
              placeholder="Pharaon Group · React & TypeScript"
              value={draft.subtitle ?? "Pharaon Group · React & TypeScript"}
              onChange={(e) => setDraft({ ...draft, subtitle: e.currentTarget.value })}
            />

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
              <TextInput
                label="Availability Badge Text"
                leftSection={<IconBadge size={15} />}
                placeholder="Available for select projects"
                value={draft.badge ?? "Available for select projects"}
                onChange={(e) => setDraft({ ...draft, badge: e.currentTarget.value })}
              />
              <TextInput
                label="CV Direct Download URL (optional)"
                leftSection={<IconFileCv size={15} />}
                placeholder="https://example.com/my-cv.pdf"
                value={draft.cvUrl ?? ""}
                onChange={(e) => setDraft({ ...draft, cvUrl: e.currentTarget.value })}
              />
            </SimpleGrid>

            <Box
              style={{
                borderTop: `1px solid ${AD.border}`,
                paddingTop: 16,
                marginTop: 4,
              }}
            >
              <Text size="xs" fw={600} c={AD.textSoft} mb={10}>
                Hero Quick Metrics
              </Text>
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
            </Box>
          </Stack>
        </SectionCard>

        {/* Section 2: Direct Contact & Social Presence */}
        <SectionCard
          title="Contact & Social Profiles"
          description="Public email, phone number, location, and official social media profile links."
        >
          <Stack gap="md">
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
              <TextInput
                label="Email Address"
                leftSection={<IconMail size={15} />}
                value={draft.email}
                onChange={(e) => setDraft({ ...draft, email: e.currentTarget.value })}
              />
              <TextInput
                label="Phone Number"
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
            </SimpleGrid>

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
              <TextInput
                label="LinkedIn Profile URL"
                leftSection={<IconBrandLinkedin size={15} />}
                placeholder="https://www.linkedin.com/in/…"
                value={draft.linkedin ?? ""}
                onChange={(e) => setDraft({ ...draft, linkedin: e.currentTarget.value })}
              />
              <TextInput
                label="GitHub Profile URL"
                leftSection={<IconBrandGithub size={15} />}
                placeholder="https://github.com/…"
                value={draft.github ?? ""}
                onChange={(e) => setDraft({ ...draft, github: e.currentTarget.value })}
              />
            </SimpleGrid>
          </Stack>
        </SectionCard>

        <Text size="xs" c={AD.textFaint}>
          All changes saved here sync live across your portfolio site and cloud database.
        </Text>
      </Stack>
    </>
  );
}
