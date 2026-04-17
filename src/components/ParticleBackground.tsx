import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

// Navy/blue palette — no cyan
const COLORS = ["#1d4ed8", "#2563eb", "#3b82f6", "#4f46e5", "#6366f1"];

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<{ particles: Particle[]; animId: number; width: number; height: number }>({
    particles: [], animId: 0, width: 0, height: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const state = stateRef.current;

    const init = () => {
      state.width = canvas.width = window.innerWidth;
      state.height = canvas.height = window.innerHeight;
      const count = Math.min(40, Math.floor(state.width / 30));
      state.particles = Array.from({ length: count }, () => ({
        x: Math.random() * state.width,
        y: Math.random() * state.height,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.35 + 0.1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    };

    const CONNECT_SQ = 100 * 100;

    const draw = () => {
      ctx.clearRect(0, 0, state.width, state.height);
      const pts = state.particles;
      const n = pts.length;

      for (let i = 0; i < n; i++) {
        const p = pts[i];
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = state.width;
        else if (p.x > state.width) p.x = 0;
        if (p.y < 0) p.y = state.height;
        else if (p.y > state.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }

      ctx.lineWidth = 0.5;
      for (let i = 0; i < n - 1; i++) {
        const a = pts[i];
        for (let j = i + 1; j < n; j++) {
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dSq = dx * dx + dy * dy;
          if (dSq < CONNECT_SQ) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = a.color;
            ctx.globalAlpha = (1 - dSq / CONNECT_SQ) * 0.1;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      state.animId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(state.animId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
    />
  );
}
