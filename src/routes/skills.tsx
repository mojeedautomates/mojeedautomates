import { createFileRoute } from "@tanstack/react-router";
import { Skills } from "../components/sections/Skills";
import { SITE_URL, OG_IMAGE } from "../lib/site";

const TITLE = "Skills — Mojeed Automates";
const DESCRIPTION = "The stack behind the systems — automation tools, AI models, and delivery process.";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL + "/skills" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/skills" }],
  }),
  component: () => (
    <div className="pt-16">
      <Skills />
    </div>
  ),
});
