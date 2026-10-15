import React, { useState } from 'react';
import { X } from 'lucide-react';
import { historyData } from '../data/historyData';

export const TestimoniosModal = () => {
  const { testimonios } = historyData;
  const [activeModalFicha, setActiveModalFicha] = useState(null);

  return (
    <section id="testimonios" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
      
      {/* Encabezado del capítulo */}
      <header className="border-b border-[#B89758]/50 pb-6 mb-10">
        <span className="font-serif italic text-sm text-[#B89758] block mb-1">
          Capítulo III
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-bold tracking-tight">
          {testimonios.title}
        </h2>
        <p className="font-serif italic text-lg text-[#5A4638] mt-1">
          Entrevistas de campo realizadas el {testimonios.dateOfFieldwork}
        </p>
      </header>

      {/* Síntesis crítica sobre la privatización de la memoria */}
      <div className="mb-12 space-y-3">
        <h3 className="font-serif text-2xl text-[#1F3D2B] font-bold">
          {testimonios.criticalSynthesis.title}
        </h3>
        <p className="text-base sm:text-lg text-[#2C221E] leading-relaxed text-justify">
          {testimonios.criticalSynthesis.text}
        </p>
      </div>

      {/* Testimonios orales */}
      <div className="space-y-8 my-12">
        {testimonios.files.map((ficha) => (
          <article
            key={ficha.id}
            className="p-6 sm:p-8 bg-[#FFF8F1] rounded border border-[#B89758]/40 shadow-sm space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[#B89758]/20 pb-3">
              <h4 className="font-serif text-xl font-bold text-[#1F3D2B]">
                {ficha.witness} <span className="font-normal text-base text-[#5A4638]">({ficha.age})</span>
              </h4>
              <span className="text-xs font-serif text-[#5A4638] italic">
                {ficha.role}
              </span>
            </div>

            <blockquote className="pl-4 border-l-2 border-[#B89758] font-serif italic text-base sm:text-lg text-[#2C221E] leading-relaxed">
              «{ficha.keyQuote}»
            </blockquote>

            <p className="text-sm sm:text-base text-[#5A4638] leading-relaxed text-justify">
              {ficha.fullStatement}
            </p>

            <div className="pt-3 border-t border-[#B89758]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#5A4638]">
              <span className="italic">
                Observación: {ficha.notarialObservations}
              </span>
              <button
                onClick={() => setActiveModalFicha(ficha)}
                className="font-serif text-[#1F3D2B] hover:text-[#B89758] underline underline-offset-4 self-start sm:self-auto font-medium"
              >
                Consultar registro completo
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal de consulta de registro */}
      {activeModalFicha && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FFF8F1] w-full max-w-xl rounded border border-[#B89758] p-6 sm:p-8 relative max-h-[85vh] overflow-y-auto shadow-2xl">
            
            <button
              onClick={() => setActiveModalFicha(null)}
              className="absolute top-4 right-4 p-1 text-[#5A4638] hover:text-[#1F3D2B]"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            <header className="border-b border-[#B89758]/40 pb-4 mb-6">
              <span className="text-xs font-serif uppercase tracking-wider text-[#5A4638] block">
                Archivo de Historia Oral · {activeModalFicha.date}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1F3D2B] mt-1">
                {activeModalFicha.witness}
              </h3>
              <p className="text-sm font-serif italic text-[#5A4638]">
                {activeModalFicha.role}
              </p>
            </header>

            <div className="space-y-4 font-serif text-base text-[#2C221E] leading-relaxed text-justify mb-8">
              <p>{activeModalFicha.fullStatement}</p>
              <p className="text-xs text-[#5A4638] pt-4 border-t border-[#B89758]/20 italic">
                Cotejo pericial: {activeModalFicha.notarialObservations}
              </p>
            </div>

            <div className="text-xs text-[#5A4638] border-t border-[#B89758]/30 pt-3">
              Proyecto ABP Ciencias Sociales 11° · Colegio Municipal Carlos Vicente Rey
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
