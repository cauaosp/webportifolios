import { Cat } from "@/src/components/icons";

export const Footer = () => {
  return (

    <div className="mt-auto bg-background/80 backdrop-blur-md tracking-tight text-muted-foreground flex justify-center items-center w-full gap-2 py-5">
      <div>© Desenvolvido por</div>
      <a href="https://github.com/cauaosp" className="group flex items-center gap-2 text-muted-foreground p-2 ring-1 ring-border rounded-sm hover:text-accent hover:cursor-pointer hover:ring-accent" target="_blank" rel="noreferrer">
        <span className="">Cauã Paiva</span>
        <Cat
          width={20}
          height={20}
          color="currentColor"
          strokeWidth={1.7}
        />
      </a>
    </div>
  );
};
