"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";
import GlowText from "@/components/ui/GlowText";
import { ExternalLink } from "lucide-react";

// Custom GitHub SVG icon since lucide-react removed brand icons
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

interface Project {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  github: string;
  live: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "EventEase",
    description: "Event Registration Platform with full authentication & RBAC",
    longDescription:
      "Built a full-stack platform using Next.js, Node.js, and MongoDB. Implemented authentication, role-based access control, and event management with a responsive Tailwind CSS interface.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "#",
    live: "https://event-ease-bay.vercel.app/",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "MindScape",
    description: "AI-Based Risk Detection Platform using NLP & Computer Vision",
    longDescription:
      "Built an NLP model using TF-IDF and Logistic Regression. Integrated chatbot and face recognition using CNN and OpenCV. Optimized recall using SMOTE with Flask APIs and a BI dashboard.",
    techStack: ["Python", "Flask", "TF-IDF", "CNN", "OpenCV", "SMOTE"],
    github: "#",
    live: "#",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Dark Web Crime Analysis",
    description: "Financial Crime Analysis & Intelligence Framework",
    longDescription:
      "Analyzed 50,000+ dark web listings across 20+ countries. Applied Random Forest, K-Means, DBSCAN, and Linear Regression for crime pattern detection and intelligence reporting.",
    techStack: ["Python", "Random Forest", "K-Means", "DBSCAN", "Pandas"],
    github: "#",
    live: "#",
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "CareConnect",
    description: "Digital Platform for Donor & Volunteer Management",
    longDescription:
      "Full-stack platform using Next.js, Node.js, and MongoDB. Features JWT authentication, role-based access management, and a streamlined interface connecting donors with volunteer opportunities.",
    techStack: ["Next.js", "Node.js", "MongoDB", "JWT"],
    github: "#",
    live: "https://care-connect-blush.vercel.app/",
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "BiteBloom",
    description: "Full-stack Food Delivery Platform with admin dashboard",
    longDescription:
      "Developed a full-stack food delivery platform with login, menu browsing, about us, and table booking using Vue.js. Built an admin dashboard to manage orders with PHP, XAMPP (Apache), and MySQL.",
    techStack: ["Vue.js", "PHP", "MySQL", "XAMPP", "Apache"],
    github: "#",
    live: "#",
    gradient: "from-amber-500/20 to-rose-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      {/* Section glow */}
      <div className="absolute inset-0 pointer-events-none gradient-radial" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlowText as="h2" className="text-3xl md:text-5xl font-bold mb-4">
            Projects
          </GlowText>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            A curated selection of projects that push boundaries
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={i === projects.length - 1 && projects.length % 2 !== 0 ? "md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto" : ""}
            >
              <TiltCard className="h-full">
                <div
                  className={`glass-card p-8 h-full group relative overflow-hidden transition-all duration-500
                    hover:border-neon-cyan/30 animate-border-glow`}
                  style={{
                    animationDelay: `${i * 0.5}s`,
                  }}
                >
                  {/* Gradient top accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-2 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Extended description - revealed on hover */}
                    <p className="text-gray-500 text-xs leading-relaxed h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                      {project.longDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-4 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-400
                            bg-white/[0.02] hover:border-neon-cyan/30 hover:text-neon-cyan transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        data-hoverable
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-neon-cyan transition-colors duration-300 group/link"
                      >
                        <span className="group-hover/link:scale-110 transition-transform inline-flex">
                          <GithubIcon size={16} />
                        </span>
                        Code
                      </a>
                      <a
                        href={project.live}
                        data-hoverable
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-neon-purple transition-colors duration-300 group/link"
                      >
                        <ExternalLink
                          size={16}
                          className="group-hover/link:scale-110 transition-transform"
                        />
                        Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Shimmer overlay */}
                  <div className="shimmer-overlay" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
