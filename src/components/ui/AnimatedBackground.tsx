"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
  color: string;
  alpha: number;
  speed: number;
  angle: number;
  factor: number;
  isPoly: boolean;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for 3D parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX - width / 2) * 0.15;
      mouse.targetY = (e.clientY - height / 2) * 0.15;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // Create 3D particles matching Ankit's floating geometric universe
    const count = window.innerWidth < 768 ? 60 : 140;
    const particles: Particle3D[] = [];
    const colors = ["#00f0ff", "#00f3ff", "#bc13fe", "#a855f7", "#38bdf8"];

    for (let i = 0; i < count; i++) {
      const spreadX = width * 1.2;
      const spreadY = height * 1.2;
      const x = (Math.random() - 0.5) * spreadX;
      const y = (Math.random() - 0.5) * spreadY;
      const z = Math.random() * 800 - 400; // -400 to +400 for depth

      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        size: Math.random() * 2.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.25,
        speed: 0.008 + Math.random() * 0.015,
        angle: Math.random() * Math.PI * 2,
        factor: 20 + Math.random() * 40,
        isPoly: Math.random() > 0.55, // 45% are floating diamond/polyhedron shapes
      });
    }

    const fov = 500;

    const render = () => {
      // Smooth lerp mouse towards target
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Project and draw particles
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 3D Orbital floating motion
        p.angle += p.speed;
        p.x = p.baseX + Math.cos(p.angle) * p.factor;
        p.y = p.baseY + Math.sin(p.angle * 1.2) * (p.factor * 0.8);
        p.z = p.baseZ + Math.sin(p.angle * 0.8) * p.factor;

        // Apply mouse camera parallax
        const px = p.x - mouse.x;
        const py = p.y - mouse.y;
        const pz = p.z + 500;

        if (pz <= 0) continue;

        const scale = fov / pz;
        const sx = centerX + px * scale;
        const sy = centerY + py * scale;

        // Depth-based sizing and opacity
        const depthAlpha = Math.max(0.1, Math.min(0.9, (1000 - pz) / 1000)) * p.alpha;
        const renderSize = Math.max(0.8, p.size * scale);

        projected.push({ sx, sy, size: renderSize, color: p.color, alpha: depthAlpha, isPoly: p.isPoly, angle: p.angle });

        // Draw particle
        ctx.save();
        ctx.globalAlpha = depthAlpha;
        ctx.fillStyle = p.color;
        ctx.strokeStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = renderSize * 4;

        if (p.isPoly) {
          // Floating 3D diamond/dodecahedron cross
          ctx.translate(sx, sy);
          ctx.rotate(p.angle * 1.5);
          ctx.beginPath();
          ctx.moveTo(0, -renderSize * 1.8);
          ctx.lineTo(renderSize * 1.4, 0);
          ctx.lineTo(0, renderSize * 1.8);
          ctx.lineTo(-renderSize * 1.4, 0);
          ctx.closePath();
          ctx.stroke();
          ctx.fillStyle = p.color;
          ctx.fill();
        } else {
          // Glowing star sparkle
          ctx.beginPath();
          ctx.arc(sx, sy, renderSize, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // Draw subtle connecting constellation lines between nearby particles
      ctx.lineWidth = 0.5;
      const maxDist = 95;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.sx - p2.sx;
          const dy = p1.sy - p2.sy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.15 * Math.min(p1.alpha, p2.alpha);
            ctx.save();
            ctx.globalAlpha = lineAlpha;
            ctx.strokeStyle = p1.color;
            ctx.beginPath();
            ctx.moveTo(p1.sx, p1.sy);
            ctx.lineTo(p2.sx, p2.sy);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#010314] pointer-events-none">
      {/* Interactive 3D Floating Particle Universe */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.95 }}
      />

      {/* Top Left Teal Glow */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-500/12 blur-[130px] pointer-events-none"
        animate={{
          x: [0, 30, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom Right Purple Glow */}
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-600/12 blur-[130px] pointer-events-none"
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
