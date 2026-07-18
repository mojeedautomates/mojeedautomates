import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";
import { projects } from "../../lib/projects-data";

type Props = {
  /** Home page: limit to 4 desktop / 3 mobile, show "see more" link */
  preview?: boolean;
};

export function ProjectsSection({ preview = false }: Props) {
  const list = preview ? projects.slice(0, 4) : projects;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#7B5EA7]">
            {preview ? "Featured Work" : "Projects"}
          </div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Automation That Actually{" "}
            <span className="text-[#7B5EA7]">Runs The Business.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            How Automation Solved Real World Business Problems.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {list.map((p, i) => (
          <Reveal
            key={p.id}
            delay={i * 60}
            className={preview && i === 3 ? "hidden md:block" : ""}
          >
            <Link
              to="/projects/$id"
              params={{ id: p.id }}
              className="group block h-full rounded-3xl overflow-hidden border border-border bg-card hover:shadow-elegant hover:border-primary/40 transition-all"
            >
              <div className="aspect-[16/10] relative overflow-hidden flex items-center justify-center p-6 bg-card">
                <img
                  src={p.cover}
                  alt={`${p.title} workflow diagram`}
                  className="w-full h-full object-contain"
                  style={{ filter: "invert(0.92) hue-rotate(180deg)" }}
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t: string) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  View Project
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {preview && (
        <Reveal>
          <div className="mt-12 flex justify-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:border-primary/40 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              See more projects
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </Reveal>
      )}
    </section>
  );
}
