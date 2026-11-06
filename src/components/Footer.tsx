import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/ankit79600", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ankitpatel79600/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/ankit_pate33282", label: "Twitter / X" },
  { icon: Mail, href: "mailto:ankitpatel79600@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left — logo + credit */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-heading text-sm font-bold">
            <span className="text-accent">AP</span>
            <span className="text-white/20">.</span>
          </span>
          <p className="font-heading text-[10px] tracking-widest text-fg-dim">
            DESIGNED &amp; BUILT BY ANKIT PATEL
          </p>
        </div>

        {/* Center — socials */}
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.07]
                text-fg-dim hover:text-accent hover:border-accent/30
                hover:shadow-[0_0_16px_rgba(0,230,118,0.2)]
                transition-all duration-200 cursor-pointer"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        {/* Right — year + back to top */}
        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="font-heading text-[11px] tracking-widest text-fg-dim">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </p>
          <a
            href="#hero"
            className="font-heading text-[10px] tracking-widest text-accent/60
              hover:text-accent transition-colors duration-200 cursor-pointer"
          >
            BACK TO TOP ↑
          </a>
        </div>

      </div>
    </footer>
  );
}
