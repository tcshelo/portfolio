import { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { NAVBAR_STYLES } from '@/constants/theme';
import { PORTFOLIO_STRUCTURE } from '@/data/portfolioData';
import { getToken } from '@/utils/i18n';

export default function Navbar({ lang, onToggleLang }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const personal = PORTFOLIO_STRUCTURE.personal;
  const githubUrl = personal?.socials?.github || "https://github.com/tcshelo";
  const linkedinUrl = personal?.socials?.linkedin || "https://www.linkedin.com/in/tcshelo/";

  return (
    <nav className={isScrolled ? NAVBAR_STYLES.navScrolled : NAVBAR_STYLES.navDefault}>
      <div className={NAVBAR_STYLES.container}>
        
        {/* Logomarca */}
        <a href="#" className={NAVBAR_STYLES.logoWrapper}>
          <div className={NAVBAR_STYLES.logoBox}>
            DS
          </div>
          <span className={NAVBAR_STYLES.logoText}>
            Dev<span className={NAVBAR_STYLES.logoAccent}>.Portfolio</span>
          </span>
        </a>

        {/* Links de navegação baseados em Tokens */}
        <div className={NAVBAR_STYLES.linksWrapper}>
          {PORTFOLIO_STRUCTURE.navLinks.map(({ href, token }) => (
            <a key={href} href={href} className={NAVBAR_STYLES.linkItem}>
              {getToken(token, lang)}
            </a>
          ))}
        </div>

        {/* Ações (Redes sociais + Seletor de Idioma) */}
        <div className="flex items-center gap-3">
          <div className={NAVBAR_STYLES.socialsWrapper}>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={NAVBAR_STYLES.socialIconBtn} aria-label="GitHub">
              <GithubIcon className="w-4 h-4" />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={NAVBAR_STYLES.socialIconBtn} aria-label="LinkedIn">
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={onToggleLang}
            className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-white hover:bg-slate-700 transition-colors shadow-sm"
            title="Mudar Idioma / Change Language"
          >
            {lang === 'PT' ? '🇺🇸 EN' : '🇧🇷 PT'}
          </button>
        </div>

      </div>
    </nav>
  );
}