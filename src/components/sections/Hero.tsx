"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import { useMousePosition } from "@/hooks/useMousePosition";

const orbitingIcons = [
  { name: "React", icon: "⚛️", delay: 0 },
  { name: "Next.js", icon: "▲", delay: 4 },
  { name: "Node.js", icon: "🟢", delay: 8 },
  { name: "Python", icon: "🐍", delay: 12 },
  { name: "MongoDB", icon: "🍃", delay: 16 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { normalized } = useMousePosition();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at ${50 + normalized.x * 10}% ${50 + normalized.y * 10}%, rgba(0, 245, 255, 0.06) 0%, rgba(168, 85, 247, 0.03) 40%, transparent 70%)`,
        }}
      />

      {/* Orbiting tech icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {orbitingIcons.map((icon, i) => (
          <motion.div
            key={icon.name}
            className="absolute text-2xl"
            style={{
              animation: `orbit ${20 + i * 3}s linear infinite`,
              animationDelay: `-${icon.delay}s`,
              filter: "drop-shadow(0 0 8px rgba(0, 245, 255, 0.4))",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1 + i * 0.2, duration: 1 }}
          >
            <span className="inline-block" title={icon.name}>
              {icon.icon}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 text-center px-6"
      >
        {/* Floating glass card */}
        <motion.div
          className="glass-card-strong p-10 md:p-16 max-w-3xl mx-auto animate-float-slow"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            boxShadow:
              "0 0 60px rgba(0, 245, 255, 0.08), 0 0 120px rgba(168, 85, 247, 0.04), inset 0 1px 0 rgba(255,255,255,0.05)",
            transform: `perspective(1000px) rotateX(${normalized.y * -2}deg) rotateY(${normalized.x * 2}deg)`,
          }}
        >
          {/* Greeting */}
          <motion.p
            className="text-neon-cyan text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Welcome to my universe
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-[var(--font-display)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="neon-text">Aryan Sinha</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-gray-300/80 mb-10 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            Building Intelligent, Scalable & Beautiful Systems
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <MagneticButton
              href="#projects"
              className="bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 border border-neon-cyan/30 text-white"
            >
              <span className="mr-2">🚀</span> View Projects
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="border border-white/10 text-gray-300 hover:text-white"
            >
              <span className="mr-2">✉️</span> Contact Me
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-white/20 mx-auto flex items-start justify-center p-1.5"
            animate={{ borderColor: ["rgba(255,255,255,0.2)", "rgba(0,245,255,0.4)", "rgba(255,255,255,0.2)"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-neon-cyan"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ boxShadow: "0 0 6px rgba(0, 245, 255, 0.5)" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
