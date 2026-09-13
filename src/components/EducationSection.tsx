import React from "react";
import { cvData } from "@/data/cv-data";

export function EducationSection() {
  const { education } = cvData;

  return (
    <section className="py-8 border-b border-zinc-200 page-break-avoid">
      <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 pb-2 mb-6 border-b border-zinc-200/80">
        Formación Académica
      </h2>

      {/* Grado Universitario */}
      <div className="space-y-6">
        {education.degrees.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-bold text-sm sm:text-base text-zinc-900">
                {item.degree}
              </h3>
              <span className="text-xs sm:text-sm italic text-zinc-500 font-light">
                {item.year}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#3F6242] font-medium">
              {item.institution}
            </p>
          </div>
        ))}

        {/* Formación Complementaria */}
        <div className="pt-2 space-y-3">
          <h3 className="text-xs sm:text-xs font-semibold text-[#3F6242] tracking-wide uppercase">
            Formación Complementaria & Diplomados
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-zinc-700">
            {education.complementary.map((course, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 leading-snug"
              >
                <span
                  className="text-[#3F6242] text-sm leading-none mt-0.5 shrink-0 select-none"
                  aria-hidden="true"
                >
                  ▸
                </span>
                <span>{course}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
