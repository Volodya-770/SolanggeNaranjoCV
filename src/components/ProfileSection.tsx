import React from "react";
import { cvData } from "@/data/cv-data";

export function ProfileSection() {
  return (
    <section className="py-8 border-b border-zinc-200">
      <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 pb-2 mb-4 border-b border-zinc-200/80">
        Perfil Profesional
      </h2>
      <p className="text-zinc-700 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
        {cvData.summary}
      </p>
    </section>
  );
}
