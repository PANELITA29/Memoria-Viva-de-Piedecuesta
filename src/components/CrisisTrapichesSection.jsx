import React, { useState } from 'react';
import { historyData } from '../data/historyData';

export const CrisisTrapichesSection = () => {
  const { capitulo2, images } = historyData;
  const [selectedFactorIndex, setSelectedFactorIndex] = useState(0);

  const activeFactor = capitulo2.factors[selectedFactorIndex];

  return (
    <section id="decadencia-trapiches" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
      
      {/* Encabezado del capítulo II */}
      <header className="border-b border-[#B39352]/50 pb-6 mb-10">
        <span className="font-serif italic text-sm text-[#B39352] block mb-1">
          {capitulo2.number}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-bold tracking-tight">
          {capitulo2.title}
        </h2>
        <p className="font-serif italic text-lg text-[#3D2D24] mt-1">
          {capitulo2.subtitle}
        </p>
      </header>

      {/* Introducción crítica */}
      <p className="text-base sm:text-lg text-[#3D2D24] leading-relaxed text-justify mb-10 drop-cap">
        {capitulo2.intro}
      </p>

      {/* Cuadrícula interactiva con los 4 Factores de Decadencia */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {capitulo2.factors.map((factor, index) => {
          const isSelected = selectedFactorIndex === index;
          return (
            <button
              key={factor.letter}
              onClick={() => setSelectedFactorIndex(index)}
              className={`p-5 rounded text-left transition-all border ${
                isSelected
                  ? 'bg-[#1F3D2B] text-[#F3EBDD] border-[#B39352] shadow-md ring-1 ring-[#B39352]'
                  : 'bg-[#FAF6F0] text-[#3D2D24] border-[#B39352]/40 hover:bg-[#E8DEC8]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-serif text-sm font-bold uppercase tracking-wider ${
                  isSelected ? 'text-[#B39352]' : 'text-[#1F3D2B]'
                }`}>
                  Factor {factor.letter}
                </span>
                {isSelected && (
                  <span className="text-[10px] uppercase font-serif tracking-widest text-[#B39352]">
                    Seleccionado
                  </span>
                )}
              </div>

              <h4 className="font-serif text-lg font-bold mb-1 leading-snug">
                {factor.title}
              </h4>

              <p className={`text-xs leading-relaxed ${
                isSelected ? 'text-[#E8DEC8]' : 'text-[#5A4638]'
              }`}>
                {factor.summary}
              </p>
            </button>
          );
        })}
      </div>

      {/* Panel de Análisis Detallado del Factor Seleccionado */}
      <div className="p-6 sm:p-8 bg-[#FAF6F0] rounded border-l-4 border-[#1F3D2B] border-y border-r border-[#B39352]/40 shadow-sm mb-12">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-xs font-serif font-bold text-[#B39352] uppercase tracking-wider">
            Factor {activeFactor.letter}
          </span>
          <span className="text-xs text-[#B39352]">•</span>
          <span className="font-serif italic text-xs text-[#3D2D24]">
            Investigación Documental UIS / Carlos Vicente Rey
          </span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F3D2B] mb-3">
          {activeFactor.title}
        </h3>

        <p className="text-base text-[#3D2D24] leading-relaxed text-justify">
          {activeFactor.explanation}
        </p>
      </div>

      {/* Lámina histórica: Humareda del bagazo y casona */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
        <figure>
          <div className="overflow-hidden rounded border border-[#B39352]/40 bg-[#24160E]">
            <img
              src={images.hacienda}
              alt="Casona de hacienda panelera tradicional en Guatiguará"
              className="w-full h-52 object-cover sepia contrast-110"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-2 font-serif italic text-xs text-[#3D2D24]">
            Hacienda panelera de tapia pisada en Guatiguará antes de la parcelación metropolitana.
          </figcaption>
        </figure>

        <figure>
          <div className="overflow-hidden rounded border border-[#B39352]/40 bg-[#24160E]">
            <img
              src={images.humaredaBagazo}
              alt="Humo de bagazo en chimeneas de Piedecuesta"
              className="w-full h-52 object-cover sepia contrast-110"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-2 font-serif italic text-xs text-[#3D2D24]">
            Chimeneas de tiro corrido cuya humareda cesó ante la clausura forzada de moliendas.
          </figcaption>
        </figure>
      </div>

    </section>
  );
};
