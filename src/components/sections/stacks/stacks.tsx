import { IconBadge } from "@/src/components/ui/icon-badge";
import { SectionHeader } from "@/src/components/ui/section-header";
import { BookOpen, Code2, Zap } from "lucide-react";

export function Stacks() {
  return (
    <section id="stack" className="py-20 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="section_02" label="// stacks" icon={Code2} />

        <div className="grid md:grid-cols-3 gap-px bg-border overflow-hidden rounded-lg border border-border">
          {/* Conhecimentos */}
          <div className="bg-surface p-6 lg:p-8 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <IconBadge icon={BookOpen} />
                <h3 className="text-foreground font-medium">Conhecimentos</h3>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">
                {KNOWLEDGE.length}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Base teórica e prática.
            </p>
            <div className="flex flex-wrap gap-2">
              {KNOWLEDGE.map((k) => (
                <span
                  key={k}
                  className="font-mono text-xs px-3 py-1.5 bg-background border border-border rounded-sm text-foreground/90 hover:border-accent hover:text-accent transition-colors"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>

          {/* Tecnologias já usadas */}
          <div className="bg-surface p-6 lg:p-8 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <IconBadge icon={Zap} />
                <h3 className="text-foreground font-medium">Tecnologias</h3>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">
                {EXPERIENCE.length}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Ferramentas, plataformas e frameworks usados.
            </p>
            <div className="flex flex-wrap gap-2">
              {EXPERIENCE.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 bg-background border border-border rounded-sm text-foreground/90 hover:border-accent hover:text-accent transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Linguagens de programação */}
          <div className="bg-surface p-6 lg:p-8 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <IconBadge icon={Code2} />
                <h3 className="text-foreground font-medium">Linguagens</h3>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">
                {LANGUAGES.length}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Linguagens de programação já experimentados.
            </p>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((lang) => (
                <span
                  key={lang.name}
                  className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 bg-background border border-border rounded-sm text-foreground/90 hover:border-accent hover:text-accent transition-colors"
                >
                  {lang.name}
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground">
                    {lang.level}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

const KNOWLEDGE = [
  "LGPD",
  "Cloud Computing",
  "Scrum",
  "Arquitetura AWS",
  "SQL",
  "Machine Learning",
  "Kanban",
  "Testes unitários",
  "POO",
  "Web Design",
  "Levantamento de requisitos",
  "Conventional Commits",
  "Linux",
  "API REST"
];

const EXPERIENCE = [
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "Next.js",
  "Git",
  "Flask",
  "Bun",
  "RabbitMQ",
  ".Net Framework",
  "WordPress",
  "Redis",
  "MySQL",
  "Node",
  "Lovable",
  "Firebase",
  "Vite",
  "Supabase",
  "Gitlab",
  "Express",
  "Claude",
  "ChatGPT",
  "Minikube",
  "React",
];

const LANGUAGES = [
  { name: "Python", level: "Trabalho" },
  { name: "TypeScript", level: "Trabalho" },
  { name: "JavaScript", level: "Trabalho" },
  { name: "C#", level: "Trabalhei" },
  { name: "Java", level: "Faculdade" },
  { name: "C", level: "Faculdade" },
  { name: "C++", level: "Faculdade" },
];
