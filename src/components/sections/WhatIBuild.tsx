import { Bot, Database, Workflow, Users } from "lucide-react";
import { Reveal } from "../Reveal";

export function WhatIBuild() {
  const items = [
    {
      icon: Bot,
      title: "AI Agents",
      body: "Autonomous agents that qualify leads, answer support, and take real action across your tools.",
    },
    {
      icon: Database,
      title: "RAG Pipelines",
      body: "Custom knowledge systems trained on your docs, tickets, and SOPs with citations, not guesses.",
    },
    {
      icon: Workflow,
      title: "End-to-End Automations",
      body: "Multi step workflows connecting your CRM, forms, calendars, and databases into one system.",
    },
    {
      icon: Users,
      title: "Lead Generation Systems",
      body: "Inbound and outbound lead engines that capture, enrich, qualify, and follow up automatically.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <Reveal>
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#7B5EA7]">
            What I Build
          </div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Systems That Quietly <span className="text-[#7B5EA7]">Run The Business.</span>
          </h2>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((f, i) => (
          <Reveal key={f.title} delay={i * 80}>
            <div className="group h-full rounded-2xl border border-border bg-card p-7 hover:border-primary/40 hover:shadow-elegant transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <f.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
