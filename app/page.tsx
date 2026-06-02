import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import SiteShell from "@/components/SiteShell";

export default function Home() {
  return (
    <>
      <Navbar />
      <SiteShell pageClassName="grid-bg">
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </SiteShell>
    </>
  );
}

