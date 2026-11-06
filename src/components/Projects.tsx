"use client";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";

const projects = [
  {
    num: "01",
    title: "Project One",
    description:
      "Full-stack web app with real-time updates, authentication, and a clean dashboard UI. Built for scale with PostgreSQL and SSR.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    num: "02",
    title: "Project Two",
    description:
      "REST API handling 10k+ requests/day with rate limiting, Redis caching, and 95% test coverage. Zero downtime deploys.",
    tags: ["Node.js", "Express", "Redis", "Jest"],
    github: "#",
    live: "#",
  },
  {
    num: "03",
    title: "Project Three",
    description:
      "Mobile-first e-commerce UI with cart, search, and Stripe checkout. 95+ Lighthouse score across all metrics.",
    tags: ["React", "Vite", "Zustand", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    num: "04",
    title: "Project Four",
    description:
      "CLI toolkit for automating repetitive dev tasks. Published on npm, 500+ weekly downloads, fully typed.",
    tags: ["Node.js", "Commander.js", "npm"],
    github: "#",
    live: null,
  },
  {
    num: "05",
    title: "Project Five",
    description:
      "Real-time collaborative whiteboard using WebSockets. Multi-user sessions, cursors, and undo/redo history.",
    tags: ["Socket.io", "Canvas API", "React", "Fastify"],
    github: "#",
    live: "#",
  },
  {
    num: "06",
    title: "Project Six",
    description:
      "Open-source component library — 30+ accessible React components, Storybook docs, fully typed with Radix UI.",
    tags: ["React", "TypeScript", "Storybook", "Radix UI"],
    github: "#",
    live: "#",
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
          A selection of projects I&apos;ve shipped — each one taught me something new.
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
