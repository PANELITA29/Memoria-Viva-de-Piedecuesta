import React from 'react';
import { historyData } from '../data/historyData';
import { GraduationCap, BookOpen, Library, ArrowUp, Feather } from 'lucide-react';

export const ColofonSection = () => {
  const { seccion6 } = historyData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="colofon" className="bg-[#23170F] text-[#EFE6D8] pt-12 sm:pt-16 pb-10 sm:pb-12 px-2 sm:px-6 border-t-2 sm:border-t-4 border-double border-[#B89758] scroll-mt-20 relative">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Encabezado del Colofón */}
        <div className="border-b border-[#B89758]/40 pb-5 sm:pb-6 flex flex-col md:flex-row md:items-baseline justify-between gap-2 sm:gap-3">
          <div>
            <div className="flex items-center gap-2 text-[#B89758] text-[10px] sm:text-xs font-serif uppercase tracking-wider sm:tracking-[0.2em] font-bold mb-1">
              <Feather className="w-4 h-4 shrink-0" />
              <span>{seccion6.badge}</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#EFE6D8]">
              {seccion6.title}
            </h2>
          </div>
          <span className="font-serif italic text-xs text-[#B89758]">
            Investigación Histórica y Patrimonial Escolar (1776–2026)
          </span>
        </div>

        {/* Reflexión Central: La Dignificación de los Oficios con padding responsivo */}
        <div className="bg-[#362419] p-4 sm:p-8 lg:p-12 rounded-lg border-2 border-[#B89758] shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-[#B89758]">
            <Library className="w-5 h-5 shrink-0" />
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#EFE6D8]">
              {seccion6.reflection.title}
            </h3>
          </div>
          <p className="font-serif text-sm sm:text-base md:text-lg text-[#E5D9C5] leading-relaxed text-justify drop-cap">
            {seccion6.reflection.text}
          </p>
          <div className="pt-3 border-t border-[#B89758]/30 text-right">
            <span className="text-xs font-serif italic text-[#B89758]">
              {seccion6.institutionalCredits.inscription}
            </span>
          </div>
        </div>

        {/* Referencias Bibliográficas y Archivos Completos */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#B89758]">
            <BookOpen className="w-5 h-5 shrink-0" />
            <h4 className="font-serif text-base sm:text-lg font-bold uppercase tracking-wider text-[#EFE6D8]">
              Corpus Documental y Referencias Bibliográficas
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {seccion6.sourcesList.map((src, i) => (
              <div 
                key={i}
                className="p-3.5 sm:p-4 bg-[#362419]/80 rounded border border-[#B89758]/30 space-y-1.5 hover:border-[#B89758] transition-colors"
              >
                <span className="text-[10px] sm:text-[11px] font-serif uppercase tracking-wider text-[#B89758] font-bold block">
                  {src.type}
                </span>
                <p className="text-xs sm:text-sm text-[#E5D9C5] leading-relaxed text-justify font-serif">
                  {src.citation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ficha Institucional y Créditos Escolares con min-h-[44px] */}
        <div className="p-4 sm:p-6 bg-[#17100B] rounded-lg border border-[#B89758]/40 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-[#1F3D2B] border-2 border-[#B89758] flex items-center justify-center text-[#B89758] shrink-0">
              <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <div>
              <h5 className="font-serif text-sm sm:text-base font-bold text-[#EFE6D8]">
                {seccion6.institutionalCredits.school}
              </h5>
              <p className="text-xs text-[#E5D9C5]/80 font-serif">
                {seccion6.institutionalCredits.subject} · {seccion6.institutionalCredits.period}
              </p>
              <p className="text-xs text-[#B89758] font-serif mt-0.5">
                {seccion6.institutionalCredits.teacher} · {seccion6.institutionalCredits.location}
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="min-h-[44px] px-5 py-2.5 rounded bg-[#1F3D2B] hover:bg-[#B89758] text-[#EFE6D8] hover:text-[#23170F] font-serif text-xs font-bold tracking-wider uppercase transition-colors border border-[#B89758] flex items-center justify-center gap-2 shrink-0 shadow w-full sm:w-auto"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </button>
        </div>

        {/* Pie de imprenta final */}
        <div className="pt-4 sm:pt-6 border-t border-[#B89758]/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] font-serif text-[#E5D9C5]/60 text-center sm:text-left">
          <span>Historias de Piedecuesta (1776–2026) · Memoria Viva Escolar</span>
          <span>MMXXVI · Piedecuesta, Santander</span>
        </div>

      </div>
    </footer>
  );
};
