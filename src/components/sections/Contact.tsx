"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import GlowText from "@/components/ui/GlowText";
import { Mail } from "lucide-react";

// Custom SVG icons for brands (lucide-react removed brand icons)
function GithubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterXIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  href: string;
  color: string;
  glow: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: <GithubIcon size={24} />,
    href: "https://github.com/Aryansinha123",
    color: "group-hover:text-white",
    glow: "rgba(255, 255, 255, 0.3)",
  },
  {
    name: "LinkedIn",
    icon: <LinkedinIcon size={24} />,
    href: "https://www.linkedin.com/in/aryan-sinha7293/",
    color: "group-hover:text-blue-400",
    glow: "rgba(59, 130, 246, 0.3)",
  },
  {
    name: "Twitter / X",
    icon: <TwitterXIcon size={24} />,
    href: "https://twitter.com",
    color: "group-hover:text-sky-400",
    glow: "rgba(56, 189, 248, 0.3)",
  },
  {
    name: "Email",
    icon: <Mail size={24} />,
    href: "mailto:sinhaaryan173@gmail.com",
    color: "group-hover:text-neon-cyan",
    glow: "rgba(0, 245, 255, 0.3)",
  },
];

export default function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="contact" className="relative py-32 px-6">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 60%, rgba(0, 245, 255, 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlowText as="h2" className="text-3xl md:text-5xl font-bold mb-4">
            Get In Touch
          </GlowText>
          <p className="text-gray-400 max-w-md mx-auto text-lg">
            Have a project in mind? Let&apos;s create something extraordinary
            together.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          className="glass-card-strong p-10 md:p-14 mb-12"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            boxShadow:
              "0 0 60px rgba(0, 245, 255, 0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <a
            href="mailto:sinhaaryan173@gmail.com"
            data-hoverable
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-medium
              bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30
              text-white hover:shadow-[0_0_30px_rgba(0,245,255,0.2)] transition-all duration-500
              hover:border-neon-cyan/50 hover:from-neon-cyan/30 hover:to-neon-purple/30"
          >
            <Mail size={20} />
            Say Hello
          </a>
        </motion.div>

        {/* Social Dock */}
        <motion.div
          className="flex justify-center items-end gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {socialLinks.map((link, i) => {
            // macOS dock scale calculation
            let scale = 1;
            if (hoveredIndex !== null) {
              const distance = Math.abs(hoveredIndex - i);
              if (distance === 0) scale = 1.4;
              else if (distance === 1) scale = 1.15;
              else scale = 1;
            }

            return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-hoverable
                className={`group flex flex-col items-center gap-2`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className={`p-4 rounded-2xl glass-card transition-all duration-300
                    group-hover:border-white/20`}
                  style={{
                    boxShadow:
                      hoveredIndex === i
                        ? `0 0 25px ${link.glow}`
                        : "none",
                  }}
                  whileHover={{ y: -4 }}
                >
                  <div
                    className={`text-gray-400 transition-colors duration-300 ${link.color}`}
                  >
                    {link.icon}
                  </div>
                </motion.div>
                <motion.span
                  className="text-xs text-gray-500"
                  animate={{
                    opacity: hoveredIndex === i ? 1 : 0,
                    y: hoveredIndex === i ? 0 : 5,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
