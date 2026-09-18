import { Check, FileText } from "lucide-react";
import { Reveal } from "../Reveal";
import { ResponsiveImage } from "../ResponsiveImage";
const profileAsset = "/assets/portrait.png?v=1";
import resumeAsset from "../../assets/docs/Rem_Resume.pdf.asset.json";

const highlights = [
  "Built Reliable, Production Grade Automation Workflows",
  "End to End Systems That Work Around the Clock",
  "Smart Automation that helps Businesses Save Time & Reduce Manual Work",
];

const values = [
  {
    title: "Mapped Before It's Built",
    body: "Before building a single workflow, every process gets mapped from start to finish, so what's delivered holds up in production and scales as you grow, not just looks good in a demo.",
  },
  {
    title: "Transparent by Design",
    body: "You'll always understand what's automated and how to change it later if you need to.",
  },
  {
    title: "Tested Under Real Conditions",
    body: "Every system gets checked under real conditions before you ever have to rely on it.",
  },
  {
    title: "Delivered on Schedule",
    body: "Deadlines are treated as commitments. You'll always know where things stand.",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-10 lg:grid-cols-[340px_1fr] items-start">
        <Reveal>
          <div className="lg:sticky lg:top-24">
            <div className="aspect-square rounded-3xl overflow-hidden border border-border shadow-elegant bg-[#0E0B14] grid place-items-center">
              <ResponsiveImage
                src={profileAsset}
                alt="Mojeed Salisu"
                sizes="340px"
                className="w-full h-full object-cover"
              />
            </div>
            <a
              href={resumeAsset.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 w-full rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:border-primary/40 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <FileText size={14} /> View Resume
            </a>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#7B5EA7]">
              About Me
            </div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              I'm <span className="text-gradient-gold">Mojeed Salisu</span>
            </h2>
          </Reveal>

          <div className="mt-8 space-y-6">
            <Reveal delay={80}>
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm an AI Automation Specialist helping businesses replace manual,
                repetitive work with intelligent systems that run on their own. My work
                spans lead capture and auto follow up workflows, AI agents for automated
                customer interaction, and end to end automations across RAG pipelines,
                agentic systems, and voice agents.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-base leading-relaxed text-muted-foreground">
                What sets my work apart is a focus on systems that keep working under
                real conditions and drive positive ROI for businesses. I build with
                longevity in mind. Every system is designed to reduce manual work and
                keep operations running without constant oversight.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-6 grid gap-3">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3"
                  >
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-primary/20 grid place-items-center">
                      <Check size={14} className="text-primary" />
                    </span>
                    <span className="text-sm font-medium">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Working style */}
      <div className="mt-24 text-center">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#7B5EA7]">
              What You Can Expect
            </div>
            <h3 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              How I Work With <span className="text-[#7B5EA7]">Every Client</span>
            </h3>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 text-left">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 hover:border-primary/40 hover:shadow-elegant transition-all">
                <div className="text-sm font-semibold text-gradient-gold tracking-widest uppercase">
                  0{i + 1}
                </div>
                <h4 className="mt-3 text-xl font-semibold">{v.title}</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
