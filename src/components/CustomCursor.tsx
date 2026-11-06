"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("custom-cursor");

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let isLarge = false;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select')) {
        isLarge = true;
        ring.style.width = "52px";
        ring.style.height = "52px";
        ring.style.borderColor = "rgba(0,230,118,0.6)";
        ring.style.borderWidth = "2px";
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select')) {
        isLarge = false;
        ring.style.width = "40px";
        ring.style.height = "40px";
        ring.style.borderColor = "rgba(0,230,118,0.3)";
        ring.style.borderWidth = "1px";
      }
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.11;
      ringY += (mouseY - ringY) * 0.11;
      const offset = isLarge ? 26 : 20;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      ring.style.transform = `translate(${ringX - offset}px, ${ringY - offset}px)`;
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] opacity-0"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-accent/30 pointer-events-none z-[9998] opacity-0"
        style={{
          willChange: "transform",
          transition: "width 0.18s ease, height 0.18s ease, border-color 0.18s ease, border-width 0.18s ease",
        }}
      />
    </>
  );
}
