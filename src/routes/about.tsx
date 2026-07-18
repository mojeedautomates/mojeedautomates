import { createFileRoute } from "@tanstack/react-router";
import { About } from "../components/sections/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mojeed Automates" },
      { name: "description", content: "About Mojeed Salisu — AI Automation Specialist building systems that keep businesses running." },
      { property: "og:title", content: "About — Mojeed Automates" },
      { property: "og:description", content: "About Mojeed Salisu — AI Automation Specialist." },
    ],
  }),
  component: () => (
    <div className="pt-16">
      <About />
    </div>
  ),
});
