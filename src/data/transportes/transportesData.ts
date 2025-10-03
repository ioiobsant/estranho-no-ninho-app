import { CampusData, PageContent, ConteudoComContato } from '../../types/contentData';

// VLT - apenas Sobral tem
export const vltData: Partial<CampusData<PageContent>> = {
  sobral: {
    titulo: 'VLT - Veículo Sobre Trilhos',
    subtitulo: 'Sistema de transporte sobre trilhos de Sobral',
    secoes: [
      {
        titulo: 'Sobre o VLT',
        conteudo: 'O Metrô de Sobral oferece transporte ágil e seguro interligando os quatro cantos da cidade, através de duas linhas em operação. A Linha Sul (com 7,2 km de extensão) interliga os bairros Sumaré e Cohab II. A Linha Norte (com 6,7 quilômetros de extensão) liga o bairro do Junco até o bairro Novo Recanto.'
      },
      {
        titulo: 'Tarifas',
        conteudo: 'Inteira: R$ 1,00; Meia entrada: R$ 0,50. A meia entrada é destinada aos estudantes e a gratuidade a pessoas com deficiência e idosos. O cadastro ocorre no posto do VLT Campus dos Velhos ou Boulevard do Arco. É necessário levar xerox: RG, CPF, comprovante de residência, comprovante de matrícula ou laudo médico, atestando a deficiência.'
      }
    ]
  }
};

// Passe Livre - Inter
export const passeLivreData: CampusData<PageContent> = {
  sobral: {
    titulo: 'Passe Livre',
    subtitulo: 'Intermunicipal e Interestadual',
    secoes: [
      {
        titulo: 'Passe Livre Interestadual',
        conteudo: 'O Passe Livre é um programa do Governo Federal que proporciona a pessoas com deficiência e baixa renda, gratuidade nas passagens para viajar entre os estados brasileiros. O Passe Livre é um compromisso assumido pelo governo e pelas empresas de transportes coletivos interestadual de passageiros para assegurar o respeito e a dignidade das pessoas com deficiência. Vale destacar que esse é um direito que todos podem e devem defender ainda que não fosse regulamentado por lei. Inscrição pode ser feita via correios ou online: Como Pedir — Agência Nacional de Transportes Terrestres - ANTT (www.gov.br)'
      },
      {
        titulo: 'Passe Livre Intermunicipal',
        conteudo: 'É a isenção da tarifa concedida às pessoas com deficiência, comprovadamente carentes para fins de acesso ao sistema de transporte coletivo intermunicipal de passageiros no Estado do Ceará.'
      }
    ]
  },
  russas: {
    titulo: 'Passe Livre',
    subtitulo: 'Intermunicipal e Interestadual',
    secoes: [
      {
        titulo: 'Passe Livre',
        conteudo: 'Programa de gratuidade em transporte interestadual e intermunicipal para pessoas com deficiência e baixa renda.'
      }
    ]
  }
};

// Passe Livre Sobral (municipal) - apenas Sobral
export const passeLivreSobralData: Partial<CampusData<ConteudoComContato>> = {
  sobral: {
    titulo: 'Passe Livre Sobral',
    subtitulo: 'Transporte público municipal de Sobral',
    secoes: [
      {
        titulo: '',
        conteudo: 'É o documento que garante à pessoa com deficiência, idosa, o livre acesso sem ônus nos transportes coletivos urbanos e interdistirtais do município de Sobral. É necessário procurar a Casa do Cidadão ou CRAS para realizar o devido cadastro no sistema.'
      },
      {
        titulo: 'Documentação',
        conteudo: 'Xerox da Carteira de Identidade (RG), CPF, comprovante de residência, e atestado (laudo) médico do especialista.'
      }
    ],
    contato: {
      endereco: 'R. Cel. José Sabóia, 513 - Centro, Sobral - CE, 62011-040',
      fone: ['(88) 3677-3231', '(88) 3677-3230'],
      email: ['cadastrounico@sobral.ce.gov.br']
    }
  }
};

// Ônibus Intracampus - apenas Sobral
export const onibusIntracampusData: Partial<CampusData<PageContent>> = {
  sobral: {
    titulo: 'Ônibus Intracampus',
    subtitulo: 'Transporte interno do campus da UFC',
    secoes: [
      {
        titulo: '',
        conteudo: 'O campus de Sobral oferece serviço de transporte gratuito aos membros da comunidade acadêmica através do "Ônibus Intracampus". Esse ônibus funciona durante os dias letivos, dando suporte ao restaurante universitário, e interliga os prédios da UFC: Mucambinho, Serviço de Psicologia Aplicada (SPA) e Curso de Medicina.'
      },
      {
        titulo: 'Mais Informações',
        conteudo: 'www.sobral.ufc.br/sobre/campus/onibus-intercampus/'
      }
    ]
  }
};

// Táxi - apenas Sobral (por enquanto)
export const taxiData: Partial<CampusData<PageContent>> = {
  sobral: {
    titulo: 'Táxi',
    subtitulo: 'Serviço de táxi em Sobral',
    secoes: [
      {
        titulo: '',
        conteudo: [
          'Disk Táxi: (88) 3111-1111',
          'Copertáxi Sobral: (88) 3611-1515',
          'Chame Táxi Sobral: (88) 3614-7111'
        ]
      }
    ]
  }
};
