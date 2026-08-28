import { useState } from "react";
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Group,
  Select,
  SimpleGrid,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  IconArrowLeft,
  IconArrowRight,
  IconEye,
  IconEyeOff,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import type { Skill } from "../../types/portfolio";
import { usePortfolioStore } from "../../store/PortfolioProvider";
import { PanelHeader, SectionCard } from "../ui";
import { AD, AD_FONT } from "../tokens";

export const skillCategories: { value: Skill["category"]; label: string }[] = [
  { value: "frontend", label: "Frontend Architecture" },
  { value: "mobile", label: "Mobile & Cross-Platform" },
  { value: "backend", label: "Backend & Platform" },
  { value: "tools", label: "Process & Tooling" },
  { value: "soft-skills", label: "Ways of Working" },
];

export default function SkillsPanel() {
  const { content, updateSection } = usePortfolioStore();
  const skills = content.skills;

  const [name, setName] = useState("");
  const [category, setCategory] = useState<Skill["category"]>("frontend");

  const save = (next: Skill[]) => updateSection("skills", next);

  const add = () => {
    const value = name.trim();
    if (!value) return;
    if (skills.some((s) => s.name.toLowerCase() === value.toLowerCase())) {
      notifications.show({ color: "red", message: `"${value}" is already listed.` });
      return;
    }
    save([...skills, { name: value, category }]);
    setName("");
  };

  const shift = (skill: Skill, direction: -1 | 1) => {
    const index = skills.indexOf(skill);
    const siblings = skills
      .map((s, i) => ({ s, i }))
      .filter(({ s }) => s.category === skill.category);
    const position = siblings.findIndex(({ i }) => i === index);
    const target = siblings[position + direction];
    if (!target) return;
    const next = [...skills];
    [next[index], next[target.i]] = [next[target.i], next[index]];
    save(next);
  };

  return (
    <>
      <PanelHeader
        title="Skills"
        description="Drives the “Tech & Craft” section — each category renders as its own column, and empty categories are skipped."
      />

      <Box mb="xl">
        <SectionCard title="Add a skill">
          <Group align="flex-end" gap={10} wrap="wrap">
            <TextInput
              label="Name"
              placeholder="Vitest"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  add();
                }
              }}
              style={{ flex: 1, minWidth: 200 }}
            />
            <Select
              label="Category"
              data={skillCategories}
              value={category}
              allowDeselect={false}
              onChange={(value) =>
                setCategory((value ?? "frontend") as Skill["category"])
              }
              style={{ width: 240 }}
            />
            <Button leftSection={<IconPlus size={16} />} onClick={add}>
              Add
            </Button>
          </Group>
        </SectionCard>
      </Box>

      <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="md">
        {skillCategories.map(({ value, label }) => {
          const group = skills.filter((s) => s.category === value);
          const visible = group.filter((s) => !s.hidden).length;
          return (
            <SectionCard
              key={value}
              title={label}
              action={
                <Badge size="sm" variant="light" color={visible ? "blue" : "gray"}>
                  {visible}/{group.length}
                </Badge>
              }
            >
              {group.length === 0 ? (
                <Text size="sm" c={AD.textFaint}>
                  Empty — this column is skipped on the site.
                </Text>
              ) : (
                <Group gap={8}>
                  {group.map((skill, i) => (
                    <Group
                      key={skill.name}
                      gap={2}
                      wrap="nowrap"
                      style={{
                        border: `1px solid ${AD.border}`,
                        borderRadius: 9,
                        padding: "3px 4px 3px 12px",
                        background: AD.surfaceRaised,
                        opacity: skill.hidden ? 0.45 : 1,
                      }}
                    >
                      <Text
                        size="sm"
                        c={AD.textSoft}
                        mr={6}
                        style={{ fontFamily: AD_FONT.sans }}
                      >
                        {skill.name}
                      </Text>
                      <ActionIcon
                        size="sm"
                        variant="subtle"
                        color="gray"
                        disabled={i === 0}
                        onClick={() => shift(skill, -1)}
                        aria-label="Move left"
                      >
                        <IconArrowLeft size={13} />
                      </ActionIcon>
                      <ActionIcon
                        size="sm"
                        variant="subtle"
                        color="gray"
                        disabled={i === group.length - 1}
                        onClick={() => shift(skill, 1)}
                        aria-label="Move right"
                      >
                        <IconArrowRight size={13} />
                      </ActionIcon>
                      <Tooltip label={skill.hidden ? "Show" : "Hide"} withArrow>
                        <ActionIcon
                          size="sm"
                          variant="subtle"
                          color={skill.hidden ? "gray" : "blue"}
                          onClick={() =>
                            save(
                              skills.map((s) =>
                                s === skill ? { ...s, hidden: !s.hidden } : s
                              )
                            )
                          }
                          aria-label="Toggle visibility"
                        >
                          {skill.hidden ? <IconEyeOff size={13} /> : <IconEye size={13} />}
                        </ActionIcon>
                      </Tooltip>
                      <ActionIcon
                        size="sm"
                        variant="subtle"
                        color="red"
                        onClick={() => save(skills.filter((s) => s !== skill))}
                        aria-label="Delete"
                      >
                        <IconTrash size={13} />
                      </ActionIcon>
                    </Group>
                  ))}
                </Group>
              )}
            </SectionCard>
          );
        })}
      </SimpleGrid>
    </>
  );
}
