import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { WhatIBuild } from "../components/sections/WhatIBuild";
import { ProjectsSection } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { Contact } from "../components/sections/Contact";
import { SITE_URL, OG_IMAGE } from "../lib/site";

const TITLE = "Mojeed Automates — AI Systems Architect & Automation Specialist";
const DESCRIPTION =
  "AI agents, RAG systems, and end-to-end automations that replace manual work with systems that run on their own.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mojeed Salisu",
          alternateName: "Mojeed Automates",
          jobTitle: "AI Automation Specialist",
          description: DESCRIPTION,
          url: SITE_URL,
          sameAs: ["https://www.linkedin.com/in/mojeed-salisu-1747b13b5"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Mojeed Automates",
          url: SITE_URL,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Mojeed Automates",
          description: DESCRIPTION,
          url: SITE_URL,
          areaServed: "Worldwide",
          serviceType: [
            "AI Automation",
            "RAG Systems",
            "AI Agents",
            "Workflow Automation",
          ],
          provider: {
            "@type": "Person",
            name: "Mojeed Salisu",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatIBuild />
      <ProjectsSection preview />
      <Skills />
      <Contact formOnly />
    </>
  );
}
