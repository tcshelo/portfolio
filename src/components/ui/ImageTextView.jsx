import React from 'react';
import { IMAGE_TEXT_VIEW_STYLES } from '@/constants/theme';

/**
 * Componente ImageTextView para exibição de perfil, avatar ou imagem destacada com título, subtítulo e badge de status.
 * 
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {string} [props.imageSrc] - URL da imagem de perfil (opcional). Caso ausente, exibe iniciais geradas por fallback.
 * @param {string} [props.title] - Título principal ou nome exibido.
 * @param {string} [props.subtitle] - Subtítulo descritivo ou cargo.
 * @param {string} [props.badgeText] - Texto do indicador de status/badge inferior (ex: "Disponível para projetos").
 * @param {React.ReactNode} [props.children] - Elementos adicionais opcionais renderizados no corpo do container.
 * @returns {JSX.Element} Estrutura renderizada do cartão com moldura neon.
 */
export default function ImageTextView({ 
  imageSrc, 
  title, 
  subtitle, 
  badgeText, 
  children 
}) {
  const fallbackInitials = title ? title.substring(0, 2).toUpperCase() : 'DS';

  return (
    <div className={IMAGE_TEXT_VIEW_STYLES.container}>
      {/* Efeito Neon de fundo */}
      <div className={IMAGE_TEXT_VIEW_STYLES.glow} />
      
      {/* Moldura com gradiente */}
      <div className={IMAGE_TEXT_VIEW_STYLES.borderWrapper}>
        <div className={IMAGE_TEXT_VIEW_STYLES.innerBox}>
          <div className={IMAGE_TEXT_VIEW_STYLES.bgGradient} />
          
          <div className={IMAGE_TEXT_VIEW_STYLES.contentWrapper}>
            {imageSrc ? (
              <img src={imageSrc} alt={title} className={IMAGE_TEXT_VIEW_STYLES.image} />
            ) : (
              <div className={IMAGE_TEXT_VIEW_STYLES.fallbackAvatar}>
                {fallbackInitials}
              </div>
            )}
            
            <div>
              <h3 className={IMAGE_TEXT_VIEW_STYLES.title}>{title}</h3>
              <p className={IMAGE_TEXT_VIEW_STYLES.subtitle}>{subtitle}</p>
            </div>
            
            {children}
          </div>

          {badgeText && (
            <div className={IMAGE_TEXT_VIEW_STYLES.badge}>
              <span className={IMAGE_TEXT_VIEW_STYLES.badgeDot} />
              {badgeText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}