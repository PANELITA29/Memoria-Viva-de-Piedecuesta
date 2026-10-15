import React, { useState } from 'react';
import { historyData } from '../data/historyData';

export const OrigenAzucarSection = () => {
  const { capitulo1, images } = historyData;
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = capitulo1.steps[activeStepIndex];

  return (
    <section id="origen-azucar" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
      
      {/* Encabezado editorial del capítulo I */}
      <header className="border-b border-[#B39352]/50 pb-6 mb-10">
        <span className="font-serif italic text-sm text-[#B39352] block mb-1">
          {capitulo1.number}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-bold tracking-tight">
          {capitulo1.title}
        </h2>
        <p className="font-serif italic text-lg text-[#3D2D24] mt-1">
          {capitulo1.subtitle}
        </p>
      </header>

      {/* Explicación histórica: La sobreproducción y la transformación forzosa */}
      <div className="space-y-6 text-[#3D2D24] text-base sm:text-lg leading-relaxed text-justify mb-12">
        <p className="drop-cap">
          {capitulo1.thesisParagraph1}
        </p>
        
        {/* Bloque de tesis histórica resaltado con filete lateral en oro viejo */}
        <div className="my-8 pl-6 border-l-2 border-[#B39352] bg-[#FAF6F0] p-6 rounded-r shadow-xs">
          <p className="font-serif italic text-base sm:text-lg text-[#1F3D2B] leading-relaxed">
            «{capitulo1.thesisParagraph2}»
          </p>
          <span className="block text-xs uppercase tracking-widest text-[#B39352] font-semibold mt-3">
            — Luis Rubén Pérez Pinzón, Historiografía de Piedecuesta (1776–2026)
          </span>
        </div>
      </div>

      {/* Infografía de los 5 Pasos del Trapiche Tradicional */}
      <div className="my-14 bg-[#FAF6F0] rounded border border-[#B39352]/50 p-6 sm:p-8 shadow-sm">
        <div className="border-b border-[#B39352]/30 pb-4 mb-6">
          <h3 className="font-serif text-2xl text-[#1F3D2B] font-bold">
            El Ciclo Técnico de la Molienda Tradicional
          </h3>
          <p className="text-xs sm:text-sm text-[#3D2D24] italic mt-1">
            Los cinco pasos indispensables para compactar y estabilizar la sacarosa en el Valle de Guatiguará:
          </p>
        </div>

        {/* Pestañas numeradas de navegación */}
        <div className="flex flex-wrap gap-2 mb-6">
          {capitulo1.steps.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`px-3.5 py-2 rounded font-serif text-xs sm:text-sm transition-colors border ${
                  isSelected
                    ? 'bg-[#1F3D2B] text-[#F3EBDD] font-bold border-[#B39352]'
                    : 'bg-[#F3EBDD] text-[#3D2D24] border-[#B39352]/30 hover:bg-[#E8DEC8]'
                }`}
              >
                {step.number}. {step.title}
              </button>
            );
          })}
        </div>

        {/* Detalle del paso seleccionado */}
        <div className="bg-[#F3EBDD] p-5 sm:p-6 rounded border border-[#B39352]/30 space-y-3">
          <div className="flex items-baseline justify-between border-b border-[#B39352]/20 pb-2">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1F3D2B]">
              Paso {activeStep.number}: {activeStep.title}
            </h4>
            <span className="text-xs font-serif italic text-[#B39352]">
              Estación {activeStep.number} de 5
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#3D2D24] leading-relaxed text-justify">
            {activeStep.desc}
          </p>

          <p className="text-xs sm:text-sm text-[#1F3D2B] italic bg-[#FAF6F0] p-3 rounded border-l-2 border-[#1F3D2B]">
            <strong>Técnica de archivo:</strong> {activeStep.detail}
          </p>
        </div>
      </div>

      {/* Lámina documental del trapiche */}
      <figure className="my-10">
        <div className="overflow-hidden rounded border border-[#B39352]/40 bg-[#24160E]">
          <img
            src={images.trapicheMolienda}
            alt="Molienda y tracción animal en trapiche tradicional de Santander"
            className="w-full h-64 sm:h-80 object-cover sepia contrast-115"
            loading="lazy"
          />
        </div>
        <figcaption className="mt-2.5 font-serif italic text-xs sm:text-sm text-[#3D2D24] text-center">
          Molienda tradicional con fuerza de tiro animal prensando tallos gruesos de caña en Guatiguará.
        </figcaption>
      </figure>

    </section>
  );
};
