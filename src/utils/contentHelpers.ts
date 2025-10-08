import { Campus } from '../types/contentData';

/**
 * Busca conteúdo para um campus específico
 * @param data - Dados por campus
 * @param campus - Campus atual
 * @returns Conteúdo do campus ou null se não existir
 */
export function getContentForCampus<T>(
  data: Partial<Record<Campus, T>>,
  campus: Campus
): T | null {
  return data[campus] ?? null;
}

/**
 * Verifica se existe conteúdo para um campus
 * @param data - Dados por campus
 * @param campus - Campus atual
 * @returns true se existir conteúdo
 */
export function hasContentForCampus<T>(
  data: Partial<Record<Campus, T>>,
  campus: Campus
): boolean {
  return campus in data;
}

/**
 * Renderiza array de strings ou string única
 * @param content - Conteúdo a ser renderizado
 * @param separator - Separador para arrays (default: <br/>)
 * @returns Conteúdo formatado
 */
export function renderContent(
  content: string | string[],
  separator: string = '<br/>'
): string {
  if (Array.isArray(content)) {
    return content.join(separator);
  }
  return content;
}

/**
 * Formata lista de strings com bullet points
 * @param items - Lista de itens
 * @returns String formatada com bullets e espaçamento
 */
export function formatList(items: string[]): string {
  return items.map(item => `<div style="margin-bottom: 8px;">• ${item}</div>`).join('');
}
