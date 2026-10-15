import React from 'react';
import { historyData } from '../data/historyData';

export const TesisFooter = () => {
  const { colofon } = historyData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="colofon" className="bg-[#160E09] text-[#F4EFE6] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#B89758]/40 scroll-mt-20">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Conclusión de la investigación */}
        <div className="border-b border-[#B89758]/20 pb-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F4EFE6] mb-4">
            Memoria, oficios y territorio
          </h2>
          <blockquote className="font-serif italic text-base sm:text-lg text-[#E8DEC8] leading-relaxed text-justify">
            «{colofon.thesisConclusion}»
          </blockquote>
        </div>

        {/* Colofón editorial */}
        <div className="space-y-6 text-sm text-[#E8DEC8]/90">
          <h3 className="font-serif text-xl font-bold text-[#F4EFE6]">
            {colofon.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <span className="font-serif font-bold text-[#F4EFE6] block">Institución:</span>
              <p className="mt-1">{colofon.institution} ({colofon.municipality})</p>
              <p className="text-xs text-[#E8DEC8]/70 mt-0.5">{colofon.gradeArea}</p>
            </div>

            <div>
              <span className="font-serif font-bold text-[#F4EFE6] block">Docente asesor:</span>
              <p className="mt-1">{colofon.academicAdvisor}</p>
              <p className="text-xs text-[#E8DEC8]/70 mt-0.5">{colofon.researchGroup}</p>
            </div>

            <div className="md:col-span-2 space-y-2 pt-2 border-t border-[#B89758]/20">
              <span className="font-serif font-bold text-[#F4EFE6] block">Fuentes consultadas:</span>
              {colofon.sources.map((src, i) => (
                <p key={i} className="text-xs sm:text-sm leading-relaxed">
                  <span className="text-[#B89758] font-medium">{src.type}:</span> {src.detail}
                </p>
              ))}
            </div>
          </div>

          <p className="font-serif italic text-xs text-[#B89758] pt-6 text-center">
            {colofon.latinClosing}
          </p>
        </div>

        {/* Retorno */}
        <div className="flex items-center justify-between pt-6 border-t border-[#B89758]/20 text-xs text-[#E8DEC8]/60">
          <span>Piedecuesta, Santander (2026)</span>
          <button
            onClick={scrollToTop}
            className="hover:text-[#F4EFE6] transition-colors font-serif"
          >
            Volver al inicio ↑
          </button>
        </div>

      </div>
    </footer>
  );
};
