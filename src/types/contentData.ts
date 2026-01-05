// Tipos base para o sistema de conteúdo
import { Campus } from '../config/campusConfig';


// Interface base para conteúdo de página
export interface PageContent {
  titulo: string;
  subtitulo?: string;
  secoes: Secao[];
}

// Seção genérica de conteúdo
export interface Secao {
  titulo: string;
  conteudo: string | string[];
}

// Contato com estrutura padronizada
export interface Contato {
  endereco?: string;
  fone?: string | string[];
  email?: string | string[];
  horario?: string | string[];
  site?: string;
}

// Para conteúdos com contato
export interface ConteudoComContato extends PageContent {
  contato: Contato;
}

// Para conteúdos de serviços (bibliotecas, restaurantes, etc)
export interface ServicoContent extends ConteudoComContato {
  descricao: string;
  requisitos?: string[];
  horarioFuncionamento?: string[];
}

// Wrapper para dados por campus
export type CampusData<T> = Record<Campus, T>;

// Helper type para conteúdo que pode não existir em todos os campus
export type CampusDataPartial<T> = Partial<Record<Campus, T>>;

// Re-export Campus type for convenience
export type { Campus };
