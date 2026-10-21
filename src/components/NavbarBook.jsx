import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Bookmark } from 'lucide-react';
import { historyData } from '../data/historyData';

export const NavbarBook = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadProgress(progress);
      }

      const sectionIds = historyData.navigation.map((n) => n.id);
      const scrollPosition = window.scrollY + 200;

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
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Cinta marcapáginas ornamental estilo libro antiguo (solo visible en pantallas medianas y grandes) */}
      <div 
        className="fixed top-0 right-4 sm:right-8 lg:right-16 z-50 pointer-events-none transition-transform duration-300 hidden md:block"
        style={{ transform: scrolled ? 'translateY(0)' : 'translateY(6px)' }}
        aria-hidden="true"
      >
        <div className="w-6 sm:w-7 h-24 sm:h-28 bg-[#1F3D2B] shadow-xl border-x-2 border-[#B89758] flex flex-col items-center justify-between pb-3 pt-2 relative">
          <Bookmark className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#B89758]" />
          <span className="text-[8px] sm:text-[9px] uppercase font-serif tracking-widest text-[#B89758] font-bold rotate-90 whitespace-nowrap">
            1776-2026
          </span>
          <div className="absolute -bottom-3 left-0 w-0 h-0 border-l-[12px] sm:border-l-[14px] border-l-[#1F3D2B] border-r-[12px] sm:border-r-[14px] border-r-[#1F3D2B] border-b-[10px] sm:border-b-[12px] border-b-transparent"></div>
        </div>
      </div>

      {/* Barra de cabecera */}
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

        <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between">
          {/* Logotipo Editorial */}
          <button 
            onClick={() => scrollTo('inicio')}
            className="flex items-center gap-2 sm:gap-2.5 text-left group"
          >
            <div className="w-7 sm:w-8 h-7 sm:h-8 rounded bg-[#1F3D2B] border border-[#B89758] flex items-center justify-center text-[#B89758] group-hover:bg-[#B89758] group-hover:text-[#23170F] transition-colors shrink-0">
              <BookOpen className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            </div>
            <div className="truncate">
              <span className="font-serif text-sm sm:text-base lg:text-lg font-bold tracking-tight text-[#EFE6D8] group-hover:text-[#B89758] transition-colors block leading-tight truncate">
                Historias de Piedecuesta
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-serif tracking-wider text-[#B89758] block truncate">
                Memoria Colectiva · 1776–2026
              </span>
            </div>
          </button>

          {/* Menú de Navegación de Escritorio (hidden md:flex) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {historyData.navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-2.5 lg:px-3 py-1.5 rounded text-xs tracking-wider transition-all font-serif whitespace-nowrap ${
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

          {/* Botón Menú Móvil (flex md:hidden) con min-h-[44px] */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-[#EFE6D8] hover:text-[#B89758] hover:bg-[#362419] rounded transition-colors"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú de capítulos"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-[#B89758]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable con fondo pergamino (#EFE6D8) y borde #B89758 */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#EFE6D8] text-[#23170F] border-b-2 border-[#B89758] px-4 py-3 space-y-1 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <p className="text-[11px] font-serif uppercase tracking-wider text-[#B89758] font-bold border-b border-[#B89758]/40 pb-2 mb-2">
              Índice de Secciones
            </p>
            {historyData.navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-left font-serif text-base py-3 px-3 rounded transition-colors ${
                    isActive
                      ? 'bg-[#1F3D2B] text-[#EFE6D8] font-bold border-l-4 border-[#B89758]'
                      : 'text-[#23170F] hover:bg-[#E5D9C5] active:bg-[#E5D9C5]'
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
