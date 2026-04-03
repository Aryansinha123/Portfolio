"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[100]"
    >
      <div
        className="w-full h-full"
        style={{
          background:
            "linear-gradient(90deg, var(--neon-cyan), var(--neon-blue), var(--neon-purple))",
          boxShadow:
            "0 0 10px rgba(0, 245, 255, 0.5), 0 0 20px rgba(0, 245, 255, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)",
        }}
      />
    </motion.div>
  );
}
