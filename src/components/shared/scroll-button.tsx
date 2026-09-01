"use client";

import { ChevronDown } from "lucide-react";
import Button from "../ui/button";
import { useTranslations } from "next-intl";

export default function ScrollButton({ targetId }: { targetId: string }) {
  const handleClick = () => {
    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const tCommon = useTranslations("Common");
  return (
    <div
      onClick={handleClick}
      className="w-full relative top-10 flex items-center justify-center"
    >
      <Button
        variant="ghost"
        onClick={handleClick}
        className="uppercase"
        href={"#"}
        style={{
          color: "var(--color-gray-500)",
          letterSpacing: "var(--tracking-widest)",
          flexDirection: "column",
        }}
      >
        {tCommon("actions.explore")}
        <ChevronDown
          color="var(--color-primary)"
          className="animate-bounce mt-4"
        />
      </Button>
    </div>
  );
}
