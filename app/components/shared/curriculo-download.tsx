"use client";

import { FileDownload } from "@/assets";
import { Button } from "@/components/ui/button";

import { useState } from "react";

export const CurriculoDownload = () => {
  const [downloadStatus, setDownloadStatus] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  const handleClick = async () => {
    try {
      const response = await fetch("/download/curriculo-cauaosp.pdf");
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
    <Button
      onClick={handleClick}
      className="bg-white/10 border border-white/25 text-white rounded-2xl absolute top-5 right-6 p-4 hover:cursor-pointer inset-shadow-xs inset-shadow-black/25"
    >
      <FileDownload width={25} height={25} color={"#fff"} />
      <div>currículo</div>
      {showStatus && (
        <div
          className={`absolute -bottom-5 text-xs font-mono font-bold ${
            downloadStatus.includes("Erro")
              ? "text-red-400"
              : "text-emerald-400"
          }`}
        >
          {downloadStatus}
        </div>
      )}
    </Button>
  );
};
