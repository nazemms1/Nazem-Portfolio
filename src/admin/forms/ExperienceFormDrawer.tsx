import { Group, Select, Stack, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import type { Experience } from "../../types/portfolio";
import { experienceTypeOptions } from "../constants";
import { FieldGroup, FormDrawer, ImageField, StringListField } from "../ui";

export function ExperienceFormDrawer({
  editing,
  isNew,
  onClose,
  onChange,
  onSubmit,
}: {
  editing: Experience | null;
  isNew: boolean;
  onClose: () => void;
  onChange: (exp: Experience) => void;
  onSubmit: () => void;
}) {
  if (!editing) return null;

  return (
    <FormDrawer
      opened={editing !== null}
      onClose={onClose}
      title={isNew ? "New role" : "Edit role"}
      subtitle={editing?.company || undefined}
      onSubmit={onSubmit}
      submitLabel={isNew ? "Add role" : "Save changes"}
    >
      <Stack gap={28}>
        <FieldGroup label="Position">
          <TextInput
            label="Title"
            required
            value={editing.title}
            onChange={(e) => onChange({ ...editing, title: e.currentTarget.value })}
          />
          <Group grow>
            <TextInput
              label="Company"
              required
              value={editing.company}
              onChange={(e) => onChange({ ...editing, company: e.currentTarget.value })}
            />
            <Select
              label="Type"
              data={experienceTypeOptions}
              value={editing.type}
              allowDeselect={false}
              onChange={(value) =>
                onChange({
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
              onChange={(e) => onChange({ ...editing, period: e.currentTarget.value })}
            />
            <TextInput
              label="Location"
              value={editing.location}
              onChange={(e) => onChange({ ...editing, location: e.currentTarget.value })}
            />
          </Group>
          <TextInput
            label="Id"
            description="Leave blank to generate one."
            value={editing.id}
            onChange={(e) => onChange({ ...editing, id: e.currentTarget.value })}
          />
        </FieldGroup>

        <FieldGroup label="Branding">
          <ImageField
            label="Company logo"
            value={editing.logo}
            onChange={(logo) => onChange({ ...editing, logo })}
            onError={(message) =>
              notifications.show({ color: "red", message, autoClose: 8000 })
            }
          />
        </FieldGroup>

        <FieldGroup label="Details">
          <StringListField
            label="Responsibilities"
            value={editing.description}
            onChange={(description) => onChange({ ...editing, description })}
            placeholder="What you did in this role"
          />
          <StringListField
            label="Technologies"
            value={editing.technologies ?? []}
            onChange={(technologies) => onChange({ ...editing, technologies })}
            placeholder="React"
          />
        </FieldGroup>
      </Stack>
    </FormDrawer>
  );
}
