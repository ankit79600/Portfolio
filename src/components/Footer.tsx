import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/ankit79600", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ankitpatel79600/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/ankit_pate33282", label: "Twitter / X" },
  { icon: Mail, href: "mailto:udemygenalpha@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <span className="font-heading text-sm font-bold">
          <span className="text-accent">AP</span>
          <span className="text-white/20">.</span>
        </span>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-fg-dim hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="font-heading text-[11px] tracking-widest text-fg-dim">
          © {new Date().getFullYear()} ANKIT PATEL
        </p>
      </div>
    </footer>
  );
}
