"use client";

import { ProfileProps } from "@/app/types";
import { Github, LinkedIn, SouthAmerica } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Profile: FC<ProfileProps> = ({ isMobile, className }) => {
  return isMobile ? (
    <div
      className={cn(
        "flex w-screen-mt-2 justify-around items-center p-2 bg-gray-900",
        className
      )}
    >
      <div>
        <Image
          src="/image/foto-github.JPG"
          alt="perfil"
          width={300}
          height={300}
          className="left-0 p-0.5 rounded-full justify-self-center size-14 mx-auto"
          quality={75}
        />

        <div className="flex text-white tracking-tighter font-light gap-x-2 h-fit items-center">
          <SouthAmerica
            width={20}
            height={20}
            color={"var(--color-background)"}
            className="drop-shadow-neon-south-america w-fit"
          />
          <div>América do sul / Brasil</div>
        </div>
      </div>

      <div className="flex flex-col items-start text-white tracking-tight font-extralight gap-2">
        <Link
          href="https://github.com/cauaosp"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white border border-white/25 px-3 py-1 rounded-lg flex items-center gap-x-2 font-light w-28 inset-shadow-sm inset-shadow-black/25"
        >
          <Github color={"#fff"} width={25} height={25} />
          <div>GitHub</div>
        </Link>

        <Link
          href="https://www.linkedin.com/in/cauaosp/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white border border-white/25 px-3 py-1 rounded-lg flex items-center gap-x-2 font-light w-28 inset-shadow-sm inset-shadow-black/25"
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
  ) : (
    <div
      className={cn(
        "row-span-3 grid grid-rows-3 gap-1 py-3 h-96 2xl:h-[32rem]",
        className
      )}
    >
      <Image
        src="/image/foto-github.JPG"
        alt="perfil"
        width={300}
        height={300}
        className="left-0 p-0.5 rounded-full 2xl:size-40 md:size-28 justify-self-center max-md:size-30"
        quality={75}
      />

      <div className="flex text-white tracking-tighter font-light gap-x-3 mx-auto h-fit mt-5 items-center">
        <SouthAmerica
          width={25}
          height={25}
          color={"var(--color-background)"}
          className=" drop-shadow-neon-south-america w-fit max-md:size-10"
        />
        <div>América do sul / Brasil</div>
      </div>

      <div className="h-fit items-start  flex -mt-10 2xl:-mt-15 text-white tracking-tight font-extralight gap-2 w-fit mx-auto">
        <Link
          href="https://github.com/cauaosp"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white border border-white/25 px-3 py-1 rounded-lg flex items-center gap-x-2 font-light inset-shadow-sm inset-shadow-black/25"
        >
          <Github color={"#fff"} width={25} height={25} />
          <div>GitHub</div>
        </Link>

        <Link
          href="https://www.linkedin.com/in/cauaosp/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white border border-white/25 px-3 py-1 rounded-lg flex items-center gap-x-2 font-light inset-shadow-sm inset-shadow-black/25"
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
