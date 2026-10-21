import React, { useState } from 'react';
import { historyData } from '../data/historyData';
import { Scale, Info, AlertTriangle, Layers, BookCheck, Factory } from 'lucide-react';

export const PanDeAzucarSection = () => {
  const { seccion3 } = historyData;
  const [selectedStratumId, setSelectedStratumId] = useState('blanco');

  const selectedStratum = seccion3.conicAnatomy.strata.find(
    (s) => s.id === selectedStratumId
  ) || seccion3.conicAnatomy.strata[0];

  return (
    <section id="pan-de-azucar" className="py-12 sm:py-16 px-2 sm:px-6 lg:mx-auto max-w-6xl scroll-mt-20">
      
      {/* Encabezado Editorial */}
      <header className="border-b-2 border-[#B89758]/50 pb-5 sm:pb-6 mb-8 sm:mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-5 sm:w-6 h-px bg-[#1F3D2B]" />
          <span className="font-serif text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-[0.2em] text-[#B89758] font-bold">
            {seccion3.badge}
          </span>
        </div>
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#1F3D2B] font-bold tracking-tight">
          {seccion3.title}
        </h2>
        <p className="font-serif italic text-sm sm:text-base md:text-lg text-[#362419] mt-2 max-w-3xl leading-relaxed">
          {seccion3.subtitle}
        </p>
      </header>

      {/* Bloque Historiográfico: Pierre Raymond (UIS, 1997) */}
      <div className="bg-[#FAF6F0] rounded-lg border-2 sm:border-4 border-double border-[#B89758] p-4 sm:p-8 lg:p-12 shadow-md mb-8 sm:mb-12">
        <div className="flex items-center gap-2 text-[#1F3D2B] mb-3">
          <BookCheck className="w-5 h-5 text-[#B89758] shrink-0" />
          <span className="font-serif font-bold text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-[0.2em] text-[#B89758]">
            Estudios Historiográficos de Pierre Raymond (1980–1988 / Ediciones UIS 1997)
          </span>
        </div>
        <p className="font-serif text-sm sm:text-base leading-relaxed text-[#23170F] drop-cap text-justify">
          {seccion3.raymondContext.thesis}
        </p>
        <div className="mt-4 pt-4 border-t border-[#B89758]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-serif text-[#362419]">
          <span className="italic leading-relaxed">
            {seccion3.raymondContext.economicRole}
          </span>
          <span className="bg-[#1F3D2B] text-[#EFE6D8] px-3 py-1 rounded font-bold uppercase tracking-wider whitespace-nowrap self-start sm:self-auto">
            Aparcería & Coopanelas
          </span>
        </div>
      </div>

      {/* Componente Interactivo: Anatomía del Pan de Azúcar (Siglo XVII – 1940) */}
      <div className="my-10 sm:my-14 bg-[#23170F] text-[#EFE6D8] rounded-xl border-2 sm:border-4 border-double border-[#B89758] p-4 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Encabezado del Componente */}
        <div className="border-b border-[#B89758]/40 pb-4 sm:pb-5 mb-6 sm:mb-8 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#B89758] text-[10px] sm:text-xs font-serif uppercase tracking-wider sm:tracking-[0.2em] font-bold mb-1">
              <Layers className="w-4 h-4 shrink-0" />
              <span>Modelo Físico-Químico de Purga</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#EFE6D8] font-bold">
              {seccion3.conicAnatomy.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#E5D9C5]/80 italic mt-1 max-w-2xl leading-relaxed">
              {seccion3.conicAnatomy.description}
            </p>
          </div>

          <div className="bg-[#362419] border border-[#B89758]/60 px-3.5 py-2 rounded-md flex items-center gap-2.5 sm:gap-3 self-start md:self-auto">
            <Scale className="w-5 h-5 text-[#B89758] shrink-0" />
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase font-serif tracking-wider text-[#B89758] block font-bold">
                Peso Promedio de Horma
              </span>
              <span className="font-serif text-sm sm:text-base font-bold text-[#EFE6D8]">
                1 Arroba (25 Libras)
              </span>
            </div>
          </div>
        </div>

        {/* Visualización Táctil Móvil vs Desktop: flex flex-col lg:flex-row */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
          
          {/* Ilustración Geométrica del Cono de Purga (Arriba en móvil, max-w-xs) */}
          <div className="w-full max-w-xs mx-auto shrink-0 flex flex-col items-center">
            <div className="w-full flex flex-col items-center select-none py-2">
              
              {/* Estrato Superior (5/9) - Azúcar Blanco */}
              <button
                onClick={() => setSelectedStratumId('blanco')}
                className={`w-full transition-all duration-300 relative group cursor-pointer ${
                  selectedStratumId === 'blanco'
                    ? 'scale-105 z-20 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                    : 'opacity-85 hover:opacity-100'
                }`}
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 82% 100%, 18% 100%)',
                  height: '105px',
                }}
                aria-label="Seleccionar Azúcar Blanco (5/9)"
              >
                <div className="w-full h-full bg-gradient-to-b from-[#FFFDF9] via-[#F4ECE1] to-[#E5D7C3] border-t-2 border-[#B89758] flex flex-col items-center justify-center text-[#23170F] p-2">
                  <span className="font-serif text-xs font-black uppercase tracking-wider">
                    5/9 · Azúcar Blanco
                  </span>
                  <span className="text-[10px] font-serif font-bold text-[#1F3D2B]">
                    Máxima Pureza (~13.9 lbs)
                  </span>
                  {selectedStratumId === 'blanco' && (
                    <span className="mt-1 text-[9px] bg-[#1F3D2B] text-[#EFE6D8] px-2 py-0.5 rounded font-bold uppercase">
                      Activo
                    </span>
                  )}
                </div>
              </button>

              {/* Separador filete dorado */}
              <div className="w-[82%] h-1 bg-[#B89758] my-0.5" />

              {/* Estrato Medio (3/9) - El Quebrado */}
              <button
                onClick={() => setSelectedStratumId('quebrado')}
                className={`w-[82%] transition-all duration-300 relative group cursor-pointer ${
                  selectedStratumId === 'quebrado'
                    ? 'scale-105 z-20 drop-shadow-[0_0_15px_rgba(204,168,120,0.5)]'
                    : 'opacity-85 hover:opacity-100'
                }`}
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 75% 100%, 25% 100%)',
                  height: '75px',
                }}
                aria-label="Seleccionar El Quebrado (3/9)"
              >
                <div className="w-full h-full bg-gradient-to-b from-[#E6D4B8] via-[#CCA878] to-[#B08652] flex flex-col items-center justify-center text-[#23170F] p-2">
                  <span className="font-serif text-xs font-black uppercase tracking-wider">
                    3/9 · El Quebrado
                  </span>
                  <span className="text-[10px] font-serif font-bold text-[#362419]">
                    Calidad Intermedia (~8.3 lbs)
                  </span>
                  {selectedStratumId === 'quebrado' && (
                    <span className="mt-1 text-[9px] bg-[#23170F] text-[#B89758] px-2 py-0.5 rounded font-bold uppercase border border-[#B89758]">
                      Activo
                    </span>
                  )}
                </div>
              </button>

              {/* Separador filete dorado */}
              <div className="w-[62%] h-1 bg-[#B89758] my-0.5" />

              {/* Punta Inferior (1/9) - El Cucurucho */}
              <button
                onClick={() => setSelectedStratumId('cucurucho')}
                className={`w-[62%] transition-all duration-300 relative group cursor-pointer ${
                  selectedStratumId === 'cucurucho'
                    ? 'scale-105 z-20 drop-shadow-[0_0_15px_rgba(154,107,61,0.6)]'
                    : 'opacity-85 hover:opacity-100'
                }`}
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                  height: '58px',
                }}
                aria-label="Seleccionar El Cucurucho (1/9)"
              >
                <div className="w-full h-full bg-gradient-to-b from-[#8C5A2B] to-[#42250F] flex flex-col items-center justify-center text-[#EFE6D8] p-1 pt-0">
                  <span className="font-serif text-[10px] font-black uppercase tracking-wider text-[#B89758]">
                    1/9 · Cucurucho
                  </span>
                  <span className="text-[9px] font-serif text-[#E5D9C5]">
                    Oscuro (~2.8 lbs)
                  </span>
                </div>
              </button>

              <span className="text-[10px] sm:text-[11px] font-serif italic text-[#B89758] mt-3 text-center">
                Cono de purga · Proporción según Alexander von Humboldt (1827)
              </span>
            </div>
          </div>

          {/* Panel Informativo del Estrato Seleccionado (100% width en móvil) */}
          <div className="w-full flex-1 bg-[#362419] rounded-lg border-2 border-[#B89758] p-4 sm:p-6 space-y-3 sm:space-y-4">
            
            {/* Cabecera del Estrato */}
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#B89758]/30 pb-3">
              <div>
                <span className="text-[10px] sm:text-xs uppercase font-serif tracking-wider sm:tracking-[0.2em] text-[#B89758] font-bold block">
                  Estrato Seleccionado ({selectedStratum.fraction})
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#EFE6D8]">
                  {selectedStratum.name}
                </h4>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs font-serif text-[#E5D9C5]/80 block">
                  Proporción Física
                </span>
                <span className="font-serif text-lg sm:text-xl font-bold text-[#B89758]">
                  {selectedStratum.percentage} · {selectedStratum.weightLbs}
                </span>
              </div>
            </div>

            {/* Clasificación de Humboldt */}
            <div className="p-3 bg-[#23170F] rounded border-l-4 border-[#B89758] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-serif">
              <span className="text-[#E5D9C5]">Clasificación Científica (1827):</span>
              <strong className="text-[#B89758] uppercase tracking-wider">{selectedStratum.purity}</strong>
            </div>

            {/* Descripción Técnica */}
            <p className="text-sm sm:text-base text-[#E5D9C5] leading-relaxed text-justify">
              {selectedStratum.desc}
            </p>

            {/* Destino de Mercado */}
            <div className="pt-2 border-t border-[#B89758]/20 flex items-start sm:items-center gap-2 text-xs font-serif text-[#B89758]">
              <Info className="w-4 h-4 shrink-0 mt-0.5 sm:mt-0" />
              <span><strong>Destino y Comercio:</strong> {selectedStratum.marketValue}</span>
            </div>

            {/* Botones de Selección Rápida con tamaño táctil cómodo */}
            <div className="pt-2 flex flex-wrap gap-2">
              {seccion3.conicAnatomy.strata.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedStratumId(s.id)}
                  className={`min-h-[44px] px-3.5 py-2 rounded text-xs sm:text-sm font-serif transition-colors border flex items-center justify-center ${
                    selectedStratumId === s.id
                      ? 'bg-[#B89758] text-[#23170F] font-bold border-[#B89758]'
                      : 'bg-[#23170F] text-[#E5D9C5] border-[#B89758]/40 hover:bg-[#1F3D2B]'
                  }`}
                >
                  {s.fraction}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Bloque Crítico: ¿Por qué desaparecieron los Panes de Azúcar hacia 1940? */}
      <div className="bg-[#FAF6F0] rounded-lg border-l-4 border-[#1F3D2B] border-y border-r border-[#B89758]/40 p-4 sm:p-8 lg:p-12 shadow-sm">
        
        <div className="flex items-center gap-2 text-[#1F3D2B] mb-2">
          <AlertTriangle className="w-5 h-5 text-[#B89758] shrink-0" />
          <span className="text-[10px] sm:text-xs font-serif uppercase tracking-wider sm:tracking-[0.2em] text-[#B89758] font-bold">
            Transición Económica y Competencia Agroindustrial
          </span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#1F3D2B] mb-3">
          {seccion3.decayAnalysis.question}
        </h3>

        {/* Nota de origen de la panela */}
        <div className="p-3.5 sm:p-4 bg-[#EFE6D8] rounded border border-[#B89758]/50 mb-5 sm:mb-6 font-serif italic text-sm sm:text-base md:text-lg text-[#23170F] leading-relaxed">
          «{seccion3.decayAnalysis.originNote}»
        </div>

        {/* Dos factores decisivos con rejilla adaptativa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {seccion3.decayAnalysis.factors.map((factor, index) => (
            <div 
              key={index} 
              className="p-4 sm:p-5 bg-white/70 rounded-md border border-[#B89758]/30 space-y-2 hover:border-[#1F3D2B] transition-colors"
            >
              <div className="flex items-center gap-2 text-[#1F3D2B] font-serif font-bold text-xs sm:text-sm uppercase">
                {index === 0 ? <Scale className="w-4 h-4 text-[#B89758] shrink-0" /> : <Factory className="w-4 h-4 text-[#B89758] shrink-0" />}
                <span>Factor {index + 1}: {factor.title}</span>
              </div>
              <p className="text-sm sm:text-base text-[#362419] leading-relaxed text-justify">
                {factor.text}
              </p>
            </div>
          ))}
        </div>

        {/* Cierre Historiográfico UIS */}
        <div className="mt-5 sm:mt-6 pt-4 border-t border-[#B89758]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-serif text-[#362419]">
          <span>Conclusión económica: El repliegue de Santander hacia la panela en bloque.</span>
          <span className="font-bold text-[#1F3D2B]">
            Fuente: Pierre Raymond (1997) & Archivo UIS
          </span>
        </div>

      </div>

    </section>
  );
};
