import { Hero } from "../components/sections/hero";
import { About } from "../components/sections/about";

export default function HomePage() {
  return (
    <main className="terminal-grid">
      <Hero />
      <About />
    </main>
  );
};
