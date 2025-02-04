"use client";

import { Github, LinkedIn, SouthAmerica } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Profile = ({...props}) => {
  return (
    <div className={cn("row-span-3 grid grid-rows-3 gap-1 py-3 w-64 h-96 2xl:h-[32rem]", props.className)}>
      <Image
        src="/image/smile-profile.jpg"
        alt="perfil"
        width={300}
        height={300}
        className="left-0 p-0.5 rounded-full 2xl:size-40 md:size-28 justify-self-center"
        quality={75}
      />

      <div className="flex text-white tracking-tighter font-light gap-x-3 mx-auto h-fit mt-5 items-center">
        <SouthAmerica
          width={25}
          height={25}
          color={"var(--color-background)"}
          className=" drop-shadow-neon-south-america w-fit"
        />
        <div>América do sul / Brasil</div>
      </div>

      <div className="h-fit items-start  flex -mt-10 2xl:-mt-15 text-white tracking-tight font-extralight gap-2 w-fit mx-auto">
        <Link
          href="https://github.com/cauaosp"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white border border-white/25 px-3 py-1 rounded-lg flex items-center gap-x-2 font-light"
        >
          <Github color={"#fff"} width={25} height={25} />
          <div>GitHub</div>
        </Link>

        <Link
          href="https://www.linkedin.com/in/cauaosp/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white border border-white/25 px-3 py-1 rounded-lg flex items-center gap-x-2 font-light"
        >
          <LinkedIn
            color={"var(--color-blue-600)"}
            background={"#fff"}
            width={23}
            height={23}
          />
          <div>LinkedIn</div>
        </Link>
      </div>
    </div>
  );
};
