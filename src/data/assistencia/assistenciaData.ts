import { CampusData, ConteudoComContato } from '../../types/contentData';

// Dados de Assistência Estudantil
export const assistenciaEstudantilData: CampusData<ConteudoComContato> = {
  sobral: {
    titulo: 'Assistência Estudantil (PRAE)',
    subtitulo: 'Programa de Assistência Estudantil da UFC',
    secoes: [
      {
        titulo: 'Sobre o PRAE',
        conteudo: 'Ações de assistência estudantil são promovidas pela Pró-Reitoria de Assuntos Estudantis (PRAE) da UFC e buscam possibilitar condições adequadas para a permanência e o desempenho acadêmico dos estudantes em situação de vulnerabilidade socieconômica matriculados em cursos presenciais de graduação. Além disso, também é disponibilizado atendimento médico.'
      }
    ],
    contato: {
      horario: ['Horário de Funcionamento: 9h às 16h'],
      fone: ['(88) 3695-4638', '(88) 3695-4627'],
      email: ['case@sobral.ufc.br']
    }
  },
  russas: {
    titulo: 'Assistência Estudantil (PRAE)',
    subtitulo: 'Programa de Assistência Estudantil da UFC - Campus Russas',
    secoes: [
      {
        titulo: 'Sobre o PRAE',
        conteudo: 'Ações de assistência estudantil são promovidas pela Pró-Reitoria de Assuntos Estudantis (PRAE) da UFC e buscam possibilitar condições adequadas para a permanência e o desempenho acadêmico dos estudantes.'
      }
    ],
    contato: {
      horario: ['Horário de Funcionamento: 8h às 17h'],
      fone: ['(88) 3411-9200'],
      email: ['prae.russas@ufc.br']
    }
  }

};

// Dados de Assistência Psicológica
export const assistenciaPsicologicaData: CampusData<ConteudoComContato> = {
  sobral: {
    titulo: 'Assistência Psicológica',
    subtitulo: 'Suporte psicológico para estudantes da UFC',
    secoes: [
      {
        titulo: 'Serviço de Psicologia',
        conteudo: 'Os atendimentos que são mediados pela PRAE acontecem conforme agendamento realizado através do formulário no site do campus.'
      },
      {
        titulo: 'Como Funciona',
        conteudo: 'Os atendimentos realizados pelo Serviço de Psicologia Aplicada (SPA) acontecem por demanda espontânea, exceto para alunos do curso de Psicologia.'
      }
    ],
    contato: {
      email: ['psicoestudantil@sobral.ufc.br']
    }
  },
  russas: {
    titulo: 'Assistência Psicológica',
    subtitulo: 'Suporte psicológico para estudantes da UFC - Campus Russas',
    secoes: [
      {
        titulo: 'Serviço de Psicologia',
        conteudo: 'Atendimentos psicológicos disponíveis para estudantes mediante agendamento.'
      }
    ],
    contato: {
      email: ['psicologia.russas@ufc.br']
    }
  }
};

// Dados de Acessibilidade
export const acessibilidadeData: CampusData<ConteudoComContato> = {
  sobral: {
    titulo: 'Acessibilidade',
    secoes: [
      {
        titulo: 'Recursos de Acessibilidade',
        conteudo: 'A UFC dispõe de uma secretaria de acessibilidade, que oferece suporte pedagógico, tecnológico, comunicacional e atitudinal.'
      }
    ],
    contato: {
      email: ['ufcinclui@acessibilidade.ufc.br']
    }
  },
  russas: {
    titulo: 'Acessibilidade',
    secoes: [
      {
        titulo: 'Recursos de Acessibilidade',
        conteudo: 'A UFC dispõe de uma secretaria de acessibilidade, que oferece suporte pedagógico, tecnológico, comunicacional e atitudinal.'
      }
    ],
    contato: {
      email: ['ufcinclui@acessibilidade.ufc.br']
    }
  }
};
