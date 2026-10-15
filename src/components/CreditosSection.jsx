import React from 'react';
import { historyData } from '../data/historyData';

export const CreditosSection = () => {
  const { colofon } = historyData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="creditos" className="bg-[#17100B] text-[#F3EBDD] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t-2 border-[#B39352] scroll-mt-20">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Encabezado del Colofón */}
        <div className="border-b border-[#B39352]/30 pb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F3EBDD] mb-2">
            {colofon.title}
          </h2>
          <p className="font-serif italic text-sm text-[#B39352]">
            Investigación Histórica y Patrimonial Escolar
          </p>
        </div>

        {/* Ficha institucional y fuentes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#E8DEC8]/90">
          <div className="space-y-4">
            <div>
              <span className="font-serif font-bold text-[#F3EBDD] block">Institución Educativa:</span>
              <p className="mt-1">{colofon.institution}</p>
              <p className="text-xs text-[#E8DEC8]/70 mt-0.5">{colofon.grade}</p>
            </div>

            <div>
              <span className="font-serif font-bold text-[#F3EBDD] block">Docente Asesor:</span>
              <p className="mt-1">{colofon.advisor}</p>
              <p className="text-xs text-[#E8DEC8]/70 mt-0.5">{colofon.municipality}</p>
            </div>
          </div>

          <div className="space-y-3">
            <span className="font-serif font-bold text-[#F3EBDD] block">Fuentes Primarias y Secundarias:</span>
            {colofon.sources.map((src, i) => (
              <div key={i} className="text-xs sm:text-sm leading-relaxed border-l border-[#B39352]/40 pl-3">
                <strong className="text-[#B39352] block font-serif">{src.type}:</strong>
                <span className="text-[#E8DEC8]/80">{src.citation}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cierre editorial */}
        <p className="font-serif italic text-xs text-[#B39352] pt-6 border-t border-[#B39352]/20 text-center">
          {colofon.closingNote}
        </p>

        {/* Retorno */}
        <div className="flex items-center justify-between pt-4 border-t border-[#B39352]/10 text-xs text-[#E8DEC8]/60">
          <span>Piedecuesta, Santander (1776–2026)</span>
          <button
            onClick={scrollToTop}
            className="hover:text-[#F3EBDD] transition-colors font-serif underline underline-offset-4"
          >
            Volver a la Portada ↑
          </button>
        </div>

      </div>
    </footer>
  );
};
