"use client";
import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase, Code2, Download } from "lucide-react";

const info = [
  { icon: MapPin, label: "Location", value: "Kolkata, India" },
  { icon: Mail, label: "Email", value: "ankitpatel79600@gmail.com" },
  { icon: Briefcase, label: "Status", value: "Open to work" },
  { icon: Code2, label: "Focus", value: "Full-Stack + UI/UX" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-heading text-xs tracking-[0.4em] text-accent block mb-4">
            01. ABOUT ME
          </span>
          <h2
            className="font-display font-bold text-white mb-8"
            style={{ fontSize: "clamp(2.2rem,5vw,4rem)", letterSpacing: "-0.02em", lineHeight: 1 }}
          >
            Who I Am
          </h2>

          <div className="space-y-5 font-body text-fg-muted leading-relaxed mb-10">
            <p>
              I&apos;m a first-year Computer Science undergraduate at Narula
              Institute of Technology, Kolkata, and a self-driven full-stack
              developer. I enjoy building products that are fast, purposeful,
              and span the full stack — from polished UIs to on-chain smart
              contracts.
            </p>
            <p>
              My work ranges from real-time healthcare queues and AI-powered
              prediction platforms to zero-knowledge proof systems on the
              Midnight blockchain. I move fast, pick up new stacks quickly,
              and care deeply about shipping things that actually work.
            </p>
            <p>
              Currently looking for a software development internship or
              entry-level role where I can contribute, grow, and keep pushing
              what&apos;s possible on the web.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {info.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-[#0A0A0A] border border-white/[0.06]
                  rounded-xl px-4 py-3"
              >
                <Icon size={15} className="text-accent shrink-0" />
                <div>
                  <p className="font-heading text-[10px] tracking-widest text-fg-dim mb-0.5">
                    {label.toUpperCase()}
                  </p>
                  <p className="font-body text-sm text-fg-secondary">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Resume download */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2.5 font-heading text-xs tracking-widest
              px-6 py-3.5 border border-accent/30 text-accent rounded-xl
              hover:bg-accent hover:text-background hover:border-accent
              hover:shadow-[0_0_30px_rgba(0,230,118,0.3)]
              transition-all duration-200 cursor-pointer"
          >
            <Download size={14} />
            DOWNLOAD RESUME
          </a>
        </motion.div>

        {/* Right — visual bento */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-3"
        >
          {/* Avatar card */}
          <div
            className="col-span-2 bg-[#0A0A0A] border border-white/[0.06] rounded-2xl
              p-8 flex items-center justify-center relative overflow-hidden"
            style={{ minHeight: 200 }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(0,230,118,0.06) 0%, transparent 70%)",
              }}
            />
            <p
              className="font-display font-bold text-8xl text-accent relative z-10"
              style={{ textShadow: "0 0 60px rgba(0,230,118,0.5)" }}
            >
              AP
            </p>
          </div>

          {/* Stat cards */}
          {[
            { value: "2+", label: "Years\nCoding" },
            { value: "15+", label: "Projects\nShipped" },
          ].map(({ value, label }) => (
            <motion.div
              key={label}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: label.includes("Years") ? 0 : 0.8,
              }}
              className="bg-[#0A0A0A] border border-white/[0.06] rounded-2xl p-6
                flex flex-col items-center justify-center text-center
                hover:border-accent/20 hover:shadow-[0_0_30px_rgba(0,230,118,0.05)]
                transition-all duration-300"
            >
              <p
                className="font-display font-bold text-4xl text-accent mb-1"
                style={{ textShadow: "0 0 20px rgba(0,230,118,0.4)" }}
              >
                {value}
              </p>
              <p className="font-heading text-[10px] tracking-widest text-fg-dim whitespace-pre-line">
                {label.toUpperCase()}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
