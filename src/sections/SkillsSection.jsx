import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { SKILLS_SECTION_STYLES } from '@/constants/theme';
import { PORTFOLIO_STRUCTURE } from '@/data/portfolioData';
import { getToken } from '@/utils/i18n';

export default function SkillsSection({ lang }) {
  return (
    <section id="skills" className={SKILLS_SECTION_STYLES.section}>
      <div className={SKILLS_SECTION_STYLES.container}>
        <SectionHeading
          subtitle={getToken(1030, lang)}
          title={getToken(1031, lang)}
          description={getToken(1032, lang)}
        />

        <div className={SKILLS_SECTION_STYLES.grid}>
          {PORTFOLIO_STRUCTURE.skillsList.map((skill, index) => (
            <Card key={index} className="space-y-3">
              <div className={SKILLS_SECTION_STYLES.cardHeader}>
                <span className={SKILLS_SECTION_STYLES.iconSpan}>{skill.icon}</span>
                <span className={SKILLS_SECTION_STYLES.levelBadge}>
                  {getToken(skill.levelToken, lang)}
                </span>
              </div>
              <h4 className={SKILLS_SECTION_STYLES.skillTitle}>{skill.name}</h4>
              <p className={SKILLS_SECTION_STYLES.skillDesc}>
                {getToken(skill.descToken, lang)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}