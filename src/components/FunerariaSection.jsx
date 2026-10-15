import React from 'react';
import { historyData } from '../data/historyData';

export const FunerariaSection = () => {
  const { funeraria, images } = historyData;

  return (
    <section id="funeraria" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
      
      {/* Encabezado del capítulo */}
      <header className="border-b border-[#B89758]/50 pb-6 mb-10">
        <span className="font-serif italic text-sm text-[#B89758] block mb-1">
          Capítulo II
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1F3D2B] font-bold tracking-tight">
          {funeraria.title}
        </h2>
        <p className="font-serif italic text-lg text-[#5A4638] mt-1">
          {funeraria.subtitle}
        </p>
      </header>

      {/* Cuerpo principal con imagen documental */}
      <div className="space-y-6 text-[#2C221E] text-base sm:text-lg leading-relaxed text-justify mb-12">
        <p className="drop-cap">
          {funeraria.mainText[0]}
        </p>
        
        <figure className="my-8">
          <div className="overflow-hidden rounded border border-[#B89758]/30 bg-[#23170F]">
            <img
              src={images.funerariaFachada}
              alt="Casona de la Funeraria David Gómez Barrera en la Carrera 8 de Piedecuesta"
              className="w-full h-72 sm:h-80 object-cover sepia contrast-110"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-2 font-serif italic text-xs sm:text-sm text-[#5A4638] text-center">
            Sede histórica de la funeraria en la Carrera 8 #9-01, casco central de Piedecuesta.
          </figcaption>
        </figure>

        <p>
          {funeraria.mainText[1]}
        </p>
        <p>
          {funeraria.mainText[2]}
        </p>
      </div>

      {/* Extracto de archivo parroquial */}
      <div className="my-12 p-6 sm:p-8 bg-[#FFF8F1] rounded border-l-2 border-[#1F3D2B] shadow-sm">
        <span className="font-serif font-bold text-xs uppercase tracking-wider text-[#5A4638] block mb-2">
          {funeraria.parishExtract.book} — {funeraria.parishExtract.folioNumber}
        </span>
        <blockquote className="font-serif italic text-base sm:text-lg text-[#1F3D2B] leading-relaxed">
          {funeraria.parishExtract.text}
        </blockquote>
        <span className="block text-right text-xs text-[#5A4638] font-serif mt-2">
          {funeraria.parishExtract.date}
        </span>
      </div>

      {/* La transición a Funeraria San Francisco Javier */}
      <div className="my-12 pt-8 border-t border-[#B89758]/30 space-y-4">
        <h3 className="font-serif text-2xl text-[#1F3D2B] font-bold">
          {funeraria.churchTransition.title}
        </h3>
        <p className="text-base sm:text-lg text-[#2C221E] leading-relaxed text-justify">
          {funeraria.churchTransition.explanation}
        </p>
      </div>

    </section>
  );
};
