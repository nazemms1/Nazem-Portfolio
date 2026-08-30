import { useState } from "react";
import { Button, Stack } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconPlus } from "@tabler/icons-react";
import { usePortfolioStore } from "../../store/PortfolioProvider";
import type { Recommendation } from "../../types/portfolio";
import { RecommendationFormDrawer } from "../forms/RecommendationFormDrawer";
import { EmptyState, ListRow, PanelHeader } from "../ui";
import { emptyRecommendation, move } from "../utils/adminHelpers";

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

      <RecommendationFormDrawer
        editing={editing}
        isNew={isNew}
        onClose={() => setEditing(null)}
        onChange={setEditing}
        onSubmit={commit}
      />
    </>
  );
}
