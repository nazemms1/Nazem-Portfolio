import { useState } from "react";
import {
  ActionIcon,
  Alert,
  Badge,
  Button,
  Group,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconInfoCircle, IconPlus, IconX } from "@tabler/icons-react";
import type { CaseStudy } from "../../data/caseStudies";
import { usePortfolioStore } from "../../store/PortfolioProvider";
import {
  EmptyState,
  FieldGroup,
  FormDrawer,
  ListRow,
  PanelHeader,
  move,
} from "../ui";
import { AD } from "../tokens";

const emptyCaseStudy = (): CaseStudy => ({
  projectId: "",
  role: "",
  problem: "",
  approach: "",
  outcome: "",
  metrics: [],
});

export default function CaseStudiesPanel() {
  const { content, updateSection } = usePortfolioStore();
  const caseStudies = content.caseStudies;
  const projects = content.projects;

  const [editing, setEditing] = useState<CaseStudy | null>(null);
  const [editingIndex, setEditingIndex] = useState(-1);

  const save = (next: CaseStudy[]) => updateSection("caseStudies", next);

  const commit = () => {
    if (!editing) return;
    if (!editing.projectId) {
      notifications.show({
        color: "red",
        message: "Pick the project this case study is about.",
      });
      return;
    }
    const duplicate = caseStudies.some(
      (cs, i) => cs.projectId === editing.projectId && i !== editingIndex
    );
    if (duplicate) {
      notifications.show({
        color: "red",
        message: "That project already has a case study.",
      });
      return;
    }
    save(
      editingIndex < 0
        ? [...caseStudies, editing]
        : caseStudies.map((cs, i) => (i === editingIndex ? editing : cs))
    );
    notifications.show({
      color: "blue",
      message: editingIndex < 0 ? "Case study added." : "Case study updated.",
    });
    setEditing(null);
  };

  const projectTitle = (id: string) =>
    projects.find((p) => p.id === id)?.title ?? `Missing project: ${id}`;

  const openNew = () => {
    setEditing(emptyCaseStudy());
    setEditingIndex(-1);
  };

  return (
    <>
      <PanelHeader
        title="Selected work"
        description="The featured case studies at the top of the site. Each one points at a project; every other project falls into the archive below it."
        action={
          <Button leftSection={<IconPlus size={16} />} onClick={openNew}>
            New case study
          </Button>
        }
      />

      {caseStudies.length === 0 ? (
        <EmptyState
          title="No case studies"
          description="Without at least one, the Selected Work section is skipped and every project shows in the archive."
          action={
            <Button leftSection={<IconPlus size={16} />} onClick={openNew}>
              New case study
            </Button>
          }
        />
      ) : (
        <Stack gap={8}>
          {caseStudies.map((cs, i) => {
            const project = projects.find((p) => p.id === cs.projectId);
            return (
              <ListRow
                key={`${cs.projectId}-${i}`}
                index={i}
                thumbnail={project?.image ?? ""}
                title={projectTitle(cs.projectId)}
                subtitle={`${cs.role || "no role set"} · ${cs.metrics.length} metric(s)`}
                badges={
                  !project ? (
                    <Badge size="xs" color="red" variant="light">
                      Project missing
                    </Badge>
                  ) : project.hidden ? (
                    <Badge size="xs" color="orange" variant="light">
                      Project hidden — will not render
                    </Badge>
                  ) : undefined
                }
                hidden={cs.hidden}
                onToggleHidden={() =>
                  save(
                    caseStudies.map((item, index) =>
                      index === i ? { ...item, hidden: !item.hidden } : item
                    )
                  )
                }
                onEdit={() => {
                  setEditing({ ...cs, metrics: cs.metrics.map((m) => ({ ...m })) });
                  setEditingIndex(i);
                }}
                onDelete={() => {
                  if (
                    window.confirm(
                      `Remove the case study for "${projectTitle(cs.projectId)}"? The project itself stays.`
                    )
                  ) {
                    save(caseStudies.filter((_, index) => index !== i));
                  }
                }}
                onMoveUp={i > 0 ? () => save(move(caseStudies, i, i - 1)) : undefined}
                onMoveDown={
                  i < caseStudies.length - 1
                    ? () => save(move(caseStudies, i, i + 1))
                    : undefined
                }
              />
            );
          })}
        </Stack>
      )}

      <FormDrawer
        opened={editing !== null}
        onClose={() => setEditing(null)}
        title={editingIndex < 0 ? "New case study" : "Edit case study"}
        subtitle={editing?.projectId ? projectTitle(editing.projectId) : undefined}
        onSubmit={commit}
        submitLabel={editingIndex < 0 ? "Add case study" : "Save changes"}
      >
        {editing && (
          <Stack gap={28}>
            <FieldGroup label="Subject">
              <Select
                label="Project"
                required
                searchable
                data={projects.map((p) => ({ value: p.id, label: p.title }))}
                value={editing.projectId || null}
                onChange={(value) =>
                  setEditing({ ...editing, projectId: value ?? "" })
                }
              />
              <TextInput
                label="Your role"
                placeholder="Frontend Lead"
                value={editing.role}
                onChange={(e) =>
                  setEditing({ ...editing, role: e.currentTarget.value })
                }
              />
            </FieldGroup>

            <FieldGroup label="Narrative">
              <Textarea
                label="Problem"
                autosize
                minRows={3}
                value={editing.problem}
                onChange={(e) =>
                  setEditing({ ...editing, problem: e.currentTarget.value })
                }
              />
              <Textarea
                label="Approach"
                autosize
                minRows={3}
                value={editing.approach}
                onChange={(e) =>
                  setEditing({ ...editing, approach: e.currentTarget.value })
                }
              />
              <Textarea
                label="Outcome"
                autosize
                minRows={3}
                value={editing.outcome}
                onChange={(e) =>
                  setEditing({ ...editing, outcome: e.currentTarget.value })
                }
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
                        setEditing({ ...editing, metrics });
                      }}
                    />
                    <TextInput
                      placeholder="Value"
                      value={metric.value}
                      style={{ flex: 1 }}
                      onChange={(e) => {
                        const metrics = [...editing.metrics];
                        metrics[i] = { ...metric, value: e.currentTarget.value };
                        setEditing({ ...editing, metrics });
                      }}
                    />
                    <ActionIcon
                      variant="subtle"
                      color="red"
                      onClick={() =>
                        setEditing({
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
                    setEditing({
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
        )}
      </FormDrawer>
    </>
  );
}
