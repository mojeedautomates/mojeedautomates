import { createFileRoute } from "@tanstack/react-router";
import { About } from "../components/sections/About";
import { SITE_URL, OG_IMAGE } from "../lib/site";

const TITLE = "About Mojeed Salisu | Business Automation Specialist";
const DESCRIPTION = "Meet Mojeed Salisu and learn about his practical approach to improving everyday business workflows.";

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
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/about" }],
  }),
  component: () => (
    <div className="pt-16">
      <About />
    </div>
  ),
});
