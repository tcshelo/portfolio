import { FOOTER_STYLES } from '@/constants/theme';
import { getToken } from '@/utils/i18n';

export default function Footer({ lang }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={FOOTER_STYLES.container}>
      <div className={FOOTER_STYLES.wrapper}>
        <p>© {currentYear} {getToken(1107, lang)}</p>
        <p className={FOOTER_STYLES.textTech}>
          <span>{getToken(1108, lang)}</span>
          <span className={FOOTER_STYLES.reactSpan}>React</span>
          <span>e</span>
          <span className={FOOTER_STYLES.tailwindSpan}>Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}