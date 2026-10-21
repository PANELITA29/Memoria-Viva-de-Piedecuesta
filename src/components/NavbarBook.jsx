import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Bookmark } from 'lucide-react';
import { historyData } from '../data/historyData';

export const NavbarBook = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Calcular progreso de lectura
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadProgress(progress);
      }

      // Detección de sección activa
      const sectionIds = historyData.navigation.map((n) => n.id);
      const scrollPosition = window.scrollY + 220;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Cinta marcapáginas ornamental estilo libro antiguo */}
      <div 
        className="fixed top-0 right-6 sm:right-12 z-50 pointer-events-none transition-transform duration-300 hidden md:block"
        style={{ transform: scrolled ? 'translateY(0)' : 'translateY(6px)' }}
        aria-hidden="true"
      >
        <div className="w-7 h-28 bg-[#1F3D2B] shadow-xl border-x-2 border-[#B89758] flex flex-col items-center justify-between pb-3 pt-2 relative">
          <Bookmark className="w-4 h-4 text-[#B89758]" />
          <span className="text-[9px] uppercase font-serif tracking-widest text-[#B89758] font-bold rotate-90 whitespace-nowrap">
            1776-2026
          </span>
          <div className="absolute -bottom-3 left-0 w-0 h-0 border-l-[14px] border-l-[#1F3D2B] border-r-[14px] border-r-[#1F3D2B] border-b-[12px] border-b-transparent"></div>
        </div>
      </div>

      {/* Barra de cabecera con textura de cuero antiguo y doble ribete dorado */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#23170F]/95 text-[#EFE6D8] backdrop-blur-md shadow-2xl border-b-2 border-[#B89758]'
            : 'bg-[#23170F]/90 text-[#EFE6D8] backdrop-blur-sm border-b border-[#B89758]/50'
        }`}
      >
        {/* Barra de progreso de lectura superior */}
        <div 
          className="h-[3px] bg-gradient-to-r from-[#B89758] via-[#E5D9C5] to-[#B89758] transition-all duration-150"
          style={{ width: `${readProgress}%` }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logotipo Editorial */}
          <button 
            onClick={() => scrollTo('inicio')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-8 h-8 rounded bg-[#1F3D2B] border border-[#B89758] flex items-center justify-center text-[#B89758] group-hover:bg-[#B89758] group-hover:text-[#23170F] transition-colors">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#EFE6D8] group-hover:text-[#B89758] transition-colors block leading-tight">
                Historias de Piedecuesta
              </span>
              <span className="text-[10px] uppercase font-serif tracking-widest text-[#B89758] block">
                Memoria Colectiva · 1776–2026
              </span>
            </div>
          </button>

          {/* Menú de Navegación de Escritorio */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {historyData.navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 rounded text-xs tracking-wider transition-all font-serif ${
                    isActive
                      ? 'bg-[#1F3D2B] text-[#B89758] font-bold border border-[#B89758] shadow-sm'
                      : 'text-[#E5D9C5]/80 hover:text-[#EFE6D8] hover:bg-[#362419]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Botón Menú Móvil */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#EFE6D8] hover:text-[#B89758] hover:bg-[#362419] rounded transition-colors"
              aria-label="Abrir menú de capítulos"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#23170F] border-b-4 border-double border-[#B89758] px-6 py-4 space-y-2 shadow-2xl">
            <p className="text-[11px] font-serif uppercase tracking-widest text-[#B89758] border-b border-[#B89758]/30 pb-2 mb-3">
              Índice General de Secciones
            </p>
            {historyData.navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-left font-serif text-sm py-2 px-3 rounded transition-colors ${
                    isActive
                      ? 'bg-[#1F3D2B] text-[#B89758] font-bold border-l-4 border-[#B89758]'
                      : 'text-[#E5D9C5]/80 hover:bg-[#362419]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
};
