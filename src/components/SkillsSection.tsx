import React from "react";
import { cvData } from "@/data/cv-data";

export function SkillsSection() {
  const { skills } = cvData;

  return (
    <section className="py-8 border-b border-zinc-200 page-break-avoid">
      <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 pb-2 mb-6 border-b border-zinc-200/80">
        Competencias Técnicas
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((categoryGroup) => (
          <div key={categoryGroup.category} className="space-y-3">
            <h3 className="text-sm sm:text-base font-semibold text-[#3F6242] tracking-wide uppercase text-xs sm:text-xs">
              {categoryGroup.category}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-700">
              {categoryGroup.skills.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 leading-snug"
                >
                  <span
                    className="text-[#3F6242] text-sm leading-none shrink-0 select-none"
                    aria-hidden="true"
                  >
                    ▸
                  </span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
