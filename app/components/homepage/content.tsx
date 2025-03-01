"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Profile } from "../shared";
import { AgeCounter } from "./age-counter";
import { CarouselHomepage } from "./carousel-homepage";

export const HomepageContent = ({ ...props }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return isMobile ? (
    <div className={cn("flex flex-col overflow-hidden", props.mobileClassName)}>
      <Profile isMobile={isMobile} />
      <div className="text-white text-justify px-2 mt-5">
        Olá, sou
        <span className="text-emerald-400"> Cauã OSP</span>, desenvolvedor
        nascido e criado em Fortaleza, CE, tenho <AgeCounter />
        ... Atualmente, meu foco é o desenvolvimento Full Stack, busco dominar
        ferramentas e tecnologias para criar soluções completas — desde o banco
        de dados até aplicações interativas no front-end.
      </div>
      <CarouselHomepage isMobile={isMobile} />
    </div>
  ) : (
    <div className="grid grid-cols-3 p-5 2xl:pt-10 gap-4 gap-y-2 overflow-hidden 2xl:mt-8 2xl:mb-0">
      <Profile />
      <div className="col-span-2 text-white text-justify 2xl:text-lg">
        Olá, sou
        <span className="text-emerald-400"> Cauã OSP</span>
        , desenvolvedor nascido e criado em Fortaleza, CE, tenho
        <AgeCounter />
        ... Atualmente, meu foco é o desenvolvimento Full Stack, busco dominar
        ferramentas e tecnologias para criar soluções completas — desde o banco
        de dados até aplicações interativas no front-end.
      </div>
      <CarouselHomepage />
    </div>
  );
};
