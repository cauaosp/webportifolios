"use client";

import { Home, Menu, Send, UserAvatar } from "@/assets";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const TopMenu = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setActiveLink("home");
    } else if (pathname === "/about") {
      setActiveLink("about");
    } else if (pathname === "/contact") {
      setActiveLink("contact");
    }
  }, [pathname]);

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
    isClient ? (
      <DropdownMenu>
        <DropdownMenuTrigger className="m-5 size-fit hover:cursor-pointer">
          <Menu width={25} height={25} color={"#fff"} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-emerald-400 rounded-sm bg-emerald-900/75 ml-5">
          <DropdownMenuItem
            onClick={() => router.push("/")}
            className={`border-b rounded-none border-white/25 hover:cursor-pointer hover:font-black active:font-bold ${
              activeLink == "home" && "font-bold"
            }`}
          >
            <div>Início</div>
            <Home color={"#a4f4cf"} stroke={"#a4f4cf"} width={25} height={25} />
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => router.push("/contact")}
            className={`border-b rounded-none border-white/25 hover:cursor-pointer hover:font-black active:font-bold ${
              activeLink == "contact" && "font-bold"
            }`}
          >
            <div>Contato</div>
            <Send
              fill={"#a4f4cf35"}
              width={25}
              height={25}
              stroke={"#a4f4cf"}
            />
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => router.push("/about")}
            className={`hover:cursor-pointer hover:font-black active:font-bold ${
              activeLink == "about" && "font-bold"
            }`}
          >
            <div>Sobre</div>
            <UserAvatar
              fill={"#a4f4cf"}
              width={20}
              height={20}
              className={"-mt-0.5 "}
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ) : (
      <Skeleton className="size-6 m-5 rounded-sm bg-white/50 inline-block" />
    )
  ) : (
    <div className="flex gap-6 justify-center items-center h-fit w-96 mx-auto border border-white bg-gray-700/10 rounded-3xl py-1 text-white select-none font-light tracking-tighter">
      <div
        className={`hover:border-white/25 hover:bg-white/5 border-transparent py-1 px-3 hover:border  hover:cursor-pointer tracking-tighter border rounded-2xl ${
          activeLink === "home" ? "bg-white/10 border-white/25" : ""
        }`}
        onClick={() => router.push("/")}
      >
        <Home color={"#fff"} stroke={"#fff"} width={25} height={25} />
      </div>
      <div className="font-thin text-white/75">|</div>
      <div
        className={` py-1 pr-3 pl-2 border border-transparent hover:border hover:border-white/25 hover:bg-white/5 hover:cursor-pointer rounded-2xl flex gap-x-1 items-center ${
          activeLink === "contact" ? "bg-white/10 border-white/25" : ""
        }`}
        onClick={() => router.push("/contact")}
      >
        <Send fill={"#ffffff33"} width={25} height={25} stroke={"#fff"} />
        <div>Contato</div>
      </div>
      <div
        className={` border border-transparent py-1 px-3 hover:border hover:border-white/25 hover:bg-white/5 hover:cursor-pointer rounded-2xl flex gap-x-1 items-center ${
          activeLink === "about" ? "bg-white/10 border-white/25" : ""
        }`}
        onClick={() => router.push("/about")}
      >
        <UserAvatar
          fill={"#ffffff"}
          width={20}
          height={20}
          className={"-mt-0.5 "}
        />

        <div>Sobre</div>
      </div>
    </div>
  );
};
