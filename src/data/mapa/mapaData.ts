import { CampusDataPartial } from '../../types/contentData';

/**
 * Interface para dados do mapa de cada campus
 */
export interface MapaData {
  titulo: string;
  subtitulo?: string;
  iframeUrl: string;
  descricao?: string;
}

/**
 * Dados do Mapa Acessível por campus
 * 
 * Para adicionar um novo campus:
 * 1. Adicione uma entrada com o ID do campus
 * 2. Forneça a URL do iframe do mapa daquele campus
 * 
 * @example
 * export const mapaData: CampusDataPartial<MapaData> = {
 *   sobral: {
 *     titulo: "Mapa Acessível da UFC",
 *     iframeUrl: "https://lincolngondin.github.io/mapaUFC/"
 *   },
 *   fortaleza: {
 *     titulo: "Mapa Acessível - Campus Fortaleza",
 *     iframeUrl: "https://seu-link-aqui.com"
 *   }
 * };
 */
export const mapaData: CampusDataPartial<MapaData> = {
  sobral: {
    titulo: "Mapa Acessível da UFC",
    subtitulo: "Campus Sobral",
    iframeUrl: "https://lincolngondin.github.io/mapaUFC/",
    descricao: "Visualize pontos de acessibilidade e navegue pelo campus"
  }
  // Adicione outros campi aqui quando os mapas estiverem disponíveis
  // russas: {
  //   titulo: "Mapa Acessível - Campus Russas",
  //   iframeUrl: "https://seu-link-do-mapa-russas.com"
  // }
};

