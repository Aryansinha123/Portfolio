"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navScale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const navOpacity = useTransform(scrollY, [0, 50], [0.8, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      style={{ scale: navScale }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[90] w-auto"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        style={{ opacity: navOpacity }}
        className={`flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500
          ${
            isScrolled
              ? "glass-card-strong shadow-[0_0_30px_rgba(0,245,255,0.1)]"
              : "glass-card"
          }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            data-hoverable
            className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300"
          >
            {activeSection === link.href.replace("#", "") && (
              <motion.div
                layoutId="activeNav"
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 245, 255, 0.15), rgba(168, 85, 247, 0.15))",
                  boxShadow: "0 0 20px rgba(0, 245, 255, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {link.label}
            </span>
          </a>
        ))}
      </motion.div>
    </motion.nav>
  );
}
