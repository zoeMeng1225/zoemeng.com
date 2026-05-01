import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experiences } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className={cn("max-w-3xl mx-auto px-6 pb-16")}>
        <Hero />
        <Projects />
        <Experiences />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
