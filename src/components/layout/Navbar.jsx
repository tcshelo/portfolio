import React, { useState, useEffect } from 'react';
import { getStoredLang, setStoredLang, getToken } from '@/utils/i18n';

export default function Navbar() {
  const [currentLang, setCurrentLang] = useState(getStoredLang());

  useEffect(() => {
    const handleLangChange = () => {
      setCurrentLang(getStoredLang());
    };

    window.addEventListener('languageChange', handleLangChange);
    return () => {
      window.removeEventListener('languageChange', handleLangChange);
    };
  }, []);

  // Alterna o idioma e dispara o evento para atualizar a aplicação inteira
  const handleToggleLang = () => {
    const nextLang = currentLang === 'PT' ? 'EN' : 'PT';
    setStoredLang(nextLang);
    setCurrentLang(nextLang);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Logo / Nome */}
        <a href="#" className="text-lg font-bold text-white tracking-wider">
          HELOISA<span className="text-emerald-400">.DEV</span>
        </a>

        {/* Links de Navegação */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-emerald-400 transition-colors">{getToken(1000)}</a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors">{getToken(1001)}</a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">{getToken(1002)}</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">{getToken(1003)}</a>
        </nav>

        {/* Botão de Alternância de Idioma Dinâmico */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleToggleLang}
            className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-900/90 text-white font-semibold text-sm hover:border-emerald-500 hover:text-emerald-400 transition-all shadow-md flex items-center gap-1.5"
            aria-label="Toggle language"
          >
            {currentLang === 'PT' ? (
              <span className="tracking-wide">
                <span className="font-bold">BR</span> PT
              </span>
            ) : (
              <span>EN</span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}