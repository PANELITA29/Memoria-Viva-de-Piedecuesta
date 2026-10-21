import React from 'react';
import { historyData } from '../data/historyData';
import { Compass, BookOpen, Feather, ScrollText } from 'lucide-react';

export const HeroCover = () => {
  const { projectMeta, images } = historyData;

  const handleOpenTomo = () => {
    const el = document.getElementById('origenes-1635');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Frontispicio de tomo patrimonial con doble filete ornamental en dorado envejecido */}
      <div className="bg-[#FAF6F0] rounded-lg border-4 border-double border-[#B89758] p-5 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
        
        {/* Esquinas ornamentales con florones heráldicos / grecas */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#1F3D2B] pointer-events-none" />
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#1F3D2B] pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#1F3D2B] pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#1F3D2B] pointer-events-none" />

        {/* Recuadro interior con orla y composición editorial */}
        <div className="border border-[#1F3D2B]/25 p-5 sm:p-8 md:p-12 flex flex-col items-center text-center bg-gradient-to-b from-[#FAF6F0] via-[#FAF6F0] to-[#EFE6D8]/50">
          
          {/* Cintillo Institucional Exacto */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5D9C5]/60 border border-[#B89758]/60 mb-6">
            <Feather className="w-3.5 h-3.5 text-[#1F3D2B]" />
            <p className="text-[11px] sm:text-xs font-serif tracking-widest text-[#23170F] uppercase font-bold">
              {projectMeta.banner}
            </p>
          </div>

          {/* Sello de Edición Conmemorativa */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#B89758]" />
            <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#B89758] font-bold">
              Tomo Histórico Conmemorativo · 250 Años
            </span>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#B89758]" />
          </div>

          {/* Título Principal */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1F3D2B] font-bold tracking-tight leading-tight mb-5 max-w-4xl drop-shadow-xs">
            {projectMeta.title}
          </h1>

          {/* Subtítulo Editorial Exacto */}
          <p className="font-serif italic text-lg sm:text-2xl text-[#362419] max-w-3xl mb-6 leading-relaxed">
            {projectMeta.subtitle}
          </p>

          {/* Filete ornamental central con motivo de caña */}
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="w-16 h-px bg-[#B89758]" />
            <Compass className="w-5 h-5 text-[#1F3D2B]" />
            <div className="w-16 h-px bg-[#B89758]" />
          </div>

          {/* Mención historiográfica rigurosa */}
          <p className="text-xs sm:text-sm text-[#362419] italic max-w-2xl mb-8 leading-normal">
            Fundamentado en la investigación documental del historiador <strong>{projectMeta.historian}</strong> en su obra <em>«Historias de Piedecuesta (1776–2026)»</em> y el ensayo de historia oral del <strong>{projectMeta.institution}</strong>.
          </p>

          {/* Botón de Entrada Editorial */}
          <button
            onClick={handleOpenTomo}
            className="group px-8 py-3.5 bg-[#1F3D2B] hover:bg-[#23170F] text-[#EFE6D8] rounded font-serif text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 border-2 border-[#B89758] shadow-lg flex items-center gap-2.5 mb-10"
          >
            <BookOpen className="w-4 h-4 text-[#B89758] group-hover:rotate-6 transition-transform" />
            <span>Comenzar Lectura del Tomo</span>
            <span className="text-[#B89758]">→</span>
          </button>

          {/* Marco visual con estilo de fotografía sepia de archivo */}
          <figure className="w-full mt-2">
            <div className="p-3 sm:p-4 bg-[#23170F] rounded-lg border-4 border-double border-[#B89758] shadow-2xl relative">
              
              {/* Cinta de identificación de archivo */}
              <div className="absolute top-5 left-5 z-10 bg-[#FAF6F0]/90 backdrop-blur-xs text-[#23170F] text-[10px] font-serif uppercase tracking-wider font-bold px-2.5 py-1 rounded border border-[#B89758] shadow">
                Archivo Fotográfico Histórico de Santander
              </div>

              <div className="overflow-hidden rounded border border-[#B89758]/50">
                <img
                  src={images.heroCover}
                  alt="Perspectiva histórica de la Vega de Piedecuesta, cañaduzales y cuenca del Río de Oro"
                  className="w-full h-72 sm:h-96 md:h-[430px] object-cover photo-archive"
                  loading="eager"
                />
              </div>

              {/* Pie de foto con crédito histórico exacto */}
              <div className="pt-3 pb-1 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-serif text-[#E5D9C5]/90 border-t border-[#B89758]/30 mt-3 px-2">
                <div className="flex items-center gap-1.5">
                  <ScrollText className="w-3.5 h-3.5 text-[#B89758]" />
                  <span className="italic">
                    Vista panorámica de las estancias de cañaduzal y el asentamiento colonial en el valle del río Lato.
                  </span>
                </div>
                <div className="bg-[#362419] px-3 py-1 rounded border border-[#B89758]/40 text-[#B89758] font-bold tracking-wider text-[11px] whitespace-nowrap">
                  Crédito: {projectMeta.photoCredit}
                </div>
              </div>
            </div>
          </figure>

        </div>
      </div>
    </section>
  );
};
