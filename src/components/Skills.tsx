"use client";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    color: "from-green-500/20 to-emerald-500/5",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Zustand", "Framer Motion"],
  },
  {
    category: "Backend",
    color: "from-blue-500/20 to-cyan-500/5",
    skills: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Prisma", "REST / GraphQL"],
  },
  {
    category: "DevOps & Tools",
    color: "from-purple-500/20 to-violet-500/5",
    skills: ["Git", "Docker", "Vercel", "Linux", "GitHub Actions", "VS Code", "Figma", "Postman"],
  },
  {
    category: "Learning Now",
    color: "from-orange-500/20 to-amber-500/5",
    skills: ["Rust", "Kubernetes", "Three.js", "LLM APIs"],
  },
];

const stats = [
  { value: "2+", label: "Years Coding" },
  { value: "15+", label: "Projects Shipped" },
  { value: "10+", label: "Technologies" },
  { value: "Open", label: "To Opportunities" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="font-heading text-accent text-xs tracking-[0.3em] mb-3">
          03. SKILLS
        </p>
        <h2
          className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4"
          style={{ textShadow: "0 0 60px rgba(34,197,94,0.1)" }}
        >
          My Tech Stack
        </h2>
        <p className="font-body text-muted-foreground max-w-md">
          Tools and technologies I work with regularly.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
            className={`relative bg-card border border-border rounded-xl p-6 overflow-hidden
              hover:border-border/80 hover:shadow-[0_4px_40px_rgba(0,0,0,0.3)] transition-all duration-300`}
          >
            {/* Gradient accent in corner */}
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${group.color} rounded-bl-full opacity-60`}
            />

            <h3 className="font-heading text-xs text-muted-foreground tracking-[0.3em] mb-5 relative z-10">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2 relative z-10">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.04 }}
                  className="font-body text-sm text-foreground bg-muted px-3 py-1.5 rounded-md
                    border border-border/50 cursor-default
                    hover:border-accent/40 hover:text-accent hover:bg-accent/5
                    hover:shadow-[0_0_12px_rgba(34,197,94,0.15)]
                    transition-all duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(({ value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-5 text-center group
              hover:border-accent/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.07)] transition-all duration-300"
          >
            <p
              className="font-heading text-3xl font-bold text-accent mb-1"
              style={{ textShadow: "0 0 20px rgba(34,197,94,0.4)" }}
            >
              {value}
            </p>
            <p className="font-body text-xs text-muted-foreground">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
