import { CampusData } from '../../types/contentData';

// Interface para dados de coordenação de cursos
export interface CoordenacaoCurso {
  titulo: string;
  subtitulo: string;
  coordenador: string;
  viceCoordenador?: string;
  email: string;
  pagina?: string;
  telefone?: string;
}

// Coordenação de Ciências Econômicas
export const coordenacaoCienciasEconomicasData: CampusData<CoordenacaoCurso> = {
  sobral: {
    titulo: 'Coordenação - Ciências Econômicas',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'Professora Thaísa França Badagnan',
    viceCoordenador: 'Professora Antônia Márcia Rodrigues Sousa',
    email: 'economia@sobral.ufc.br',
    pagina: 'http://www.economia.sobral.ufc.br/'
  },
  russas: {
    titulo: 'Coordenação - Ciências Econômicas',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'A definir',
    email: 'economia@russas.ufc.br'
  }
};

// Coordenação de Engenharia de Computação
export const coordenacaoEngenhariaComputacaoData: CampusData<CoordenacaoCurso> = {
  sobral: {
    titulo: 'Coordenação - Engenharia de Computação',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'Professor Vandilberto Pereira Pinto',
    viceCoordenador: 'Professor Henrique Cunha Pinto',
    email: 'ccomp.sobral@ufc.br',
    pagina: 'http://www.computacao.sobral.ufc.br'
  },
  russas: {
    titulo: 'Coordenação - Engenharia de Computação',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'A definir',
    email: 'computacao@russas.ufc.br'
  }
};

// Coordenação de Engenharia Elétrica
export const coordenacaoEngenhariaEletricaData: CampusData<CoordenacaoCurso> = {
  sobral: {
    titulo: 'Coordenação - Engenharia Elétrica',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'Professor Jéssica Castro Bubach',
    viceCoordenador: 'Professor José Augusto Costa Dantas Filho',
    email: 'coordelétrica.sobral@ufc.br',
    pagina: 'http://www.engenharia.sobral.ufc.br/'
  },
  russas: {
    titulo: 'Coordenação - Engenharia Elétrica',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'A definir',
    email: 'eletrica@russas.ufc.br'
  }
};

// Coordenação de Finanças
export const coordenacaoFinancasData: CampusData<CoordenacaoCurso> = {
  sobral: {
    titulo: 'Coordenação - Finanças',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'Professor Luís Carlos Pinheiro de Castro',
    viceCoordenador: 'Professor Marcos José Cavalcanti Castro',
    email: 'financas@sobral.ufc.br',
    pagina: 'http://www.financas.sobral.ufc.br/'
  },
  russas: {
    titulo: 'Coordenação - Finanças',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'A definir',
    email: 'financas@russas.ufc.br'
  }
};

// Coordenação de Medicina
export const coordenacaoMedicinaData: CampusData<CoordenacaoCurso> = {
  sobral: {
    titulo: 'Coordenação - Medicina',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'Professor Paulo Roberto Lacerda Leal',
    viceCoordenador: 'Professora Carla Roberta Macêdo de Sousa',
    email: 'secretaria.medicina@sobral.ufc.br',
    pagina: 'http://www.medsobral.ufc.br'
  },
  russas: {
    titulo: 'Coordenação - Medicina',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'A definir',
    email: 'medicina@russas.ufc.br'
  }
};

// Coordenação de Música
export const coordenacaoMusicaData: CampusData<CoordenacaoCurso> = {
  sobral: {
    titulo: 'Coordenação - Música',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'Professora Simone Santos Sousa',
    viceCoordenador: 'Professor João Emanoel Ancelmo Benvenuto',
    email: 'musicasobral@gmail.com',
    pagina: 'http://www.musicasobral.ufc.br'
  },
  russas: {
    titulo: 'Coordenação - Música',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'A definir',
    email: 'musica@russas.ufc.br'
  }
};

// Coordenação de Odontologia
export const coordenacaoOdontologiaData: CampusData<CoordenacaoCurso> = {
  sobral: {
    titulo: 'Coordenação - Odontologia',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'Professora Letícia Ladeira Bonato',
    viceCoordenador: 'Professor Sandro Benigno Gomes',
    email: 'odontologia@sobral.ufc.br',
    pagina: 'http://www.odontologiasobral.ufc.br/'
  },
  russas: {
    titulo: 'Coordenação - Odontologia',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'A definir',
    email: 'odontologia@russas.ufc.br'
  }
};

// Coordenação de Psicologia
export const coordenacaoPsicologiaData: CampusData<CoordenacaoCurso> = {
  sobral: {
    titulo: 'Coordenação - Psicologia',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'Professora Izabel do Nascimento',
    viceCoordenador: 'Professor Kalef Martins Pinheiro',
    email: 'cpsicol@sobral.ufc.br',
    pagina: 'http://www.psicologia.sobral.ufc.br/'
  },
  russas: {
    titulo: 'Coordenação - Psicologia',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'A definir',
    email: 'psicologia@russas.ufc.br'
  }
};

