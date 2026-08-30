import type { Icon as TablerIcon } from "@tabler/icons-react";

export type RouteKey =
  | "overview"
  | "projects"
  | "case-studies"
  | "experience"
  | "skills"
  | "recommendations"
  | "contact"
  | "data";

export interface NavItemConfig {
  key: RouteKey;
  label: string;
  icon: TablerIcon;
}

export interface NavGroup {
  label: string;
  items: NavItemConfig[];
}
