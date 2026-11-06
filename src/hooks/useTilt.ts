"use client";
import { useRef, useCallback } from "react";

export function useTilt(intensity = 10) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = ref.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) scale(1.03) translateZ(10px)`;
    },
    [intensity]
  );

  const onMouseLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)";
    }
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
