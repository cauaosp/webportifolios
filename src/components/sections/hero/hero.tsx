import { Card } from "@/src/components/ui/card";
import { getOnlineStatus } from "@/src/lib/utils";
import { Github } from "../../icons/github";
import { LinkedIn } from "../../icons/linkedin";
import { AgeCounter } from "./use-age-counter";

export function Hero() {
  const isOnline = getOnlineStatus();

  return (
    <section className="relative py-20 md:py-32 px-6 border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
          <div className="space-y-8 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border rounded-sm font-mono text-[10px] text-accent">
              <span className="opacity-50">STATUS:</span>
              <span className="uppercase tracking-widest">Disponível para projetos</span>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-xs text-muted-foreground">
                <span className="text-accent">$</span> whoami
              </p>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-semibold tracking-tighter text-foreground leading-[0.9]">
                CAUÃ
                <br />
                <span className="text-muted">OLIVEIRA</span>
              </h1>
              <div className="flex items-center gap-3 font-mono text-base md:text-lg text-accent pt-2">
                <span>&gt; Data Engineer</span>
                <span className="w-2.5 h-5 bg-accent cursor-blink inline-block" />
              </div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-[58ch] leading-relaxed">
              Desenvolvedor nascido e criado em <span className="text-foreground">Fortaleza — CE</span>. Estudo processos ETL, Machine Learning e Web Scraping para transformar dados brutos em informação útil e criar sistemas integrados eficientes.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/cauaosp"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-sm font-mono text-sm uppercase tracking-tighter hover:bg-transparent hover:text-accent border hover:border-accent transition-colors"
              >
                <div className="flex items-center gap-1">
                  <Github
                    width={16}
                    height={16}
                    className="size-6"
                    color="currentColor"
                  />
                  <div>GitHub →</div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/cauaosp/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 ring-1 ring-border text-foreground px-5 py-3 rounded-sm font-mono text-sm uppercase tracking-tighter hover:ring-accent hover:text-accent transition-colors"
              >
                <div className="flex items-center gap-1">
                  <LinkedIn
                    width={16}
                    height={16}
                    className="size-6"
                    color="currentColor"
                  />
                  <div>LinkedIn →</div>
                </div>
              </a>
            </div>

            <AgeCounter />
          </div>

          <div className="space-y-4 reveal">
            <div className="relative group">
              <div className="absolute size-125 -inset-2 bg-accent/30 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity -left-28" />
              <div className="relative w-full aspect-4/5 bg-surface outline-1 -outline-offset-1 outline-white/5 rounded-lg overflow-hidden">
                <img
                  src="images/perfil.jpg"
                  alt="Cauã de Oliveira Silva Paiva"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 mask-y-from-75%"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 right-3 flex justify-between font-mono text-[10px] text-muted-foreground">
                  <span>M3_C0N_TR4T4.RAW</span>
                  <span className="text-accent">● REC</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between font-mono text-[10px] text-muted-foreground">
                  <span>Pão de açúcar / RJ</span>
                  <span>lat -22.9 lng -43.1</span>

                </div>
              </div>
            </div>

            <Card className="p-5 font-mono text-xs space-y-2.5">
              <div className="flex justify-between text-muted-foreground">
                <span>location</span>
                <span className="text-foreground">Fortaleza / CE</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>region</span>
                <span className="text-foreground">América do Sul</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>focus</span>
                <span className="text-accent">Data Engineering</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>status</span>
                <span className="text-accent flex items-center gap-1.5">
                  <span className={`size-1.5 rounded-full animate-pulse ${isOnline ? "bg-accent" : "bg-red-400"}`} />
                {isOnline ? "online" : "studying"}
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
