import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/ankit79600", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ankitpatel79600/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/ankit_pate33282", label: "Twitter / X" },
  { icon: Mail, href: "mailto:udemygenalpha@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-sm text-muted-foreground">
          <span className="text-accent">AP</span> — Built with Next.js &amp; Tailwind
        </p>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ankit Patel
        </p>
      </div>
    </footer>
  );
}
