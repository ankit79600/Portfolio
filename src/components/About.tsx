"use client";
import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase } from "lucide-react";

const info = [
  { icon: MapPin, label: "Location", value: "India" },
  { icon: Mail, label: "Email", value: "udemygenalpha@gmail.com" },
  { icon: Briefcase, label: "Status", value: "Open to work" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-heading text-accent text-xs tracking-[0.3em] mb-3">
            01. ABOUT ME
          </p>
          <h2
            className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-7"
            style={{ textShadow: "0 0 60px rgba(34,197,94,0.1)" }}
          >
            Who I Am
          </h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed mb-8">
            <p>
              I&apos;m a full-stack developer based in India, passionate about
              building products that live on the internet. I enjoy turning
              complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p>
              When I&apos;m not pushing code, I&apos;m exploring new technologies,
              contributing to open source, or levelling up through side
              projects. I care deeply about developer experience and clean
              architecture.
            </p>
            <p>
              Currently looking for opportunities where I can contribute, grow,
              and continue to level up.
            </p>
          </div>

          <div className="space-y-3">
            {info.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-accent" />
                </div>
                <div className="flex gap-2 items-center">
                  <span className="font-heading text-xs text-muted-foreground tracking-wider">
                    {label}:
                  </span>
                  <span className="font-body text-sm text-foreground">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Avatar / visual side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Main card */}
            <div
              className="w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-card border border-border
                flex items-center justify-center relative overflow-hidden
                hover:border-accent/30 hover:shadow-[0_0_60px_rgba(34,197,94,0.1)] transition-all duration-500"
              style={{ transform: "perspective(800px) rotateY(-5deg) rotateX(2deg)" }}
            >
              {/* Inner glow */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.15) 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10 text-center">
                <p
                  className="font-heading text-7xl font-bold text-accent mb-2"
                  style={{ textShadow: "0 0 40px rgba(34,197,94,0.6)" }}
                >
                  AP
                </p>
                <p className="font-heading text-xs text-muted-foreground tracking-widest">
                  ANKIT PATEL
                </p>
              </div>
            </div>

            {/* Decorative offset border */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-accent/20 -z-10"
              style={{ transform: "perspective(800px) rotateY(-5deg) rotateX(2deg)" }}
            />

            {/* Floating badge — experience */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-6 bg-card border border-border rounded-xl px-4 py-2 shadow-xl"
            >
              <p className="font-heading text-xs text-muted-foreground">Experience</p>
              <p className="font-heading text-sm font-bold text-accent">2+ Years</p>
            </motion.div>

            {/* Floating badge — projects */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-6 bg-card border border-border rounded-xl px-4 py-2 shadow-xl"
            >
              <p className="font-heading text-xs text-muted-foreground">Projects</p>
              <p className="font-heading text-sm font-bold text-accent">15+ Shipped</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
