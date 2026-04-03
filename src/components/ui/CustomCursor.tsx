"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const trailsRef = useRef<{ x: number; y: number; id: number }[]>([]);
  const trailIdRef = useRef(0);
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  const ringX = useSpring(0, { stiffness: 200, damping: 20 });
  const ringY = useSpring(0, { stiffness: 200, damping: 20 });

  const updateTrails = useCallback((x: number, y: number) => {
    trailIdRef.current += 1;
    const newTrail = { x, y, id: trailIdRef.current };
    trailsRef.current = [...trailsRef.current.slice(-8), newTrail];
    setTrails([...trailsRef.current]);
  }, []);

  useEffect(() => {
    // Check if touch device
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    let frameCount = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);

      frameCount++;
      if (frameCount % 3 === 0) {
        updateTrails(e.clientX, e.clientY);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-hoverable]") ||
        target.closest("[role='button']")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-hoverable]") ||
        target.closest("[role='button']")
      ) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY, ringX, ringY, updateTrails]);

  // Clean old trails
  useEffect(() => {
    const interval = setInterval(() => {
      trailsRef.current = trailsRef.current.slice(-6);
      setTrails([...trailsRef.current]);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (isTouch) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      {/* Trailing light particles */}
      {trails.map((trail, i) => (
        <motion.div
          key={trail.id}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: trail.x - 3,
            top: trail.y - 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: `rgba(0, 245, 255, ${0.1 + i * 0.05})`,
            boxShadow: "0 0 8px rgba(0, 245, 255, 0.3)",
          }}
        />
      ))}

      {/* Cursor ring */}
      <motion.div
        style={{
          position: "absolute",
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 50 : 32,
          height: isHovering ? 50 : 32,
          borderColor: isHovering
            ? "rgba(0, 245, 255, 0.6)"
            : "rgba(0, 245, 255, 0.3)",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="rounded-full border-[1.5px] pointer-events-none"
        style={{
          position: "absolute",
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: isHovering
            ? "0 0 15px rgba(0, 245, 255, 0.2)"
            : "none",
        }}
      />

      {/* Cursor dot */}
      <motion.div
        style={{
          position: "absolute",
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 8 : 5,
          height: isHovering ? 8 : 5,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
        className="rounded-full pointer-events-none"
        style={{
          position: "absolute",
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          background: "var(--neon-cyan)",
          boxShadow: "0 0 10px rgba(0, 245, 255, 0.5), 0 0 20px rgba(0, 245, 255, 0.2)",
        }}
      />
    </div>
  );
}
