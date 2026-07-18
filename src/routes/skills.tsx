import { createFileRoute } from "@tanstack/react-router";
import { Skills } from "../components/sections/Skills";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Mojeed Automates" },
      { name: "description", content: "The stack behind the systems — automation tools, AI models, and delivery process." },
      { property: "og:title", content: "Skills — Mojeed Automates" },
      { property: "og:description", content: "Tools, models, and process behind the automations." },
    ],
  }),
  component: () => (
    <div className="pt-16">
      <Skills />
    </div>
  ),
});
