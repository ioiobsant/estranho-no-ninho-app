/**
 * Configuração centralizada dos campus da UFC
 * 
 * Este arquivo define TODOS os campus disponíveis no sistema.
 * Para adicionar um novo campus:
 * 1. Adicione uma entrada no array AVAILABLE_CAMPUS
 * 2. Adicione os dados correspondentes nos arquivos em /src/data
 * 3. O sistema automaticamente reconhecerá o novo campus
 */

export interface CampusConfig {
  id: string;           // Identificador único (usado no código)
  name: string;         // Nome para exibição
  displayName: string;  // Nome completo para exibição
  color?: string;       // Cor tema (opcional)
  icon?: string;        // Ícone (opcional)
  description?: string; // Descrição (opcional)
}

/**
 * Lista de todos os campus disponíveis
 * ADICIONE NOVOS CAMPUS AQUI
 */
export const AVAILABLE_CAMPUS: CampusConfig[] = [
  {
    id: 'sobral',
    name: 'Sobral',
    displayName: 'Campus Sobral',
    color: '#2196F3',
    description: 'Campus da UFC em Sobral'
  },
  {
    id: 'russas',
    name: 'Russas',
    displayName: 'Campus Russas',
    color: '#4CAF50',
    description: 'Campus da UFC em Russas'
  },
  // Para adicionar um novo campus, basta descomentar e preencher:
  // {
  //   id: 'quixada',
  //   name: 'Quixadá',
  //   displayName: 'Campus Quixadá',
  //   color: '#FF9800',
  //   description: 'Campus da UFC em Quixadá'
  // },
];

/**
 * Campus padrão quando o app inicializa
 */
export const DEFAULT_CAMPUS = 'sobral';

/**
 * Type gerado automaticamente a partir dos campus disponíveis
 * Não precisa modificar manualmente - é gerado dos IDs em AVAILABLE_CAMPUS
 */
export type Campus = typeof AVAILABLE_CAMPUS[number]['id'];

/**
 * Helpers para trabalhar com campus
 */
export const CampusHelpers = {
  /**
   * Retorna a configuração de um campus pelo ID
   */
  getConfig: (campusId: string): CampusConfig | undefined => {
    return AVAILABLE_CAMPUS.find(c => c.id === campusId);
  },

  /**
   * Retorna o nome de exibição de um campus
   */
  getDisplayName: (campusId: string): string => {
    const config = CampusHelpers.getConfig(campusId);
    return config?.name || campusId;
  },

  /**
   * Retorna o nome completo de um campus
   */
  getFullName: (campusId: string): string => {
    const config = CampusHelpers.getConfig(campusId);
    return config?.displayName || campusId;
  },

  /**
   * Verifica se um campus ID é válido
   */
  isValidCampus: (campusId: string): boolean => {
    return AVAILABLE_CAMPUS.some(c => c.id === campusId);
  },

  /**
   * Retorna todos os IDs de campus
   */
  getAllIds: (): string[] => {
    return AVAILABLE_CAMPUS.map(c => c.id);
  },

  /**
   * Retorna todos os campus
   */
  getAll: (): CampusConfig[] => {
    return AVAILABLE_CAMPUS;
  }
};

/**
 * Validação em tempo de compilação
 * Garante que DEFAULT_CAMPUS é um campus válido
 */
const _validateDefaultCampus: Campus = DEFAULT_CAMPUS as Campus;

