import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const NavbarBook = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['inicio', 'trapiches', 'funeraria', 'testimonios', 'colofon'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Portada' },
    { id: 'trapiches', label: 'I. Los Trapiches' },
    { id: 'funeraria', label: 'II. Funeraria Gómez' },
    { id: 'testimonios', label: 'III. Testimonios' },
    { id: 'colofon', label: 'Colofón' },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Cinta marcapáginas sutil de encuadernación */}
      <div 
        className="fixed top-0 right-8 sm:right-16 z-50 pointer-events-none transition-transform duration-300 hidden md:block"
        style={{ transform: scrolled ? 'translateY(0)' : 'translateY(4px)' }}
      >
        <div className="w-6 h-24 bg-[#1F3D2B] shadow-md border-x border-[#B89758]/40 relative">
          <div className="absolute -bottom-2.5 left-0 w-0 h-0 border-l-[12px] border-l-[#1F3D2B] border-r-[12px] border-r-[#1F3D2B] border-b-[10px] border-b-transparent"></div>
        </div>
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#160E09]/95 text-[#F4EFE6] backdrop-blur-md shadow-md border-b border-[#B89758]/30'
            : 'bg-[#23170F]/90 text-[#F4EFE6] backdrop-blur-sm border-b border-[#B89758]/20'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          
          <button 
            onClick={() => scrollTo('inicio')}
            className="text-left group"
          >
            <span className="font-serif text-lg tracking-tight text-[#F4EFE6] group-hover:text-[#B89758] transition-colors">
              Historias de Piedecuesta
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm tracking-wide transition-colors font-serif ${
                    isActive
                      ? 'text-[#B89758] font-bold border-b border-[#B89758]'
                      : 'text-[#E8DEC8]/70 hover:text-[#F4EFE6]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#F4EFE6] hover:text-[#B89758] transition-colors"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#160E09] border-b border-[#B89758]/30 px-6 py-4 space-y-3 shadow-xl">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-left font-serif text-base py-1 ${
                    isActive ? 'text-[#B89758] font-bold' : 'text-[#E8DEC8]/80'
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
