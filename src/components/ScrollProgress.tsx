"use client";
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9997] h-[2px] pointer-events-none">
      <div
        ref={barRef}
        className="h-full bg-accent"
        style={{
          width: "0%",
          boxShadow: "0 0 10px rgba(0,230,118,0.8), 0 0 4px rgba(0,230,118,1)",
          transition: "width 0.08s linear",
        }}
      />
    </div>
  );
}
