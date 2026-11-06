import React from 'react';
import { SECTION_HEADING_STYLES } from '@/constants/theme';

/**
 * Componente SectionHeading para cabeçalhos padronizados de seções (subtítulo, título e descrição).
 * 
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {string} [props.subtitle] - Subtítulo superior em destaque maiúsculo (ex: "Sobre Mim").
 * @param {string} props.title - Título principal da seção.
 * @param {string} [props.description] - Descrição opcional explicativa da seção.
 * @param {'left'|'center'} [props.align='center'] - Alinhamento do texto ("left" ou "center").
 * @returns {JSX.Element} Cabeçalho renderizado.
 */
export default function SectionHeading({ subtitle, title, description, align = 'center' }) {
  const containerClass = align === 'left' 
    ? SECTION_HEADING_STYLES.alignLeft 
    : SECTION_HEADING_STYLES.alignCenter;

  return (
    <div className={containerClass}>
      {subtitle && <h2 className={SECTION_HEADING_STYLES.subtitle}>{subtitle}</h2>}
      <h3 className={SECTION_HEADING_STYLES.title}>{title}</h3>
      {description && <p className={SECTION_HEADING_STYLES.description}>{description}</p>}
    </div>
  );
}