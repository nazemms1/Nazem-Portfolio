import { useState } from "react";
import { Badge, Button, Group, Select, Stack, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconPlus } from "@tabler/icons-react";
import type { Experience } from "../../types/portfolio";
import { usePortfolioStore } from "../../store/PortfolioProvider";
import {
  EmptyState,
  FieldGroup,
  FormDrawer,
  ImageField,
  ListRow,
  PanelHeader,
  StringListField,
  move,
} from "../ui";

const typeOptions = [
  { value: "Fulltime", label: "Fulltime" },
  { value: "Freelance", label: "Freelance" },
  { value: "Contract", label: "Contract" },
];

const emptyExperience = (): Experience => ({
  id: "",
  title: "",
  company: "",
  period: "",
  location: "",
  type: "Fulltime",
  description: [],
  logo: "",
  technologies: [],
});

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

      <FormDrawer
        opened={editing !== null}
        onClose={() => setEditing(null)}
        title={isNew ? "New role" : "Edit role"}
        subtitle={editing?.company || undefined}
        onSubmit={commit}
        submitLabel={isNew ? "Add role" : "Save changes"}
      >
        {editing && (
          <Stack gap={28}>
            <FieldGroup label="Position">
              <TextInput
                label="Title"
                required
                value={editing.title}
                onChange={(e) =>
                  setEditing({ ...editing, title: e.currentTarget.value })
                }
              />
              <Group grow>
                <TextInput
                  label="Company"
                  required
                  value={editing.company}
                  onChange={(e) =>
                    setEditing({ ...editing, company: e.currentTarget.value })
                  }
                />
                <Select
                  label="Type"
                  data={typeOptions}
                  value={editing.type}
                  allowDeselect={false}
                  onChange={(value) =>
                    setEditing({
                      ...editing,
                      type: (value ?? "Fulltime") as Experience["type"],
                    })
                  }
                />
              </Group>
              <Group grow>
                <TextInput
                  label="Period"
                  placeholder="Jul 2025 – Present"
                  value={editing.period}
                  onChange={(e) =>
                    setEditing({ ...editing, period: e.currentTarget.value })
                  }
                />
                <TextInput
                  label="Location"
                  value={editing.location}
                  onChange={(e) =>
                    setEditing({ ...editing, location: e.currentTarget.value })
                  }
                />
              </Group>
              <TextInput
                label="Id"
                description="Leave blank to generate one."
                value={editing.id}
                onChange={(e) =>
                  setEditing({ ...editing, id: e.currentTarget.value })
                }
              />
            </FieldGroup>

            <FieldGroup label="Branding">
              <ImageField
                label="Company logo"
                value={editing.logo}
                onChange={(logo) => setEditing({ ...editing, logo })}
                onError={(message) =>
                  notifications.show({ color: "red", message, autoClose: 8000 })
                }
              />
            </FieldGroup>

            <FieldGroup label="Details">
              <StringListField
                label="Responsibilities"
                value={editing.description}
                onChange={(description) => setEditing({ ...editing, description })}
                placeholder="What you did in this role"
              />
              <StringListField
                label="Technologies"
                value={editing.technologies ?? []}
                onChange={(technologies) => setEditing({ ...editing, technologies })}
                placeholder="React"
              />
            </FieldGroup>
          </Stack>
        )}
      </FormDrawer>
    </>
  );
}
