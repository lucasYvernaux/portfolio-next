"use client";

import { Link } from "@/i18n/routing";
import { button, cn } from "@/lib/utils/primitives";
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
  fluid?: boolean;
  href: ComponentProps<typeof Link>["href"];
  style?: CSSProperties;
  className?: string;
  size?: "mini" | "short" | "small" | "base" | "large";
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
  className,
  fluid = false,
  variant = "default",
  size = "base",
  children,
  disabled,
  onClick,
}: PropsButton) {
  const tCommon = useTranslations("Common");
  return (
    <Link
      className={cn(
        button({ variant, size, fluid }),
        disabled && "cursor-not-allowed opacity-50 pointer-events-none",
        className,
      )}
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
  );
}
