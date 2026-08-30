import { Group, Stack, TextInput, Textarea } from "@mantine/core";
import type { Recommendation } from "../../types/portfolio";
import { FieldGroup, FormDrawer } from "../ui";

export function RecommendationFormDrawer({
  editing,
  isNew,
  onClose,
  onChange,
  onSubmit,
}: {
  editing: Recommendation | null;
  isNew: boolean;
  onClose: () => void;
  onChange: (rec: Recommendation) => void;
  onSubmit: () => void;
}) {
  if (!editing) return null;

  return (
    <FormDrawer
      opened={editing !== null}
      onClose={onClose}
      title={isNew ? "New recommendation" : "Edit recommendation"}
      subtitle={editing?.name || undefined}
      onSubmit={onSubmit}
      submitLabel={isNew ? "Add recommendation" : "Save changes"}
    >
      <Stack gap={28}>
        <FieldGroup label="Who">
          <Group grow>
            <TextInput
              label="Name"
              required
              value={editing.name}
              onChange={(e) => onChange({ ...editing, name: e.currentTarget.value })}
            />
            <TextInput
              label="Role"
              placeholder="Project Manager at …"
              value={editing.role}
              onChange={(e) => onChange({ ...editing, role: e.currentTarget.value })}
            />
          </Group>
          <Group grow>
            <TextInput
              label="Expertise"
              value={editing.expertise}
              onChange={(e) => onChange({ ...editing, expertise: e.currentTarget.value })}
            />
            <TextInput
              label="Period"
              value={editing.period}
              onChange={(e) => onChange({ ...editing, period: e.currentTarget.value })}
            />
          </Group>
          <TextInput
            label="LinkedIn URL"
            value={editing.linkedin ?? ""}
            onChange={(e) => onChange({ ...editing, linkedin: e.currentTarget.value })}
          />
        </FieldGroup>

        <FieldGroup label="Testimonial">
          <Textarea
            label="Message"
            required
            autosize
            minRows={8}
            value={editing.message}
            onChange={(e) => onChange({ ...editing, message: e.currentTarget.value })}
          />
        </FieldGroup>
      </Stack>
    </FormDrawer>
  );
}
