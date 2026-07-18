import { createFileRoute } from "@tanstack/react-router";
import { ProjectsSection } from "../components/sections/Projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Mojeed Automates" },
      { name: "description", content: "A portfolio of AI agents, RAG systems, and end-to-end automations built for real teams." },
      { property: "og:title", content: "Projects — Mojeed Automates" },
      { property: "og:description", content: "Selected AI automation projects." },
    ],
  }),
  component: () => (
    <div className="pt-16">
      <ProjectsSection />
    </div>
  ),
});
