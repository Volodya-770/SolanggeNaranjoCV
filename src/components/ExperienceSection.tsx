import React from "react";
import { cvData } from "@/data/cv-data";

export function ExperienceSection() {
  const { experience } = cvData;

  return (
    <section className="py-8 border-b border-zinc-200">
      <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 pb-2 mb-8 border-b border-zinc-200/80">
        Experiencia Profesional
      </h2>

      <div className="space-y-10">
        {experience.map((item, index) => (
          <article
            key={`${item.company}-${index}`}
            className="page-break-avoid relative"
          >
            {/* Header of job: Company, Location, Date */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
              <div className="flex items-baseline flex-wrap gap-x-2">
                <h3 className="font-bold text-base sm:text-lg text-zinc-900 tracking-tight">
                  {item.company}
                </h3>
                <span className="text-xs sm:text-sm text-zinc-500 font-normal">
                  • {item.location}
                </span>
              </div>
              <span className="text-xs sm:text-sm italic text-zinc-500 shrink-0 font-light">
                {item.period}
              </span>
            </div>

            {/* Role & Highlight Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <h4 className="text-sm sm:text-base font-semibold text-[#3F6242]">
                {item.role}
              </h4>
              {item.highlightBadge && (
                <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium text-amber-900 bg-amber-50/80 border border-amber-200/70 px-2 py-0.5 rounded-full">
                  <span>★</span> {item.highlightBadge}
                </span>
              )}
            </div>

            {/* Achievements with custom green bullet ▸ */}
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700">
              {item.achievements.map((ach, achIndex) => (
                <li
                  key={achIndex}
                  className="flex items-start gap-2.5 leading-relaxed"
                >
                  <span
                    className="text-[#3F6242] select-none text-base leading-none mt-0.5 shrink-0"
                    aria-hidden="true"
                  >
                    ▸
                  </span>
                  <span>
                    <strong className="font-semibold text-zinc-800">
                      {ach.title}:
                    </strong>{" "}
                    <span className="text-zinc-600">{ach.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
