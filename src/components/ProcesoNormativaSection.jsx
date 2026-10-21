import React, { useState } from 'react';
import { historyData } from '../data/historyData';
import { 
  BookMarked, 
  ChevronLeft, 
  ChevronRight, 
  Flame, 
  ShieldCheck, 
  TrendingUp, 
  Sparkles,
  Thermometer,
  Wrench
} from 'lucide-react';

export const ProcesoNormativaSection = () => {
  const { seccion4, images } = historyData;
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = seccion4.stepper.steps[activeStepIndex];
  const totalSteps = seccion4.stepper.steps.length;

  const nextStep = () => {
    setActiveStepIndex((prev) => (prev < totalSteps - 1 ? prev + 1 : 0));
  };

  const prevStep = () => {
    setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : totalSteps - 1));
  };

  return (
    <section id="proceso-normativa" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
      
      {/* Encabezado Editorial */}
      <header className="border-b-2 border-[#B89758]/50 pb-6 mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-6 h-px bg-[#1F3D2B]" />
          <span className="font-serif text-xs uppercase tracking-widest text-[#B89758] font-bold">
            {seccion4.badge}
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F3D2B] font-bold tracking-tight">
          {seccion4.title}
        </h2>
        <p className="font-serif italic text-base sm:text-lg text-[#362419] mt-2 max-w-3xl">
          {seccion4.subtitle}
        </p>
      </header>

      {/* Glosario Filológico del Trapiche (Págs. 93–95) */}
      <div className="mb-14 bg-[#FAF6F0] rounded-lg border-4 border-double border-[#B89758] p-6 sm:p-8 shadow-md">
        <div className="flex items-center justify-between border-b border-[#B89758]/40 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <BookMarked className="w-6 h-6 text-[#1F3D2B]" />
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1F3D2B]">
                {seccion4.glossary.title}
              </h3>
              <p className="text-xs font-serif text-[#362419] italic">
                {seccion4.glossary.atlanticOrigins.title} · Transmisión Lingüística Insular y Virreinal
              </p>
            </div>
          </div>
          <span className="bg-[#1F3D2B] text-[#B89758] px-3 py-1 rounded text-[11px] font-serif font-bold uppercase tracking-wider hidden sm:inline-block">
            Páginas 93 a 95
          </span>
        </div>

        {/* Tarjetas Filológicas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {seccion4.glossary.atlanticOrigins.terms.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#EFE6D8] p-5 rounded border border-[#B89758]/60 space-y-2.5 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <span className="text-[10px] uppercase font-serif tracking-widest text-[#B89758] font-bold block">
                  {item.origin}
                </span>
                <h4 className="font-serif text-lg font-bold text-[#1F3D2B] mt-0.5">
                  {item.term}
                </h4>
                <div className="w-8 h-0.5 bg-[#B89758] my-2" />
                <p className="text-xs sm:text-sm text-[#23170F] leading-relaxed text-justify">
                  {item.meaning}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stepper Interactivo: Los 8 Subprocesos Oficiales (Ordóñez & Rueda 2015 / CORANTIOQUIA) */}
      <div className="my-14 bg-[#23170F] text-[#EFE6D8] rounded-xl border-4 border-double border-[#B89758] p-6 sm:p-10 shadow-2xl relative">
        
        {/* Cabecera del Stepper */}
        <div className="border-b border-[#B89758]/40 pb-5 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#B89758] text-xs font-serif uppercase tracking-widest font-bold mb-1">
              <Flame className="w-4 h-4 text-[#B89758]" />
              <span>Ciclo Termodinámico y de Molienda</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#EFE6D8]">
              Los 8 Subprocesos Oficiales del Trapiche
            </h3>
            <p className="text-xs sm:text-sm text-[#E5D9C5]/80 italic mt-1">
              Norma técnica documentada por {seccion4.stepper.source}
            </p>
          </div>

          {/* Navegación y Contador */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-serif text-[#B89758] font-bold">
              Subproceso {activeStep.step} de {totalSteps}
            </span>
            <div className="flex gap-1.5">
              <button
                onClick={prevStep}
                className="p-2 rounded bg-[#362419] hover:bg-[#1F3D2B] text-[#EFE6D8] border border-[#B89758] transition-colors"
                aria-label="Paso anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextStep}
                className="p-2 rounded bg-[#362419] hover:bg-[#1F3D2B] text-[#EFE6D8] border border-[#B89758] transition-colors"
                aria-label="Paso siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Barra de progreso de 8 pasos */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 mb-8">
          {seccion4.stepper.steps.map((st, i) => {
            const isCurrent = activeStepIndex === i;
            const isPassed = activeStepIndex > i;
            return (
              <button
                key={st.step}
                onClick={() => setActiveStepIndex(i)}
                className={`py-2 px-1 text-center rounded border transition-all ${
                  isCurrent
                    ? 'bg-[#B89758] text-[#23170F] font-bold border-[#B89758] shadow-md scale-105'
                    : isPassed
                    ? 'bg-[#1F3D2B] text-[#E5D9C5] border-[#B89758]/50'
                    : 'bg-[#362419] text-[#E5D9C5]/60 border-white/10 hover:bg-[#362419]/80'
                }`}
              >
                <span className="text-[10px] font-serif block">Paso {st.step}</span>
                <span className="text-[9px] font-serif truncate block max-w-full">
                  {st.name.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Panel Detallado del Paso Activo */}
        <div className="bg-[#362419] rounded-lg border-2 border-[#B89758] p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#B89758]/30 pb-3">
            <div>
              <span className="text-xs uppercase font-serif tracking-widest text-[#B89758] font-bold block">
                Etapa Operativa: {activeStep.stage}
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#EFE6D8]">
                {activeStep.step}. {activeStep.name}
              </h4>
            </div>
            <div className="bg-[#23170F] px-3 py-1 rounded text-xs font-serif text-[#B89758] border border-[#B89758]/40 flex items-center gap-1.5">
              <Thermometer className="w-3.5 h-3.5" />
              <span>Estación Técnica #{activeStep.step}</span>
            </div>
          </div>

          <p className="font-serif italic text-base sm:text-lg text-[#E5D9C5]">
            «{activeStep.summary}»
          </p>

          <div className="p-4 bg-[#23170F] rounded border-l-4 border-[#B89758] space-y-1">
            <span className="text-[11px] uppercase font-serif tracking-wider text-[#B89758] font-bold flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
              Especificación de Manufactura (BPM Santander):
            </span>
            <p className="text-sm sm:text-base text-[#EFE6D8] leading-relaxed text-justify">
              {activeStep.technical}
            </p>
          </div>
        </div>

      </div>

      {/* Lámina documental del trapiche */}
      <figure className="my-10">
        <div className="overflow-hidden rounded-lg border-4 border-double border-[#B89758] bg-[#23170F] shadow-lg">
          <img
            src={images.trapicheMolienda}
            alt="Molienda continua en hornilla tradicional de Santander"
            className="w-full h-64 sm:h-80 md:h-96 object-cover photo-archive"
            loading="lazy"
          />
        </div>
        <figcaption className="mt-3 font-serif italic text-xs sm:text-sm text-[#362419] text-center max-w-2xl mx-auto">
          Cilindros de molienda y batería de fondos en molienda artesanal de Santander. El maestro templador vigila la evaporación del melao al calor de la hornilla de tiro corrido.
        </figcaption>
      </figure>

      {/* Panel de Datos e Impacto Moderno (Pág. 95) */}
      <div className="bg-[#FAF6F0] rounded-lg border-4 border-double border-[#B89758] p-6 sm:p-8 shadow-md space-y-8">
        
        <div>
          <div className="flex items-center gap-2 text-[#1F3D2B] mb-1">
            <TrendingUp className="w-5 h-5 text-[#B89758]" />
            <span className="text-xs font-serif uppercase tracking-widest text-[#B89758] font-bold">
              {seccion4.modernImpact.statsYear} · Economía Agraria Regional
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F3D2B]">
            {seccion4.modernImpact.title}
          </h3>
        </div>

        {/* Dos Estadísticas Principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {seccion4.modernImpact.stats.map((st, i) => (
            <div 
              key={i}
              className="p-6 bg-[#EFE6D8] rounded-lg border-l-4 border-[#1F3D2B] border-y border-r border-[#B89758]/40 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="font-serif text-5xl sm:text-6xl font-bold text-[#1F3D2B] leading-none mb-2">
                  {st.value}
                </div>
                <h4 className="font-serif text-lg font-bold text-[#23170F] mb-1">
                  {st.metric}
                </h4>
                <span className="text-xs font-serif italic text-[#B89758] font-bold block mb-3">
                  {st.scope}
                </span>
                <p className="text-xs sm:text-sm text-[#362419] leading-relaxed text-justify">
                  {st.context}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Normativa de 2011: Higiene, Inocuidad y Acompañamiento Técnico */}
        <div className="p-6 bg-[#23170F] text-[#EFE6D8] rounded-lg border-2 border-[#B89758] space-y-3">
          <div className="flex items-center gap-2 text-[#B89758]">
            <ShieldCheck className="w-5 h-5" />
            <h4 className="font-serif text-xl font-bold text-[#EFE6D8]">
              {seccion4.modernImpact.regulations.title}
            </h4>
          </div>
          <p className="text-sm sm:text-base text-[#E5D9C5] leading-relaxed text-justify">
            {seccion4.modernImpact.regulations.details}
          </p>
          <div className="pt-3 border-t border-[#B89758]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-serif text-[#B89758]">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{seccion4.modernImpact.regulations.alliances}</span>
            </span>
            <span className="text-[#E5D9C5]/70 italic">
              Vigilancia sanitaria y modernización agroindustrial
            </span>
          </div>
        </div>

      </div>

    </section>
  );
};
