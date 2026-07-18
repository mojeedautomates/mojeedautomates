import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-gradient-hero"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(0.55 0.14 300 / 0.35), transparent 45%), radial-gradient(circle at 80% 60%, oklch(0.45 0.16 295 / 0.35), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1 text-xs font-medium text-foreground">
            <Sparkles size={12} style={{ color: "#7B5EA7" }} />
            AI-Powered Automation Systems
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.02]">
            AI Systems Architect &{" "}
            <span className="text-gradient-gold">Automation Specialist</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I build AI agents, custom RAG systems, and end-to-end automations for
            businesses drowning in manual work — connecting their tools, data, and
            workflows into one system that runs on its own.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:shadow-glow transition-all"
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
