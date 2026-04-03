"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";
import GlowText from "@/components/ui/GlowText";
import ibmCertificate from "./IBM.png";

/** Local imports or paths under `public/certificates/`. */
const certificates: { src: string | StaticImageData; alt: string }[] = [
  { src: ibmCertificate, alt: "IBM certificate" },
];

const gradients = [
  "from-cyan-500/20 to-blue-500/20",
  "from-purple-500/20 to-pink-500/20",
  "from-emerald-500/20 to-cyan-500/20",
  "from-amber-500/20 to-rose-500/20",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none gradient-radial" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlowText as="h2" className="text-3xl md:text-5xl font-bold mb-4">
            Certificates
          </GlowText>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Credentials and programs, shown as issued
          </p>
        </motion.div>

        {certificates.length === 0 ? (
          <motion.div
            className="glass-card rounded-2xl border border-white/10 p-12 md:p-16 text-center max-w-xl mx-auto animate-border-glow"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              Add images to{" "}
              <span className="text-gray-300 font-medium">public/certificates/</span>
              , then list them in{" "}
              <span className="text-gray-300 font-medium">Certificates.tsx</span>{" "}
              to display them here.
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {certificates.map((cert, i) => (
              <motion.div key={`${cert.alt}-${i}`} variants={cardVariants}>
                <TiltCard className="h-full">
                  <div
                    className="glass-card p-4 h-full group relative overflow-hidden transition-all duration-500
                      hover:border-neon-cyan/30 animate-border-glow"
                    style={{ animationDelay: `${i * 0.35}s` }}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${gradients[i % gradients.length]} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative z-10 rounded-xl overflow-hidden border border-white/5 bg-space-900/40 aspect-[4/3]">
                      <Image
                        src={cert.src}
                        alt={cert.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className="shimmer-overlay" />
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
