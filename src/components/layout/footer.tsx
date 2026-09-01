import { Cat } from "@/src/components/icons";

export const Footer = () => {
  return (
    <div className="mt-auto tracking-tight text-muted-foreground flex justify-center items-center w-full gap-3 py-5">
      <div>© Desenvolvido por <a href="https://github.com/cauaosp" className="text-accent hover:text-foreground hover:cursor-pointer" target="_blank" rel="noreferrer">Cauã OSP</a></div>
      <div className="relative">
        <Cat
          width={20}
          height={20}
          color={"var(--accent)"}
        />
        <div className="absolute bg-accent opacity-60 size-4 animate-pulse blur-sm top-1 left-0.5"></div>
      </div>
    </div>
  );
};
