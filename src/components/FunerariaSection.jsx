import React from 'react';
import { historyData } from '../data/historyData';

export const FunerariaSection = () => {
  const { capitulo3, images } = historyData;

  return (
    <section id="funeraria-gomez" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
      
      {/* Encabezado editorial del capítulo III */}
      <header className="border-b border-[#B39352]/50 pb-6 mb-10">
        <span className="font-serif italic text-sm text-[#B39352] block mb-1">
          {capitulo3.number}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-bold tracking-tight">
          {capitulo3.title}
        </h2>
        <p className="font-serif italic text-lg text-[#3D2D24] mt-1">
          {capitulo3.subtitle}
        </p>
      </header>

      {/* Ficha Patrimonial del Establecimiento */}
      <div className="bg-[#FAF6F0] rounded border border-[#B39352]/40 p-4 sm:p-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
        <span className="font-serif font-bold text-[#1F3D2B] uppercase tracking-wider">
          Ficha Patrimonial de Establecimiento:
        </span>
        <span className="font-serif italic text-[#3D2D24]">
          {capitulo3.address}
        </span>
      </div>

      {/* Cuerpo principal: Contexto de Don David Gómez Barrera */}
      <div className="space-y-6 text-[#3D2D24] text-base sm:text-lg leading-relaxed text-justify mb-12">
        <p className="drop-cap">
          {capitulo3.contextParagraph1}
        </p>
        
        {/* Fotografía de la fachada histórica */}
        <figure className="my-8">
          <div className="overflow-hidden rounded border border-[#B39352]/40 bg-[#24160E]">
            <img
              src={images.funerariaFachada}
              alt="Casona de la Funeraria David Gómez Barrera en la Carrera 8 de Piedecuesta"
              className="w-full h-72 sm:h-80 object-cover sepia contrast-110"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-2 font-serif italic text-xs sm:text-sm text-[#3D2D24] text-center">
            Sede histórica del taller y despacho exequial de Don David Gómez en la Carrera 8 #9-01.
          </figcaption>
        </figure>

        <p>
          {capitulo3.contextParagraph2}
        </p>
      </div>

      {/* Extracto de archivo parroquial */}
      <div className="my-10 p-6 sm:p-8 bg-[#FAF6F0] rounded border-l-2 border-[#1F3D2B] shadow-sm">
        <span className="font-serif font-bold text-xs uppercase tracking-wider text-[#B39352] block mb-2">
          Asiento de Archivo Eclesiástico · Libro de Difuntos
        </span>
        <blockquote className="font-serif italic text-base sm:text-lg text-[#1F3D2B] leading-relaxed">
          {capitulo3.parishExtract}
        </blockquote>
      </div>

      {/* La transición a Funeraria San Francisco Javier */}
      <div className="my-12 pt-8 border-t border-[#B39352]/30 space-y-4">
        <h3 className="font-serif text-2xl text-[#1F3D2B] font-bold">
          {capitulo3.transitionTitle}
        </h3>
        <p className="text-base sm:text-lg text-[#3D2D24] leading-relaxed text-justify">
          {capitulo3.transitionExplanation}
        </p>
      </div>

    </section>
  );
};
