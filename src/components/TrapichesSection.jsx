import React, { useState } from 'react';
import { historyData } from '../data/historyData';

export const TrapichesSection = () => {
  const { trapiches } = historyData;
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const activeStep = trapiches.steps[currentStepIndex];

  return (
    <section id="trapiches" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
      
      {/* Encabezado del capítulo */}
      <header className="border-b border-[#B89758]/50 pb-6 mb-10">
        <span className="font-serif italic text-sm text-[#B89758] block mb-1">
          Capítulo I
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-bold tracking-tight">
          {trapiches.title}
        </h2>
        <p className="font-serif italic text-lg text-[#5A4638] mt-1">
          {trapiches.subtitle}
        </p>
      </header>

      {/* Texto principal con letra capitular */}
      <div className="space-y-6 text-[#2C221E] text-base sm:text-lg leading-relaxed text-justify mb-12">
        <p className="drop-cap">
          {trapiches.introText[0]}
        </p>
        <p>
          {trapiches.introText[1]}
        </p>

        {/* Cita histórica */}
        <blockquote className="my-8 pl-6 border-l-2 border-[#B89758] italic font-serif text-[#1F3D2B]">
          <p className="text-base sm:text-lg leading-relaxed">
            «{trapiches.historicalQuote.text}»
          </p>
          <cite className="block text-xs uppercase tracking-wider text-[#5A4638] not-italic mt-2">
            — {trapiches.historicalQuote.source}
          </cite>
        </blockquote>
      </div>

      {/* Ciclo de la molienda tradicional */}
      <div className="my-16 bg-[#FFF8F1] rounded border border-[#B89758]/40 p-6 sm:p-8 shadow-sm">
        <h3 className="font-serif text-2xl text-[#1F3D2B] font-bold mb-2">
          El ciclo de la molienda tradicional
        </h3>
        <p className="text-sm text-[#5A4638] italic mb-6">
          Selecciona cada fase del proceso para consultar la técnica y el rol de los operarios:
        </p>

        {/* Pestañas de texto limpias sin badges */}
        <div className="flex flex-wrap gap-2 border-b border-[#B89758]/30 pb-4 mb-6">
          {trapiches.steps.map((step, index) => {
            const isSelected = currentStepIndex === index;
            return (
              <button
                key={step.id}
                onClick={() => setCurrentStepIndex(index)}
                className={`px-3 py-1.5 rounded font-serif text-sm transition-colors ${
                  isSelected
                    ? 'bg-[#1F3D2B] text-[#F4EFE6] font-bold'
                    : 'text-[#5A4638] hover:text-[#1F3D2B] hover:bg-[#E8DEC8]/50'
                }`}
              >
                {step.number}. {step.title}
              </button>
            );
          })}
        </div>

        {/* Detalle de la fase activa */}
        <div className="space-y-4">
          <h4 className="font-serif text-xl font-bold text-[#1F3D2B]">
            {activeStep.title} — <span className="italic font-normal text-base text-[#5A4638]">{activeStep.subtitle}</span>
          </h4>

          <p className="text-[#2C221E] text-base leading-relaxed text-justify">
            {activeStep.description}
          </p>

          <div className="pt-4 border-t border-[#B89758]/20 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-serif font-bold text-[#1F3D2B] block">Operario:</span>
              <span className="text-[#5A4638]">{activeStep.workerRole}</span>
            </div>
            <div>
              <span className="font-serif font-bold text-[#1F3D2B] block">Herramientas:</span>
              <span className="text-[#5A4638]">{activeStep.tools}</span>
            </div>
          </div>

          <div className="mt-4 p-4 bg-[#F4EFE6] rounded border-l-2 border-[#B89758] text-xs sm:text-sm text-[#5A4638] italic font-serif">
            {activeStep.archiveNote}
          </div>
        </div>
      </div>

      {/* Análisis histórico: La decadencia del paisaje */}
      <div className="my-16 border-t border-b border-[#B89758]/40 py-10 space-y-4">
        <h3 className="font-serif text-2xl text-[#1F3D2B] font-bold">
          {trapiches.decadenceAnalysis.headline}
        </h3>

        <div className="flex flex-col sm:flex-row gap-6 items-baseline">
          <div className="text-4xl font-serif font-bold text-[#B89758] shrink-0">
            {trapiches.decadenceAnalysis.stat}
            <span className="block text-xs font-sans uppercase tracking-wider text-[#5A4638] font-normal mt-1">
              Unidades activas (1960–2010)
            </span>
          </div>

          <div className="space-y-3 text-base text-[#2C221E] leading-relaxed text-justify">
            <p>{trapiches.decadenceAnalysis.paragraph1}</p>
            <p className="text-[#5A4638]">{trapiches.decadenceAnalysis.paragraph2}</p>
          </div>
        </div>
      </div>

      {/* Láminas documentales */}
      <div className="my-16 space-y-8">
        <h3 className="font-serif text-xl font-bold text-[#1F3D2B]">
          Láminas documentales
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trapiches.plates.map((plate) => (
            <figure key={plate.id} className="space-y-2">
              <div className="overflow-hidden rounded border border-[#B89758]/30 bg-[#23170F]">
                <img
                  src={plate.image}
                  alt={plate.title}
                  className="w-full h-48 object-cover sepia contrast-110"
                  loading="lazy"
                />
              </div>
              <figcaption className="text-xs sm:text-sm text-[#5A4638]">
                <strong className="font-serif text-[#1F3D2B] block">{plate.title}</strong>
                <span className="italic">{plate.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

    </section>
  );
};
