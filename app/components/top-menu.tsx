"use client";

import { Home, Menu, Send, UserAvatar, FileDownload } from "@/assets";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export const TopMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [downloadStatus, setDownloadStatus] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const handleClick = async () => {
      try {
        const response = await fetch("/download/curriculo-cauaosp");
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "curriculo-cauaosp.pdf";
        link.click();
        window.URL.revokeObjectURL(url);
        setDownloadStatus("Baixado com sucesso!");
        setShowStatus(true);
        setTimeout(() => {
          setShowStatus(false);
        }, 5000);
      } catch {
        setDownloadStatus("Erro ao baixar arquivo");
        setShowStatus(true);
        setTimeout(() => {
          setShowStatus(false);
        }, 5000);
      }
    };


    return (
      <>
        {/* Mobile */}
        <nav className="md:hidden fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md flex justify-between items-center p-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="size-2.5 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />

            <span className="font-mono text-sm tracking-tight text-foreground uppercase">
              caua_osp<span className="text-accent">.dev</span>
            </span>
          </a>

          <Button
            onClick={handleClick}
            className="active:bg-accent/10 bg-transparent border-accent border rounded-lg text-accent"
          >
            <FileDownload width={15} height={15} color={"#10b981"} />
            <span>Currículo</span>
            {showStatus && (
              <div
                className={`absolute -bottom-2 text-xs font-mono font-bold ${
                  downloadStatus.includes("Erro")
                    ? "text-red-400"
                    : "text-emerald-400"
                }`}
              >
                {downloadStatus}
              </div>
            )}
          </Button>

        </nav>

        {/* Desktop */}
        <nav className="hidden md:block fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-3">
              <span className="size-2.5 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />

              <span className="font-mono text-sm tracking-tight text-foreground uppercase">
                caua_osp<span className="text-accent">.dev</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#resumo" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Resumo
              </a>
              <a href="#stack" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Stacks
              </a>
              <a href="#experiencias" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Experiências
              </a>
              <a href="#projetos" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Projetos
              </a>
              <Button
                onClick={handleClick}
                className="hover:bg-accent/10 bg-transparent border-accent border rounded-lg text-accent hover:cursor-pointer"
              >
                <FileDownload width={15} height={15} color={"#10b981"} />
                <span>Currículo</span>
                {showStatus && (
                  <div
                    className={`absolute -bottom-2 text-xs font-mono font-bold ${
                      downloadStatus.includes("Erro")
                        ? "text-red-400"
                        : "text-emerald-400"
                    }`}
                  >
                    {downloadStatus}
                  </div>
                )}
              </Button>
            </div>
          </div>
        </nav>
      </>
    );
  };
