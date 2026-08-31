import { SectionHeader } from "@/src/components/ui/section-header";
import { Briefcase } from "lucide-react";

export function Experiences() {
  return (
    <section id="experiencias" className="py-24 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="// experiências profissionais" icon={Briefcase} />

        <ol className="relative border-l border-border ml-3 space-y-12">
          {JOBS.map((job, i) => (
            <li key={i} className="pl-8 relative group">
              <span
                className={`absolute -left-1.75 top-1 size-3 rounded-full ring-4 ring-background transition-colors ${job.isWorking === 1
                    ? "bg-accent"
                    : "bg-surface border border-border group-hover:bg-accent/60"
                  }`}
              />
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">
                {job.company}
              </div>
              <h3 className="text-foreground text-lg font-medium group-hover:text-accent transition-colors">
                {job.role}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{job.period}</p>
              <p className="text-muted-foreground mt-3 max-w-3xl leading-relaxed tracking-tight">
                {job.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2.5 py-1 bg-surface ring-1 ring-border rounded-sm text-foreground/80 hover:ring-accent hover:text-accent transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
const JOBS = [
  {
    isWorking: 0,
    period: "Mar/2025 · Mar/2026",
    role: "Técnico de T.I.",
    company: "Carmel Hotéis",
    description:
      "Atuei com suporte e manutenção de computadores, servidores e redes. Automatizei o monitoramento de impressoras com Python e configurei servidores em Raspberry Pi para rotinas do hotel. Também trabalhei com sistemas ERP e suas regras de acesso e operação, desenvolvendo experiência prática com infraestrutura, redes e automação.",
    tech: ["Python", "Raspberry Pi", "Oracle", "CMFlex"],
  },
  {
    isWorking: 0,
    period: "Set/2023 · Jan/2025",
    role: "Desenvolvedor Full Stack",
    company: "Fitbank",
    description:
      "Atuei no desenvolvimento e integração de APIs e microsserviços em um ambiente de alta disponibilidade. Trabalhei com sistemas relacionados ao PIX, segurança e processamento de dados, utilizando Redis, RabbitMQ e .NET. Também participei de pipelines de CI/CD e apliquei boas práticas de engenharia de software em sistemas escaláveis.",
    tech: ["RabbitMQ", "Redis", "C#", "TypeScript", "Next.js", ".NET", "Elasticsearch", "Azure", "MySQL"]
  },
  {
    isWorking: 0,
    period: "Nov/2022 · Ago/2023",
    role: "Diretor de projetos",
    company: "Include Jr",
    description:
      "Liderei o planejamento e acompanhamento de projetos, organizando entregas e prioridades junto à equipe. Utilizei SCRUM para estruturar o desenvolvimento e participei da criação de soluções digitais, protótipos e páginas web. A experiência fortaleceu minhas habilidades de organização, colaboração e gestão de projetos.",
    tech: ["SCRUM", "Figma", "WordPress"],
  },
];
