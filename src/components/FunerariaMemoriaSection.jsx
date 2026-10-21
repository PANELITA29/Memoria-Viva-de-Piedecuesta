import React, { useState } from 'react';
import { historyData } from '../data/historyData';
import { HeartHandshake, Church, X, FileSearch, MapPin, Quote } from 'lucide-react';

export const FunerariaMemoriaSection = () => {
  const { seccion5, images } = historyData;
  const [activeModalWitness, setActiveModalWitness] = useState(null);

  return (
    <section id="funeraria-memoria" className="py-12 sm:py-16 px-2 sm:px-6 lg:mx-auto max-w-6xl scroll-mt-20">
      
      {/* Encabezado Editorial */}
      <header className="border-b-2 border-[#B89758]/50 pb-5 sm:pb-6 mb-8 sm:mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-5 sm:w-6 h-px bg-[#1F3D2B]" />
          <span className="font-serif text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-[0.2em] text-[#B89758] font-bold">
            {seccion5.badge}
          </span>
        </div>
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#1F3D2B] font-bold tracking-tight">
          {seccion5.title}
        </h2>
        <p className="font-serif italic text-sm sm:text-base md:text-lg text-[#362419] mt-2 max-w-3xl leading-relaxed">
          {seccion5.subtitle}
        </p>
      </header>

      {/* Ficha Patrimonial y Memoria de Don David Gómez Barrera */}
      <div className="bg-[#FAF6F0] rounded-lg border-2 sm:border-4 border-double border-[#B89758] p-4 sm:p-8 lg:p-12 shadow-md mb-8 sm:mb-12 space-y-5 sm:space-y-6">
        
        {/* Encabezado de la Ficha */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#B89758]/40 pb-4">
          <div className="flex items-center gap-2.5">
            <HeartHandshake className="w-6 h-6 text-[#1F3D2B] shrink-0" />
            <div>
              <span className="text-[10px] sm:text-[11px] uppercase font-serif tracking-wider sm:tracking-[0.2em] text-[#B89758] font-bold block">
                Ficha Histórica y Etnográfica ABP
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F3D2B]">
                {seccion5.founderData.name}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-[#E5D9C5] px-3 py-1.5 rounded border border-[#B89758]/50 text-xs font-serif text-[#23170F] font-bold self-start sm:self-auto">
            <MapPin className="w-4 h-4 text-[#1F3D2B] shrink-0" />
            <span>Sede Original: {seccion5.founderData.location}</span>
          </div>
        </div>

        {/* Narrativa Fundacional Exacta */}
        <div className="space-y-4 text-justify">
          <p className="drop-cap font-serif text-sm sm:text-base md:text-lg text-[#23170F] leading-relaxed">
            {seccion5.founderData.historicRole} {seccion5.founderData.character}
          </p>
        </div>

        {/* Fotografía de la fachada histórica de archivo con aspect-video */}
        <figure className="my-5 sm:my-6">
          <div className="overflow-hidden rounded-lg border-2 sm:border-4 border-double border-[#B89758] bg-[#23170F] shadow-lg">
            <img
              src={images.funerariaFachada}
              alt="Casona fundacional de la Funeraria David Gómez Barrera en la Carrera 8 de Piedecuesta"
              className="w-full h-auto aspect-video sm:aspect-[16/9] object-cover photo-archive"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-2.5 sm:mt-3 font-serif italic text-xs sm:text-sm text-[#362419] text-center max-w-2xl mx-auto px-2">
            Fachada histórica de la casona exequial de Don David Gómez Barrera en la Carrera 8 #9-01 (Centro Histórico de Piedecuesta).
          </figcaption>
        </figure>

        {/* Transición Comercial a Funeraria San Francisco Javier */}
        <div className="p-4 sm:p-6 bg-[#23170F] text-[#EFE6D8] rounded-lg border-2 border-[#B89758] space-y-3">
          <div className="flex items-center gap-2 text-[#B89758]">
            <Church className="w-5 h-5 shrink-0" />
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#EFE6D8]">
              Estrategia Comercial y Simbolismo Católico
            </h4>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-serif text-[#B89758] font-bold">
            <span>{seccion5.transition.oldName}</span>
            <span>→</span>
            <span className="text-[#EFE6D8] underline underline-offset-4 decoration-[#B89758]">
              {seccion5.transition.newName}
            </span>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-[#E5D9C5] leading-relaxed text-justify">
            {seccion5.transition.commercialStrategy}
          </p>
        </div>

      </div>

      {/* Tarjetas de Testimonios de Campo (18 de Mayo de 2026): grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 */}
      <div className="my-10 sm:my-14 space-y-5 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#B89758]/40 pb-3">
          <div className="flex items-center gap-2 text-[#1F3D2B]">
            <Quote className="w-5 h-5 text-[#B89758] shrink-0" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Testimonios de Campo (18 de Mayo de 2026)
            </h3>
          </div>
          <span className="text-xs font-serif italic text-[#362419]">
            Investigación oral en el casco urbano de Piedecuesta
          </span>
        </div>

        {/* Rejilla de testimonios con padding interno p-4 sm:p-6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {seccion5.testimonies.map((testimonio, idx) => (
            <article
              key={idx}
              className="bg-[#FAF6F0] rounded-lg border-2 border-[#B89758]/60 p-4 sm:p-6 shadow-md flex flex-col justify-between space-y-4 hover:border-[#1F3D2B] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[#B89758]/30 pb-2">
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1F3D2B]">
                      {testimonio.witness}
                    </h4>
                    <span className="text-xs font-serif italic text-[#362419]">
                      {testimonio.role}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-serif tracking-wider bg-[#E5D9C5] text-[#23170F] px-2 py-0.5 rounded font-bold border border-[#B89758]/40 self-start sm:self-auto">
                    {testimonio.badge}
                  </span>
                </div>

                <blockquote className="p-3.5 sm:p-4 bg-[#EFE6D8] rounded-md border-l-4 border-[#1F3D2B] font-serif italic text-sm sm:text-base text-[#23170F] leading-relaxed">
                  «{testimonio.quote}»
                </blockquote>

                <p className="text-xs sm:text-sm text-[#362419] leading-relaxed text-justify">
                  <strong>Aporte histórico:</strong> {testimonio.analysis}
                </p>
              </div>

              <div className="pt-3 border-t border-[#B89758]/20 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-[#362419] italic font-serif">
                  Fecha: {testimonio.date}
                </span>
                <button
                  onClick={() => setActiveModalWitness(testimonio)}
                  className="min-h-[44px] py-2 px-3 font-serif text-[#1F3D2B] hover:text-[#B89758] font-bold underline underline-offset-4 flex items-center gap-1.5"
                >
                  <FileSearch className="w-4 h-4" />
                  <span>Ver Ficha Oral →</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Ficha Etnográfica y de Historia Oral */}
      {activeModalWitness && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#FAF6F0] w-full max-w-xl rounded-lg border-2 sm:border-4 border-double border-[#B89758] p-4 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
            
            <button
              onClick={() => setActiveModalWitness(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-[#E5D9C5] text-[#23170F] hover:bg-[#1F3D2B] hover:text-[#EFE6D8] transition-colors"
              aria-label="Cerrar ficha"
            >
              <X className="w-5 h-5" />
            </button>

            <header className="border-b border-[#B89758]/40 pb-3 sm:pb-4 mb-4 sm:mb-6 pr-10">
              <span className="text-[10px] sm:text-xs font-serif uppercase tracking-wider sm:tracking-[0.2em] text-[#B89758] font-bold block">
                Ficha Metodológica de Memoria Oral · ABP 2026
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F3D2B] mt-1">
                {activeModalWitness.witness}
              </h3>
              <p className="text-xs sm:text-sm font-serif italic text-[#362419]">
                {activeModalWitness.role} · Registro de campo del {activeModalWitness.date}
              </p>
            </header>

            <div className="space-y-4 font-serif text-sm sm:text-base text-[#23170F] leading-relaxed text-justify mb-5 sm:mb-6">
              <div className="p-3.5 sm:p-4 bg-[#EFE6D8] rounded-md border-l-4 border-[#1F3D2B] italic">
                «{activeModalWitness.quote}»
              </div>
              <p>
                <strong>Observación etnográfica escolar:</strong> {activeModalWitness.analysis}
              </p>
              <p className="text-xs text-[#362419] bg-[#FAF6F0] p-3 rounded border border-[#B89758]/30 italic">
                Este testimonio evidencia cómo la memoria del oficio exequial sobrevive en la voz de los trabajadores locales a pesar de las transformaciones corporativas del sector privado en Piedecuesta.
              </p>
            </div>

            <div className="text-[11px] font-serif text-[#362419] border-t border-[#B89758]/30 pt-3 flex items-center justify-between">
              <span>Colegio Municipal Carlos Vicente Rey</span>
              <span className="font-bold text-[#1F3D2B]">Ciencias Sociales 11°</span>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
