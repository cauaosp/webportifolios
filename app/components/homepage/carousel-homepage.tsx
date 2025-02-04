"use client";

import { HomepageSlidesEntity } from "@/app/types";
import { EducationCap, GitBranch, Tags } from "@/assets";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselHomepage() {
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
        "Aqui estão algumas das minhas experiências profisisonais e tecnologias que já trabalhei.",
      list: [
        "Kubernets",
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
      description:
        "Linguagens usadas para desenvolvimento no trabalho ou faculdade.",
      list: ["C#", "TypeScript", "JavaScript", "C", "C++", "Python", "Java"],
      dot: <Tags width={12} height={12} color={"var(--color-background)"} />,
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="md:w-[40vw] md:h-60 2xl:w-[45vw] 2xl:h-56 col-span-2 ml-14 md:-mt-12 2xl:mt-15"
    >
      <CarouselContent className="px-1">
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <Card className="h-56 2xl:h-64 w-full border-white/25 bg-white/5 text-white p-2 justify-between flex overflow-auto text-xs 2xl:text-sm">
              <CardContent className="flex gap-y-3 flex-col max-h-64 w-full">
                <CardTitle className="text-xl mb-1.5 2xl:text-2xl">{slide.title}</CardTitle>
                <CardDescription className="2xl:text-base">{slide.description}</CardDescription>
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-mb-10 cursor-pointer" />
      <CarouselNext className="cursor-pointer" />
    </Carousel>
  );
}
