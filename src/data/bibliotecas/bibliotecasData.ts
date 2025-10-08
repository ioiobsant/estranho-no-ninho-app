import { CampusData, ServicoContent } from '../../types/contentData';

// Dados da Biblioteca Central UFC
export const bibliotecaUfcData: CampusData<ServicoContent> = {
  sobral: {
    titulo: 'Biblioteca UFC',
    subtitulo: 'Biblioteca Central da Universidade Federal do Ceará',
    descricao: 'Biblioteca do Campus de Sobral',
    secoes: [],
    requisitos: [
      'Comprovante de matrícula recente',
      'Documento oficial com foto'
    ],
    horarioFuncionamento: [
      'Dias úteis. Das 7h às 21h.'
    ],
    contato: {
      endereco: 'R. Conselheiro José Júlio, s/n.',
      fone: ['(88) 3695-4645'],
      email: ['bcso@ufc.br']
    }
  },
  russas: {
    titulo: 'Biblioteca UFC Russas',
    subtitulo: 'Biblioteca do Campus de Russas',
    descricao: 'Biblioteca do Campus de Russas da UFC',
    secoes: [],
    requisitos: [
      'Comprovante de matrícula recente',
      'Documento oficial com foto',
      'CPF'
    ],
    horarioFuncionamento: [
      'Segunda a sexta: 8h às 20h',
      'Sábado: 8h às 12h'
    ],
    contato: {
      endereco: 'Rua Felipe Santiago, 411 - Paredão',
      fone: ['(88) 3411-9200'],
      email: ['biblioteca.russas@ufc.br']
    }
  }
};

// Dados da Biblioteca de Medicina (apenas Sobral)
export const bibliotecaMedicinaData: Partial<CampusData<ServicoContent>> = {
  sobral: {
    titulo: 'Biblioteca Medicina',
    subtitulo: '',
    descricao: 'Biblioteca do curso de Medicina em Sobral',
    secoes: [],
    requisitos: [
      'Apresentar comprovante de matrícula recente',
      'Documento oficial com foto'
    ],
    horarioFuncionamento: [
      'Dias úteis. Das 7h às 21h.'
    ],
    contato: {
      endereco: 'Av. Comandante Maurocelio Rocha Pontes, 100- Derby',
      fone: ['(88) 3695-4709'],
      email: ['bms.direcao@ufc.br']
    }
  }
};
