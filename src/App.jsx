import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import SkillsSection from '@/sections/SkillsSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ContactSection from '@/sections/ContactSection';
import ProjectModal from '@/components/ui/ProjectModal';
import { APP_STYLES } from '@/constants/theme';
import { getStoredLang, setStoredLang } from '@/utils/i18n'; // <-- Import corrigido aqui

export default function App() {
  const [lang, setLang] = useState(getStoredLang);
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleLang = () => {
    const newLang = lang === 'PT' ? 'EN' : 'PT';
    setLang(newLang);
    setStoredLang(newLang);
  };

  return (
    <div className={APP_STYLES.root}>
      <Navbar 
        lang={lang} 
        onToggleLang={handleToggleLang} 
      />
      
      <main className={APP_STYLES.main}>
        <HeroSection scrollPosition={scrollPosition} lang={lang} />
        <AboutSection lang={lang} />
        <SkillsSection lang={lang} />
        <ProjectsSection onSelectProject={setSelectedProject} lang={lang} />
        <ContactSection lang={lang} />
      </main>

      <Footer lang={lang} />

      <ProjectModal 
        project={selectedProject} 
        lang={lang}
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}