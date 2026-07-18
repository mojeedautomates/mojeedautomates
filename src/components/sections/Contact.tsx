import { useState } from "react";
import { Check, Mail, Send } from "lucide-react";
import { Reveal } from "../Reveal";

type Props = {
  /** Home page: only show the form with a form header, no CONTACT eyebrow/details */
  formOnly?: boolean;
};

function ContactForm({ heading }: { heading?: string }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-border bg-card p-8 shadow-elegant"
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
          disabled={sent}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 disabled:opacity-70 transition-opacity"
        >
          {sent ? (
            <>
              <Check size={16} /> Message sent
            </>
          ) : (
            <>
              Send Message <Send size={14} />
            </>
          )}
        </button>
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
              Let's Build Something That{" "}
              <span className="text-gradient-gold">Runs Itself.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md leading-relaxed mx-auto lg:mx-0">
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
