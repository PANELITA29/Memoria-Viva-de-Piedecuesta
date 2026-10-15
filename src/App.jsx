import React from 'react';
import { NavbarBook } from './components/NavbarBook';
import { HeroCover } from './components/HeroCover';
import { TrapichesSection } from './components/TrapichesSection';
import { FunerariaSection } from './components/FunerariaSection';
import { TestimoniosModal } from './components/TestimoniosModal';
import { TesisFooter } from './components/TesisFooter';

function App() {
  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#2C221E] font-book selection:bg-[#B89758]/30 selection:text-[#1F3D2B] bg-parchment-texture relative">
      {/* Barra Fija Tipo Cinta Marcapáginas */}
      <NavbarBook />

      {/* Contenido Principal de la SPA One-Page */}
      <main className="w-full">
        {/* Portada del Tomo */}
        <HeroCover />

        {/* Capítulo I: El Valle de la Caña Dulce y Ciclo de Molienda */}
        <TrapichesSection />

        {/* Capítulo II: Más Allá del Duelo (Funeraria David Gómez) */}
        <FunerariaSection />

        {/* Capítulo III: Expediente de Campo y Fichas Notariales */}
        <TestimoniosModal />
      </main>

      {/* Colofón, Tesis del ABP y Fuentes de Archivo */}
      <TesisFooter />
    </div>
  );
}

export default App;
