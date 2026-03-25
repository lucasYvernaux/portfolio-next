"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ───────── Configuration ───────── */
const FONT_SIZE = 16;
const CHAR_SETS = [
  // Katakana (comme dans le film)
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン",
  // Latin + chiffres
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]|;:<>",
];
const ALL_CHARS = CHAR_SETS.join("");

/* ───────── Composant MatrixRain ───────── */
function MatrixCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<number[]>([]);
  const speedsRef = useRef<number[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* — Resize — */
    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const columns = Math.floor(canvas.width / FONT_SIZE);

      // Initialise chaque colonne à une hauteur aléatoire
      dropsRef.current = Array.from(
        { length: columns },
        () => Math.random() * -100,
      );
      speedsRef.current = Array.from(
        { length: columns },
        () => 0.5 + Math.random() * 1.5,
      );
    }

    resize();
    window.addEventListener("resize", resize);

    /* — Boucle d'animation — */
    let lastTime = 0;
    const FPS = 30;
    const interval = 1000 / FPS;

    function draw(timestamp: number) {
      if (!ctx || !canvas) return;

      const delta = timestamp - lastTime;
      if (delta < interval) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }
      lastTime = timestamp;

      // Fond semi-transparent → effet de traînée
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px "Courier New", monospace`;

      const drops = dropsRef.current;
      const speeds = speedsRef.current;

      for (let i = 0; i < drops.length; i++) {
        // Caractère aléatoire
        const char = ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)];

        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        // Tête de colonne : blanc-vert brillant
        if (Math.random() > 0.7) {
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#00ff41";
          ctx.shadowBlur = 15;
        } else {
          // Corps : dégradé de verts
          const brightness = Math.random();
          if (brightness > 0.9) {
            ctx.fillStyle = "#00ff41"; // vert vif
          } else if (brightness > 0.6) {
            ctx.fillStyle = "#00cc33"; // vert moyen
          } else if (brightness > 0.3) {
            ctx.fillStyle = "#008f11"; // vert sombre
          } else {
            ctx.fillStyle = "#003b00"; // vert très sombre
          }
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);

        // Reset shadow
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;

        // Avancer la goutte
        drops[i] += speeds[i];

        // Quand la goutte sort de l'écran → reset aléatoire
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.random() * -20;
          speeds[i] = 0.5 + Math.random() * 1.5;
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    }

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ display: "block" }}
    />
  );
}

/* ───────── Texte clignotant ───────── */
function GlitchText({ text, className }: { text: string; className?: string }) {
  const [glitched, setGlitched] = useState(text);

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`アカサタナ";
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      if (frame % 4 === 0) {
        // Glitch aléatoire
        const arr = text.split("");
        const idx = Math.floor(Math.random() * arr.length);
        arr[idx] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        setGlitched(arr.join(""));
      } else {
        setGlitched(text);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{glitched}</span>;
}

/* ───────── Page 404 ───────── */
export default function NotFoundMarix() {
  const [visible, setVisible] = useState(false);
  const [cursor, setCursor] = useState(true);

  // Apparition progressive
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Curseur clignotant
  useEffect(() => {
    const blink = setInterval(() => setCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Canvas Matrix */}
      <MatrixCanvas />

      {/* Overlay sombre centré */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div
          className={`
            mx-4 max-w-2xl rounded-sm border border-green-500/30
            bg-black/70 p-8 text-center backdrop-blur-sm
            transition-all duration-1000 ease-out
            md:p-12
            ${visible ? "scale-100 opacity-100" : "scale-95 opacity-0"}
          `}
          style={{
            boxShadow:
              "0 0 40px rgba(0,255,65,0.15), inset 0 0 40px rgba(0,255,65,0.05)",
          }}
        >
          {/* 404 géant */}
          <h1
            className="mb-4 font-mono text-8xl font-bold tracking-widest md:text-9xl"
            style={{
              color: "#00ff41",
              textShadow:
                "0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 40px #00ff41, 0 0 80px #008f11",
            }}
          >
            <GlitchText text="404" />
          </h1>

          {/* Ligne de séparation */}
          <div
            className="mx-auto mb-6 h-px w-48"
            style={{
              background:
                "linear-gradient(90deg, transparent, #00ff41, transparent)",
            }}
          />

          {/* Message terminal */}
          <div className="mb-8 font-mono text-sm leading-relaxed md:text-base">
            <p className="mb-2" style={{ color: "#00ff41" }}>
              <span className="opacity-60">$</span> find / -name
              &quot;page&quot;
            </p>
            <p className="mb-4 text-red-400">
              ERROR: File not found in the Matrix
            </p>
            <p style={{ color: "#00cc33" }}>
              <span className="opacity-60">&gt;</span> La page que vous cherchez
              n&apos;existe pas…
              <br />
              <span className="opacity-60">&gt;</span> ou a été effacée de la
              simulation.
            </p>
          </div>

          {/* Prompt clignotant */}
          <p className="mb-8 font-mono text-sm" style={{ color: "#008f11" }}>
            <span className="opacity-60">root@matrix:~$</span>{" "}
            <span
              style={{
                borderRight: cursor
                  ? "2px solid #00ff41"
                  : "2px solid transparent",
              }}
            >
              _
            </span>
          </p>

          {/* Bouton retour */}
          <Link
            href="/"
            className="
              group relative inline-block cursor-pointer rounded-sm
              border border-green-500/50 bg-transparent
              px-8 py-3 font-mono text-sm tracking-wider
              transition-all duration-300
              hover:border-green-400 hover:bg-green-500/10
            "
            style={{ color: "#00ff41" }}
          >
            <span
              className="
                absolute inset-0 rounded-sm opacity-0
                transition-opacity duration-300
                group-hover:opacity-100
              "
              style={{ boxShadow: "0 0 15px rgba(0,255,65,0.3)" }}
            />
            [ RETOUR À LA RÉALITÉ ]
          </Link>
        </div>
      </div>

      {/* Scanlines CRT (optionnel) */}
      <div
        className="pointer-events-none fixed inset-0 z-20"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 3px)",
        }}
      />
    </div>
  );
}
