import { createFileRoute } from "@tanstack/react-router";
import { ProjectsSection } from "../components/sections/Projects";
import { SITE_URL, OG_IMAGE } from "../lib/site";

const TITLE = "Projects — Mojeed Automates";
const DESCRIPTION = "A portfolio of AI agents, RAG systems, and end-to-end automations built for real teams.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL + "/projects" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/projects" }],
  }),
  component: () => (
    <div className="pt-16">
      <ProjectsSection />
    </div>
  ),
});
