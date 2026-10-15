import React, { useState } from 'react';
import { X } from 'lucide-react';
import { historyData } from '../data/historyData';

export const TestimoniosSection = () => {
  const { capitulo4 } = historyData;
  const [activeModalWitness, setActiveModalWitness] = useState(null);

  return (
    <section id="testimonios" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
      
      {/* Encabezado del capítulo IV */}
      <header className="border-b border-[#B39352]/50 pb-6 mb-10">
        <span className="font-serif italic text-sm text-[#B39352] block mb-1">
          {capitulo4.number}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-bold tracking-tight">
          {capitulo4.title}
        </h2>
        <p className="font-serif italic text-lg text-[#3D2D24] mt-1">
          {capitulo4.subtitle}
        </p>
      </header>

      {/* Citas textuales del trabajo de campo del 18 de mayo de 2026 */}
      <div className="space-y-8 my-10">
        {capitulo4.quotes.map((item, index) => (
          <article
            key={index}
            className="p-6 sm:p-8 bg-[#FAF6F0] rounded border border-[#B39352]/40 shadow-xs space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[#B39352]/20 pb-3">
              <h4 className="font-serif text-xl font-bold text-[#1F3D2B]">
                {item.witness} <span className="font-normal text-base text-[#5A4638]">({item.age})</span>
              </h4>
              <span className="text-xs font-serif text-[#3D2D24] italic">
                {item.role}
              </span>
            </div>

            <blockquote className="pl-4 border-l-2 border-[#B39352] font-serif italic text-base sm:text-lg text-[#1F3D2B] leading-relaxed">
              «{item.statement}»
            </blockquote>

            <p className="text-sm text-[#3D2D24] leading-relaxed text-justify">
              {item.extendedContext}
            </p>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalWitness(item)}
                className="font-serif text-xs text-[#1F3D2B] hover:text-[#B39352] underline underline-offset-4 font-semibold"
              >
                Consultar registro de entrevista →
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Tesis Crítica: Peligro de privatización de la memoria */}
      <div className="my-14 p-6 sm:p-8 bg-[#FAF6F0] rounded border-l-4 border-[#B39352] border-y border-r border-[#B39352]/40 shadow-sm space-y-3">
        <span className="text-xs font-serif uppercase tracking-widest text-[#B39352] font-bold block">
          Tesis Crítica del Proyecto Escolar
        </span>
        <h3 className="font-serif text-2xl font-bold text-[#1F3D2B]">
          {capitulo4.criticalThesis.headline}
        </h3>
        <p className="text-base sm:text-lg text-[#3D2D24] leading-relaxed text-justify">
          {capitulo4.criticalThesis.text}
        </p>
      </div>

      {/* Modal para consultar la declaración completa */}
      {activeModalWitness && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FAF6F0] w-full max-w-xl rounded border border-[#B39352] p-6 sm:p-8 relative max-h-[85vh] overflow-y-auto shadow-2xl">
            
            <button
              onClick={() => setActiveModalWitness(null)}
              className="absolute top-4 right-4 p-1 text-[#3D2D24] hover:text-[#1F3D2B]"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            <header className="border-b border-[#B39352]/40 pb-4 mb-6">
              <span className="text-xs font-serif uppercase tracking-wider text-[#B39352] block">
                Ficha de Historia Oral · 18 de Mayo de 2026
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1F3D2B] mt-1">
                {activeModalWitness.witness}
              </h3>
              <p className="text-sm font-serif italic text-[#3D2D24]">
                {activeModalWitness.role} ({activeModalWitness.age})
              </p>
            </header>

            <div className="space-y-4 font-serif text-base text-[#3D2D24] leading-relaxed text-justify mb-8">
              <div className="p-4 bg-[#F3EBDD] rounded border-l-2 border-[#1F3D2B] italic">
                «{activeModalWitness.statement}»
              </div>
              <p>{activeModalWitness.extendedContext}</p>
            </div>

            <div className="text-xs text-[#3D2D24] border-t border-[#B39352]/30 pt-3">
              Investigación ABP Ciencias Sociales 11° · Colegio Municipal Carlos Vicente Rey (Piedecuesta)
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
