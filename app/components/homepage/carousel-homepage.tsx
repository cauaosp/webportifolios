import { CarouselHomepageProps, HomepageSlidesEntity } from "@/app/types";
import { EducationCap, GitBranch, Tags } from "@/assets";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils"; // Ensure you have a utility function for conditional class merging
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export const CarouselHomepage: React.FC<CarouselHomepageProps> = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slides: HomepageSlidesEntity[] = [
    {
      title: "Conhecimentos",
      description:
        "Busco expandir habilidades e manter-me atualizado estudando sobre as demandas do Mercado.",
      list: [
        "Programação estrutural e OO",
        "Estrutura de dados",
        "Metodologias ágeis",
        "Arquitetura AWS",
        "SQL",
        "Prospecção e negociação",
        "Design",
        "TDD",
        "Clean Architecture",
      ],
      dot: (
        <EducationCap
          width={12}
          height={12}
          color={"var(--color-background)"}
        />
      ),
    },
    {
      title: "Experiências",
      description:
        "Aqui estão algumas das tecnologias que já usei no trabalho.",
      list: [
        "Kubernetes",
        "RabbitMq",
        "WordPress",
        ".Net Framework",
        "Next.Js",
        "Redis",
        "MySQL",
        "Elastic",
      ],
      dot: (
        <GitBranch width={12} height={12} color={"var(--color-background)"} />
      ),
    },
    {
      title: "Linguagens",
      description: "Usadas para desenvolvimento no trabalho ou faculdade.",
      list: ["C#", "TypeScript", "JavaScript", "C", "C++", "Python", "Java"],
      dot: <Tags width={12} height={12} color={"var(--color-background)"} />,
    },
  ];

  return (
    <div
      className={cn("col-span-2 h-[55vh] overflow-x-hidden mt-5")}
    >
      <div className="px-1" ref={emblaRef}>
        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full overflow-auto">
              <Card className="h-56 2xl:h-64 w-full border-white/25 bg-white/5 text-white p-2 justify-between flex overflow-auto text-xs 2xl:text-sm">
                <CardContent className="flex gap-y-3 flex-col max-h-64 w-full">
                  <CardTitle className="text-xl mb-1.5 2xl:text-2xl">
                    {slide.title}
                  </CardTitle>
                  <CardDescription className="2xl:text-base">
                    {slide.description}
                  </CardDescription>
                  <ul className="grid grid-cols-2 mt-1.5">
                    {slide.list.map((item, i) => (
                      <li key={i} className="flex py-0.5 gap-x-2 items-center">
                        {slide.dot}
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <Button
          onClick={scrollPrev}
          className="cursor-pointer hover:bg-emerald-400 text-white"
          disabled={!canScrollPrev}
        >
          <ArrowLeftCircleIcon />
        </Button>
        <Button
          onClick={scrollNext}
          className="cursor-pointer hover:bg-emerald-400 text-white"
          disabled={!canScrollNext}
        >
          <ArrowRightCircleIcon />
        </Button>
      </div>
    </div>
  );
};
