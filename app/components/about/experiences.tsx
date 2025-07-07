export const Experiences = ({ ...props }) => {
  return (
    <div
      className={`text-white ${props.isMobile
        ? "mt-5 pl-2"
        : "overflow-y-auto col-span-2 row-span-3 h-full max-h-[500px] scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-emerald-400 scrollbar-track-gray-800"
        }`}
    >
      <div className="flex flex-col gap-6 mb-15">
        <div
          className={`font-bold ${props.isMobile ? "text-6xl" : "text-7xl"}`}
        >
          Full Stack Developer
        </div>
        <div className="text-xl tracking-tight text-emerald-400">
          Projetar soluções de ponta a ponta
        </div>
        <div
          className={`text-justify text-neutral-300 ${props.isMobile ? "mr-5" : "mr-10"
            }`}
        >
          Conheça um pouco mais sobre minha trajetória e as experiências que
          moldaram minha carreira até aqui. Abaixo, compartilho alguns dos
          projetos e conquistas que refletem minha dedicação e evolução
          constante.
        </div>
      </div>
      <div className="flex flex-col gap-5 pb-10">
        <div className="font-bold text-3xl">Experiências profissionais</div>
        <div className="flex flex-col gap-6">
          <div
            className={`flex flex-col gap-1 ${props.isMobile ? "mr-5" : "mr-10"
              }`}
          >
            <div className="font-bold text-xl">Carmel Hotéis</div>
            <div className="flex justify-between text-emerald-400 text-sm">
              <div>Técnico de TI</div>
              <div>03/2025 - Atualmente</div>
            </div>
            <div className="text-md tracking-tight text-justify text-neutral-300">
              Automação de processos, suporte a softwares (PMS/POS/ERP), criação de bots e manutenção da infraestrutura de redes e computadores.
            </div>
          </div>
          <div
            className={`flex flex-col gap-1 ${props.isMobile ? "mr-5" : "mr-10"
              }`}
          >
            <div className="font-bold text-xl">Fitbank</div>
            <div className="flex justify-between text-emerald-400 text-sm">
              <div>Desenvolvedor Full Stack</div>
              <div>09/2023 - 01/2025</div>
            </div>
            <div className="text-md tracking-tight text-justify text-neutral-300">
              Criação de aplicativo web com integrações a APIs REST, e
              desenvolvimento de APIs e serviços com aderência a contratos e
              regras de negócios do sistema financeiro. Experiência com
              conceitos de Clean Architecture, TDD, Design Patterns,
              Microservices, SOLID e Clean Code.
            </div>
          </div>
          <div
            className={`flex flex-col gap-1 ${props.isMobile ? "mr-5" : "mr-10"
              }`}
          >
            <div className="font-bold text-xl">Include Jr</div>
            <div className="flex justify-between text-emerald-400 text-sm">
              <div>Desenvolvedor</div>
              <div>12/2021 - 06/2023</div>
            </div>
            <div className="text-md tracking-tight text-justify text-neutral-300">
              Trabalhei como voluntário na EJ Include Jr entre 2021 e 2023.
              Nesse período, desenvolvi páginas com WordPress, criei design e
              protótipos. Atuei, também, na área comercial, prospectando e
              negociando com novos clientes, criando propostas e contratos.
              Também atuei como Diretor de Projetos, gerenciando times de
              desenvolvimento e planejando os projetos com base nas necessidades
              dos clientes.
            </div>
          </div>
        </div>
        <div className="font-bold text-3xl">Formação Acadêmica</div>
        <div
          className={`flex flex-col gap-1 ${props.isMobile ? "mr-5" : "mr-10"}`}
        >
          <div className="font-bold text-xl">Universidade de Fortaleza</div>
          <div className="text-md tracking-tight text-justify text text-neutral-300">
            Graduando em Análise e Desenvolvimento de Sistemas
          </div>
        </div>
      </div>
    </div>
  );
};
