import { Cat } from "@/assets";

export const Footer = () => {
  return (
    <div className="h-fit mt-auto mx-auto text-white tracking-tighter font-thin flex items-center justify-between w-full px-5">
      <div>© 2025 / Cauã OSP</div>
      <Cat
        width={35}
        height={35}
        color={"#34d399"}
        className=" drop-shadow-neon-cat w-fit"
      />
    </div>
  );
};
