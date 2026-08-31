"use client";
import { cn } from "@/lib/utils/primitives";
import { AnimatePresence, Transition, motion } from "motion/react";
import {
  Children,
  cloneElement,
  ReactElement,
  useState,
  useId,
  ReactNode,
} from "react";

export type AnimatedBackgroundProps = {
  children:
    | ReactElement<{ "data-id": string }>[]
    | ReactElement<{ "data-id": string }>;
  defaultValue?: string;
  onValueChange?: (newActiveId: string | null) => void;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
};

type AnimatedBackgroundChild = ReactElement<{
  "data-id": string;
  className?: string;
  children?: ReactNode;
}>;

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(defaultValue ?? null);
  const [prevDefaultValue, setPrevDefaultValue] = useState(defaultValue);
  const uniqueId = useId();

  if (defaultValue !== prevDefaultValue) {
    setPrevDefaultValue(defaultValue);
    setActiveId(defaultValue ?? null);
  }

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id);

    onValueChange?.(id);
  };

  return Children.map(children, (child, index) => {
    const typedChild = child as AnimatedBackgroundChild;
    const id = typedChild.props["data-id"];

    const interactionProps = enableHover
      ? {
          onMouseEnter: () => handleSetActiveId(id),
          onMouseLeave: () => handleSetActiveId(null),
        }
      : {
          onClick: () => handleSetActiveId(id),
        };

    return cloneElement(
      typedChild,
      {
        key: index,
        className: cn("relative inline-flex", typedChild.props.className),
        ...interactionProps,
      },
      <>
        <AnimatePresence initial={false}>
          {activeId === id && (
            <motion.div
              layoutId={`background-${uniqueId}`}
              className={cn("absolute inset-0 text-primary", className)}
              transition={transition}
              initial={{ opacity: defaultValue ? 1 : 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            />
          )}
        </AnimatePresence>
        <div className={`z-10 ${activeId === id ? "text-primary" : ""}`}>
          {typedChild.props.children}
        </div>
      </>,
    );
  });
}
