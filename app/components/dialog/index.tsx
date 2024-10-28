"use client";

import { useDelay } from "@devpgcs/app/hooks/use-delay";
import { PropsWithChildren, useCallback, useEffect, useRef } from "react";

interface DialogProps extends PropsWithChildren {
  /**
   * Whether the dialog is open or not.
   */
  isOpen: boolean;
  /**
   * Callback to close the dialog.
   * @returns {void}
   */
  onClose: () => void;
}

export function Dialog({ isOpen, onClose, children }: DialogProps) {
  const backLayerRef = useRef<HTMLDivElement>(null);

  const openDelay = useDelay();
  const closeDelay = useDelay();

  const openAnimation = () => {
    backLayerRef.current?.classList.add("bg-black/50");
    backLayerRef.current?.firstElementChild?.classList.remove("opacity-0");
  };

  const closeAnimation = useCallback(() => {
    backLayerRef.current?.classList.remove("bg-black/50");
    backLayerRef.current?.firstElementChild?.classList.add("opacity-0");

    closeDelay(onClose, 300);
  }, [closeDelay, onClose]);

  useEffect(() => {
    const windowSubscription = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAnimation();
    };

    const cleanUpWindowSubscription = () => {
      window.removeEventListener("keydown", windowSubscription);
    };

    if (backLayerRef.current && isOpen) {
      openDelay(openAnimation, 100);
      window.addEventListener("keydown", windowSubscription);
    } else {
      cleanUpWindowSubscription();
    }

    return cleanUpWindowSubscription;
  }, [isOpen, closeAnimation, openDelay]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={backLayerRef}
      role="dialog"
      onClick={closeAnimation}
      className="w-screen h-screen absolute top-0 left-0 flex items-center justify-center transition-all duration-300"
    >
      <div className="opacity-0 transition-all duration-300" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
