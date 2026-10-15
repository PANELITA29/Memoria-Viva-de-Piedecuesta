import React from 'react';
import { NavbarBook } from './components/NavbarBook';
import { HeroCover } from './components/HeroCover';
import { OrigenAzucarSection } from './components/OrigenAzucarSection';
import { CrisisTrapichesSection } from './components/CrisisTrapichesSection';
import { FunerariaSection } from './components/FunerariaSection';
import { TestimoniosSection } from './components/TestimoniosSection';
import { CreditosSection } from './components/CreditosSection';

function App() {
  return (
    <div className="min-h-screen bg-[#F3EBDD] text-[#3D2D24] font-book selection:bg-[#B39352]/30 selection:text-[#1F3D2B] bg-parchment-texture relative">
      {/* Barra Fija Tipo Cinta Marcapáginas */}
      <NavbarBook />

      {/* Contenido Editorial del Tomo Histórico */}
      <main className="w-full">
        {/* Portada y Frontispicio (#inicio) */}
        <HeroCover />

        {/* Capítulo I: La Paradoja del Azúcar en Piedecuesta (#origen-azucar) */}
        <OrigenAzucarSection />

        {/* Capítulo II: La Anatomía de la Crisis Panelera (#decadencia-trapiches) */}
        <CrisisTrapichesSection />

        {/* Capítulo III: Más Allá del Duelo - Funeraria David Gómez (#funeraria-gomez) */}
        <FunerariaSection />

        {/* Capítulo IV: Expediente de Campo y Archivo Oral (#testimonios) */}
        <TestimoniosSection />
      </main>

      {/* Colofón & Créditos Académicos (#creditos) */}
      <CreditosSection />
    </div>
  );
}

export default App;
