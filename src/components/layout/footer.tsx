import { Cat } from "@/src/components/icons";

export const Footer = () => {
  return (
    <div className="mt-auto tracking-tight text-muted-foreground flex justify-center items-center w-full gap-3 py-5">
      <div>© Desenvolvido por <span className="text-accent">Cauã OSP</span></div>
      <div className="relative">
        <Cat
          width={20}
          height={20}
          color={"var(--accent)"}
        />
        <div className="absolute bg-accent opacity-20 size-4 animate-pulse blur-sm top-1 left-0.5"></div>
      </div>
    </div>
  );
};
