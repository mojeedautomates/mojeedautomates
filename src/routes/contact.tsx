import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "../components/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mojeed Automates" },
      { name: "description", content: "Get in touch to automate the workflows eating your week." },
      { property: "og:title", content: "Contact — Mojeed Automates" },
      { property: "og:description", content: "Reach out about AI automation projects." },
    ],
  }),
  component: () => (
    <div className="pt-16">
      <Contact />
    </div>
  ),
});
