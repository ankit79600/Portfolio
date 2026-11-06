"use client";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";

const projects = [
  {
    num: "01",
    title: "Oracle XI",
    description:
      "AI-powered football prediction platform with pay-per-call micropayments settled on the Injective blockchain in ~650ms. Claude AI analyzes live World Cup data with tiered pricing — Haiku for quick picks, Opus for deep analysis.",
    tags: ["Node.js", "Claude AI", "Injective", "MCP Protocol", "TypeScript"],
    github: "https://github.com/ankit79600/Oracle-XI",
    live: null,
  },
  {
    num: "02",
    title: "MediQueue",
    description:
      "Real-time OPD queue & appointment system built at a hackathon. Patients get digital tokens with QR codes and live position updates via Socket.IO. Staff manage queues with role-based controls; admins see live KPI dashboards.",
    tags: ["React", "Node.js", "Socket.IO", "PostgreSQL", "Prisma", "Docker"],
    github: "https://github.com/ankit79600/Mediqueue",
    live: null,
  },
  {
    num: "03",
    title: "VOUCH",
    description:
      "Zero-knowledge proof review system on the Midnight blockchain. Proves a reviewer actually purchased a product without revealing their identity — Merkle trees and ZK circuits keep all credentials client-side only.",
    tags: ["React", "TypeScript", "Midnight", "ZK Proofs", "Vercel"],
    github: "https://github.com/ankit79600/VOUCH",
    live: null,
  },
  {
    num: "04",
    title: "Night-Ballot",
    description:
      "Privacy-preserving on-chain voting with zero-knowledge proofs on Midnight testnet. Voter identities never appear on-chain — only aggregate tallies are public. Includes real-time polling, vote receipts, and downloadable audit trails.",
    tags: ["React", "Compact", "Midnight", "ZK Proofs", "Vite"],
    github: "https://github.com/ankit79600/Night-Ballot",
    live: null,
  },
  {
    num: "05",
    title: "Alumni Connect Hub",
    description:
      "Student-alumni networking platform with Google OAuth and Supabase backend. Alumni post jobs, internships, and events; students discover mentors via a Google Maps-powered global alumni directory.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Google OAuth"],
    github: "https://github.com/ankit79600/alumni-connect-hub",
    live: null,
  },
  {
    num: "06",
    title: "Quizchain",
    description:
      "On-chain quiz system deployed on Celo Sepolia testnet. Smart contract stores and verifies quiz answers immutably on-chain, with transactions confirmed in under one second and fully auditable on Celo Blockscout.",
    tags: ["Solidity", "Celo", "Smart Contracts", "Remix IDE", "MetaMask"],
    github: "https://github.com/ankit79600/Quizchain",
    live: null,
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(7);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ transition: "transform 0.2s ease-out, box-shadow 0.3s ease" }}
        className="grad-border group relative bg-[#0A0A0A] border border-white/[0.06] rounded-2xl
          p-7 h-full flex flex-col cursor-default
          hover:border-white/[0.1]
          hover:shadow-[0_0_60px_rgba(0,230,118,0.05),0_20px_40px_rgba(0,0,0,0.5)]"
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-6">
          <span className="font-heading text-xs text-fg-dim tracking-widest">
            {project.num}
          </span>
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source`}
                className="text-fg-dim hover:text-fg-secondary transition-colors cursor-pointer"
              >
                <Github size={17} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live`}
                className="text-fg-dim hover:text-accent transition-colors cursor-pointer"
              >
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-xl text-white mb-3
          group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-fg-muted leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-heading text-[11px] tracking-wider text-accent/60
                bg-accent/[0.05] border border-accent/[0.12]
                px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const sectionAnim = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionAnim}
        className="mb-16"
      >
        <span className="font-heading text-xs tracking-[0.4em] text-accent block mb-4">
          02. PROJECTS
        </span>
        <h2 className="font-display font-bold text-white mb-5"
          style={{ fontSize: "clamp(2.2rem,5vw,4rem)", letterSpacing: "-0.02em", lineHeight: 1 }}>
          Things I&apos;ve Built
        </h2>
        <p className="font-body text-fg-muted max-w-md leading-relaxed">
          A selection of projects I&apos;ve shipped — spanning AI, blockchain, and full-stack web.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
