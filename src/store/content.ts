// ── Portfolio content model ─────────────────────────────────────
// One shape holding every piece of editable site data. The modules under
// src/data are the seed (defaults); the dashboard produces overrides that are
// merged on top at runtime.

import type {
  ContactInfo,
  Experience,
  Project,
  Recommendation,
  Skill,
} from "../types/portfolio";
import type { CaseStudy } from "../data/caseStudies";
import {
  contactInfo,
  experiences,
  projects,
  recommendations,
  skills,
} from "../data/portfolioData";
import { caseStudies } from "../data/caseStudies";

export const CONTENT_VERSION = 1;

export interface PortfolioContent {
  version: number;
  updatedAt: string;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  recommendations: Recommendation[];
  caseStudies: CaseStudy[];
  contactInfo: ContactInfo;
}

export type ContentKey = Exclude<keyof PortfolioContent, "version" | "updatedAt">;

const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

/** Content as authored in src/data — the factory reset baseline. */
export function defaultContent(): PortfolioContent {
  return {
    version: CONTENT_VERSION,
    updatedAt: new Date(0).toISOString(),
    experiences: clone(experiences),
    projects: clone(projects),
    skills: clone(skills),
    recommendations: clone(recommendations),
    caseStudies: clone(caseStudies),
    contactInfo: clone(contactInfo),
  };
}

/**
 * Accepts anything (localStorage, an imported file, public/portfolio.json) and
 * returns a valid content object — missing or malformed sections fall back to
 * the seed data instead of blanking the site.
 */
export function normalizeContent(raw: unknown): PortfolioContent {
  const base = defaultContent();
  if (!raw || typeof raw !== "object") return base;
  const input = raw as Partial<PortfolioContent>;

  const list = <T,>(value: unknown, fallback: T[]): T[] =>
    Array.isArray(value) ? (value as T[]) : fallback;

  return {
    version: CONTENT_VERSION,
    updatedAt:
      typeof input.updatedAt === "string" ? input.updatedAt : base.updatedAt,
    experiences: list(input.experiences, base.experiences),
    projects: list(input.projects, base.projects),
    skills: list(input.skills, base.skills),
    recommendations: list(input.recommendations, base.recommendations),
    caseStudies: list(input.caseStudies, base.caseStudies),
    contactInfo:
      input.contactInfo && typeof input.contactInfo === "object"
        ? {
            ...base.contactInfo,
            ...input.contactInfo,
            name: input.contactInfo.name || base.contactInfo.name,
            title: input.contactInfo.title || base.contactInfo.title,
            subtitle: input.contactInfo.subtitle || base.contactInfo.subtitle,
            badge: input.contactInfo.badge || base.contactInfo.badge,
            yearsExperience:
              typeof input.contactInfo.yearsExperience === "number"
                ? input.contactInfo.yearsExperience
                : base.contactInfo.yearsExperience,
            platformsShipped:
              typeof input.contactInfo.platformsShipped === "number"
                ? input.contactInfo.platformsShipped
                : base.contactInfo.platformsShipped,
            teamsLed:
              typeof input.contactInfo.teamsLed === "number"
                ? input.contactInfo.teamsLed
                : base.contactInfo.teamsLed,
            cvUrl: input.contactInfo.cvUrl ?? base.contactInfo.cvUrl,
          }
        : base.contactInfo,
  };
}

/** What the public site renders: hidden entries stripped out. */
export interface PublicContent {
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  recommendations: Recommendation[];
  caseStudies: (CaseStudy & { project: Project })[];
  /** Projects not featured as a case study — the "More work" archive. */
  archiveProjects: Project[];
  contactInfo: ContactInfo;
}

export function toPublicContent(content: PortfolioContent): PublicContent {
  const visible = <T extends { hidden?: boolean }>(items: T[]) =>
    items.filter((item) => !item.hidden);

  const projectList = visible(content.projects);
  const byId = new Map(projectList.map((p) => [p.id, p]));

  const caseStudyList = visible(content.caseStudies)
    .map((cs) => {
      const project = byId.get(cs.projectId);
      return project ? { ...cs, project } : null;
    })
    .filter((cs): cs is CaseStudy & { project: Project } => cs !== null);

  const featuredIds = new Set(caseStudyList.map((cs) => cs.projectId));

  return {
    experiences: visible(content.experiences),
    projects: projectList,
    skills: visible(content.skills),
    recommendations: visible(content.recommendations),
    caseStudies: caseStudyList,
    archiveProjects: projectList.filter((p) => !featuredIds.has(p.id)),
    contactInfo: content.contactInfo,
  };
}
