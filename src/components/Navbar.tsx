"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop nav — floating pill */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto w-full max-w-5xl"
        >
          <div
            className={`flex items-center justify-between px-6 h-14 rounded-2xl transition-all duration-500 ${
              scrolled
                ? "bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
                : "bg-transparent"
            }`}
          >
            {/* Logo */}
            <a
              href="#hero"
              className="font-heading text-base font-bold tracking-tight cursor-pointer group flex items-center gap-1"
              aria-label="Back to top"
            >
              <span className="text-accent group-hover:drop-shadow-[0_0_10px_rgba(0,230,118,0.9)] transition-all duration-300">
                AP
              </span>
              <span className="text-white/20">.</span>
            </a>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-7">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-heading text-xs tracking-widest text-fg-muted hover:text-white
                      transition-colors duration-200 cursor-pointer relative group"
                  >
                    {link.label.toUpperCase()}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent
                      group-hover:w-full transition-all duration-300 ease-out" />
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA + mobile burger */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:flex items-center gap-2 font-heading text-xs tracking-widest
                  px-4 py-2 rounded-lg border border-accent/30 text-accent
                  hover:bg-accent hover:text-background hover:border-accent
                  hover:shadow-[0_0_20px_rgba(0,230,118,0.3)]
                  transition-all duration-200 cursor-pointer"
              >
                HIRE ME
              </a>
              <button
                className="md:hidden text-fg-muted hover:text-white transition-colors cursor-pointer p-1"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </motion.nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-6 top-24 z-40 bg-[#0A0A0A] border border-white/[0.07]
              rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden md:hidden"
          >
            <ul className="px-6 py-5 flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-heading text-sm tracking-widest text-fg-muted hover:text-accent
                      transition-colors cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label.toUpperCase()}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/[0.07]">
                <a
                  href="#contact"
                  className="font-heading text-sm tracking-widest text-accent cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  HIRE ME →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
