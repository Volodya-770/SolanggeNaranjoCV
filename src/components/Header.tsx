"use client";

import React from "react";
import { cvData } from "@/data/cv-data";

export function Header() {
  const { personalInfo } = cvData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="pt-8 pb-10 border-b border-zinc-200">
      {/* Top action bar: PDF & Print */}
      <div className="no-print flex items-center justify-end gap-3 mb-8">
        <a
          href={personalInfo.pdfUrl}
          download="CV_Solangge_Naranjo.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50 hover:text-[#3F6242] hover:border-[#3F6242] transition-colors shadow-xs"
          title="Descargar versión en PDF"
        >
          <svg
            className="w-4 h-4 text-[#3F6242]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Descargar PDF
        </a>

        <button
          onClick={handlePrint}
          type="button"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50 hover:text-[#3F6242] hover:border-[#3F6242] transition-colors shadow-xs cursor-pointer"
          title="Imprimir o guardar como PDF del navegador"
        >
          <svg
            className="w-4 h-4 text-zinc-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
          Imprimir
        </button>
      </div>

      {/* Main Header Info */}
      <div className="space-y-3">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
          {personalInfo.name}
        </h1>

        <p className="text-base sm:text-lg font-medium text-[#3F6242] leading-snug">
          {personalInfo.roleSubtitle}
        </p>

        {/* Contact info list */}
        <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-zinc-600">
          {/* Ubicación */}
          <span className="inline-flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-zinc-400 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {personalInfo.location}
          </span>

          <span className="hidden sm:inline text-zinc-300">|</span>

          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 hover:text-[#3F6242] transition-colors"
          >
            <svg
              className="w-4 h-4 text-zinc-400 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {personalInfo.email}
          </a>

          <span className="hidden sm:inline text-zinc-300">|</span>

          {/* Teléfonos */}
          <div className="inline-flex flex-wrap items-center gap-2">
            {/* WhatsApp Phone */}
            <a
              href={personalInfo.phones[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#3F6242] transition-colors font-medium"
              title="Contactar por WhatsApp"
            >
              <svg
                className="w-3.5 h-3.5 text-[#3F6242] shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.531 1.748.78 2.796.78 3.18 0 5.766-2.586 5.766-5.766 0-3.18-2.586-5.766-5.766-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.746 0-3.385-.45-4.819-1.238l-7.181 1.882 1.916-6.994c-.9-1.488-1.416-3.235-1.416-5.1 0-5.518 4.482-10 10-10 5.518 0 10 4.482 10 10z" />
              </svg>
              <span>{personalInfo.phones[0].display}</span>
              <span className="no-print text-[10px] text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                WhatsApp
              </span>
            </a>

            <span className="text-zinc-400">/</span>

            {/* Regular Phone */}
            <a
              href={personalInfo.phones[1].href}
              className="inline-flex items-center gap-1 hover:text-[#3F6242] transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 text-zinc-400 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {personalInfo.phones[1].display}
            </a>
          </div>

          <span className="hidden sm:inline text-zinc-300">|</span>

          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#3F6242] transition-colors"
          >
            <svg
              className="w-4 h-4 text-[#0A66C2] shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span className="underline decoration-zinc-300 underline-offset-2 hover:decoration-[#3F6242]">
              {personalInfo.linkedin.display}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
