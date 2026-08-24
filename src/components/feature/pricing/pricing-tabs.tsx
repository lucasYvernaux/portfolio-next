"use client";
import { useState } from "react";

import { PacksGridTest } from "./pack-grid";
import ServicesGrid from "./services-grid";

type Tab = "packs" | "services";

export function PricingTabs() {
  const [active, setActive] = useState<Tab>("packs");

  return (
    <div>
      <div className="flex justify-center text-2xl gap-6 mb-10">
        <button
          onClick={() => setActive("packs")}
          className={` cursor-pointer
            ${active === "packs" ? "btn-active text-primary" : "btn-default"}
          `}
        >
          Packs
        </button>
        <button
          onClick={() => setActive("services")}
          className={` cursor-pointer
            ${active === "services" ? "btn-active text-primary" : "btn-default"}
          `}
        >
          Services
        </button>
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
