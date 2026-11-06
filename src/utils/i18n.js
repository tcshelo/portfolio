import { DICTIONARY } from './dictionary';

/**
 * Obtém a linguagem ativa salva no cache do navegador (localStorage).
 * Caso não haja nenhum valor armazenado ou o ambiente não suporte, retorna 'PT' por padrão.
 * 
 * @function getStoredLang
 * @returns {'PT'|'EN'} O código do idioma ativo ('PT' ou 'EN').
 */
export const getStoredLang = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const cached = localStorage.getItem('portfolio_lang');
    if (cached === 'PT' || cached === 'EN') return cached;
  }
  return 'PT';
};

/**
 * Salva a preferência de idioma selecionada pelo usuário no cache do navegador (localStorage).
 * 
 * @function setStoredLang
 * @param {'PT'|'EN'} lang - O código do idioma a ser persistido ('PT' ou 'EN').
 * @returns {void}
 */
export const setStoredLang = (lang) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('portfolio_lang', lang);
  }
};

/**
 * Retorna o texto traduzido correspondente a um token numérico com base no dicionário ativo.
 * Se o parâmetro de idioma não for informado, a função busca automaticamente o idioma em cache.
 * 
 * @function getToken
 * @param {number} key - O token numérico de tradução (ex: 1000).
 * @param {'PT'|'EN'} [lang] - Opcional. O idioma específico para a tradução.
 * @returns {string} O texto correspondente ou uma string indicando a ausência do token (ex: "[Token 1000]").
 */
export const getToken = (key, lang) => {
  const currentLang = lang || getStoredLang();
  return DICTIONARY[currentLang]?.[key] || `[Token ${key}]`;
};