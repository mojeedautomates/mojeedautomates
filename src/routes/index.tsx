import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { WhatIBuild } from "../components/sections/WhatIBuild";
import { ProjectsSection } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { Contact } from "../components/sections/Contact";

const SITE_URL = "https://mojeed-automates-space.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mojeed Automates — AI Systems Architect & Automation Specialist" },
      { name: "description", content: "AI agents, RAG systems, and end-to-end automations that replace manual work with systems that run on their own." },
      { property: "og:title", content: "Mojeed Automates — AI Systems Architect & Automation Specialist" },
      { property: "og:description", content: "AI agents, RAG systems, and end-to-end automations that replace manual work with systems that run on their own." },
      { property: "og:url", content: SITE_URL + "/" },
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
          url: SITE_URL,
          sameAs: ["https://www.linkedin.com/in/mojeed-salisu-1747b13b5"],
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
