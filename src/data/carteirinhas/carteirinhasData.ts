import { CampusData, PageContent, ServicoContent } from '../../types/contentData';

// Carteira Estudantil
export const carteiraEstudantilData: CampusData<PageContent> = {
  sobral: {
    titulo: 'Carteira Estudantil',
    secoes: [
      {
        titulo: 'Carteira Estudantil UNE',
        conteudo: 'O Documento do Estudante é o documento oficial das entidades estudantis nacionais que, de acordo com a Lei 12.933/2013, garante a meia-entrada a estudantes do ensino infantil, fundamental, médio/técnico, graduação e pós-graduação, porém não é gratuito, exceto para jovens de baixa renda. <a href="https://www.documentodoestudante.com.br/" target="_blank" rel="noopener noreferrer">Site: Documento do Estudante 2024 - Válido em todo o Brasil.</a>'
      },
      {
        titulo: 'Carteira Estudantil DCE',
        conteudo: 'O estudante universitário tem direito a um documento que lhe assegura a meia passagem no transporte público e a meia-entrada em eventos artísticos e culturais. De acordo com o <a href="https://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2015/Decreto/D8537.htm" target="_blank" rel="noopener noreferrer">Decreto nº 8.537/2015</a> da Presidência da República, só são válidas no território nacional as carteiras universitárias emitidas com a chancela da União Nacional dos Estudantes (UNE) e da Associação Nacional de Pós-Graduandos (ANPG). A solicitação ocorre através da entidade DCE, cada campus da UFC possui uma secretaria do DCE.'
      }
    ]
  },
  russas: {
    titulo: 'Carteira Estudantil',
    secoes: [
      {
        titulo: 'Carteira Estudantil UNE',
        conteudo: 'Documento oficial das entidades estudantis que garante meia-entrada.'
      },
      {
        titulo: 'Carteira Estudantil DCE',
        conteudo: 'Procure o DCE do campus de Russas para solicitar sua carteira estudantil.'
      }
    ]
  }
};

// Carteira RU
export const carteiraRuData: Partial<CampusData<ServicoContent>> = {
  sobral: {
    titulo: 'Carteira do R.U',
    subtitulo: 'Informações sobre o Restaurante Universitário',
    descricao: 'Restaurante Universitário do Campus Sobral',
    secoes: [
      {
        titulo: 'Valor das refeições para estudantes',
        conteudo: [
          'Recarga Eletrônica (pix, cartão de crédito ou GRU): R$ 1,10.',
          '<a href="https://si3.ufc.br/public//jsp/restaurante_universitario/consulta_comensal_ru.jsf" target="_blank" rel="noopener noreferrer">Link para recarga eletrônica</a>',
          'Guichê de atendimento (dinheiro em espécie): R$ 3,00.'
        ]
      },
      {
        titulo: 'IMPORTANTE',
        conteudo: 'Para fazer as refeições é necessário um cartão de acesso, adquirido gratuitamente no guichê de atendimento, basta levar documento com foto e número da matrícula.'
      }
    ],
    horarioFuncionamento: [
      'Guichê de atendimento: 9h às 19h',
      'Fornecimento da alimentação: Almoço de 11h às 14h; Jantar de 17h30min às 19h'
    ],
    contato: {
      endereco: 'R. Coronel Estanislau Frota, 563 - Campus Mucambinho',
      email: ['refeitorio@sobral.ufc.br']
    }
  }
};

// ID Jovem
export const idJovemData: CampusData<PageContent> = {
  sobral: {
    titulo: 'ID Jovem',
    secoes: [
      {
        titulo: 'O que é o ID Jovem?',
        conteudo: 'O Programa Jovem, também conhecido como Identidade Jovem, é uma iniciativa do Governo Federal que oferece benefícios aos jovens de baixa renda. Esses benefícios incluem acesso à meia-entrada em eventos culturais, esportivos e artísticos, além de oferecer vagas gratuitas ou com desconto em viagens interestaduais. O público-alvo do Programa Jovem são jovens com idades entre 15 e 29 anos, que pertencem a famílias com renda mensal de até dois salários mínimos e estão cadastrados no Cadastro Único para Programas Sociais do Governo Federal. A inscrição é feita pelo site ou aplicativo usando seus dados pessoais e NIS do CadUnico.'
      },
      {
        titulo: 'Site Oficial',
        conteudo: '<a href="https://idjovem.juventude.gov.br/" target="_blank" rel="noopener noreferrer">Site: ID Jovem (juventude.gov.br)</a>'
      }
    ]
  },
  russas: {
    titulo: 'ID Jovem',
    secoes: [
      {
        titulo: 'O que é o ID Jovem?',
        conteudo: 'Programa do Governo Federal para jovens de baixa renda com benefícios de meia-entrada e descontos em viagens.'
      },
      {
        titulo: 'Site Oficial',
        conteudo: '<a href="https://idjovem.juventude.gov.br/" target="_blank" rel="noopener noreferrer">Site: ID Jovem (juventude.gov.br)</a>'
      }
    ]
  }
};
