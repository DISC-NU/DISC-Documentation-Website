import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const discoverProgramSidebar: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
    },
    {
      type: "doc",
      id: "getting-started",
      label: "Getting Started",
    },
    {
      type: "category",
      label: "Frontend",
      items: [
        {
          type: "doc",
          id: "frontend/project-structure",
          label: "Project Structure",
        },
        {
          type: "doc",
          id: "frontend/development",
          label: "Development Guide",
        },
        {
          type: "doc",
          id: "frontend/deployment",
          label: "Deployment",
        },
        {
          type: "doc",
          id: "frontend/contributing",
          label: "Contributing",
        },
      ],
    },
    {
      type: "category",
      label: "Backend",
      items: [
        {
          type: "doc",
          id: "backend/project-structure",
          label: "Project Structure",
        },
        {
          type: "doc",
          id: "backend/development",
          label: "Development Guide",
        },
        {
          type: "doc",
          id: "backend/deployment",
          label: "Deployment",
        },
        {
          type: "doc",
          id: "backend/contributing",
          label: "Contributing",
        },
      ],
    },
    {
      type: "category",
      label: "Project Management",
      items: [
        {
          type: "doc",
          id: "project-management/issue-tracking",
          label: "Issue Tracking",
        },
        {
          type: "doc",
          id: "project-management/pull-requests",
          label: "Pull Requests",
        },
        {
          type: "doc",
          id: "project-management/project-management",
          label: "Branch Protections",
        },
      ],
    },
  ],
};

export default discoverProgramSidebar;
