import React from 'react';
import { CARD_STYLES } from '@/constants/theme';

/**
 * Componente de Cartão (Card) estrutural para conteúdos e secções.
 * 
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Conteúdo interno renderizado no cartão.
 * @param {string} [props.className] - Classes CSS utilitárias adicionais para flexibilidade de layout.
 * @param {boolean} [props.hover=true] - Define se o cartão aplica transição de destaque ao passar o rato.
 * @returns {JSX.Element} Elemento container renderizado.
 */
export default function Card({ children, className = '', hover = true }) {
  const hoverStyles = hover ? CARD_STYLES.hoverEffect : '';

  return (
    <div className={`${CARD_STYLES.base} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}