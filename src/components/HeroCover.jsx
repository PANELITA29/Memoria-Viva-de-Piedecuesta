import React from 'react';
import { historyData } from '../data/historyData';

export const HeroCover = () => {
  const { projectMeta, images } = historyData;

  const handleOpenTomo = () => {
    const el = document.getElementById('origen-azucar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      {/* Frontispicio de tomo patrimonial con doble filete ornamental */}
      <div className="bg-[#FAF6F0] rounded border border-[#B39352]/50 p-6 sm:p-12 lg:p-16 shadow-md relative">
        
        {/* Recuadro interior con filete dorado */}
        <div className="border border-[#1F3D2B]/20 p-6 sm:p-10 flex flex-col items-center text-center">
          
          {/* Cintillo Superior Exacto */}
          <p className="text-xs sm:text-sm font-serif tracking-widest text-[#B39352] uppercase mb-8 font-semibold">
            {projectMeta.institution} | {projectMeta.grade}
          </p>

          {/* Título Principal */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1F3D2B] font-bold tracking-tight leading-tight mb-4">
            {projectMeta.title}
          </h1>

          {/* Subtítulo Editorial Exacto */}
          <p className="font-serif italic text-xl sm:text-2xl text-[#3D2D24] mb-6">
            {projectMeta.subtitle}
          </p>

          <div className="w-16 h-px bg-[#B39352] my-4"></div>

          {/* Breve mención historiográfica */}
          <p className="text-xs sm:text-sm text-[#3D2D24] italic max-w-xl mb-8">
            Basado en la obra historiográfica del {projectMeta.mainHistorian} e investigación de campo escolar en Piedecuesta, Santander.
          </p>

          {/* Botón de Entrada Exacto */}
          <button
            onClick={handleOpenTomo}
            className="px-8 py-3 bg-[#1F3D2B] text-[#F3EBDD] hover:bg-[#17100B] rounded text-sm font-serif tracking-wider uppercase transition-colors border border-[#B39352] mb-10 shadow-sm"
          >
            Abrir Tomo Histórico
          </button>

          {/* Grabado Litográfico Histórico */}
          <figure className="w-full">
            <div className="overflow-hidden rounded border border-[#B39352]/40 bg-[#24160E]">
              <img
                src={images.heroCover}
                alt="Perspectiva del Valle de Guatiguará y las haciendas paneleras de Piedecuesta"
                className="w-full h-72 sm:h-96 object-cover sepia contrast-110"
                loading="eager"
              />
            </div>
            <figcaption className="mt-3 font-serif italic text-xs sm:text-sm text-[#3D2D24] text-center max-w-2xl mx-auto">
              Perspectiva topográfica de la Vega de Piedecuesta y Guatiguará con sus estancias y moliendas de cañaduzal (1776–2026).
            </figcaption>
          </figure>

        </div>
      </div>
    </section>
  );
};
