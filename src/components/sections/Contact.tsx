import { useState } from "react";
import { Check, Mail, Send, AlertCircle } from "lucide-react";
import { Reveal } from "../Reveal";

type Props = {
  /** Home page: only show the form with a form header, no CONTACT eyebrow/details */
  formOnly?: boolean;
};

const WEBHOOK_URL =
  "https://n8n.srv1290655.hstgr.cloud/webhook/b3f0f789-3735-4c8a-8240-52e4fc3d325f";

type Status = "idle" | "sending" | "sent" | "error";

function ContactForm({ heading }: { heading?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    // Honeypot: bots typically fill hidden inputs. Silently succeed for them.
    if (form.website.trim() !== "") {
      setStatus("sent");
      setForm({ name: "", email: "", message: "", website: "" });
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    // Basic client-side rate limiting: block if a submission happened in the last 30s.
    try {
      const last = Number(localStorage.getItem("contact:lastSubmit") || 0);
      if (last && Date.now() - last < 30_000) {
        setErrorMsg("Please wait a few seconds before sending another message.");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
        return;
      }
    } catch {
      // ignore storage errors
    }

    setStatus("sending");
    setErrorMsg(null);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Message: form.message,
          submittedAt: new Date().toISOString(),
          source: "portfolio-contact-form",
        }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      try { localStorage.setItem("contact:lastSubmit", String(Date.now())); } catch {}
      setStatus("sent");
      setForm({ name: "", email: "", message: "", website: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("Contact form submission failed", err);
      setErrorMsg("Something went wrong sending your message. Please try again or email me directly.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const sending = status === "sending";

  return (
    <form
      onSubmit={submit}
      className="relative rounded-3xl border border-border bg-card p-8 shadow-elegant"
    >
      {heading && (
        <div className="mb-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Send Me A <span className="text-gradient-gold">Message</span>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{heading}</p>
        </div>
      )}
      <div className="grid gap-5">
        {/* Honeypot — hidden from real users, catches bots */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
          />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="name">Name</label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="message">Message</label>
          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            placeholder="What would you like to automate?"
          />
        </div>
        <button
          type="submit"
          disabled={sending || status === "sent"}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
        >
          {status === "sent" ? (
            <><Check size={16} /> Thanks, I'll be in touch shortly</>
          ) : sending ? (
            <>Sending…</>
          ) : (
            <>Send Message <Send size={14} /></>
          )}
        </button>
        {status === "error" && errorMsg && (
          <p className="text-sm text-destructive flex items-center gap-2">
            <AlertCircle size={14} /> {errorMsg}
          </p>
        )}
      </div>
    </form>
  );
}

export function Contact({ formOnly = false }: Props) {
  if (formOnly) {
    return (
      <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
        <Reveal>
          <ContactForm heading="Tell me about the workflow you'd like to automate." />
        </Reveal>
      </section>
    );
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="text-center lg:text-left">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#7B5EA7]">
              CONTACT
            </div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              Let's Build Something{" "}
              <span className="text-[#7B5EA7]">That Runs Itself.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto lg:mx-0 lg:max-w-md leading-relaxed">
              Tell me about the workflow that's eating your week. I'll come back with a
              plan for how to automate it, what it'll cost, and how long it takes.
            </p>

            <a
              href="mailto:mojeedautomates@gmail.com"
              className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition-colors group max-w-md w-full text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">
                  Email
                </div>
                <div className="font-semibold">mojeedautomates@gmail.com</div>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
