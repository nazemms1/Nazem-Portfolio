// Curated flagship case studies for the "Selected Work" section.
// Metrics marked (est.) are reasonable estimates drawn from project scope in
// portfolioData.ts, not measured analytics — verify/replace before publishing.

import { projects } from "./portfolioData";

export interface CaseStudy {
  projectId: string;
  role: string;
  problem: string;
  approach: string;
  outcome: string;
  metrics: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    projectId: "askonnect",
    role: "Frontend Lead",
    problem:
      "ASKON needed a members-only B2B trading platform where suppliers and buyers could transact with full association oversight — real-time messaging, order lifecycle tracking, and dispute resolution, all under strict trust and compliance requirements.",
    approach:
      "Architected the frontend around a WebSocket-driven messaging layer decoupled from the REST order/catalog flows, with Redux managing cross-cutting state (auth, notifications, live conversations) so feature teams could build screens without re-deriving real-time logic.",
    outcome:
      "Shipped a platform now in active use for supplier-buyer transactions with full trade-guarantee and country-level business support workflows live in production.",
    metrics: [
      { label: "Core modules shipped", value: "10+" },
      { label: "Real-time channels", value: "WebSocket" },
    ],
  },
  {
    projectId: "pyramind",
    role: "Frontend Engineer",
    problem:
      "Agile teams at Pharaon Group needed a project management platform to replace ad-hoc tracking — sprint planning, backlog management, and cross-functional visibility, without the overhead of a heavyweight third-party tool.",
    approach:
      "Built the interaction model around drag-and-drop backlog and sprint boards with optimistic UI updates, and structured role-based access (admin / PM / member) at the routing and component level to keep permission logic out of business components.",
    outcome:
      "Delivered a production platform (Jul 2025 – Apr 2026, 9-month build) supporting full Scrum workflows — sprint planning through retrospectives — now used to run the team's own delivery cycle.",
    metrics: [
      { label: "Build duration", value: "9 mo" },
      { label: "Workflow stages covered", value: "Full Scrum cycle" },
    ],
  },
  {
    projectId: "glovent-events",
    role: "Team Lead",
    problem:
      "Glovent, an event agency with 20+ years and 900+ delivered events, needed a bilingual (AR/EN) site that could credibly represent institutional and government-scale work — a segment where a generic template would undercut trust.",
    approach:
      "Led the frontend team through delivery: set the component and i18n/RTL architecture up front so Arabic and English could ship from one codebase without duplicated layout logic, then ran review to keep visual consistency across six service pages.",
    outcome:
      "Site shipped live at glovent-events.com serving both languages with full RTL support, now the agency's primary channel for institutional client acquisition.",
    metrics: [
      { label: "Languages shipped", value: "AR / EN" },
      { label: "Service pages", value: "6" },
    ],
  },
  {
    projectId: "sentiment-analysis-platform",
    role: "Frontend Engineer",
    problem:
      "Soutify needed a frontend for a multilingual sentiment-analysis product powered by transformer/LLM models — non-technical analysts had to interact with model output and social data without touching the underlying ML complexity.",
    approach:
      "Designed the dashboard layer to treat model inference as an async data source behind a normal loading/error/data contract, so the visualization components stayed simple regardless of which model or language pipeline was behind them.",
    outcome:
      "Platform shipped at app.lup.sa, giving non-technical users real-time sentiment insight across Arabic and English social content.",
    metrics: [
      { label: "Languages supported", value: "AR / EN" },
      { label: "Data source", value: "Real-time social feed" },
    ],
  },
];

export const caseStudyProjects = caseStudies.map((cs) => ({
  ...cs,
  project: projects.find((p) => p.id === cs.projectId)!,
}));
