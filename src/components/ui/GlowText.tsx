"use client";

import { motion } from "framer-motion";

interface GlowTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
}

export default function GlowText({
  children,
  className = "",
  as: Tag = "span",
}: GlowTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="inline-block"
    >
      <Tag className={`neon-text font-display ${className}`}>{children}</Tag>
    </motion.div>
  );
}
