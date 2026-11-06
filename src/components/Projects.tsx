"use client";
import { ExternalLink, Github, Folder } from "lucide-react";
import { motion } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";

const projects = [
  {
    title: "Project One",
    description:
      "Full-stack web app with real-time updates, auth, and a clean dashboard UI. Built for scale with PostgreSQL and server-side rendering.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Two",
    description:
      "REST API service handling 10k+ requests/day with rate limiting, caching, and full test coverage. Zero downtime deploys.",
    tags: ["Node.js", "Express", "Redis", "Jest"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Three",
    description:
      "Mobile-first e-commerce UI with cart, search, and checkout. Optimised for performance with 95+ Lighthouse score.",
    tags: ["React", "Vite", "Zustand", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Four",
    description:
      "CLI tool for automating repetitive development tasks. Published on npm with 500+ weekly downloads.",
    tags: ["Node.js", "Commander.js", "npm"],
    github: "#",
    live: null,
  },
  {
    title: "Project Five",
    description:
      "Real-time collaborative whiteboard using WebSockets. Multi-user sessions with undo/redo history.",
    tags: ["Socket.io", "Canvas API", "React", "Fastify"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Six",
    description:
      "Open-source component library with 30+ accessible React components. Fully typed with Storybook docs.",
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
  const { ref, onMouseMove, onMouseLeave } = useTilt(8);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ transition: "transform 0.18s ease-out" }}
        className="group h-full bg-card border border-border rounded-xl p-6 flex flex-col cursor-default
          hover:border-accent/30 hover:shadow-[0_0_40px_rgba(34,197,94,0.08)]
          relative overflow-hidden"
      >
        {/* Shimmer top edge on hover */}
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
            <Folder size={18} className="text-accent" />
          </div>
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source`}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <Github size={18} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live`}
                className="text-muted-foreground hover:text-accent transition-colors cursor-pointer"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <h3 className="font-heading text-base font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-heading text-xs text-accent/70 bg-accent/5 border border-accent/15 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="font-heading text-accent text-xs tracking-[0.3em] mb-3">
          02. PROJECTS
        </p>
        <h2
          className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4"
          style={{ textShadow: "0 0 60px rgba(34,197,94,0.1)" }}
        >
          Things I&apos;ve Built
        </h2>
        <p className="font-body text-muted-foreground max-w-md">
          A selection of projects I&apos;ve shipped. Each one taught me something new.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
