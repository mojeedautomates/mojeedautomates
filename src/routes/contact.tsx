import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "../components/sections/Contact";
import { SITE_URL, OG_IMAGE } from "../lib/site";

const TITLE = "Contact — Mojeed Automates";
const DESCRIPTION = "Get in touch to automate the workflows eating your week.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL + "/contact" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/contact" }],
  }),
  component: () => (
    <div className="pt-16">
      <Contact />
    </div>
  ),
});
