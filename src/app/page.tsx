import { About } from "../components/sections/about";
import { Hero } from "../components/sections/hero";
import { Stacks } from "../components/sections/stacks";

export default function HomePage() {
  return (
    <main className="terminal-grid">
      <Hero />
      <About />
      <Stacks />
    </main>
  );
};
