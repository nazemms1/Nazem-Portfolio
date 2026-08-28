import { useState } from "react";
import { Button, Group, Stack, TextInput, Textarea } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconPlus } from "@tabler/icons-react";
import type { Recommendation } from "../../types/portfolio";
import { usePortfolioStore } from "../../store/PortfolioProvider";
import {
  EmptyState,
  FieldGroup,
  FormDrawer,
  ListRow,
  PanelHeader,
  move,
} from "../ui";

const emptyRecommendation = (): Recommendation => ({
  id: "",
  name: "",
  role: "",
  expertise: "",
  period: "",
  message: "",
  linkedin: "",
});

export default function RecommendationsPanel() {
  const { content, updateSection } = usePortfolioStore();
  const recommendations = content.recommendations;

  const [editing, setEditing] = useState<Recommendation | null>(null);
  const [isNew, setIsNew] = useState(false);

  const save = (next: Recommendation[]) => updateSection("recommendations", next);

  const commit = () => {
    if (!editing) return;
    if (!editing.name.trim() || !editing.message.trim()) {
      notifications.show({
        color: "red",
        message: "Name and message are required.",
      });
      return;
    }
    const id = editing.id.trim() || `rec-${Date.now()}`;
    const record = { ...editing, id };
    save(
      isNew
        ? [...recommendations, record]
        : recommendations.map((r) => (r.id === editing.id ? record : r))
    );
    notifications.show({
      color: "blue",
      message: isNew ? "Recommendation added." : "Recommendation updated.",
    });
    setEditing(null);
  };

  const openNew = () => {
    setEditing(emptyRecommendation());
    setIsNew(true);
  };

  return (
    <>
      <PanelHeader
        title="Recommendations"
        description="Testimonials in the “What it's like to work with me” section, shown in this order."
        action={
          <Button leftSection={<IconPlus size={16} />} onClick={openNew}>
            New recommendation
          </Button>
        }
      />

      {recommendations.length === 0 ? (
        <EmptyState
          title="No recommendations"
          description="The section is skipped entirely while this list is empty."
          action={
            <Button leftSection={<IconPlus size={16} />} onClick={openNew}>
              New recommendation
            </Button>
          }
        />
      ) : (
        <Stack gap={8}>
          {recommendations.map((rec, i) => (
            <ListRow
              key={rec.id}
              index={i}
              title={rec.name}
              subtitle={`${rec.role || "no role"} · ${rec.period || "no period"}`}
              hidden={rec.hidden}
              onToggleHidden={() =>
                save(
                  recommendations.map((r) =>
                    r.id === rec.id ? { ...r, hidden: !r.hidden } : r
                  )
                )
              }
              onEdit={() => {
                setEditing({ ...rec });
                setIsNew(false);
              }}
              onDelete={() => {
                if (window.confirm(`Delete the recommendation from ${rec.name}?`)) {
                  save(recommendations.filter((r) => r.id !== rec.id));
                }
              }}
              onMoveUp={
                i > 0 ? () => save(move(recommendations, i, i - 1)) : undefined
              }
              onMoveDown={
                i < recommendations.length - 1
                  ? () => save(move(recommendations, i, i + 1))
                  : undefined
              }
            />
          ))}
        </Stack>
      )}

      <FormDrawer
        opened={editing !== null}
        onClose={() => setEditing(null)}
        title={isNew ? "New recommendation" : "Edit recommendation"}
        subtitle={editing?.name || undefined}
        onSubmit={commit}
        submitLabel={isNew ? "Add recommendation" : "Save changes"}
      >
        {editing && (
          <Stack gap={28}>
            <FieldGroup label="Who">
              <Group grow>
                <TextInput
                  label="Name"
                  required
                  value={editing.name}
                  onChange={(e) =>
                    setEditing({ ...editing, name: e.currentTarget.value })
                  }
                />
                <TextInput
                  label="Role"
                  placeholder="Project Manager at …"
                  value={editing.role}
                  onChange={(e) =>
                    setEditing({ ...editing, role: e.currentTarget.value })
                  }
                />
              </Group>
              <Group grow>
                <TextInput
                  label="Expertise"
                  value={editing.expertise}
                  onChange={(e) =>
                    setEditing({ ...editing, expertise: e.currentTarget.value })
                  }
                />
                <TextInput
                  label="Period"
                  value={editing.period}
                  onChange={(e) =>
                    setEditing({ ...editing, period: e.currentTarget.value })
                  }
                />
              </Group>
              <TextInput
                label="LinkedIn URL"
                value={editing.linkedin ?? ""}
                onChange={(e) =>
                  setEditing({ ...editing, linkedin: e.currentTarget.value })
                }
              />
            </FieldGroup>

            <FieldGroup label="Testimonial">
              <Textarea
                label="Message"
                required
                autosize
                minRows={8}
                value={editing.message}
                onChange={(e) =>
                  setEditing({ ...editing, message: e.currentTarget.value })
                }
              />
            </FieldGroup>
          </Stack>
        )}
      </FormDrawer>
    </>
  );
}
