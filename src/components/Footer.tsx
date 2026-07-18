import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-semibold text-lg">
            Mojeed <span className="text-[#7B5EA7]">Automates</span>.
          </div>
          <p className="text-sm text-muted-foreground mt-3 max-w-xs">
            AI-powered automation that cuts manual work, reduces costs and grows revenue.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="/projects" className="hover:text-foreground transition-colors">Projects</Link></li>
            <li><Link to="/skills" className="hover:text-foreground transition-colors">Skills</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Get In Touch</div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:mojeedautomates@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/mojeed-salisu-1747b13b5"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://wa.me/2348088809102"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <MessageCircle size={16} />
            </a>
          </div>
          <a
            href="mailto:mojeedautomates@gmail.com"
            className="block mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            mojeedautomates@gmail.com
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Mojeed Automates. All rights reserved.</span>
          <span>Built with intent.</span>
        </div>
      </div>
    </footer>
  );
}
