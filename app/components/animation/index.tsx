"use client";

import { CSSProperties, PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";

interface AnimationProps extends PropsWithChildren {
  /**
   * The direction of the animation.
   */
  direction: "left" | "right" | "up" | "down";
}

export function Animation({ children, direction }: AnimationProps) {
  const [isAboveDiv, setIsAboveDiv] = useState<boolean>();

  const divRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const initialStyles: CSSProperties = useMemo(() => {
    if (!divRef.current) return {};

    switch (direction) {
      case "up":
        return { transform: `translateY(${divRef.current.clientHeight}px)` };
      case "down":
        return { transform: `translateY(-${divRef.current.clientHeight}px)` };
      case "left":
        return { transform: `translateX(-${divRef.current.clientWidth}px)` };
      case "right":
        return { transform: `translateX(${divRef.current.clientWidth}px)` };
    }
  }, [direction, divRef.current]);

  useEffect(() => {
    const scrollSubscriber = () => {
      if (divRef.current) {
        // Defines the percentage of the div that should be visible to trigger the animation
        const requiredTouchedAmount = divRef.current.clientHeight * 0.5;
        const bottomScroll = window.scrollY + window.innerHeight;

        const isAboveDivCalc = bottomScroll < divRef.current.offsetTop + requiredTouchedAmount;

        // We must sync with the outer state to avoid executing the animation multiple times
        const canAnimate = isAboveDivCalc !== isAboveDiv;

        if (canAnimate) {
          timerRef.current = setTimeout(() => {
            const divToAnimate = divRef.current;

            setIsAboveDiv(isAboveDivCalc);

            divToAnimate?.classList.toggle("opacity-0", isAboveDivCalc);
            divToAnimate?.classList.toggle("opacity-100", !isAboveDivCalc);

            if (typeof divToAnimate?.style.transform === "string") {
              divToAnimate.style.transform = !isAboveDivCalc ? "translate(0, 0)" : initialStyles.transform!;
            }
          }, 500);
        } else if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      }
    };

    window.addEventListener("scroll", scrollSubscriber);
    return () => window.removeEventListener("scroll", scrollSubscriber);
  }, [initialStyles, isAboveDiv, setIsAboveDiv]);

  return (
    <div className="overflow-hidden">
      <div ref={divRef} className="transition-all duration-500 ease-in-out opacity-0" style={initialStyles}>
        {children}
      </div>
    </div>
  );
}
