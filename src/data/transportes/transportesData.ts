import { li } from 'framer-motion/client';
import { CampusData, PageContent, ConteudoComContato } from '../../types/contentData';

// VLT - Sobral
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
        conteudo: 'Inteira: R$ 1,00; Meia entrada: R$ 0,50. A meia entrada é destinada aos estudantes e a gratuidade a pessoas com deficiência e idosos. O cadastro ocorre no posto do VLT Campus dos Velhos ou Boulevard do Arco.'
      }, 
      {
        titulo: 'Documentos para meia entrada',
        conteudo: 'É necessário levar xerox: RG, CPF, comprovante de residência, comprovante de matrícula ou laudo médico, atestando a deficiência.'

      },
      {
        titulo: 'Endereço',
        conteudo:
        'Campus dos Velhos: Av. Ildefonso De Holanda Cavalcante, S/N -Campo Dos Velhos - Sobral <br/> <br/> Boulevard do Arco: Av. Othon De Alencar S/N -Centro - Sobral'
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
        conteudo: 'O Passe Livre é um programa do Governo Federal que proporciona a pessoas com deficiência e baixa renda, gratuidade nas passagens para viajar entre os estados brasileiros. O Passe Livre é um compromisso assumido pelo governo e pelas empresas de transportes coletivos interestadual de passageiros para assegurar o respeito e a dignidade das pessoas com deficiência. Vale destacar que esse é um direito que todos podem e devem defender ainda que não fosse regulamentado por lei. Inscrição pode ser feita via correios ou online: <a href="https://www.gov.br/antt/pt-br/assuntos/passageiros/passageiros-rodoviarios/passe-livre/passageiro" target="_blank" rel="noopener noreferrer">Como Pedir — Agência Nacional de Transportes Terrestres - ANTT (www.gov.br)</a>'
      },
      {
        titulo: 'Passe Livre Intermunicipal',
        conteudo: 'O Passe Livre Intermunicipal é um programa do Governo Estadual destinado a conferir gratuidade ao direito de assentos reservados nos serviços regulares convencionais (ônibus) e nos serviços regulares complementares (vans) às pessoas com deficiência e com hemofilia, comprovadamente baixa renda. Também terão direito, conforme a Lei Estadual nº 16.362/2017, pessoas vivendo com HIV e AIDS, devidamente diagnosticadas, mediante a comprovação documental oriunda da instituição em que é realizado o tratamento de saúde. As inscrições são feita presencialmente. Para mais informações: <a href="https://www.arce.ce.gov.br/passe-livre-intermunicipal/#:~:text=O%20Passe%20Livre%20Intermunicipal%20%C3%A9%20um%20programa%20do,Gest%C3%A3o%20dos%20servi%C3%A7os%20p%C3%BAblicos%20de%20transporte%20rodovi%C3%A1rio%20intermunicipal." target="_blank" rel="noopener noreferrer">Passe Livre Intermunicipal - Agência Reguladora do Estado do Ceará (arce.ce.gov.br)</a>'
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

// Passe Livre Sobral (municipal) 
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
      fone: ['(88) 3677-3231 / 3677-3230'],
      email: ['cadastrounico@sobral.ce.gov.br']
    }
  }
};

// Ônibus Intracampus de Sobral
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
        conteudo: '<a href="https://sobral.ufc.br/?s=INTRACAMPUS" target="_blank" rel="noopener noreferrer">Ônibus Intracampus - UFC Sobral (sobral.ufc.br)</a>'
      }
    ]
  }
};

// Táxi - Sobral 
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
