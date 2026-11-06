import React from 'react';
import { GLOW_FRAME_STYLES } from '@/constants/theme';

/**
 * Componente GlowFrame para molduras com efeitos de brilho neon e gradiente envolvente.
 * 
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Conteudo interno renderizado na moldura.
 * @param {string} [props.className] - Classes CSS utilitarias adicionais para personalizacao externa.
 * @returns {JSX.Element} Moldura estilizada renderizada.
 */
export default function GlowFrame({ children, className = '' }) {
  return (
    <div className={`${GLOW_FRAME_STYLES.container} ${className}`}>
      {/* Efeito Neon de fundo */}
      <div className={GLOW_FRAME_STYLES.glow} />
      
      {/* Borda com gradiente suave */}
      <div className={GLOW_FRAME_STYLES.borderWrapper}>
        <div className={GLOW_FRAME_STYLES.innerBox}>
          {children}
        </div>
      </div>
    </div>
  );
}