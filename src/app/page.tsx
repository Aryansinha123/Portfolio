import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Section dividers are subtle glowing lines between sections */}
      <Hero />
      <div className="section-divider max-w-4xl mx-auto" />
      <Projects />
      <div className="section-divider max-w-4xl mx-auto" />
      <Skills />
      <div className="section-divider max-w-4xl mx-auto" />
      <About />
      <div className="section-divider max-w-4xl mx-auto" />
      <Contact />
      <Footer />
    </>
  );
}
