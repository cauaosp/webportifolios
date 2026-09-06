import { Footer } from "../components/layout";
import { About } from "../components/sections/about";
import { Experiences } from "../components/sections/experiences";
import { Hero } from "../components/sections/hero";
import { Projects } from "../components/sections/projects";
import { Stacks } from "../components/sections/stacks";


export default function HomePage() {
  return (
    <main className="terminal-grid h-screen overflow-auto scroll-smooth">
      <Hero />
      <About />
      <Stacks />
      <Experiences />
      <Projects />
      <Footer />
    </main>
  );
};
