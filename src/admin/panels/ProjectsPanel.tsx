import { useMemo, useState } from "react";
import {
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
import { IconPlus } from "@tabler/icons-react";
import type { Project } from "../../types/portfolio";
import { usePortfolioStore } from "../../store/PortfolioProvider";
import {
  EmptyState,
  FieldGroup,
  FilterChips,
  FormDrawer,
  ImageField,
  ListRow,
  PanelHeader,
  StringListField,
  Toolbar,
  move,
} from "../ui";
import { AD } from "../tokens";

const companyOptions = [
  { value: "pharaon", label: "Pharaon Group" },
  { value: "soutify", label: "Soutify" },
  { value: "freelance", label: "Freelance" },
];

const statusOptions = [
  { value: "completed", label: "Completed" },
  { value: "in-progress", label: "In progress" },
  { value: "planned", label: "Planned" },
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48) || `project-${Date.now()}`;

const emptyProject = (): Project => ({
  id: "",
  title: "",
  period: "",
  description: "",
  features: [],
  technologies: [],
  image: "",
  images: [],
  demoUrl: "",
  githubUrl: "",
  status: "completed",
  company: "freelance",
});

type CompanyFilter = "all" | Project["company"];

export default function ProjectsPanel() {
  const { content, updateSection } = usePortfolioStore();
  const projects = content.projects;

  const [editing, setEditing] = useState<Project | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [search, setSearch] = useState("");
  const [company, setCompany] = useState<CompanyFilter>("all");

  const save = (next: Project[]) => updateSection("projects", next);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return projects
      .map((project, index) => ({ project, index }))
      .filter(({ project }) => company === "all" || project.company === company)
      .filter(({ project }) =>
        term
          ? [project.title, project.id, project.period, ...project.technologies]
              .join(" ")
              .toLowerCase()
              .includes(term)
          : true
      );
  }, [projects, search, company]);

  const commit = () => {
    if (!editing) return;
    const title = editing.title.trim();
    if (!title) {
      notifications.show({ color: "red", message: "A project needs a title." });
      return;
    }
    const id = (editing.id || slugify(title)).trim();
    if (isNew && projects.some((p) => p.id === id)) {
      notifications.show({
        color: "red",
        message: `The id "${id}" is already used by another project.`,
      });
      return;
    }
    const record: Project = { ...editing, id, title };
    save(
      isNew
        ? [...projects, record]
        : projects.map((p) => (p.id === editing.id ? record : p))
    );
    notifications.show({
      color: "blue",
      message: isNew ? "Project added." : "Project updated.",
    });
    setEditing(null);
  };

  const remove = (project: Project) => {
    const usedByCaseStudy = content.caseStudies.some(
      (cs) => cs.projectId === project.id
    );
    const warning = usedByCaseStudy
      ? "\n\nIt is also featured as a case study — that case study will stop rendering."
      : "";
    if (!window.confirm(`Delete "${project.title}"?${warning}`)) return;
    save(projects.filter((p) => p.id !== project.id));
  };

  const openNew = () => {
    setEditing(emptyProject());
    setIsNew(true);
  };

  const countFor = (key: CompanyFilter) =>
    key === "all"
      ? projects.length
      : projects.filter((p) => p.company === key).length;

  return (
    <>
      <PanelHeader
        title="Projects"
        description="Every project in the archive. Toggle a project off to keep it stored without showing it on the site."
        action={
          <Button leftSection={<IconPlus size={16} />} onClick={openNew}>
            New project
          </Button>
        }
      />

      <Toolbar
        search={search}
        onSearch={setSearch}
        placeholder="Search title, id, tech…"
        right={
          <Text size="xs" c={AD.textFaint}>
            {filtered.length} of {projects.length}
          </Text>
        }
      >
        <FilterChips<CompanyFilter>
          value={company}
          onChange={setCompany}
          options={[
            { value: "all", label: "All", count: countFor("all") },
            { value: "pharaon", label: "Pharaon", count: countFor("pharaon") },
            { value: "soutify", label: "Soutify", count: countFor("soutify") },
            { value: "freelance", label: "Freelance", count: countFor("freelance") },
          ]}
        />
      </Toolbar>

      {filtered.length === 0 ? (
        <EmptyState
          title={projects.length === 0 ? "No projects yet" : "Nothing matches"}
          description={
            projects.length === 0
              ? "Add your first project — it shows up in the archive immediately."
              : "Try a different search term or filter."
          }
          action={
            projects.length === 0 ? (
              <Button leftSection={<IconPlus size={16} />} onClick={openNew}>
                New project
              </Button>
            ) : undefined
          }
        />
      ) : (
        <Stack gap={8}>
          {filtered.map(({ project, index }) => (
            <ListRow
              key={project.id}
              index={index}
              thumbnail={project.image}
              title={project.title}
              subtitle={`${project.id} · ${project.period || "no period"}`}
              badges={
                <>
                  <Badge size="xs" variant="light">
                    {companyOptions.find((c) => c.value === project.company)?.label ??
                      project.company}
                  </Badge>
                  <Badge
                    size="xs"
                    variant="light"
                    color={project.status === "completed" ? "teal" : "yellow"}
                  >
                    {statusOptions.find((s) => s.value === project.status)?.label ??
                      project.status}
                  </Badge>
                  {project.technologies.slice(0, 3).map((t) => (
                    <Badge key={t} size="xs" variant="outline" color="gray">
                      {t}
                    </Badge>
                  ))}
                </>
              }
              hidden={project.hidden}
              onToggleHidden={() =>
                save(
                  projects.map((p) =>
                    p.id === project.id ? { ...p, hidden: !p.hidden } : p
                  )
                )
              }
              onEdit={() => {
                setEditing({ ...project });
                setIsNew(false);
              }}
              onDelete={() => remove(project)}
              onMoveUp={
                index > 0 ? () => save(move(projects, index, index - 1)) : undefined
              }
              onMoveDown={
                index < projects.length - 1
                  ? () => save(move(projects, index, index + 1))
                  : undefined
              }
            />
          ))}
        </Stack>
      )}

      <FormDrawer
        opened={editing !== null}
        onClose={() => setEditing(null)}
        title={isNew ? "New project" : "Edit project"}
        subtitle={editing?.title || undefined}
        onSubmit={commit}
        submitLabel={isNew ? "Add project" : "Save changes"}
      >
        {editing && (
          <Stack gap={28}>
            <FieldGroup label="Basics">
              <TextInput
                label="Title"
                required
                value={editing.title}
                onChange={(e) =>
                  setEditing({ ...editing, title: e.currentTarget.value })
                }
              />
              <Group grow align="flex-start">
                <TextInput
                  label="Id"
                  description="Used by case studies. Blank generates one from the title."
                  value={editing.id}
                  onChange={(e) =>
                    setEditing({ ...editing, id: e.currentTarget.value })
                  }
                />
                <TextInput
                  label="Period"
                  placeholder="Jan 2026 – Present"
                  value={editing.period}
                  onChange={(e) =>
                    setEditing({ ...editing, period: e.currentTarget.value })
                  }
                />
              </Group>
              <Group grow>
                <Select
                  label="Company"
                  data={companyOptions}
                  value={editing.company}
                  allowDeselect={false}
                  onChange={(value) =>
                    setEditing({
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
                    setEditing({
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
                  setEditing({ ...editing, description: e.currentTarget.value })
                }
              />
            </FieldGroup>

            <FieldGroup label="Links">
              <TextInput
                label="Live URL"
                placeholder="https://…  (or # for none)"
                value={editing.demoUrl ?? ""}
                onChange={(e) =>
                  setEditing({ ...editing, demoUrl: e.currentTarget.value })
                }
              />
              <TextInput
                label="Repository URL"
                placeholder="https://github.com/…  (or # for none)"
                value={editing.githubUrl ?? ""}
                onChange={(e) =>
                  setEditing({ ...editing, githubUrl: e.currentTarget.value })
                }
              />
            </FieldGroup>

            <FieldGroup label="Media">
              <ImageField
                label="Cover image"
                value={editing.image}
                onChange={(image) => setEditing({ ...editing, image })}
                onError={(message) =>
                  notifications.show({ color: "red", message, autoClose: 8000 })
                }
              />
              <StringListField
                label="Gallery images"
                description="Extra image paths or URLs."
                value={editing.images ?? []}
                onChange={(images) => setEditing({ ...editing, images })}
                placeholder="/images/shot.png"
              />
            </FieldGroup>

            <FieldGroup label="Details">
              <StringListField
                label="Features"
                value={editing.features}
                onChange={(features) => setEditing({ ...editing, features })}
                placeholder="What the project does"
              />
              <StringListField
                label="Technologies"
                value={editing.technologies}
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
