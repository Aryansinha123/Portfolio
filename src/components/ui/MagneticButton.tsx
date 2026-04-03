"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  magneticStrength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  magneticStrength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * magneticStrength;
    const deltaY = (e.clientY - centerY) * magneticStrength;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const content = (
    <motion.div
      ref={ref}
      data-hoverable
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full 
        glass-card font-medium text-sm tracking-wide transition-all duration-300
        ${isHovered ? "shadow-[0_0_30px_rgba(0,245,255,0.3)]" : ""}
        ${className}`}
      style={{
        borderColor: isHovered
          ? "rgba(0, 245, 255, 0.4)"
          : "rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Glow background on hover */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background:
            "linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(168, 85, 247, 0.1))",
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
