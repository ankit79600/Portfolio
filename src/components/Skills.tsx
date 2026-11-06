"use client";
import { motion } from "framer-motion";

const groups = [
  {
    id: "01",
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Zustand", "Framer Motion"],
  },
  {
    id: "02",
    category: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Prisma", "GraphQL"],
  },
  {
    id: "03",
    category: "DevOps & Tools",
    skills: ["Git", "Docker", "Vercel", "Linux", "GitHub Actions", "VS Code", "Figma", "Postman"],
  },
  {
    id: "04",
    category: "Learning",
    skills: ["Rust", "Kubernetes", "Three.js", "LLM APIs"],
  },
];

const stats = [
  { value: "2+", label: "Years" },
  { value: "15+", label: "Projects" },
  { value: "10+", label: "Technologies" },
  { value: "Open", label: "To Work" },
];

const sectionAnim = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionAnim}
        className="mb-16"
      >
        <span className="font-heading text-xs tracking-[0.4em] text-accent block mb-4">
          03. SKILLS
        </span>
        <h2 className="font-display font-bold text-white mb-5"
          style={{ fontSize: "clamp(2.2rem,5vw,4rem)", letterSpacing: "-0.02em", lineHeight: 1 }}>
          My Tech Stack
        </h2>
        <p className="font-body text-fg-muted max-w-md leading-relaxed">
          Tools and technologies I work with on a daily basis.
        </p>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
      >
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="bg-[#0A0A0A] border border-white/[0.06] rounded-xl p-5 text-center
              hover:border-accent/20 hover:shadow-[0_0_30px_rgba(0,230,118,0.05)] transition-all duration-300"
          >
            <p
              className="font-display font-bold text-3xl text-accent mb-1"
              style={{ textShadow: "0 0 24px rgba(0,230,118,0.4)" }}
            >
              {value}
            </p>
            <p className="font-heading text-xs tracking-widest text-fg-dim">{label}</p>
          </div>
        ))}
      </motion.div>

      {/* Skill groups */}
      <div className="grid md:grid-cols-2 gap-4">
        {groups.map((group, gi) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#0A0A0A] border border-white/[0.06] rounded-2xl p-6
              hover:border-white/[0.1] transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="font-heading text-xs text-fg-dim tracking-widest">{group.id}</span>
              <div className="h-px flex-1 bg-white/[0.05]" />
              <span className="font-heading text-xs text-accent tracking-[0.3em]">
                {group.category.toUpperCase()}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.03 }}
                  className="font-body text-sm text-fg-secondary bg-white/[0.03] border border-white/[0.07]
                    px-3 py-1.5 rounded-lg cursor-default
                    hover:border-accent/25 hover:text-accent hover:bg-accent/[0.04]
                    hover:shadow-[0_0_12px_rgba(0,230,118,0.1)]
                    transition-all duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
