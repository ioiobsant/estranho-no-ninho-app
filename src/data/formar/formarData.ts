import { CampusData, PageContent } from '../../types/contentData';

// Matrícula
export const matriculaData: CampusData<PageContent> = {
  sobral: {
    titulo: 'Matrícula',
    subtitulo: 'Informações sobre matrícula e renovação',
    secoes: [
      {
        titulo: 'Visão geral',
        conteudo: 'A matrícula ocorre pelo SIGAA na aba Ensino → Matrícula Online.'
      },
      {
        titulo: 'Quando acontece',
        conteudo: 'A solicitação de matrícula ocorre duas vezes por ano, conforme o calendário acadêmico. A matrícula é o momento que o estudante solicita quais disciplinas irá cursar durante o semestre e, com excessão do primeiro semestre, o estudante deverá cursar no mínimo 13 créditos.'
      }
    ]
  },
  russas: {
    titulo: 'Matrícula',
    subtitulo: 'Informações sobre matrícula e renovação',
    secoes: [
      {
        titulo: 'Visão geral',
        conteudo: 'Matrícula via SIGAA, duas vezes por ano.'
      },
      {
        titulo: 'Quando acontece',
        conteudo: 'Conforme calendário acadêmico. Mínimo de 13 créditos por semestre.'
      }
    ]
  }
};

// Notas
export const notasData: CampusData<PageContent> = {
  sobral: {
    titulo: 'Notas',
    subtitulo: 'Informações sobre o cálculo de notas',
    secoes: [
      {
        titulo: 'Notas',
        conteudo: 'O formato das aulas é totalmente presencial, existe diferença entre a duração, modo avaliativo, frequência e notas, pois estas são de acordo com o seu curso, e a forma como o professor decide estruturar as disciplinas que ele leciona.'
      },
      {
        titulo: 'Sistema de Avaliação',
        conteudo: 'Mas a regra geral da UFC é que cada disciplina tenha 1ª avaliação parcial e 2ª avaliação parcial, a soma delas é dividida por 2 e se a média for 7,0 ou maior o aluno passa direto. Se for entre 6,9 e 4,0 vai para a final. Se for inferior a 4,0 reprova direto.'
      },
      {
        titulo: 'Prova Final',
        conteudo: 'Na final o aluno tem que obter 10 na soma da média das avaliações passadas mais a final. Por exemplo, se você ficou com 4,0 na média das duas primeiras avaliações, tem que tirar 6,0 na final.'
      }
    ]
  },
  russas: {
    titulo: 'Notas',
    subtitulo: 'Informações sobre o cálculo de notas',
    secoes: [
      {
        titulo: 'Sistema de Avaliação',
        conteudo: 'Média 7,0 passa direto. Entre 6,9 e 4,0 vai para final. Abaixo de 4,0 reprova.'
      },
      {
        titulo: 'Prova Final',
        conteudo: 'Soma da média + final deve ser 10.'
      }
    ]
  }
};

// Faltas
export const faltasData: CampusData<PageContent> = {
  sobral: {
    titulo: 'Faltas',
    subtitulo: 'Informações sobre faltas e presença',
    secoes: [
      {
        titulo: 'Regra de Faltas',
        conteudo: 'É importante esclarecer que o estudante tem direito de usufruir de até 25% de faltas sem incorrer em reprovação (75% de presença). As faltas não podem ser abonadas ("tiradas") com atestados, ou seja, justificar a falta não a retira. Para alunos que adoeçam e não possam ir para as aulas existe o Regime Especial.'
      },
      {
        titulo: 'Como Calcular as Faltas Permitidas',
        conteudo: 'Para saber quantas faltas você pode ter em uma disciplina é só pegar a carga horária dela e dividir por 4, o resultado é o número máximo de faltas que você pode ter (1/4 de faltas). Por exemplo, em uma disciplina de 1 crédito (16 horas no semestre, ou seja, 1 hora aula por semana), você pode faltar quatro aulas (cada hora de aula conta como uma aula).'
      }
    ]
  },
  russas: {
    titulo: 'Faltas',
    subtitulo: 'Informações sobre faltas e presença',
    secoes: [
      {
        titulo: 'Regra de Faltas',
        conteudo: 'Até 25% de faltas permitido (75% de presença obrigatória).'
      },
      {
        titulo: 'Cálculo',
        conteudo: 'Carga horária ÷ 4 = número máximo de faltas.'
      }
    ]
  }
};

