import { tv, type VariantProps } from "tailwind-variants";

const skeleton = tv({
  base: "skeleton-shimmer rounded-md bg-zinc-800 dark:bg-zinc-800",
  variants: {
    variant: {
      text: "h-4 w-full",
      title: "h-6 w-2/3",
      circle: "rounded-full",
      rect: "rounded-lg",
      card: "rounded-xl",
    },
  },
  defaultVariants: {
    variant: "text",
  },
});

type SkeletonProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof skeleton> & {
    width?: string | number;
    height?: string | number;
  };

/**
 * Bloc de skeleton unitaire. Toujours aria-hidden : le statut de
 * chargement est porté par le SkeletonGroup englobant, pas par
 * chaque bloc individuellement (sinon les lecteurs d'écran
 * annoncent "chargement" une fois par bloc au lieu d'une seule fois).
 */
export function Skeleton({
  variant,
  width,
  height,
  className,
  style,
  ...props
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={skeleton({ variant, className })}
      style={{ width, height, ...style }}
      {...props}
    />
  );
}

/**
 * Regroupe plusieurs Skeleton sous un seul statut accessible.
 * À englober autour de toute zone en cours de chargement.
 */
export function SkeletonGroup({
  children,
  label = "Chargement du contenu…",
  className,
}: {
  children: React.ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={className}
    >
      <span className="sr-only">{label}</span>
      {children}
    </div>
  );
}
