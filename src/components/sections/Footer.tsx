"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      {/* Fade-out gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(2, 6, 23, 0.8))",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.p
          className="text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Designed & Built by{" "}
          <span className="neon-text font-medium">Aryan Sinha</span>
        </motion.p>

        <motion.p
          className="text-gray-600 text-xs mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          © {new Date().getFullYear()} · All rights reserved
        </motion.p>

        {/* Decorative glow line */}
        <motion.div
          className="mt-6 mx-auto w-24 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--neon-cyan), transparent)",
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>
    </footer>
  );
}
