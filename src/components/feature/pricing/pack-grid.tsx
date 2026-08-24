"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useMessages } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PackKey } from "@/src/lib/types";
import PackCardTest from "./pack-card";

export function PacksGridTest() {
  const messages = useMessages();
  const packKeys = Object.keys(messages.Pricing.packs) as PackKey[];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const maxIndex = packKeys.length - 3;
  const test =    

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(next, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, next]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button
        onClick={prev}
        className="absolute -left-25 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center cursor-pointer bg-surface border border-surface-border rounded-full hover:border-primary transition-colors"
        aria-label="Précédent"
      >
        <ChevronLeft className="w-5 h-5 text-gray-400" />
      </button>

      <div className="overflow-hidden pt-4">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
        >
          {packKeys.map((key, index) => (
            <PackCardTest key={`${index}-${key}`} pack={key} />
          ))}
        </div>
      </div>

      <button
        onClick={next}
        className="absolute -right-25 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center cursor-pointer bg-surface border border-surface-border rounded-full hover:border-primary transition-colors"
        aria-label="Suivant"
      >
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-primary w-6" : "bg-gray-600 hover:bg-gray-400"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
