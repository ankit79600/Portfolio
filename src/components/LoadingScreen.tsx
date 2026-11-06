"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("ap-loaded")) {
      setVisible(false);
      return;
    }
    sessionStorage.setItem("ap-loaded", "1");
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center gap-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-9xl text-accent select-none"
            style={{ textShadow: "0 0 60px rgba(0,230,118,0.5), 0 0 120px rgba(0,230,118,0.2)" }}
          >
            AP
          </motion.span>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-[2px] bg-accent rounded-full"
            style={{ boxShadow: "0 0 12px rgba(0,230,118,0.9)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
