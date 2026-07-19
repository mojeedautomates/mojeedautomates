import { createFileRoute } from "@tanstack/react-router";
import { About } from "../components/sections/About";
import { SITE_URL } from "../lib/site";

const TITLE = "About — Mojeed Automates";
const DESCRIPTION = "About Mojeed Salisu — AI Automation Specialist building systems that keep businesses running.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL + "/about" },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/about" }],
  }),
  component: () => (
    <div className="pt-16">
      <About />
    </div>
  ),
});
