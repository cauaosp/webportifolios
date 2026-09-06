import { About } from "../components/sections/about";
import { Experiences } from "../components/sections/experiences";
import { Hero } from "../components/sections/hero";
import { Projects } from "../components/sections/projects";
import { Stacks } from "../components/sections/stacks";
import { Footer, TopMenu } from "../components/layout";


export default function HomePage() {
  return (
    <main className="terminal-grid h-screen overflow-auto">
      <Hero />
      <About />
      <Stacks />
      <Experiences />
      <Projects />
      <Footer />
    </main>
  );
};
