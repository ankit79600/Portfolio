"use client";
import { useState, useEffect } from "react";

export function useTypewriter(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseMs = 2000
) {
  const [state, setState] = useState({
    text: "",
    wordIdx: 0,
    deleting: false,
  });

  useEffect(() => {
    const { text, wordIdx, deleting } = state;
    const current = words[wordIdx % words.length];

    if (!deleting) {
      if (text.length < current.length) {
        const t = setTimeout(
          () => setState((s) => ({ ...s, text: current.slice(0, s.text.length + 1) })),
          typingSpeed
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(
          () => setState((s) => ({ ...s, deleting: true })),
          pauseMs
        );
        return () => clearTimeout(t);
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(
          () => setState((s) => ({ ...s, text: s.text.slice(0, -1) })),
          deletingSpeed
        );
        return () => clearTimeout(t);
      } else {
        setState((s) => ({ ...s, deleting: false, wordIdx: s.wordIdx + 1 }));
      }
    }
  }, [state, words, typingSpeed, deletingSpeed, pauseMs]);

  return state.text;
}
