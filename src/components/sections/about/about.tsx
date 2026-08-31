"use client"

import { Card } from "@/src/components/ui/card";
import { IconBadge } from "@/src/components/ui/icon-badge";
import { SectionHeader } from "@/src/components/ui/section-header";
import { BookOpen, Languages } from "lucide-react";

export function About() {
  return (
    <section id="resumo" className="py-20 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="// resumo" icon={BookOpen} />

        <div className="grid lg:grid-cols-[1fr_420px] gap-12">
          <div className="max-w-2xl text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              Olá, estou graduando em <span className="text-foreground">Análise e Desenvolvimento de Sistemas</span> na UNIFOR e quero seguir a carreira de <span className="text-foreground">Engenharia de Dados</span>. Atualmente, desenvolvo projetos voltados à construção de pipelines de dados e integração entre sistemas em ambientes de nuvem.
            </p>
            <p>
              Gosto de unir o conhecimento teórico e as experiências práticas na construção de sistemas eficientes e escaláveis. Por isso, estudo sobre <span className="text-foreground">DevOps, conteinerização com Docker e Machine Learning</span>, buscando compreender todo o ciclo de desenvolvimento e processos ETL.
            </p>
          </div>

          {/* Idiomas */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <IconBadge icon={Languages} />
                <h3 className="text-foreground font-medium">Idiomas</h3>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">
                {SPOKEN_LANGUAGES.length} items
              </span>
            </div>
            <ul className="space-y-3">
              {SPOKEN_LANGUAGES.map((l) => (
                <li
                  key={l.name}
                  className="flex items-center justify-between font-mono text-sm py-2 border-b border-dashed border-border/50 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-accent/60 text-[10px] w-6">{l.code}</span>
                    <span className="text-foreground/90">{l.name}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {l.level}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

const SPOKEN_LANGUAGES = [
  { name: "Inglês", level: "Avançado", code: "EN" },
  { name: "Libras", level: "Intermediário", code: "LI" },
  { name: "Espanhol", level: "Básico", code: "ES" },
  { name: "Português", level: "Nativo", code: "PT" },
];
