"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-neon-blue rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: pos.x - 8, y: pos.y - 8 }}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-neon-purple rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: pos.x - 16, y: pos.y - 16 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </>
  );
}
