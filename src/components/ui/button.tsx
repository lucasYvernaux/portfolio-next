"use client";

import { Link } from "@/i18n/routing";
import { button } from "@/lib/utils/primitives";
import { useTranslations } from "next-intl";
import {
  ComponentProps,
  CSSProperties,
  MouseEventHandler,
  ReactNode,
} from "react";

interface PropsButton {
  value?: string;
  children?: ReactNode;
  title?: string;
  startScon?: ReactNode;
  endIcon?: ReactNode;
  href: ComponentProps<typeof Link>["href"];
  style?: CSSProperties;
  onClick?: MouseEventHandler;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "link"
    | "destructive"
    | "ghost";
  disabled?: boolean;
}

export default function Button({
  href,
  value,
  title,
  endIcon,
  startScon,
  style,
  variant = "default",
  children,
  disabled,
  onClick,
}: PropsButton) {
  const tCommon = useTranslations("Common");
  return (
    <div
      className={`${disabled ? "cursor-not-allowed" : ""} flex w-full justify-center`}
    >
      <Link
        className={`${button({ variant: variant })}`}
        href={href}
        title={
          title ? title : tCommon("actions.title", { link: href.toString() })
        }
        style={style}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {startScon}
        {value}
        {children}
        {endIcon}
      </Link>
    </div>
  );
}
