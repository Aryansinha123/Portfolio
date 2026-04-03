"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import GlowText from "@/components/ui/GlowText";

interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "datascience" | "tools";
}

const skills: Skill[] = [
  // Frontend / Web
  { name: "HTML", icon: "🌐", category: "frontend" },
  { name: "CSS", icon: "🎨", category: "frontend" },
  { name: "JavaScript", icon: "⚡", category: "frontend" },
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "Next.js", icon: "▲", category: "frontend" },
  { name: "Vue.js", icon: "💚", category: "frontend" },
  { name: "Tailwind CSS", icon: "🎯", category: "frontend" },
  // Backend
  { name: "Node.js", icon: "🟢", category: "backend" },
  { name: "Python", icon: "🐍", category: "backend" },
  { name: "Java", icon: "☕", category: "backend" },
  { name: "C/C++", icon: "⚙️", category: "backend" },
  { name: "Flask", icon: "🧪", category: "backend" },
  { name: "PHP", icon: "🐘", category: "backend" },
  { name: "MongoDB", icon: "🍃", category: "backend" },
  { name: "MySQL", icon: "🗄️", category: "backend" },
  // Data Science
  { name: "Pandas", icon: "🐼", category: "datascience" },
  { name: "Scikit-learn", icon: "🤖", category: "datascience" },
  { name: "NumPy", icon: "🔢", category: "datascience" },
  { name: "Matplotlib", icon: "📊", category: "datascience" },
  { name: "R Shiny", icon: "📈", category: "datascience" },
  { name: "OpenCV", icon: "👁️", category: "datascience" },
  // Tools
  { name: "Git", icon: "📦", category: "tools" },
  { name: "GitHub", icon: "🐙", category: "tools" },
  { name: "VS Code", icon: "💻", category: "tools" },
];

const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "datascience", label: "Data Science" },
  { key: "tools", label: "Tools" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 70% 50%, rgba(168, 85, 247, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlowText as="h2" className="text-3xl md:text-5xl font-bold mb-4">
            Skills
          </GlowText>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              data-hoverable
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeCategory === cat.key
                    ? "bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-white border border-neon-cyan/30 shadow-[0_0_15px_rgba(0,245,255,0.15)]"
                    : "glass-card text-gray-400 hover:text-white hover:border-white/20"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid - Floating Bubbles */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          layout
        >
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                duration: 0.5,
                delay: i * 0.03,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.15,
                y: -5,
                transition: { duration: 0.2 },
              }}
              data-hoverable
              className="group"
              style={{
                animation: `float ${6 + (i % 4) * 2}s ease-in-out infinite`,
                animationDelay: `${(i * 0.3) % 3}s`,
              }}
            >
              <div
                className="glass-card px-5 py-3 flex items-center gap-3 transition-all duration-300
                  group-hover:border-neon-cyan/40 group-hover:shadow-[0_0_25px_rgba(0,245,255,0.15)]
                  group-hover:bg-white/[0.06]"
              >
                <span
                  className="text-xl transition-transform duration-300 group-hover:scale-125"
                >
                  {skill.icon}
                </span>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
