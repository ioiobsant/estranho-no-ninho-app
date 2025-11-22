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
        conteudo: 'A solicitação de matrícula ocorre 2 (duas) vezes por ano, segundo o calendário acadêmico. A matrícula é o momento que o estudante solicita quais disciplinas irá cursar durante o semestre e, com excessão do primeiro semestre, o estudante deverá cursar um mínimo de 13 créditos.'
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
        conteudo: 'Têm como objetivo enriquecer o processo de ensino-aprendizagem, incentivando a participação em experiências diversificadas que contribuam para a sua formação humana e profissional, a regulamentação pode variar de um curso para outro, como exemplos de modalidades das atividades complementares temos (confira no fim os links para cada curso):'
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
      },
      {
        titulo: 'Links Úteis',
        conteudo: [
          '<a href="http://www.musicasobral.ufc.br/v2/wp-content/uploads/2016/04/Manual-Atividades-Complementares.pdf" target="_blank" rel="noopener noreferrer">Atividades Complementares do curso de Música</a>',
          '<a href="http://www.odontologiasobral.ufc.br/wp-content/uploads/2012/11/Resolu%C3%A7%C3%A3o-001_2010-ativ-complementares.pdf" target="_blank" rel="noopener noreferrer">Atividades Complementares do curso de Odontologia</a>',
          '<a href="https://psicologiasobral.ufc.br/wp-content/uploads/2023/06/regulamentacao-atividades-complementares.pdf" target="_blank" rel="noopener noreferrer">Atividades Complementares do curso de Psicologia</a>',
          '<a href="https://ec.ufc.br/wp-content/uploads/2025/02/regulamento-ac-2025-curriculo2006-final.pdf" target="_blank" rel="noopener noreferrer">Atividades Complementares do curso de Engenharia da Computação</a>',
          'Atividades Complementares do curso de Medicina',
          'Atividades Complementares do curso de Engenharia Elétrica',
          'Atividades Complementares do curso de Economia',
          'Atividades Complementares do curso de Finanças'
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

export const iraData: CampusData<PageContent> = {
  sobral: {
    titulo: 'Índice de Rendimento Acadêmico (IRA)',
    subtitulo: 'Informações sobre o cálculo do IRA',
    secoes: [
      {
        titulo: '',
        conteudo: 'O ÍNDICE DE RENDIMENTO ACADÊMICO (IRA) é muito importante durante a graduação, principalmente por ser usado como uma ferramenta de desempate em processos seletivos que concorrem a bolsas e vagas em disciplinas optativas, por exemplo.'
      },
      {
        titulo: 'Qual a diferença entre IRA Geral e IRA Individual?',
        conteudo: 'IRA Geral é o IRA calculado dentro do curso, ou seja ele toma por base todos os alunos do próprio curso. IRA Individual é o IRA do aluno calculado de acordo com o desempenho acadêmico dele.'
      },
      {
        titulo: 'Como é calculado o IRA Geral?',
        conteudo: 'A nota média do aluno, quando observada independente do curso, possui uma limitação para a utilização na comparação entre alunos de cursos diferentes. Para tanto, a UFC está utilizando o cálculo do Rendimento Acadêmico com a utilização do IRA Geral, que é o cálculo da nota média do aluno, normalizado por intermédio do seu respectivo curso. Esta normalização utiliza a média dos desempenhos (IRAm) e o desvio-padrão destes rendimentos (IRA) dos alunos ativos, para cada semestre letivo. O IRA Geral será dado pela seguinte fórmula:<br/><br/><div style="text-align: center; font-size: 18px; font-weight: bold; margin: 20px 0;"><i>IRA_Geral</i> = 6 + 2(<i>IRA - IRAm</i> / <i>IRAdp</i>)</div>'
      },
      {
        titulo: '',
        conteudo: 'Para evitarmos valores discrepantes, se o IRA Geral apresentar valor negativo, que corresponde a uma distância de três desvios-padrão, será adotado o valor 0 (zero), e se o IRA Geral apresentar valor acima de 10 (dez), que corresponde a 2 (dois) desvios-padrão, será adotado o valor 10 (dez). Para ter a mesma precisão do IRA anteriormente utilizado, o IRA Geral será apresentado em números de zero a dez, com 3 (três) casas decimais. Dessa forma, os cursos terão médias, em relação aos alunos ativos de um mesmo semestre, iguais a 6 (seis), e o IRA Geral de cada aluno deve ser avaliado em relação à distância a este valor de referência. Um IRA Geral, independente do curso, igual a 8 (oito) significa que o aluno está com rendimento superior à média do seu curso em 1(um) desvio-padrão, pertencendo à cota dos 84% (oitenta e quatro por cento), na qual somente um a cada sete alunos possui notas superiores às suas.'
      },
      {
        titulo: 'Como é calculado o índice individual?',
        conteudo: 'O IRA Individual, que permanece utilizado na UFC, agora serve como base para o cálculo do IRA Geral. Sua fórmula possui o seguinte cálculo:<br/><br/><div style="text-align: center; font-size: 16px; font-weight: bold; margin: 20px 0;"><i>IRA_Individual</i> = (1 - <i>0,5T/C</i>) × (Σ<i>Pi×Ci×Ni</i> / Σ<i>Pi×Ci</i>) × 1.000</div><br/><strong>Em que:</strong><br/>T = somatório de carga horária das disciplinas trancadas;<br/>C = somatório de carga horária das disciplinas cursadas ou trancadas;<br/>Ni = nota final da disciplina "i";<br/>Ci = carga horária da disciplina "i";<br/>Pi = período em que a disciplina "i" foi cursada, obedecendo à seguinte limitação: Pi = mínimo {6, semestre em que a disciplina foi cursada}. Nas disciplinas anuais, será considerado o semestre de início delas.'
      },
      {
        titulo: 'Onde posso olhar o meu IRA?',
        conteudo: 'Você pode consultar o IRA no seu histórico.'
      },
      {
        titulo: 'A matrícula institucional afeta o IRA?',
        conteudo: 'Não, a matrícula institucional não afeta o IRA.'
      },
      {
        titulo: 'Se eu não fizer uma disciplina obrigatória do semestre que estou cursando, isso interfere no meu IRA?',
        conteudo: 'Se você não se matricular, não tem problema. Se fizer a matrícula e logo após realizar o trancamento total, também não influencia. Mas se realizar o trancamento <strong>parcial, afetará o IRA.</strong>'
      },
      {
        titulo: 'O trancamento parcial de matrícula afeta o IRA?',
        conteudo: 'Sim, o trancamento parcial afeta o IRA.'
      },
      {
        titulo: 'O trancamento total de matrícula afeta o IRA?',
        conteudo: 'Não, o trancamento total não afeta o IRA.'
      },
      {
        titulo: 'Cursar uma mesma disciplina mais de uma vez afeta o IRA?',
        conteudo: 'Uma disciplina cursada mais de uma vez, no caso da existência de reprovação, será incluída no cálculo do IRA Individual o mesmo número de vezes em que ela consta no histórico do aluno.'
      },
      {
        titulo: 'Reprovar uma disciplina por falta afeta o IRA?',
        conteudo: 'Sim. A disciplina reprovada por frequência terá nota final zero. É importante esclarecer que o estudante tem direito de usufruir de até <strong>16 faltas</strong> (8 dias) sem incorrer em reprovação (75% de presença). As faltas somente serão justificadas com documentos comprobatórios.'
      },
      {
        titulo: 'O que afeta mais o IRA? Reprovação por falta ou por nota?',
        conteudo: 'A reprovação por falta tem impacto negativo maior no IRA do que reprovação por nota.'
      },
      {
        titulo: 'Como as disciplinas aproveitadas influenciam no IRA?',
        conteudo: 'Disciplinas inseridas no histórico por intermédio de aproveitamento, tanto interno como externo, não farão parte do cálculo do IRA Individual.'
      },
      {
        titulo: 'Atividades complementares entram no cálculo do IRA?',
        conteudo: 'Atividades complementares de ensino não farão parte do cálculo do IRA Individual.'
      }
    ]
  },
 /* russas: {
    titulo: 'IRA - Índice de Rendimento Acadêmico',
    subtitulo: 'Informações sobre o cálculo do IRA',
    secoes: [
      {
        titulo: 'O que é',
        conteudo: 'Índice que mede o desempenho acadêmico do estudante.'
      },
      {
        titulo: 'Consulta',
        conteudo: 'Disponível no SIGAA, seção de histórico escolar.'
      }
    ]
  }*/
};
