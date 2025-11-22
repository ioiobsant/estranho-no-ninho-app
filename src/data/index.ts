// Índice centralizado para todos os dados da aplicação
// Organizado por categorias em subpastas

// === ASSISTÊNCIA ===
export {
  assistenciaEstudantilData,
  assistenciaPsicologicaData,
  acessibilidadeData
} from './assistencia/assistenciaData';

// === BIBLIOTECAS ===
export {
  bibliotecaUfcData,
  bibliotecaMedicinaData
} from './bibliotecas/bibliotecasData';

// === BOLSAS ===
export {
  bolsasIniciacaoCientificaData,
  pibicData,
  paipData,
  pidData,
  bolsasExtensaoData,
  auxiliosData,
  auxilioMoradiaData,
  auxilioEmergencialData,
  auxilioCustosData,
  auxilioCrecheData,
  auxilioIngressanteData,
  auxilioConcluenteData,
  editaisBolsasData,
  internacionalizacaoData
} from './bolsas/bolsasData';

// === CARTEIRINHAS ===
export {
  carteiraEstudantilData,
  carteiraRuData,
  idJovemData
} from './carteirinhas/carteirinhasData';

// === FORMAR ===
export {
  matriculaData,
  notasData,
  faltasData,
  trancamentoData,
  atividadesComplementaresData,
  iraData
} from './formar/formarData';

// === TRANSPORTES ===
export {
  vltData,
  passeLivreData,
  passeLivreSobralData,
  onibusIntracampusData,
  taxiData
} from './transportes/transportesData';

// === LINKS ÚTEIS ===
export {
  regimentosData,
  linksUteisData,
  type LinkUtil,
  type LinksUteisContent
} from './links-uteis/linksUteisData';

// === COMPARTILHAR ===
export {
  compartilharData,
  type CompartilharContent,
  type InstallSection
} from './compartilhar/compartilharData';

// === CURSOS ===
export {
  coordenacaoCienciasEconomicasData,
  coordenacaoEngenhariaComputacaoData,
  coordenacaoEngenhariaEletricaData,
  coordenacaoFinancasData,
  coordenacaoMedicinaData,
  coordenacaoMusicaData,
  coordenacaoOdontologiaData,
  coordenacaoPsicologiaData,
  type CoordenacaoCurso
} from './cursos/cursosData';

// === GRADES CURRICULARES ===
export * from './cursos/grades';

// === UFC ===
export {
  direcaoData,
  ensinoData,
  pesquisaData,
  extensaoData
} from './ufc/ufcData';