// Trancamento
export const trancamentoData: CampusData<PageContent> = {
  sobral: {
    titulo: 'Trancamentos e Regime Especial',
    subtitulo: 'Informações sobre trancamento ou regime especial',
    secoes: [
      {
        titulo: 'Trancamentos',
        conteudo: 'A solicitação de trancamento total ou parcial deverá ser encaminhada à coordenação de curso nos períodos de matrícula regular ou de ajuste de matrícula definidos no Calendário Universitário. Após o início do semestre letivo, a solicitação de trancamento total deverá ser encaminhada no prazo de até 15 dias úteis da ocorrência de algum dos fatos geradores (Doença atestada pelo Serviço Médico da UFC, mudança de domicílio para outra cidade, exercício de emprego, obrigação de ordem militar) limitando-se ao último dia letivo do semestre.'
      },
      {
        titulo: 'Regime Especial',
        conteudo: 'Nesta modalidade, o semestre não é interrompido e cabe ao professor designar exercícios domiciliares, durante o período em Regime Especial, em compensação das ausências às aulas. Conforme Art. 113 do Regimento Geral da UFC é vedado o abono de faltas.'
      }
    ]
  },
  russas: {
    titulo: 'Trancamentos e Regime Especial',
    subtitulo: 'Informações sobre trancamento ou regime especial',
    secoes: [
      {
        titulo: 'Trancamentos',
        conteudo: 'Solicitar à coordenação durante períodos de matrícula.'
      },
      {
        titulo: 'Regime Especial',
        conteudo: 'Professor designa exercícios domiciliares.'
      }
    ]
  }
};

// Atividades Complementares
export const atividadesComplementaresData: CampusData<PageContent> = {
  sobral: {
    titulo: 'Atividades Complementares',
    subtitulo: '',
    secoes: [
      {
        titulo: '',
        conteudo: 'Têm como objetivo enriquecer o processo de ensino-aprendizagem, incentivando a participação em experiências diversificadas que contribuam para a sua formação humana e profissional, a regulamentação pode variar de um curso para outro, como exemplos de modalidades das atividades complementares temos:'
      },
      {
        titulo: 'Atividade complementar em Iniciação à Docência, Pesquisa e/ou Extensão',
        conteudo: [
          'Programa de Monitoria Remunerada e Voluntária da Pró-Reitoria de Graduação e/ou Escola Integrada de Desenvolvimento e Inovação Acadêmica (EIDEIA)',
          'Programa de Iniciação Científica, com bolsa ou como voluntário, vinculado à Pró-Reitoria de Pesquisa e Pós-Graduação e/ou, pesquisa de um professor cadastrada em um dos departamentos acadêmicos da UFC',
          'Laboratório de Pesquisa cadastrado na Pró-Reitoria de Pesquisa e Pós-Graduação',
          'PET (Programa de Educação Tutorial)',
          'PBIA (Programa de Bolsa de Iniciação Acadêmica)'
        ]
      },
      {
        titulo: 'Atividade complementar em Participação e/ou Organização de Eventos',
        conteudo: [
          'Participação em eventos científicos e culturais',
          'Organização de eventos científicos e culturais'
        ]
      },
      {
        titulo: 'Atividade complementar em Atividades Artístico-Culturais e Esportivas',
        conteudo: [
          'Participação em Projetos Culturais cadastrados no Instituto de Cultura e Arte da UFC e/ou conveniados com o curso',
          'Participação em atividades esportivas cadastradas no Pólo Esportivo da UFC e/ou em Associações e Federações Desportivas reconhecidas'
        ]
      },
      {
        titulo: 'Atividade complementar em Experiências Ligadas à Formação Profissional',
        conteudo: [
          'Cursos relacionados à formação profissional',
          'Estágios na área devidamente cadastrados no setor de estágios da UFC'
        ]
      },
      {
        titulo: 'Atividade complementar em Produção Técnica e/ou Científica',
        conteudo: [
          'Publicação de artigo científico em periódico indexado, livro e/ou anais de congresso ou encontro',
          'Apresentação de trabalho em congresso ou encontro'
        ]
      },
      {
        titulo: 'Atividade complementar em Vivências de Gestão',
        conteudo: [
          'Participação como conselheiro nas instâncias da UFC: Colegiado de Curso, Colegiado do Campus de Sobral, Conselho Universitário ou Conselho de Ensino, Pesquisa e Extensão',
          'Participação na gestão do Centro Acadêmico e/ou Diretório Central dos Estudantes',
          'Participação na gestão de entidades vinculadas ao curso',
          'Participação em comissões regulamentadas pela Coordenação do Curso e/ou outras Unidades da UFC'
        ]
      },
      {
        titulo: 'Atividade complementar em outras atividades estratégicas para o curso',
        conteudo: [
          'Participação em curso de línguas vinculados às Instituições de Ensino Superior e/ou órgãos da Administração Pública',
          'Participação em grupo de estudo vinculado a um dos cursos e/ou departamentos acadêmicos da UFC'
        ]
      }
    ]
  },
  russas: {
    titulo: 'Atividades Complementares',
    subtitulo: '',
    secoes: [
      {
        titulo: '',
        conteudo: 'Atividades complementares enriquecem o processo de ensino-aprendizagem. Consulte a coordenação do seu curso para mais informações.'
      }
    ]
  }
};
