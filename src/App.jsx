import React, { useState, useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";
import { APP_STYLES } from "@/constants/theme";
import { getStoredLang, setStoredLang } from "@/utils/i18n";

export default function App() {
  const [lang, setLang] = useState(getStoredLang());

  useEffect(() => {
    const handleLangChange = () => {
      setLang(getStoredLang());
    };
    window.addEventListener('languageChange', handleLangChange);
    return () => {
      window.removeEventListener('languageChange', handleLangChange);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'PT' ? 'EN' : 'PT';
    setStoredLang(newLang);
    setLang(newLang);
  };

  return (
    <div className={`min-h-screen ${APP_STYLES.background} ${APP_STYLES.text} selection:bg-emerald-500 selection:text-slate-950`}>
      <Navbar currentLang={lang} onToggleLang={toggleLanguage} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}