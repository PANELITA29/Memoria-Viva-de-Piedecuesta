import React from 'react';
import { historyData } from '../data/historyData';

export const HeroCover = () => {
  const { projectMeta, images } = historyData;

  const handleOpenChronicle = () => {
    const el = document.getElementById('trapiches');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      {/* Frontispicio de tomo patrimonial */}
      <div className="bg-[#FFF8F1] rounded border border-[#B89758]/50 p-6 sm:p-12 lg:p-16 shadow-md relative">
        
        {/* Recuadro interior simple */}
        <div className="border border-[#1F3D2B]/20 p-6 sm:p-10 flex flex-col items-center text-center">
          
          {/* Crédito institucional sobrio */}
          <p className="text-xs sm:text-sm font-serif tracking-widest text-[#5A4638] uppercase mb-8">
            {projectMeta.institution} · {projectMeta.grade}
          </p>

          {/* Fechas conmemorativas en tipografía limpia */}
          <span className="font-serif italic text-base text-[#B89758] mb-2 block">
            1776 — 2026
          </span>

          {/* Título principal */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1F3D2B] font-bold tracking-tight leading-tight mb-4">
            Historias de Piedecuesta
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-[#2C221E] mb-6">
            Cañaduzales, oficios y el olvido
          </p>

          <div className="w-16 h-px bg-[#B89758] my-4"></div>

          {/* Resumen editorial */}
          <p className="font-serif text-base sm:text-lg text-[#5A4638] max-w-2xl leading-relaxed mb-6 text-justify sm:text-center">
            {projectMeta.subtitle}
          </p>

          {/* Mención historiográfica */}
          <p className="text-xs sm:text-sm text-[#5A4638] italic max-w-xl mb-8">
            A partir de las investigaciones del {projectMeta.mainHistorian}.
          </p>

          {/* Botón sobrio de apertura */}
          <button
            onClick={handleOpenChronicle}
            className="px-8 py-3 bg-[#1F3D2B] text-[#F4EFE6] hover:bg-[#082717] rounded text-sm font-serif tracking-wider uppercase transition-colors border border-[#B89758] mb-10"
          >
            Comenzar lectura
          </button>

          {/* Grabado litográfico */}
          <figure className="w-full">
            <div className="overflow-hidden rounded border border-[#B89758]/40 bg-[#23170F]">
              <img
                src={images.heroCover}
                alt="Perspectiva del Valle de Guatiguará y las haciendas paneleras de Piedecuesta"
                className="w-full h-72 sm:h-96 object-cover sepia contrast-110"
                loading="eager"
              />
            </div>
            <figcaption className="mt-3 font-serif italic text-xs sm:text-sm text-[#5A4638] text-center max-w-2xl mx-auto">
              Perspectiva topográfica de la Vega de Piedecuesta y Guatiguará con sus estancias y moliendas de cañaduzal.
            </figcaption>
          </figure>

        </div>
      </div>
    </section>
  );
};
