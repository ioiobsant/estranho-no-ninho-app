import { CampusData } from '../../types/contentData';

// Para adicionar um novo campus, basta adicionar um novo objeto no objeto AVAILABLE_CAMPUS,
//  com o nome do campus e os dados.


//O AVAILABLE_CAMPUS fica no arquivo:
//src/config/campusConfig.ts
//É o arquivo de configuração centralizada dos campus. 
// Lá na linha 24 está o array AVAILABLE_CAMPUS 
// onde você adiciona novos campus para que apareçam no seletor do header.

// Interface para representar um curso na lista
export interface Curso {
  title: string;
  path: string;
}

// Lista de cursos disponíveis por campus
export const cursosData: CampusData<Curso[]> = {
  sobral: [
    { title: 'Ciências Econômicas', path: '/cursos/ciencias-economicas' },
    { title: 'Engenharia da Computação', path: '/cursos/engenharia-computacao' },
    { title: 'Engenharia Elétrica', path: '/cursos/engenharia-eletrica' },
    { title: 'Finanças', path: '/cursos/financas' },
    { title: 'Medicina', path: '/cursos/medicina' },
    { title: 'Música', path: '/cursos/musica' },
    { title: 'Odontologia', path: '/cursos/odontologia' },
    { title: 'Psicologia', path: '/cursos/psicologia' },
  ],
  russas: [] // Sem cursos no momento
};

/**
 * Verifica se um curso está disponível em um campus específico
 * @param coursePath - Caminho do curso (ex: '/cursos/ciencias-economicas')
 * @param campus - ID do campus
 * @returns true se o curso está disponível no campus
 */
export const isCourseAvailableInCampus = (coursePath: string, campus: string): boolean => {
  const cursos = cursosData[campus as keyof typeof cursosData];
  if (!cursos) return false;
  return cursos.some(curso => curso.path === coursePath);
};

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
  } , 
  campus_exemplo: {
    titulo: 'Coordenação - Exemplo',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'A definir',
    email: 'emaildocurso',
    pagina: 'paginadocurso',
  }
};

// Coordenação de Engenharia de Computação
export const coordenacaoEngenhariaComputacaoData: CampusData<CoordenacaoCurso> = {
  sobral: {
    titulo: 'Coordenação - Engenharia de Computação',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'Professor Carlos Elmano de Alencar e Silva',
    viceCoordenador: 'Professora Jermana Lopes de Moraes',
    email: 'ec@sobral.ufc.br',
    pagina: 'http://www.ec.ufc.br'
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
    coordenador: 'Professora Rosana Maria Alves Saboya',
    viceCoordenador: 'Professora Vanessa Siqueira de Castro Teixeira',
    email: 'coord.engeletrica@sobral.ufc.br',
    pagina: 'http://www.engeletrica.sobral.ufc.br'
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
    coordenador: 'Professora Cleycianne de Souza Almeida',
    viceCoordenador: 'Professora Débora Gaspar Feitos',
    email: 'financas@sobral.ufc.br',
    pagina: 'http://www.financassobral.ufc.br'
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
    coordenador: 'Professora Adriana Kelly de Sousa Santiago Barbosa',
    viceCoordenador: 'Filipe Nobre Chaves',
    email: 'odontologia@sobral.ufc.br',
    pagina: 'http://www.odontologiasobral.ufc.br'
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
    coordenador: 'Professor Iratan Bezerra Saboia',
    viceCoordenador: 'Rodrigo da Silva Maia',
    email: 'coordpsicologia@sobral.ufc.br',
    pagina: 'http://www.psicologiasobral.ufc.br'
  },
  russas: {
    titulo: 'Coordenação - Psicologia',
    subtitulo: 'Informações sobre a coordenação do curso',
    coordenador: 'A definir',
    email: 'psicologia@russas.ufc.br'
  }
};

