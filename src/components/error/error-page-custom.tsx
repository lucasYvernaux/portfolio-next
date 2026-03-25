"use client";

import { House, TriangleAlert } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

export type ErrorPageCustomProps = {
  code: number;
  title: string;
  description?: string;
  emoji?: ReactNode;
  digest?: string;
  onRetry?: () => void;
};

export function ErrorPageCustom({
  code,
  title,
  description,
  emoji = <TriangleAlert size={24} className="md:size-32 text-primary/10" />,
  digest,
  onRetry,
}: ErrorPageCustomProps) {
  const t = useTranslations("Common");

  const [showTitle, setShowTitle] = useState(false);
  const [showLine, setShowLine] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showGlow, setShowGlow] = useState(false);

  const [rainVisible, setRainVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 1.5s — la pluie commence à s'estomper
    const t0 = setTimeout(() => setFadeOut(true), 1500);

    const t6 = setTimeout(() => setRainVisible(false), 5000);
    // 2.4s — le 404 apparaît à travers la pluie qui s'efface
    const t1 = setTimeout(() => setShowTitle(true), 2400);

    // // 2.8s — ligne décorative
    const t2 = setTimeout(() => setShowLine(true), 2800);

    // // 3.2s — texte descriptif
    const t3 = setTimeout(() => setShowBody(true), 3200);

    // // 3.6s — bouton
    const t4 = setTimeout(() => setShowButton(true), 3600);

    // // 4.0s — halos décoratifs
    const t5 = setTimeout(() => setShowGlow(true), 4000);

    return () => {
      [t0, t1, t2, t3, t4, t5, t6].forEach(clearTimeout);
    };
  }, [code]);
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-zinc-950">
      {rainVisible && <MatrixRain fadeOut={fadeOut} />}
      {/* ── Fond noir initial qui se dissout ── */}
      <div
        className="fixed inset-0 z-20 bg-background transition-opacity duration-2000 ease-in-out"
        style={{
          opacity: fadeOut ? 0 : 1,
          pointerEvents: "none",
        }}
      />
      <div className="flex min-h-screen relative items-center justify-center overflow-hidden hex-pattern px-6">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-gray-custom"></div>
        <div className="relative max-w-7xl flex flex-col items-center justify-center">
          <div className="relative mb-14 ">
            <h1
              className="font-serif text-[12rem] md:text-[16rem] font-bold text-primary/10 leading-none select-none relative"
              style={{
                fontSize: "clamp(7rem, 20vw, 14rem)",
                lineHeight: 1,
                opacity: showTitle ? 1 : 0,
                transform: showTitle ? "translateY(0)" : "translateY(40px)",
                filter: showTitle ? "blur(0px)" : "blur(8px)",
                transition:
                  "opacity 1s ease-out, transform 1s ease-out, filter 1s ease-out",
              }}
            >
              {code}
            </h1>
            <div className="absolute inset-0 bottom-20 z-0 flex items-center justify-center">
              {emoji}
            </div>
          </div>

          {/* Ligne dorée */}
          <div
            className="mx-auto my-6 h-1 w-24 rounded-full"
            style={{
              width: showLine ? "6rem" : "0rem",
              opacity: showLine ? 1 : 0,
              transition: "all 0.8s ease-out",
              background:
                "linear-gradient(90deg, transparent, #c4a35a, transparent)",
            }}
          />

          {/* Titre */}
          <h2
            className="mb-3 my-6 text-3xl font-serif md:text-5xl"
            style={{
              opacity: showBody ? 1 : 0,
              transform: showBody ? "translateY(0)" : "translateY(20px)",
              filter: showBody ? "blur(0px)" : "blur(4px)",
              transition:
                "opacity 0.8s ease-out, transform 0.8s ease-out, filter 0.8s ease-out",
            }}
          >
            {title}
          </h2>

          {/* Description */}
          <p
            className="mb-10 mt-4 max-w-md text-base leading-relaxed text-zinc-400"
            style={{
              opacity: showBody ? 1 : 0,
              transform: showBody ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s",
            }}
          >
            {description}
          </p>

          {/* Actions */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {onRetry && (
              <button
                onClick={onRetry}
                className="
                inline-flex items-center gap-2 rounded-full
                border border-primary/40 bg-primary/10
                px-6 py-3 text-sm font-medium text-[#e8d5a3]
                transition-all duration-200
                hover:border-primary/70 hover:bg-primary/20
                hover:scale-105 active:scale-100
              "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                </svg>
                Réessayer
              </button>
            )}

            <Link
              className=" inline-flex items-center gap-2 bg-primary text-background font-serif font-bold tracking-wider uppercase px-8 py-4 hover:bg-primary/80 transition-all duration-300 "
              style={{
                opacity: showButton ? 1 : 0,
                transform: showButton
                  ? "translateY(0) scale(1)"
                  : "translateY(15px) scale(0.95)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              }}
              data-testid="hero-cta"
              href="/"
              data-discover="true"
            >
              <House size={20} className="transition-all duration-300 " />
              {t("actions.goBackHome")}
            </Link>
            <Link
              className="inline-flex items-center gap-2 border border-primary text-primary font-serif font-bold tracking-wider uppercase px-8 py-4 hover:bg-primary/10 transition-all duration-300"
              style={{
                opacity: showButton ? 1 : 0,
                transform: showButton
                  ? "translateY(0) scale(1)"
                  : "translateY(15px) scale(0.95)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              }}
              data-testid="hero-secondary-cta"
              href="/contact"
              data-discover="true"
            >
              Signaler un problème
            </Link>
          </div>

          {/* Digest (corrélation support) */}
          {digest && (
            <p className="mt-8 font-mono text-xs text-zinc-600">
              Référence : {digest}
            </p>
          )}
        </div>

        {/* Halos dorés */}
        <div
          className="pointer-events-none fixed inset-0 overflow-hidden z-50"
          style={{
            opacity: showGlow ? 1 : 0,
            transition: "opacity 1.5s ease-out",
          }}
        >
          <div
            className="absolute -left-24 -top-24 size-112 rounded-full blur-[120px]"
            style={{ backgroundColor: "rgba(196, 163, 90, 0.2)" }}
          />

          <div
            className="absolute -bottom-20 -right-20 size-96  rounded-full blur-[100px]"
            style={{ backgroundColor: "rgba(196, 163, 90, 0.1)" }}
          />
          <div
            className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
            style={{ backgroundColor: "rgba(196, 163, 90, 0.3)" }}
          />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════
   MATRIX RAIN
   ═══════════════════════════════════ */

function MatrixRain({ fadeOut }: { fadeOut: boolean }) {
  const FONT_SIZE = 15;
  const CHARS =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&";
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<number[]>([]);
  const animRef = useRef<number>(0);
  const alphaRef = useRef(0.05);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const cols = Math.floor(canvas.width / FONT_SIZE);
    dropsRef.current = Array.from({ length: cols }, () => Math.random() * -50);
  }, []);

  // Quand fadeOut s'active, on accélère le noircissement
  // du fond canvas pour que les traînées disparaissent aussi
  useEffect(() => {
    if (fadeOut) {
      alphaRef.current = 0.12;
    }
  }, [fadeOut]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    init();
    window.addEventListener("resize", init);

    let last = 0;

    function draw(ts: number) {
      if (!ctx || !canvas) return;
      if (ts - last < 33) {
        animRef.current = requestAnimationFrame(draw);
        return;
      }
      last = ts;

      // Le fond s'assombrit plus vite pendant le fadeOut
      // → les traînées vertes s'effacent naturellement
      ctx.fillStyle = `rgba(0, 0, 0, ${alphaRef.current})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px monospace`;

      const drops = dropsRef.current;
      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        if (Math.random() > 0.8) {
          ctx.fillStyle = "#fff";
          ctx.shadowColor = "#00ff41";
          ctx.shadowBlur = 12;
        } else {
          const r = Math.random();
          ctx.fillStyle = r > 0.7 ? "#00ff41" : r > 0.4 ? "#00cc33" : "#008f11";
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);
        ctx.shadowBlur = 0;

        drops[i] += 0.6 + Math.random();
        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = Math.random() * -20;
        }
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animRef.current);
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-30"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 2.5s ease-in-out",
        pointerEvents: "none",
      }}
    />
  );
}
