import { useState } from "react";
import { Badge, Button, Stack } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconPlus } from "@tabler/icons-react";
import type { CaseStudy } from "../../data/caseStudies";
import { usePortfolioStore } from "../../store/PortfolioProvider";
import { CaseStudyFormDrawer } from "../forms/CaseStudyFormDrawer";
import { EmptyState, ListRow, PanelHeader } from "../ui";
import { emptyCaseStudy, move } from "../utils/adminHelpers";

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

      <CaseStudyFormDrawer
        editing={editing}
        editingIndex={editingIndex}
        projects={projects}
        onClose={() => setEditing(null)}
        onChange={setEditing}
        onSubmit={commit}
        projectTitle={projectTitle}
      />
    </>
  );
}
