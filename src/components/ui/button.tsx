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

type ButtonVariant =
  | "default"
  | "outline"
  | "secondary"
  | "link"
  | "destructive"
  | "ghost";
type ButtonSize = "mini" | "short" | "small" | "base" | "large";

interface BaseProps {
  value?: string;
  children?: ReactNode;
  title?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  style?: CSSProperties;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  fluid?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

// Cas "navigation" : href obligatoire
interface LinkButtonProps extends BaseProps {
  href: ComponentProps<typeof Link>["href"];
  locale?: ComponentProps<typeof Link>["locale"];
  type?: never; // n'a pas de sens sur un <a>
}

// Cas "action" : pas de navigation, onClick obligatoire, type de <button> disponible
interface ActionButtonProps extends BaseProps {
  href?: undefined;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

type PropsButton = LinkButtonProps | ActionButtonProps;

function isLinkButton(props: PropsButton): props is LinkButtonProps {
  return props.href !== undefined;
}

export default function Button(props: PropsButton) {
  const tCommon = useTranslations("Common");
  const {
    value,
    title,
    endIcon,
    startIcon,
    style,
    className,
    variant = "default",
    size = "base",
    fluid = false,
    children,
    disabled,
    onClick,
  } = props;
  const classes = cn(
    button({ variant, size, fluid }),
    disabled && "cursor-not-allowed opacity-50 pointer-events-none",
    className,
  );
  if (isLinkButton(props)) {
    const { href, locale } = props;
    return (
      <Link
        className={classes}
        href={href}
        locale={locale}
        title={
          title ? title : tCommon("actions.title", { link: href.toString() })
        }
        style={style}
        aria-disabled={disabled}
      >
        {startIcon}
        {value}
        {children}
        {endIcon}
      </Link>
    );
  }

  const { type = "button" } = props;
  return (
    <button
      type={type}
      className={classes}
      title={title}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon}
      {value}
      {children}
      {endIcon}
    </button>
  );
}
