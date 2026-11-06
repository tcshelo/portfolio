import React from 'react';
import { Sparkles, FolderGit2, Mail } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import GlowFrame from '@/components/ui/GlowFrame';
import ImageTextView from '@/components/ui/ImageTextView';
import { HERO_SECTION_STYLES } from '@/constants/theme';
import dev from '@/assets/perfil.jpg';
import { PORTFOLIO_STRUCTURE } from '@/data/portfolioData';
import { getToken } from '@/utils/i18n';

export default function HeroSection({ scrollPosition, lang }) {
  const { personal } = PORTFOLIO_STRUCTURE;

  return (
    <section className={HERO_SECTION_STYLES.section}>
      <div 
        className={HERO_SECTION_STYLES.parallaxBg}
        style={{ transform: `translateX(-${scrollPosition * 0.5}px)` }}
      >
        <div className={HERO_SECTION_STYLES.blobOne} />
        <div className={HERO_SECTION_STYLES.blobTwo} />
        <div className={HERO_SECTION_STYLES.blobThree} />
      </div>

      <div className={HERO_SECTION_STYLES.container}>
        <div className={HERO_SECTION_STYLES.leftCol}>
          <Badge icon={Sparkles}>{getToken(personal.badgeToken, lang)}</Badge>

          <h1 className={HERO_SECTION_STYLES.title}>
            {getToken(1011, lang)}{' '}
            <span className={HERO_SECTION_STYLES.gradientText}>
              {getToken(1012, lang)}
            </span>
          </h1>

          <p className={HERO_SECTION_STYLES.description}>
            {getToken(1013, lang)}
          </p>

          <div className={HERO_SECTION_STYLES.actionsWrapper}>
            <Button href="#projects" variant="primary" size="lg" icon={FolderGit2}>
              {getToken(1014, lang)}
            </Button>
            <Button href="#contact" variant="secondary" size="lg" icon={Mail}>
              {getToken(1015, lang)}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center w-full">
          <GlowFrame className="w-full max-w-sm sm:max-w-md">
            <ImageTextView
              imageSrc={dev}
              title={personal.name}
              subtitle={personal.role}
            />
          </GlowFrame>
        </div>
      </div>
    </section>
  );
}