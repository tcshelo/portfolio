import React from 'react';
import { Mail } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { CONTACT_SECTION_STYLES } from '@/constants/theme';
import { PORTFOLIO_STRUCTURE } from '@/data/portfolioData';
import { getToken } from '@/utils/i18n';

const ICON_MAP = {
  email: Mail,
  linkedin: LinkedinIcon,
  github: GithubIcon
};

export default function ContactSection({ lang }) {
  return (
    <section id="contact" className={CONTACT_SECTION_STYLES.section}>
      <div className={CONTACT_SECTION_STYLES.cardContainer}>
        <div className={CONTACT_SECTION_STYLES.wrapper}>
          <SectionHeading
            subtitle={getToken(1090, lang)}
            title={getToken(1091, lang)}
            description={getToken(1092, lang)}
          />

          <div className={CONTACT_SECTION_STYLES.grid}>
            {PORTFOLIO_STRUCTURE.contactChannels.map((channel) => {
              const IconComponent = ICON_MAP[channel.id];

              return (
                <a
                  key={channel.id}
                  href={channel.href}
                  target={channel.isExternal ? "_blank" : undefined}
                  rel={channel.isExternal ? "noopener noreferrer" : undefined}
                  className={CONTACT_SECTION_STYLES.channelCard}
                >
                  {IconComponent && <IconComponent className={CONTACT_SECTION_STYLES.icon} />}
                  <span className={CONTACT_SECTION_STYLES.title}>{channel.label}</span>
                  <span className={CONTACT_SECTION_STYLES.subtitle}>
                    {getToken(channel.subtitleToken, lang)}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}