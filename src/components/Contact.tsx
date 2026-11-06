"use client";
import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with your preferred form handler (Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="font-heading text-accent text-sm tracking-widest mb-3">
        04. CONTACT
      </p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
        Get In Touch
      </h2>
      <p className="font-body text-muted-foreground mb-12 max-w-xl">
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <label
              htmlFor="name"
              className="block font-heading text-xs text-muted-foreground tracking-wider mb-2"
            >
              NAME <span className="text-accent">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-heading text-xs text-muted-foreground tracking-wider mb-2"
            >
              EMAIL <span className="text-accent">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-heading text-xs text-muted-foreground tracking-wider mb-2"
            >
              MESSAGE <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="flex items-center gap-2 px-6 py-3 bg-accent text-background font-heading text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {status === "sending" ? (
              "Sending..."
            ) : status === "sent" ? (
              "Message Sent!"
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </button>

          {status === "sent" && (
            <p
              role="status"
              className="font-body text-sm text-accent"
            >
              Thanks! I&apos;ll get back to you soon.
            </p>
          )}
        </form>

        {/* Links */}
        <div className="flex flex-col justify-center gap-6">
          <p className="font-body text-muted-foreground leading-relaxed">
            Prefer a direct message? Reach me on any of these platforms. I
            typically respond within 24 hours.
          </p>

          <div className="space-y-4">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "udemygenalpha@gmail.com",
                href: "mailto:udemygenalpha@gmail.com",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "github.com/ankitpatel",
                href: "https://github.com/",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "linkedin.com/in/ankitpatel",
                href: "https://linkedin.com/",
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-accent/40 transition-colors">
                  <Icon size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="font-heading text-xs text-muted-foreground tracking-wider">
                    {label}
                  </p>
                  <p className="font-body text-sm text-foreground group-hover:text-accent transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
