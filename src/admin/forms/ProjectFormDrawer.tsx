import { Group, Select, Stack, TextInput, Textarea } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import type { Project } from "../../types/portfolio";
import { companyOptions, statusOptions } from "../constants";
import { FieldGroup, FormDrawer, ImageField, StringListField } from "../ui";

export function ProjectFormDrawer({
  editing,
  isNew,
  onClose,
  onChange,
  onSubmit,
}: {
  editing: Project | null;
  isNew: boolean;
  onClose: () => void;
  onChange: (project: Project) => void;
  onSubmit: () => void;
}) {
  if (!editing) return null;

  return (
    <FormDrawer
      opened={editing !== null}
      onClose={onClose}
      title={isNew ? "New project" : "Edit project"}
      subtitle={editing?.title || undefined}
      onSubmit={onSubmit}
      submitLabel={isNew ? "Add project" : "Save changes"}
    >
      <Stack gap={28}>
        <FieldGroup label="Basics">
          <TextInput
            label="Title"
            required
            value={editing.title}
            onChange={(e) => onChange({ ...editing, title: e.currentTarget.value })}
          />
          <Group grow align="flex-start">
            <TextInput
              label="Id"
              description="Used by case studies. Blank generates one from the title."
              value={editing.id}
              onChange={(e) => onChange({ ...editing, id: e.currentTarget.value })}
            />
            <TextInput
              label="Period"
              placeholder="Jan 2026 – Present"
              value={editing.period}
              onChange={(e) => onChange({ ...editing, period: e.currentTarget.value })}
            />
          </Group>
          <Group grow>
            <Select
              label="Company"
              data={companyOptions}
              value={editing.company}
              allowDeselect={false}
              onChange={(value) =>
                onChange({
                  ...editing,
                  company: (value ?? "freelance") as Project["company"],
                })
              }
            />
            <Select
              label="Status"
              data={statusOptions}
              value={editing.status}
              allowDeselect={false}
              onChange={(value) =>
                onChange({
                  ...editing,
                  status: (value ?? "completed") as Project["status"],
                })
              }
            />
          </Group>
          <Textarea
            label="Description"
            autosize
            minRows={4}
            value={editing.description}
            onChange={(e) =>
              onChange({ ...editing, description: e.currentTarget.value })
            }
          />
        </FieldGroup>

        <FieldGroup label="Links">
          <TextInput
            label="Live URL"
            placeholder="https://…  (or # for none)"
            value={editing.demoUrl ?? ""}
            onChange={(e) => onChange({ ...editing, demoUrl: e.currentTarget.value })}
          />
          <TextInput
            label="Repository URL"
            placeholder="https://github.com/…  (or # for none)"
            value={editing.githubUrl ?? ""}
            onChange={(e) => onChange({ ...editing, githubUrl: e.currentTarget.value })}
          />
        </FieldGroup>

        <FieldGroup label="Media">
          <ImageField
            label="Cover image"
            value={editing.image}
            onChange={(image) => onChange({ ...editing, image })}
            onError={(message) =>
              notifications.show({ color: "red", message, autoClose: 8000 })
            }
          />
          <StringListField
            label="Gallery images"
            description="Extra image paths or URLs."
            value={editing.images ?? []}
            onChange={(images) => onChange({ ...editing, images })}
            placeholder="/images/shot.png"
          />
        </FieldGroup>

        <FieldGroup label="Details">
          <StringListField
            label="Features"
            value={editing.features}
            onChange={(features) => onChange({ ...editing, features })}
            placeholder="What the project does"
          />
          <StringListField
            label="Technologies"
            value={editing.technologies}
            onChange={(technologies) => onChange({ ...editing, technologies })}
            placeholder="React"
          />
        </FieldGroup>
      </Stack>
    </FormDrawer>
  );
}
