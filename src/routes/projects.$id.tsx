import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Target, Cog, Sparkles, TrendingUp, Maximize2, Share2, Check as CheckIcon } from "lucide-react";
import { projects } from "../lib/projects-data";
import { Reveal } from "../components/Reveal";
import { Lightbox } from "../components/Lightbox";
import { SITE_URL } from "../lib/site";

export const Route = createFileRoute("/projects/$id")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.id);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Mojeed Automates" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const url = `${SITE_URL}/projects/${params.id}`;
    return {
      meta: [
        { title: `${loaderData.project.title} — Mojeed Automates` },
        { name: "description", content: loaderData.project.description },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: loaderData.project.title },
        { property: "og:description", content: loaderData.project.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: loaderData.project.title },
        { name: "twitter:description", content: loaderData.project.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: loaderData.project.title,
            description: loaderData.project.description,
            url,
            keywords: loaderData.project.tags.join(", "),
            author: {
              "@type": "Person",
              name: "Mojeed Salisu",
              jobTitle: "AI Automation Specialist",
              url: SITE_URL,
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center pt-32">
      <h1 className="text-4xl font-bold">Project not found</h1>
      <p className="mt-4 text-muted-foreground">
        This project doesn't exist or was moved.
      </p>
      <Link
        to="/projects"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold"
      >
        <ArrowLeft size={14} /> Back to Projects
      </Link>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const idx = projects.findIndex((p) => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];

  const shareProject = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      // Prefer the native share sheet on mobile if available
      if (typeof navigator !== "undefined" && (navigator as any).share && /Mobi|Android/i.test(navigator.userAgent)) {
        await (navigator as any).share({ title: project.title, text: project.description, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Banner */}
      <section className="relative bg-gradient-hero">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, oklch(0.55 0.14 300 / 0.35), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} /> Back to Projects
            </Link>
            <button
              type="button"
              onClick={shareProject}
              aria-live="polite"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur px-4 py-2 text-xs font-semibold text-white hover:bg-white/[0.12] hover:border-white/30 transition-colors"
            >
              {copied ? (
                <><CheckIcon size={14} /> Link copied</>
              ) : (
                <><Share2 size={14} /> Copy link</>
              )}
            </button>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl">
            {project.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {project.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((t: string) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-white/5 backdrop-blur border border-white/15 font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Process / Result */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-16 grid gap-6 md:grid-cols-3">
        {[
          { icon: Target, label: "Problem", body: project.problem },
          {
            icon: Cog,
            label: "Process",
            body: (
              <ol className="space-y-3 list-decimal list-inside">
                {project.process.map((step: string, i: number) => (
                  <li key={i} className="text-sm leading-relaxed">
                    {step}
                  </li>
                ))}
              </ol>
            ),
          },
          { icon: Sparkles, label: "Result", body: project.result },
        ].map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="h-full rounded-2xl border border-border bg-card p-7">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <s.icon size={20} />
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
              {typeof s.body === "string" ? (
                <p className="mt-2 text-sm leading-relaxed">{s.body}</p>
              ) : (
                <div className="mt-2">{s.body}</div>
              )}
            </div>
          </Reveal>
        ))}
      </section>

      {/* Impact */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <Reveal>
          <div className="rounded-3xl bg-card border border-border p-10 sm:p-14 shadow-elegant relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-30"
              style={{ background: "radial-gradient(circle, #7B5EA7, transparent 70%)" }}
            />
            <div className="relative flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary grid place-items-center shrink-0">
                <TrendingUp size={22} />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#7B5EA7]">
                  Business Impact
                </div>
                <p className="mt-2 text-xl sm:text-2xl font-semibold leading-snug">
                  {project.impact}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#7B5EA7]">
              A look inside
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Screenshots</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {project.screenshots.map((s: { url: string; caption?: string }, i: number) => (
              <Reveal key={i} delay={i * 60}>
                <figure className="rounded-2xl overflow-hidden border border-border bg-card">
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    className="group relative block w-full bg-white overflow-hidden"
                    aria-label={`Open ${s.caption ?? "screenshot"} full size`}
                  >
                    <img src={s.url} alt={s.caption ?? project.title} className="w-full h-auto transition-transform group-hover:scale-[1.02]" />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity w-11 h-11 rounded-full bg-white/90 text-black grid place-items-center">
                        <Maximize2 size={18} />
                      </span>
                    </span>
                  </button>
                  {s.caption && (
                    <figcaption className="px-5 py-3 text-xs text-muted-foreground border-t border-border">
                      {s.caption}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {lightboxIndex !== null && project.screenshots && (
        <Lightbox
          images={project.screenshots}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNav={setLightboxIndex}
        />
      )}

      {/* Next */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <Link
          to="/projects/$id"
          params={{ id: next.id }}
          className="group flex items-center justify-between rounded-2xl border border-border bg-card p-7 hover:border-primary/40 hover:shadow-elegant transition-all"
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Next Project
            </div>
            <div className="mt-1 text-lg font-semibold group-hover:text-primary transition-colors">
              {next.title}
            </div>
          </div>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </div>
  );
}
