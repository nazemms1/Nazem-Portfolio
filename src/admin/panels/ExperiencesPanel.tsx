import { useState } from "react";
import { Badge, Button, Stack } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconPlus } from "@tabler/icons-react";
import { usePortfolioStore } from "../../store/PortfolioProvider";
import type { Experience } from "../../types/portfolio";
import { ExperienceFormDrawer } from "../forms/ExperienceFormDrawer";
import { EmptyState, ListRow, PanelHeader } from "../ui";
import { emptyExperience, move } from "../utils/adminHelpers";

export default function ExperiencesPanel() {
  const { content, updateSection } = usePortfolioStore();
  const experiences = content.experiences;

  const [editing, setEditing] = useState<Experience | null>(null);
  const [isNew, setIsNew] = useState(false);

  const save = (next: Experience[]) => updateSection("experiences", next);

  const commit = () => {
    if (!editing) return;
    if (!editing.title.trim() || !editing.company.trim()) {
      notifications.show({
        color: "red",
        message: "Title and company are required.",
      });
      return;
    }
    const id = editing.id.trim() || `exp-${Date.now()}`;
    const record = { ...editing, id };
    save(
      isNew
        ? [...experiences, record]
        : experiences.map((e) => (e.id === editing.id ? record : e))
    );
    notifications.show({
      color: "blue",
      message: isNew ? "Role added." : "Role updated.",
    });
    setEditing(null);
  };

  const openNew = () => {
    setEditing(emptyExperience());
    setIsNew(true);
  };

  return (
    <>
      <PanelHeader
        title="Experience"
        description="Your employment history. Stored with the rest of the content and exported with it — the current site layout does not render a timeline section yet."
        action={
          <Button leftSection={<IconPlus size={16} />} onClick={openNew}>
            New role
          </Button>
        }
      />

      {experiences.length === 0 ? (
        <EmptyState
          title="No roles yet"
          description="Add the positions you want to keep on record."
          action={
            <Button leftSection={<IconPlus size={16} />} onClick={openNew}>
              New role
            </Button>
          }
        />
      ) : (
        <Stack gap={8}>
          {experiences.map((exp, i) => (
            <ListRow
              key={exp.id}
              index={i}
              thumbnail={exp.logo}
              title={`${exp.title} — ${exp.company}`}
              subtitle={`${exp.period} · ${exp.location}`}
              badges={
                <>
                  <Badge size="xs" variant="light">
                    {exp.type}
                  </Badge>
                  {(exp.technologies ?? []).slice(0, 3).map((t) => (
                    <Badge key={t} size="xs" variant="outline" color="gray">
                      {t}
                    </Badge>
                  ))}
                </>
              }
              hidden={exp.hidden}
              onToggleHidden={() =>
                save(
                  experiences.map((e) =>
                    e.id === exp.id ? { ...e, hidden: !e.hidden } : e
                  )
                )
              }
              onEdit={() => {
                setEditing({ ...exp });
                setIsNew(false);
              }}
              onDelete={() => {
                if (window.confirm(`Delete "${exp.title} — ${exp.company}"?`)) {
                  save(experiences.filter((e) => e.id !== exp.id));
                }
              }}
              onMoveUp={i > 0 ? () => save(move(experiences, i, i - 1)) : undefined}
              onMoveDown={
                i < experiences.length - 1
                  ? () => save(move(experiences, i, i + 1))
                  : undefined
              }
            />
          ))}
        </Stack>
      )}

      <ExperienceFormDrawer
        editing={editing}
        isNew={isNew}
        onClose={() => setEditing(null)}
        onChange={setEditing}
        onSubmit={commit}
      />
    </>
  );
}
