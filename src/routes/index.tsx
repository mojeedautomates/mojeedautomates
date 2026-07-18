import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { WhatIBuild } from "../components/sections/WhatIBuild";
import { ProjectsSection } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { Contact } from "../components/sections/Contact";

export const Route = createFileRoute("/")({
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
