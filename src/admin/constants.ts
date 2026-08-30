import {
  IconBriefcase,
  IconDatabase,
  IconLayoutDashboard,
  IconMessage2,
  IconStack2,
  IconStar,
  IconTools,
  IconUser,
} from "@tabler/icons-react";
import type { Skill } from "../types/portfolio";
import type { NavGroup, RouteKey } from "./types";

export const navGroups: NavGroup[] = [
  {
    label: "Workspace",
    items: [{ key: "overview", label: "Overview", icon: IconLayoutDashboard }],
  },
  {
    label: "Content",
    items: [
      { key: "projects", label: "Projects", icon: IconStack2 },
      { key: "case-studies", label: "Selected work", icon: IconStar },
      { key: "experience", label: "Experience", icon: IconBriefcase },
      { key: "skills", label: "Skills", icon: IconTools },
      { key: "recommendations", label: "Recommendations", icon: IconMessage2 },
    ],
  },
  {
    label: "Settings",
    items: [
      { key: "contact", label: "Contact details", icon: IconUser },
      { key: "data", label: "Data & publishing", icon: IconDatabase },
    ],
  },
];

export const routeTitles: Record<RouteKey, string> = {
  overview: "Overview",
  projects: "Projects",
  "case-studies": "Selected work",
  experience: "Experience",
  skills: "Skills",
  recommendations: "Recommendations",
  contact: "Contact details",
  data: "Data & publishing",
};

export const companyOptions = [
  { value: "pharaon", label: "Pharaon Group" },
  { value: "soutify", label: "Soutify" },
  { value: "freelance", label: "Freelance" },
];

export const statusOptions = [
  { value: "completed", label: "Completed" },
  { value: "in-progress", label: "In progress" },
  { value: "planned", label: "Planned" },
];

export const experienceTypeOptions = [
  { value: "Fulltime", label: "Fulltime" },
  { value: "Freelance", label: "Freelance" },
  { value: "Contract", label: "Contract" },
];

export const skillCategories: { value: Skill["category"]; label: string }[] = [
  { value: "frontend", label: "Frontend Architecture" },
  { value: "mobile", label: "Mobile & Cross-Platform" },
  { value: "backend", label: "Backend & Platform" },
  { value: "tools", label: "Process & Tooling" },
  { value: "soft-skills", label: "Ways of Working" },
];
