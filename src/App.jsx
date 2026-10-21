import React from 'react';
import { NavbarBook } from './components/NavbarBook';
import { HeroCover } from './components/HeroCover';
import { OrigenesColonialesSection } from './components/OrigenesColonialesSection';
import { PanDeAzucarSection } from './components/PanDeAzucarSection';
import { ProcesoNormativaSection } from './components/ProcesoNormativaSection';
import { FunerariaMemoriaSection } from './components/FunerariaMemoriaSection';
import { ColofonSection } from './components/ColofonSection';

function App() {
  return (
    <div className="min-h-screen bg-[#EFE6D8] text-[#23170F] font-book selection:bg-[#B89758]/30 selection:text-[#1F3D2B] bg-parchment-texture relative">
      {/* Barra Fija Tipo Cinta Marcapáginas */}
      <NavbarBook />

      {/* Contenido Editorial del Tomo Histórico (One-Page) */}
      <main className="w-full">
        {/* SECCIÓN 1: Portada y Hero (#inicio) */}
        <HeroCover />

        {/* SECCIÓN 2: Orígenes Coloniales y la Colonización Cañamelera (#origenes-1635) */}
        <OrigenesColonialesSection />

        {/* SECCIÓN 3: Del "Pan de Azúcar" a la Panela (#pan-de-azucar) */}
        <PanDeAzucarSection />

        {/* SECCIÓN 4: El Proceso Técnico, Léxico y Normativa Moderna (#proceso-normativa) */}
        <ProcesoNormativaSection />

        {/* SECCIÓN 5: Más Allá del Duelo — Funeraria David Gómez Barrera (#funeraria-memoria) */}
        <FunerariaMemoriaSection />
      </main>

      {/* SECCIÓN 6: Conclusión y Colofón Bibliográfico (#colofon) */}
      <ColofonSection />
    </div>
  );
}

export default App;
