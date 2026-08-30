import {
  ActionIcon,
  Alert,
  Button,
  Group,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { IconInfoCircle, IconPlus, IconX } from "@tabler/icons-react";
import type { CaseStudy } from "../../data/caseStudies";
import type { Project } from "../../types/portfolio";
import { AD } from "../tokens";
import { FieldGroup, FormDrawer } from "../ui";

export function CaseStudyFormDrawer({
  editing,
  editingIndex,
  projects,
  onClose,
  onChange,
  onSubmit,
  projectTitle,
}: {
  editing: CaseStudy | null;
  editingIndex: number;
  projects: Project[];
  onClose: () => void;
  onChange: (caseStudy: CaseStudy) => void;
  onSubmit: () => void;
  projectTitle: (id: string) => string;
}) {
  if (!editing) return null;

  return (
    <FormDrawer
      opened={editing !== null}
      onClose={onClose}
      title={editingIndex < 0 ? "New case study" : "Edit case study"}
      subtitle={editing?.projectId ? projectTitle(editing.projectId) : undefined}
      onSubmit={onSubmit}
      submitLabel={editingIndex < 0 ? "Add case study" : "Save changes"}
    >
      <Stack gap={28}>
        <FieldGroup label="Subject">
          <Select
            label="Project"
            required
            searchable
            data={projects.map((p) => ({ value: p.id, label: p.title }))}
            value={editing.projectId || null}
            onChange={(value) => onChange({ ...editing, projectId: value ?? "" })}
          />
          <TextInput
            label="Your role"
            placeholder="Frontend Lead"
            value={editing.role}
            onChange={(e) => onChange({ ...editing, role: e.currentTarget.value })}
          />
        </FieldGroup>

        <FieldGroup label="Narrative">
          <Textarea
            label="Problem"
            autosize
            minRows={3}
            value={editing.problem}
            onChange={(e) => onChange({ ...editing, problem: e.currentTarget.value })}
          />
          <Textarea
            label="Approach"
            autosize
            minRows={3}
            value={editing.approach}
            onChange={(e) => onChange({ ...editing, approach: e.currentTarget.value })}
          />
          <Textarea
            label="Outcome"
            autosize
            minRows={3}
            value={editing.outcome}
            onChange={(e) => onChange({ ...editing, outcome: e.currentTarget.value })}
          />
        </FieldGroup>

        <FieldGroup label="Metrics">
          <Stack gap={8}>
            {editing.metrics.map((metric, i) => (
              <Group key={i} gap={8} wrap="nowrap">
                <TextInput
                  placeholder="Label"
                  value={metric.label}
                  style={{ flex: 1 }}
                  onChange={(e) => {
                    const metrics = [...editing.metrics];
                    metrics[i] = { ...metric, label: e.currentTarget.value };
                    onChange({ ...editing, metrics });
                  }}
                />
                <TextInput
                  placeholder="Value"
                  value={metric.value}
                  style={{ flex: 1 }}
                  onChange={(e) => {
                    const metrics = [...editing.metrics];
                    metrics[i] = { ...metric, value: e.currentTarget.value };
                    onChange({ ...editing, metrics });
                  }}
                />
                <ActionIcon
                  variant="subtle"
                  color="red"
                  onClick={() =>
                    onChange({
                      ...editing,
                      metrics: editing.metrics.filter((_, index) => index !== i),
                    })
                  }
                  aria-label="Remove metric"
                >
                  <IconX size={15} />
                </ActionIcon>
              </Group>
            ))}
            {editing.metrics.length === 0 && (
              <Text size="xs" c={AD.textFaint}>
                No metrics yet — two short ones read best.
              </Text>
            )}
            <Button
              variant="light"
              size="xs"
              w="fit-content"
              leftSection={<IconPlus size={14} />}
              onClick={() =>
                onChange({
                  ...editing,
                  metrics: [...editing.metrics, { label: "", value: "" }],
                })
              }
            >
              Add metric
            </Button>
          </Stack>
        </FieldGroup>

        <Alert icon={<IconInfoCircle size={16} />} color="blue" variant="light">
          Featured projects are removed from the “More shipped work” archive
          automatically.
        </Alert>
      </Stack>
    </FormDrawer>
  );
}
