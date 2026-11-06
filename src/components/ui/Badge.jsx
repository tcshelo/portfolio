import { BADGE_STYLES } from '@/constants/theme';

/**
 * Componente de Badge para destacar tags ou estados.
 * 
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Conteudo textual exibido no badge.
 * @param {React.ElementType} [props.icon] - Icone opcional exibido à esquerda.
 * @param {string} [props.className] - Classes CSS adicionais para customizacao pontual.
 * @returns {JSX.Element} Elemento renderizado do badge.
 */
export default function Badge({ children, icon: Icon, className = '' }) {
  return (
    <div className={`${BADGE_STYLES.container} ${className}`}>
      {Icon && <Icon className={BADGE_STYLES.icon} />}
      <span>{children}</span>
    </div>
  );
}