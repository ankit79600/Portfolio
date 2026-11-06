"use client";
import { useState } from "react";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Mail, label: "Email", value: "ankitpatel79600@gmail.com", href: "mailto:ankitpatel79600@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/ankit79600", href: "https://github.com/ankit79600" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ankitpatel79600", href: "https://www.linkedin.com/in/ankitpatel79600/" },
  { icon: Twitter, label: "Twitter / X", value: "x.com/ankit_pate33282", href: "https://x.com/ankit_pate33282" },
];

const inputClass = `w-full bg-[#0A0A0A] border border-white/[0.07] rounded-xl
  px-5 py-3.5 font-body text-sm text-white placeholder:text-fg-dim
  focus:outline-none focus:border-accent/40
  transition-colors duration-200`;

const sectionAnim = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionAnim}
        className="mb-16"
      >
        <span className="font-heading text-xs tracking-[0.4em] text-accent block mb-4">
          04. CONTACT
        </span>
        <h2
          className="font-display font-bold text-white mb-5"
          style={{ fontSize: "clamp(2.2rem,5vw,4rem)", letterSpacing: "-0.02em", lineHeight: 1 }}
        >
          Get In Touch
        </h2>
        <p className="font-body text-fg-muted max-w-md leading-relaxed">
          Have a project in mind or want to say hi? My inbox is always open.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="space-y-4"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block font-heading text-[10px] tracking-widest text-fg-dim mb-2">
              NAME <span className="text-accent">*</span>
            </label>
            <input id="name" name="name" type="text" required placeholder="Your name"
              value={form.name} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className="block font-heading text-[10px] tracking-widest text-fg-dim mb-2">
              EMAIL <span className="text-accent">*</span>
            </label>
            <input id="email" name="email" type="email" required placeholder="your@email.com"
              value={form.email} onChange={handleChange} className={inputClass} />
          </div>
          <div>
            <label htmlFor="message" className="block font-heading text-[10px] tracking-widest text-fg-dim mb-2">
              MESSAGE <span className="text-accent">*</span>
            </label>
            <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project..."
              value={form.message} onChange={handleChange}
              className={`${inputClass} resize-none`} />
          </div>

          <button
            type="submit"
            disabled={status !== "idle"}
            className="flex items-center gap-2.5 font-heading text-xs tracking-widest
              px-7 py-4 bg-accent text-background font-bold rounded-xl
              hover:bg-accent-dark hover:shadow-[0_0_30px_rgba(0,230,118,0.3)]
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200 cursor-pointer"
          >
            {status === "sending" ? "SENDING..." : status === "sent" ? "MESSAGE SENT ✓" : (
              <><Send size={14} /> SEND MESSAGE</>
            )}
          </button>

          {status === "sent" && (
            <p role="status" className="font-heading text-xs text-accent tracking-wider">
              Thanks! I&apos;ll get back to you within 24 hours.
            </p>
          )}
        </motion.form>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center space-y-4"
        >
          <p className="font-body text-fg-muted leading-relaxed mb-4">
            Prefer a direct message? Reach me on any of these platforms.
            I typically respond within 24 hours.
          </p>

          {socials.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] border border-white/[0.07]
                flex items-center justify-center shrink-0
                group-hover:border-accent/30 group-hover:shadow-[0_0_16px_rgba(0,230,118,0.15)]
                transition-all duration-200">
                <Icon size={16} className="text-fg-dim group-hover:text-accent transition-colors" />
              </div>
              <div>
                <p className="font-heading text-[10px] tracking-widest text-fg-dim mb-0.5">
                  {label.toUpperCase()}
                </p>
                <p className="font-body text-sm text-fg-secondary group-hover:text-accent transition-colors">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
