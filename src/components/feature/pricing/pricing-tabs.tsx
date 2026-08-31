"use client";
import { useState } from "react";

import { PacksGridTest } from "./pack-grid";
import ServicesGrid from "./services-grid";
import { AnimatedBackground } from "@/components/animation/motion-primitive/animated-background";

type Tab = "packs" | "services";
const TABS: Tab[] = ["packs", "services"];

export function PricingTabs() {
  const [active, setActive] = useState<Tab>("services");

  return (
    <div>
      <div className="flex justify-center text-lg mb-10">
        <div className="rounded-lg bg-gray-100 p-1 dark:bg-zinc-800">
          <AnimatedBackground
            defaultValue={active}
            className="rounded-lg bg-white dark:bg-zinc-700 "
            transition={{
              ease: "easeInOut",
              duration: 0.2,
            }}
            onValueChange={(id) => {
              if (id) setActive(id as Tab);
            }}
          >
            {TABS.map((label) => {
              return (
                <div
                  key={label}
                  data-id={label}
                  aria-label={`${label} view`}
                  className={`cursor-pointer inline-flex w-20 capitalize p-4 items-center justify-center text-center text-zinc-800 transition-transform active:scale-[0.98] dark:text-zinc-50`}
                >
                  {label}
                </div>
              );
            })}
          </AnimatedBackground>
        </div>
      </div>

      {active === "packs" ? (
        <>
          <PacksGridTest />
        </>
      ) : (
        <ServicesGrid />
      )}
    </div>
  );
}
