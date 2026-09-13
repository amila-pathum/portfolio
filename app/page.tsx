import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import About from "@/components/About";
import Skills from "@/components/Skills";
import DevOpsPipeline from "@/components/DevOpsPipeline";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
// Certifications section is temporarily disabled until real certifications
// exist — see the commented-out <Certifications /> render below and the
// commented-out nav link in lib/content.ts. Uncomment both to re-enable.
// import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";

export default function Home() {
  return (
    <div style={{ position: "relative", background: "#fff" }}>
      <ScrollEffects />
      <Header />
      <Hero />
      <StatsStrip />
      <About />
      <Skills />
      <DevOpsPipeline />
      <Projects />
      <Journey />
      {/* <Certifications /> */}
      <Contact />
      <Footer />
    </div>
  );
}
