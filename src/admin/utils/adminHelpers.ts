import type { CaseStudy } from "../../data/caseStudies";
import type { Experience, Project, Recommendation } from "../../types/portfolio";

/** Reorder helper shared by list panels. */
export function move<T>(items: T[], from: number, to: number): T[] {
  if (to < 0 || to >= items.length) return items;
  const next = [...items];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

export const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48) || `project-${Date.now()}`;

export const emptyProject = (): Project => ({
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

export const emptyCaseStudy = (): CaseStudy => ({
  projectId: "",
  role: "",
  problem: "",
  approach: "",
  outcome: "",
  metrics: [],
});

export const emptyExperience = (): Experience => ({
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

export const emptyRecommendation = (): Recommendation => ({
  id: "",
  name: "",
  role: "",
  expertise: "",
  period: "",
  message: "",
  linkedin: "",
});

export const defaultHeroContact = {
  name: "Nazem Almsouti",
  title: "Frontend Engineer.",
  subtitle: "Pharaon Group · React & TypeScript",
  badge: "Available for select projects",
  yearsExperience: 4,
  platformsShipped: 15,
  teamsLed: 3,
  cvUrl: "",
};
