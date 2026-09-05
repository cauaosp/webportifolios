import { Cat } from "@/src/components/icons";

export const Footer = () => {
  return (
<<<<<<< Updated upstream
    <div className="mt-auto tracking-tight text-muted-foreground flex justify-center items-center w-full gap-3 py-5">
      <div>© Desenvolvido por <a href="https://github.com/cauaosp" className="text-accent hover:text-foreground hover:cursor-pointer" target="_blank" rel="noreferrer">Cauã OSP</a></div>
      <div className="relative">
        <Cat
          width={20}
          height={20}
          color={"var(--accent)"}
        />
        <div className="absolute bg-accent opacity-30 size-4 animate-pulse blur-sm top-1 left-0.5"></div>
      </div>
=======
    <div className="mt-auto tracking-tight text-muted-foreground flex justify-center items-center w-full gap-2 py-5">
      <div>© Desenvolvido por</div>

        <a href="https://github.com/cauaosp" className="group flex items-center gap-2 text-muted-foreground p-2 border border-border rounded-sm hover:text-accent hover:cursor-pointer hover:border-accent" target="_blank" rel="noreferrer">
          <span className="">Cauã Paiva</span>
          <Cat
            width={20}
            height={20}
            color="currentColor"
            strokeWidth={1.7}
          />
        </a>
>>>>>>> Stashed changes
    </div>
  );
};
