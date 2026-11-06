"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
}

const NUM = 120;
const SPHERE_R = 260;
const FOV = 420;
const CONNECT_DIST = 110;

function rotateY(x: number, y: number, z: number, a: number) {
  return { x: x * Math.cos(a) + z * Math.sin(a), y, z: -x * Math.sin(a) + z * Math.cos(a) };
}
function rotateX(x: number, y: number, z: number, a: number) {
  return { x, y: y * Math.cos(a) - z * Math.sin(a), z: y * Math.sin(a) + z * Math.cos(a) };
}
function project(x: number, y: number, z: number, cx: number, cy: number) {
  const s = FOV / (FOV + z);
  return { sx: cx + x * s, sy: cy + y * s, s };
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Distribute points on sphere surface
    const particles: Particle[] = Array.from({ length: NUM }, (_, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / NUM);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = SPHERE_R * (0.6 + Math.random() * 0.4);
      return {
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
      };
    });

    let w = 0, h = 0;
    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    resize();

    const onMouse = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 0.8,
        y: (e.clientY / window.innerHeight - 0.5) * 0.4,
      };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse);

    let t = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.004;

      const ay = t + mouse.current.x;
      const ax = t * 0.25 + mouse.current.y;
      const cx = w / 2;
      const cy = h / 2;

      const proj = particles.map((p) => {
        let { x, y, z } = p;
        ({ x, y, z } = rotateY(x, y, z, ay));
        ({ x, y, z } = rotateX(x, y, z, ax));
        return { ...project(x, y, z, cx, cy), z };
      });

      // Draw edges
      for (let i = 0; i < proj.length; i++) {
        for (let j = i + 1; j < proj.length; j++) {
          const a = proj[i], b = proj[j];
          const dx = a.sx - b.sx, dy = a.sy - b.sy;
          const d = Math.hypot(dx, dy);
          if (d < CONNECT_DIST) {
            const alpha = (1 - d / CONNECT_DIST) * 0.25;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.strokeStyle = `rgba(34,197,94,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      proj.forEach((p) => {
        const depth = (p.z + SPHERE_R) / (SPHERE_R * 2);
        const alpha = 0.15 + depth * 0.7;
        const r = Math.max(0.8, p.s * 2.5);

        // Glow halo
        const grad = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, r * 4);
        grad.addColorStop(0, `rgba(34,197,94,${alpha * 0.4})`);
        grad.addColorStop(1, "rgba(34,197,94,0)");
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,197,94,${alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
