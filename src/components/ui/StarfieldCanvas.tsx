"use client";

import { useEffect, useRef, useCallback } from "react";

// Color palette matching ICG design — warm golds + subtle contrast
const STAR_COLORS = [
  { r: 212, g: 185, b: 120 }, // gold-200
  { r: 196, g: 163, b: 90 },  // gold-300
  { r: 245, g: 230, b: 200 }, // gold-100 (pale)
  { r: 232, g: 228, b: 220 }, // text-primary (warm white)
  { r: 168, g: 136, b: 74 },  // gold-400 (deep)
  { r: 160, g: 190, b: 220 }, // subtle cool blue (accent, rare)
];

interface Star {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  maxOpacity: number;
  depth: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: (typeof STAR_COLORS)[0];
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  trail: { x: number; y: number; opacity: number }[];
  life: number;
  maxLife: number;
  color: (typeof STAR_COLORS)[0];
}

const STAR_COUNT = 200;
const SHOOTING_MIN = 2500;
const SHOOTING_MAX = 6000;

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });
  const starsRef = useRef<Star[]>([]);
  const shootRef = useRef<ShootingStar[]>([]);
  const frameRef = useRef(0);
  const nextShootRef = useRef(0);

  const pickColor = useCallback(() => {
    // Bias toward gold tones — blue is rare (10% chance)
    const r = Math.random();
    if (r < 0.1) return STAR_COLORS[5]; // cool blue accent
    return STAR_COLORS[Math.floor(Math.random() * 5)];
  }, []);

  const initStars = useCallback(
    (w: number, h: number) => {
      const stars: Star[] = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const depth = Math.floor(Math.random() * 3) + 1;
        const maxOpacity =
          depth === 1 ? 0.15 + Math.random() * 0.2 :
          depth === 2 ? 0.25 + Math.random() * 0.3 :
          0.4 + Math.random() * 0.4;

        stars.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size:
            depth === 1 ? 0.3 + Math.random() * 0.5 :
            depth === 2 ? 0.5 + Math.random() * 1 :
            1 + Math.random() * 1.5,
          opacity: maxOpacity,
          maxOpacity,
          depth,
          twinkleSpeed: 0.003 + Math.random() * 0.015,
          twinkleOffset: Math.random() * Math.PI * 2,
          color: pickColor(),
        });
      }
      starsRef.current = stars;
    },
    [pickColor]
  );

  const spawnShoot = useCallback(
    (w: number, h: number) => {
      // Start from a random star or random position
      const stars = starsRef.current;
      let x: number, y: number;
      if (stars.length > 0 && Math.random() > 0.3) {
        const s = stars[Math.floor(Math.random() * stars.length)];
        x = s.x;
        y = s.y;
      } else {
        x = Math.random() * w;
        y = Math.random() * h * 0.7;
      }

      // Direction — tend toward edges/corners
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 6;
      const color = STAR_COLORS[Math.floor(Math.random() * 4)]; // gold tones only

      shootRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 1.2 + Math.random() * 1.2,
        opacity: 0.9,
        trail: [],
        life: 0,
        maxLife: 35 + Math.random() * 35,
        color,
      });
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;

    function resize() {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    initStars(w, h);
    nextShootRef.current =
      Date.now() + SHOOTING_MIN + Math.random() * (SHOOTING_MAX - SHOOTING_MIN);

    function onMouse(e: MouseEvent) {
      mouseRef.current.x = (e.clientX / w - 0.5) * 2;
      mouseRef.current.y = (e.clientY / h - 0.5) * 2;
    }

    function draw(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      // Smooth mouse (lerp)
      smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.04;
      smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.04;
      const mx = smoothRef.current.x;
      const my = smoothRef.current.y;

      // === STARS ===
      for (const s of starsRef.current) {
        // Parallax — deeper stars move more
        const px = mx * s.depth * 15;
        const py = my * s.depth * 15;
        s.x = s.baseX + px;
        s.y = s.baseY + py;

        // Twinkle
        const twinkle =
          Math.sin(time * s.twinkleSpeed + s.twinkleOffset) * 0.35 + 0.65;
        const a = s.maxOpacity * twinkle;
        const { r, g, b } = s.color;

        // Glow halo for larger stars
        if (s.size > 0.8) {
          const grad = ctx.createRadialGradient(
            s.x, s.y, 0,
            s.x, s.y, s.size * 4
          );
          grad.addColorStop(0, `rgba(${r},${g},${b},${a * 0.25})`);
          grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Core
        ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // === SHOOTING STARS ===
      const now = Date.now();
      if (now > nextShootRef.current) {
        spawnShoot(w, h);
        nextShootRef.current =
          now + SHOOTING_MIN + Math.random() * (SHOOTING_MAX - SHOOTING_MIN);
      }

      shootRef.current = shootRef.current.filter((s) => {
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 1.04;
        s.vy *= 1.04;

        // Trail
        s.trail.push({ x: s.x, y: s.y, opacity: s.opacity });
        if (s.trail.length > 20) s.trail.shift();

        // Fade
        const pct = s.life / s.maxLife;
        if (pct > 0.6) s.opacity *= 0.9;

        const { r, g, b } = s.color;

        // Draw trail
        for (let t = 0; t < s.trail.length; t++) {
          const tp = s.trail[t];
          const ta = tp.opacity * (t / s.trail.length) * 0.4;
          const ts = s.size * (t / s.trail.length) * 0.7;
          ctx!.fillStyle = `rgba(${r},${g},${b},${ta})`;
          ctx!.beginPath();
          ctx!.arc(tp.x, tp.y, ts, 0, Math.PI * 2);
          ctx!.fill();
        }

        // Head glow
        const hg = ctx!.createRadialGradient(
          s.x, s.y, 0,
          s.x, s.y, s.size * 6
        );
        hg.addColorStop(0, `rgba(255,250,240,${s.opacity})`);
        hg.addColorStop(0.2, `rgba(${r},${g},${b},${s.opacity * 0.6})`);
        hg.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx!.fillStyle = hg;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.size * 6, 0, Math.PI * 2);
        ctx!.fill();

        // Head core — bright white-gold
        ctx!.fillStyle = `rgba(255,250,235,${s.opacity})`;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.size * 0.7, 0, Math.PI * 2);
        ctx!.fill();

        return s.life < s.maxLife && s.opacity > 0.01;
      });

      frameRef.current = requestAnimationFrame(draw);
    }

    frameRef.current = requestAnimationFrame(draw);
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", resize);
    };
  }, [initStars, spawnShoot]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
