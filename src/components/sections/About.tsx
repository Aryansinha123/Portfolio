"use client";

import { motion, type Variants } from "framer-motion";
import GlowText from "@/components/ui/GlowText";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: "Aug 2023 — Present",
    title: "Integrated M.Tech in CS (Data Science)",
    company: "VIT, Vellore — CGPA: 9.46",
    description:
      "Pursuing Integrated M.Tech in Computer Science with specialization in Data Science. Building full-stack applications, AI/ML models, and contributing to hackathons.",
  },
  {
    year: "Sept 2025",
    title: "HackBattle Hackathon",
    company: "Competitive Event",
    description:
      "Frontend development for an AI/ML-based internship recommendation platform. Built resume-driven input interfaces and location-aware workflows.",
  },
  {
    year: "2025",
    title: "Web Development Intern",
    company: "Navodita Infotech",
    description:
      "Worked on frontend and backend web development tasks. Built responsive interfaces and integrated APIs. Documented experience in a LinkedIn internship post.",
  },
  {
    year: "2008 — 2023",
    title: "Class 12 (93.8%) · Class 10 (98%)",
    company: "SKD Academy — ICSE, Lucknow",
    description:
      "Strong academic foundation with a consistently high record in science and mathematics throughout school education.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 50% at 30% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlowText as="h2" className="text-3xl md:text-5xl font-bold mb-4">
            About
          </GlowText>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            The story behind the code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Panel */}
          <motion.div
            className="glass-card-strong p-8 md:p-10 animate-float-slow"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              boxShadow:
                "0 0 40px rgba(0, 245, 255, 0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Hey, I&apos;m Aryan Sinha 👋
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m a Computer Science student at VIT Vellore specializing in
                Data Science, with a strong passion for building full-stack web
                applications and intelligent systems that solve real-world problems.
              </p>
              <p>
                From event management platforms to AI-powered risk detection
                systems and dark web analytics — I love exploring the
                intersection of web technologies and data science. My stack
                spans React, Next.js, Node.js, Python, and ML/AI frameworks.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me diving into
                hackathons, experimenting with NLP models, or learning about
                the latest in cloud infrastructure and DevOps.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/5">
              {[
                { label: "CGPA", value: "9.46" },
                { label: "Projects", value: "5+" },
                { label: "Tech Stack", value: "15+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold neon-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-[1px]">
              <motion.div
                className="w-full h-full"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, var(--neon-cyan), var(--neon-purple), transparent)",
                }}
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>

            {/* Timeline items */}
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="relative pl-12"
                >
                  {/* Node */}
                  <motion.div
                    className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2"
                    style={{
                      borderColor: "var(--neon-cyan)",
                      background: "var(--space-950)",
                    }}
                    initial={{ scale: 0, boxShadow: "none" }}
                    whileInView={{
                      scale: 1,
                      boxShadow: "0 0 12px rgba(0, 245, 255, 0.5)",
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.3, duration: 0.4 }}
                  />

                  {/* Content */}
                  <div className="glass-card p-5 hover:border-white/15 transition-all duration-300">
                    <span className="text-xs text-neon-cyan font-mono tracking-wider">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-semibold text-white mt-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-neon-purple/70 mb-2">
                      {item.company}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
