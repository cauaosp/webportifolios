import { Footer, Profile, TopMenu } from "../components/shared";
import { PortifolioDownload } from "../components/shared/index";

export default function About() {
  return (
    <div className="grid gap-2 md:gap-6 h-screen bg-gray-950 p-5 pb-1 px-36 select-none">
      <TopMenu />
      <PortifolioDownload />

      <div className="grid grid-cols-3 p-5 2xl:pt-10 gap-4 gap-y-0 md:gap-y-20 2xl:gap-y-0 overflow-hidden 2xl:mt-8 2xl:mb-0">
        <Profile />
        <div className="text-white col-span-2 row-span-3 scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-emerald-400 scrollbar-track-white h-full overflow-y-scroll max-h-[500px]">
          <div className="flex flex-col gap-6 mb-15">
            <div className="font-bold text-7xl">Full Stack Developer</div>
            <div className="text-xl tracking-tight text-emerald-400">
              Projetar soluções de ponta a ponta
            </div>
            <div className="text-justify mr-10 text-neutral-300">
              Conheça um pouco mais sobre minha trajetória e as experiências que
              moldaram minha carreira até aqui. Abaixo, compartilho alguns dos
              projetos e conquistas que refletem minha dedicação e evolução
              constante.
            </div>
          </div>
          <div className="flex flex-col gap-5 pb-10">
            <div className="font-bold text-3xl">Experiências profissionais</div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1 mr-10">
                <div className="font-bold text-xl">Fitbank</div>
                <div className="flex justify-between text-emerald-400 text-xs">
                  <div>Desenvolvedor Full Stack</div>
                  <div>09/2023 - 01/2025</div>
                </div>
                <div className="text-md tracking-tight text-justify text-neutral-300">
                  Criação de aplicativo web com integrações a APIs REST,
                  garantindo a aderência a contratos e regras de negócios
                  bancárias. Focado em entregas rápidas e eficientes
                </div>
              </div>
              <div className="flex flex-col gap-1 mr-10">
                <div className="font-bold text-xl">Include Jr</div>
                <div className="flex justify-between text-emerald-400 text-xs">
                  <div>Desenvolvedor</div>
                  <div>12/2021 - 06/2023</div>
                </div>
                <div className="text-md tracking-tight text-justify text-neutral-300">
                  Trabalhei como voluntário na EJ Include Jr entre 2021 e 2023.
                  Nesse período, desenvolvi páginas com WordPress, criei design
                  e protótipos. Atuei, também, na área comercial, prospectando e
                  negociando com novos clientes, criando propostas e contratos.
                  Também atuei como Diretor de Projetos, gerenciando times de
                  desenvolvimento e planejando os projetos com base nas
                  necessidades dos clientes.
                </div>
              </div>
            </div>
            <div className=" font-bold text-3xl">Formação Acadêmica</div>
            <div className="flex flex-col gap-1 mr-10">
              <div className="font-bold text-xl">Universidade de Fortaleza</div>
              <div className="text-md tracking-tight text-justify text text-neutral-300">
                Graduando em Análise e Desenvolvimento de Sistemas
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
