import React from 'react';
import { BUTTON_STYLES } from '@/constants/theme';

/**
 * Componente de Botão Universal reutilizável.
 * Suporta múltiplas variantes visuais, tamanhos, renderização condicional como link (âncora) ou botão nativo.
 * 
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Conteúdo interno do botão (texto ou elementos).
 * @param {'primary'|'secondary'|'outline'|'ghost'} [props.variant='primary'] - Variante visual de estilo.
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Tamanho do espaçamento e texto.
 * @param {React.ElementType} [props.icon] - Ícone opcional exibido antes do texto.
 * @param {string} [props.href] - URL de destino caso o botão deva comportar-se como link (tag <a>).
 * @param {function} [props.onClick] - Função executada no evento de clique (para botões nativos).
 * @param {string} [props.className] - Classes CSS utilitárias adicionais.
 * @returns {JSX.Element} Elemento de link ou botão renderizado.
 */
export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon, 
  href, 
  onClick, 
  className = '',
  ...props 
}) {
  const combinedClasses = `${BUTTON_STYLES.base} ${BUTTON_STYLES.variants[variant]} ${BUTTON_STYLES.sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {Icon && <Icon className={BUTTON_STYLES.icon} />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {Icon && <Icon className={BUTTON_STYLES.icon} />}
      <span>{children}</span>
    </button>
  );
}