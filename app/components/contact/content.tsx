"use client";

import { useEffect, useState } from "react";
import { Profile } from "../shared";
import { ContactForms } from "./forms";

export const ContactContent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

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
    <div className="flex flex-col overflow-auto scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-emerald-400 scrollbar-track-gray-800">
      <Profile isMobile={isMobile} />
      <ContactForms isMobile={isMobile} />
    </div>
  ) : (
    <div className="grid grid-cols-3 p-5 2xl:pt-10 gap-4 gap-y-0 md:gap-y-20 2xl:gap-y-0 overflow-hidden 2xl:mt-8">
      <Profile />
      <ContactForms />
    </div>
  );
};
