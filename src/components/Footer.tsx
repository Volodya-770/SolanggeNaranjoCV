import React from "react";
import { cvData } from "@/data/cv-data";

export function Footer() {
  return (
    <footer className="py-12 text-center text-xs text-zinc-500 space-y-2">
      <p>
        Currículum Vitae — {cvData.personalInfo.name} • Actualizado en {cvData.lastUpdated}
      </p>
      <div className="no-print pt-2">
        <a
          href="#top"
          className="text-zinc-400 hover:text-[#3F6242] transition-colors underline decoration-zinc-300 underline-offset-2"
        >
          Volver al inicio ↑
        </a>
      </div>
    </footer>
  );
}
