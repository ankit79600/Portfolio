"use client";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import dynamic from "next/dynamic";

const ParticleCanvas = dynamic(() => import("./ParticleCanvas"), { ssr: false });

const ROLES = [
  "Full-Stack Developer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
  "Problem Solver",
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col justify-center overflow-hidden"
    >
      {/* 3D particle background */}
      <div className="absolute inset-0 opacity-55">
        <ParticleCanvas />
      </div>

      {/* Radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(34,197,94,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(90deg, #22C55E 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-10">
        <motion.p
          {...fadeUp(0.1)}
          className="font-heading text-accent text-sm tracking-[0.3em] mb-5 flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
          AVAILABLE FOR WORK
        </motion.p>

        <motion.h1
          {...fadeUp(0.25)}
          className="font-heading font-bold text-foreground leading-[1.05] mb-4"
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
        >
          I&apos;m{" "}
          <span
            className="text-accent"
            style={{
              textShadow:
                "0 0 40px rgba(34,197,94,0.45), 0 0 80px rgba(34,197,94,0.2)",
            }}
          >
            Ankit
          </span>
          <br />
          Patel
          <span className="text-accent" style={{ textShadow: "0 0 20px rgba(34,197,94,0.6)" }}>.</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div {...fadeUp(0.4)} className="mb-6 h-10 flex items-center">
          <span className="font-heading text-xl md:text-2xl text-muted-foreground">
            {role}
            <span className="text-accent animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          {...fadeUp(0.5)}
          className="font-body text-base text-muted-foreground max-w-lg leading-relaxed mb-10"
        >
          I build end-to-end web applications with a sharp eye for performance
          and great UX. Currently open to freelance and full-time roles.
        </motion.p>

        <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-4 mb-12">
          <a
            href="#projects"
            className="group relative font-heading text-sm px-7 py-3 bg-accent text-background font-semibold rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-accent-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="font-heading text-sm px-7 py-3 border border-border text-foreground rounded-lg cursor-pointer transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.7)} className="flex gap-5">
          {[
            { icon: Github, href: "https://github.com/ankit79600", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/ankitpatel79600/", label: "LinkedIn" },
            { icon: Twitter, href: "https://x.com/ankit_pate33282", label: "Twitter / X" },
            { icon: Mail, href: "mailto:udemygenalpha@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground cursor-pointer transition-all duration-200 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        {...fadeUp(1.0)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-accent transition-colors cursor-pointer hidden md:flex"
        aria-label="Scroll down"
      >
        <span className="font-heading text-xs tracking-widest">SCROLL</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
