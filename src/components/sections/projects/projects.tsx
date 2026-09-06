import { Card } from "@/src/components/ui/card";
import { SectionHeader } from "@/src/components/ui/section-header";
import { ExternalLink, FolderGit2, Github } from "lucide-react";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projetos" className="py-20 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto">
      <SectionHeader label="// projetos" icon={FolderGit2} />

      <div className="grid md:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <Card
            key={i}
            className="
            overflow-hidden
            flex
            flex-col
            group
            transition-all
            duration-300
            hover:-translate-y-2
            hover:ring-2
            hover:ring-accent/20
            hover:shadow-xl
            hover:shadow-accent/10"
          >
            <div className="aspect-video bg-surface-2 border-b border-border relative overflow-hidden">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full terminal-grid flex items-center justify-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  <span className="bg-surface ring-1 ring-border px-3 py-1.5 rounded-sm">
                    preview.png
                  </span>
                </div>
              )}
              <div className="absolute top-3 left-3 flex items-center gap-2 font-mono text-[10px] text-muted-foreground bg-background/70 backdrop-blur px-2 py-1 rounded-sm ring-1 ring-border">
                <span className="size-1.5 rotate-45 bg-accent" />
                proj_{String(i + 1).padStart(2, "0")}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-foreground font-semibold text-xl tracking-tight group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2.5 leading-relaxed flex-1">
                {p.summary}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2.5 py-1 bg-surface-2 ring-1 ring-border rounded-sm text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-6 pt-5 border-t border-border">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-sm font-mono text-xs uppercase tracking-widest hover:bg-accent/90 transition-colors"
                >
                  <ExternalLink className="size-3.5" /> Website
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 ring-1 ring-border text-foreground px-4 py-2 rounded-sm font-mono text-xs uppercase tracking-widest hover:ring-accent hover:text-accent transition-colors"
                >
                  <Github className="size-3.5" /> Source
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>)

}

const PROJECTS = [
  {
    title: "Rolê Fortal 🌊",
    summary:
      "Site para descobrir o que está acontecendo em Fortaleza centralizando as notícias.",
    image: "/images/role-fortal.png",
    tech: ["Python", "Docker", "Minikube", "TypeScript", "Vite", "Flask"],
    live: "https://roles-fortal-frontend.cauaosp20.workers.dev/",
    repo: "https://github.com/cauaosp/roles_fortal_infra",
  },
  {
    title: "Mandachuva ☔",
    summary:
      "Um site para conferir rapidamente o clima, temperatura, localização e censo populacional de qualquer muncípio do Brasil.",
    image: "/images/mandachuva.png",
    tech: ["Express.js", "Vite", "Vitest", "TypeScript"],
    live: "https://mandachuva.onrender.com/",
    repo: "https://github.com/cauaosp/mandachuva",
  },
  {
    title: "Webportfolio",
    summary:
      "Vitrine para apresentação profissional.",
    image: "/images/webportfolio.png",
    tech: ["Next.js", "TypeScript"],
    live: "https://webportifolios.vercel.app/",
    repo: "https://github.com/cauaosp/webportifolios",
  },
];
