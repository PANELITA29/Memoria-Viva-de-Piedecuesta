import React, { useState } from 'react';
import { historyData } from '../data/historyData';
import { Landmark, Calendar, MapPin, Award, ChevronRight, FileText } from 'lucide-react';

export const OrigenesColonialesSection = () => {
  const { seccion2, images } = historyData;
  const [selectedHitoIndex, setSelectedHitoIndex] = useState(3); // Por defecto el hito del título de 1635

  const activeHito = seccion2.hitos[selectedHitoIndex];

  return (
    <section id="origenes-1635" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
      
      {/* Encabezado Editorial de Sección */}
      <header className="border-b-2 border-[#B89758]/50 pb-6 mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-6 h-px bg-[#1F3D2B]" />
          <span className="font-serif text-xs uppercase tracking-widest text-[#B89758] font-bold">
            {seccion2.badge}
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F3D2B] font-bold tracking-tight">
          {seccion2.title}
        </h2>
        <p className="font-serif italic text-base sm:text-lg text-[#362419] mt-2 max-w-3xl">
          {seccion2.subtitle}
        </p>
      </header>

      {/* Tesis de contexto */}
      <div className="bg-[#FAF6F0] p-6 sm:p-8 rounded-lg border border-[#B89758]/40 shadow-sm mb-12">
        <p className="drop-cap text-base sm:text-lg text-[#23170F] leading-relaxed text-justify">
          {seccion2.intro}
        </p>
      </div>

      {/* Línea de Tiempo Interactiva y Tarjetas Históricas */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-xl sm:text-2xl text-[#1F3D2B] font-bold flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#B89758]" />
            <span>Hitos Cronológicos del Poblamiento Cañamelero (Págs. 91–92)</span>
          </h3>
          <span className="text-xs font-serif text-[#362419] italic hidden sm:inline">
            Selecciona un hito para inspeccionar el folio documental
          </span>
        </div>

        {/* Botones / Pestañas de la Línea de Tiempo */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 mb-8">
          {seccion2.hitos.map((hito, idx) => {
            const isSelected = selectedHitoIndex === idx;
            return (
              <button
                key={hito.num}
                onClick={() => setSelectedHitoIndex(idx)}
                className={`p-3.5 rounded text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1F3D2B] text-[#EFE6D8] border-[#B89758] shadow-md ring-2 ring-[#B89758]/60'
                    : 'bg-[#FAF6F0] text-[#23170F] border-[#B89758]/40 hover:bg-[#E5D9C5]'
                }`}
              >
                <div>
                  <span className={`text-[11px] font-serif font-bold uppercase tracking-wider block ${
                    isSelected ? 'text-[#B89758]' : 'text-[#1F3D2B]'
                  }`}>
                    Hito {hito.num} · {hito.year}
                  </span>
                  <span className="font-serif font-semibold text-xs line-clamp-2 mt-1 leading-snug">
                    {hito.title}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px] font-serif">
                  <span className={`italic ${isSelected ? 'text-[#E5D9C5]' : 'text-[#362419]'}`}>
                    {hito.tag}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#B89758]' : 'text-[#1F3D2B]'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Ficha Documental de Archivo del Hito Seleccionado */}
        <div className="bg-[#FAF6F0] rounded-lg border-4 border-double border-[#B89758] p-6 sm:p-8 shadow-xl relative overflow-hidden">
          {/* Sello Notarial de Agua en el Fondo */}
          <div className="absolute top-4 right-4 pointer-events-none opacity-10">
            <Landmark className="w-32 h-32 text-[#1F3D2B]" />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#B89758]/40 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#1F3D2B] text-[#B89758] flex items-center justify-center font-serif text-lg font-bold border border-[#B89758]">
                {activeHito.num}
              </span>
              <div>
                <span className="text-xs font-serif uppercase tracking-widest text-[#B89758] font-bold block">
                  Época Colonial · {activeHito.year}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#1F3D2B] font-bold">
                  {activeHito.title}
                </h4>
              </div>
            </div>
            <div className="bg-[#E5D9C5] px-3 py-1 rounded text-xs font-serif text-[#23170F] font-bold border border-[#B89758]/50 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#1F3D2B]" />
              <span>{activeHito.tag}</span>
            </div>
          </div>

          {/* Texto Canónico Obligatorio */}
          <div className="space-y-4 mb-6">
            <div className="p-4 sm:p-5 bg-[#EFE6D8] rounded border-l-4 border-[#1F3D2B] shadow-inner">
              <p className="font-serif text-base sm:text-lg text-[#23170F] leading-relaxed font-medium">
                «{activeHito.text}»
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#362419] leading-relaxed text-justify">
              <strong>Análisis Historiográfico:</strong> {activeHito.detail}
            </p>
          </div>

          {/* Encarte especial para el Título del 31 de Enero de 1635 */}
          {activeHito.num === "4" && (
            <div className="mt-6 p-4 sm:p-5 bg-[#23170F] text-[#EFE6D8] rounded-md border border-[#B89758] space-y-2">
              <div className="flex items-center gap-2 text-[#B89758] text-xs font-serif uppercase tracking-wider font-bold">
                <FileText className="w-4 h-4" />
                <span>Registro del Cabildo de Pamplona (Marzo de 1635) · Fondo Notarial</span>
              </div>
              <p className="text-xs sm:text-sm text-[#E5D9C5] italic leading-relaxed">
                Tasación de 500 patacones: Don Pedro de Velasco protocolizó la delimitación física de cuatro estancias agrícolas provistas de casas de vivienda, labranzas de maíz y trapiche de moler caña dulce entre la quebrada Grande (Manco), el río Frío y el río Hato (Lato) hasta el curso del Río del Oro hacia Malpaso y Palogordo.
              </p>
              <div className="text-[11px] text-[#B89758] pt-1 border-t border-[#B89758]/30 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Jurisdicción histórica: Pie de la Cuesta, Provincia de Pamplona</span>
              </div>
            </div>
          )}

          {/* Encarte especial para la Repartición de 1638 */}
          {activeHito.num === "3" && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-serif">
              <div className="p-3 bg-[#E5D9C5]/80 rounded border border-[#B89758]/50">
                <strong className="text-[#1F3D2B] block">María de Velasco:</strong>
                <span>Hacienda La Mata Redonda (vegas del Río del Oro).</span>
              </div>
              <div className="p-3 bg-[#E5D9C5]/80 rounded border border-[#B89758]/50">
                <strong className="text-[#1F3D2B] block">Magdalena de Velasco:</strong>
                <span>Estancia El Hato (cuenca del río Lato).</span>
              </div>
              <div className="p-3 bg-[#E5D9C5]/80 rounded border border-[#B89758]/50">
                <strong className="text-[#1F3D2B] block">Andrés de Velasco:</strong>
                <span>Tierras de Bucarica y Zapamanga.</span>
              </div>
              <div className="p-3 bg-[#E5D9C5]/80 rounded border border-[#B89758]/50">
                <strong className="text-[#1F3D2B] block">Pedro de Velasco:</strong>
                <span>Asentamiento central de Pie de la Cuesta.</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lámina documental histórica */}
      <figure className="my-8">
        <div className="overflow-hidden rounded-lg border-4 border-double border-[#B89758] bg-[#23170F] shadow-lg">
          <img
            src={images.hacienda}
            alt="Casona de hacienda colonial en el valle de Guatiguará y río Lato"
            className="w-full h-64 sm:h-80 md:h-96 object-cover photo-archive"
            loading="lazy"
          />
        </div>
        <figcaption className="mt-3 font-serif italic text-xs sm:text-sm text-[#362419] text-center max-w-2xl mx-auto">
          Casona de hacienda tradicional de tapia pisada en la vega cañamelera de Piedecuesta. Arraigo secular que articuló las moliendas desde 1635 hasta los pabellones de mercado contemporáneos.
        </figcaption>
      </figure>

    </section>
  );
};
