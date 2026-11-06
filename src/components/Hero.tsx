"use client";
import { useRef } from "react";
import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

const ROLES = [
  "Full-Stack Developer",
  "UI/UX Engineer",
  "Open Source Contributor",
  "Problem Solver",
];

const socials = [
  { icon: Github, href: "https://github.com/ankit79600", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ankitpatel79600/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/ankit_pate33282", label: "Twitter" },
  { icon: Mail, href: "mailto:ankitpatel79600@gmail.com", label: "Email" },
];

function MagneticButton({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "outline";
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.28;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)" }}
    >
      <a
        href={href}
        className={
          variant === "primary"
            ? `relative group flex items-center gap-2 font-heading text-xs tracking-widest
               px-7 py-4 bg-accent text-background font-bold rounded-xl overflow-hidden
               hover:shadow-[0_0_40px_rgba(0,230,118,0.4)] transition-shadow duration-300 cursor-pointer`
            : `flex items-center gap-2 font-heading text-xs tracking-widest
               px-7 py-4 border border-white/[0.1] text-fg-secondary rounded-xl
               hover:border-white/20 hover:text-white
               hover:shadow-[0_0_20px_rgba(255,255,255,0.03)]
               transition-all duration-300 cursor-pointer`
        }
      >
        {variant === "primary" && (
          <div className="absolute inset-0 bg-accent-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        )}
        <span className="relative z-10">{children}</span>
      </a>
    </div>
  );
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const role = useTypewriter(ROLES, 70, 35, 2200);

  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 70% 50%, rgba(0,230,118,0.04) 0%, transparent 65%)",
        }}
      />

      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16
        grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 items-center">

        {/* ── Left: Text ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Status badge */}
          <motion.div variants={item} className="flex items-center gap-2.5 mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="font-heading text-xs tracking-[0.3em] text-accent">
              AVAILABLE FOR WORK
            </span>
          </motion.div>

          {/* Name — huge display type */}
          <motion.div variants={item} className="mb-6">
            <h1 className="font-display font-bold leading-[0.92] tracking-[-0.03em]"
              style={{ fontSize: "clamp(4.5rem, 13vw, 11rem)" }}>
              <span className="block text-white">ANKIT</span>
              <span className="block text-stroke">PATEL</span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div variants={item} className="mb-10 h-8 flex items-center">
            <span className="font-body text-lg text-fg-muted">
              {role}
              <span className="text-accent ml-0.5 animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={item}
            className="font-body text-base text-fg-muted leading-relaxed max-w-md mb-12"
          >
            I build end-to-end web products with a sharp focus on
            performance and experience. Based in India, open to global opportunities.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
            <MagneticButton href="#projects" variant="primary">
              VIEW WORK ↗
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              GET IN TOUCH
            </MagneticButton>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-4">
            <span className="font-heading text-xs tracking-widest text-fg-dim">FIND ME</span>
            <div className="h-px w-8 bg-fg-dim" />
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.07]
                  text-fg-muted hover:text-accent hover:border-accent/30
                  hover:shadow-[0_0_16px_rgba(0,230,118,0.2)]
                  transition-all duration-200 cursor-pointer"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: 3D Scene ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[380px] lg:h-[520px] w-full"
        >
          {/* Glow behind canvas */}
          <div
            className="absolute inset-0 rounded-full blur-[80px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(0,230,118,0.08) 0%, transparent 70%)" }}
          />
          <Scene3D />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-heading text-[10px] tracking-[0.4em] text-fg-dim">SCROLL</span>
        <ArrowDown size={14} className="text-fg-dim animate-bounce" />
      </motion.div>
    </section>
  );
}
