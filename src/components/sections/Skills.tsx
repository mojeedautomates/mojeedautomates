import {
  Bot,
  Database,
  GitBranch,
  Users,
  Calendar,
  Cog,
  Wrench,
  Cpu,
  Code2,
  Link as LinkIcon,
  ClipboardList,
  ShieldCheck,
  FileText,
  LifeBuoy,
  CalendarClock,
  Zap,
  Layers,
} from "lucide-react";
import { Reveal } from "../Reveal";

const automationWorkflows = [
  { name: "AI Agents", icon: Bot },
  { name: "RAG Pipelines", icon: Database },
  { name: "End-to-end Workflow Architecture", icon: GitBranch },
  { name: "Lead Generation Systems", icon: Users },
  { name: "Appointment Booking & Reminders", icon: Calendar },
  { name: "Business Process Automation", icon: Cog },
];

const toolsGroups = [
  { subheading: "Tools", icon: Wrench, items: ["n8n", "Make.com", "Zapier"] },
  {
    subheading: "Data & Storage",
    icon: Database,
    items: ["Airtable", "Supabase", "Google Sheets", "Monday.com"],
  },
  {
    subheading: "AI Models & APIs",
    icon: Cpu,
    items: ["OpenAI", "Claude (Anthropic)", "Gemini"],
  },
  { subheading: "Development", icon: Code2, items: ["JavaScript", "Python", "HTML", "CSS"] },
  {
    subheading: "Integration",
    icon: LinkIcon,
    items: ["REST APIs & Webhooks", "OAuth / API Authentication"],
  },
];

const delivery = [
  { name: "Process Mapping & Discovery", icon: ClipboardList },
  { name: "Testing & QA", icon: ShieldCheck },
  { name: "Documentation & Handover", icon: FileText },
  { name: "Ongoing Support & Iteration", icon: LifeBuoy },
  { name: "Timeline & Milestone Planning", icon: CalendarClock },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#7B5EA7]">
            Skills
          </div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            The Stack Behind The <span className="text-gradient-gold">Systems.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            A focused toolkit chosen for reliability, not novelty — everything here has
            been battle-tested in production.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <Reveal>
          <div className="h-full rounded-2xl border border-border bg-card p-7">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary grid place-items-center">
                <Zap size={20} />
              </div>
              <h3 className="text-lg font-semibold">Automation Workflows</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {automationWorkflows.map((s) => (
                <li
                  key={s.name}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background/40 px-3 py-2.5"
                >
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
                    <s.icon size={16} />
                  </span>
                  <span className="text-sm font-medium">{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="h-full rounded-2xl border border-border bg-card p-7">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary grid place-items-center">
                <Layers size={20} />
              </div>
              <h3 className="text-lg font-semibold">Tools & Technologies</h3>
            </div>
            <div className="mt-6 space-y-5">
              {toolsGroups.map((g) => (
                <div key={g.subheading}>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground/90">
                    <g.icon size={14} className="text-primary" />
                    {g.subheading}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium border border-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="h-full rounded-2xl border border-border bg-card p-7">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary grid place-items-center">
                <ClipboardList size={20} />
              </div>
              <h3 className="text-lg font-semibold">Delivery & Process</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {delivery.map((s) => (
                <li
                  key={s.name}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background/40 px-3 py-2.5"
                >
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
                    <s.icon size={16} />
                  </span>
                  <span className="text-sm font-medium">{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
