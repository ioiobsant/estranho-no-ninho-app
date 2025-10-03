import { CampusData, PageContent } from '../../types/contentData';

// Interface específica para links úteis
export interface LinkUtil {
  text: string;
  url: string | null;
}

export interface LinksUteisContent {
  titulo: string;
  links: LinkUtil[];
}

// Regimentos e Manuais
export const regimentosData: CampusData<LinksUteisContent> = {
  sobral: {
    titulo: 'Regimentos, Manuais e Outros',
    links: [
      { text: 'Direitos e Deveres do Aluno', url: 'https://psicologiasobral.ufc.br/pt/regimentos-manuais-e-outros/direitos-e-deveres/' },
      { text: 'Estatuto da UFC', url: 'https://www.ufc.br/a-universidade/documentos-oficiais/327-estatuto-da-ufc' },
      { text: 'Manual do Aluno', url: 'http://www.cgeti.ufc.br/downloads/Manual%20do%20Aluno.pdf' },
      { text: 'Regimento Geral da UFC', url: 'https://www.ufc.br/a-universidade/documentos-oficiais/326-regimento-geral-da-ufc' }
    ]
  },
  russas: {
    titulo: 'Regimentos, Manuais e Outros',
    links: [
      { text: 'Estatuto da UFC', url: 'https://www.ufc.br/a-universidade/documentos-oficiais/327-estatuto-da-ufc' },
      { text: 'Regimento Geral da UFC', url: 'https://www.ufc.br/a-universidade/documentos-oficiais/326-regimento-geral-da-ufc' }
    ]
  }
};

// Links Úteis gerais
export const linksUteisData: CampusData<LinksUteisContent> = {
  sobral: {
    titulo: 'Links Úteis',
    links: [
      { text: 'Sistema Integrado de Gestão de Atividades Acadêmicas - SIGAA', url: 'https://si3.ufc.br/sigaa/verTelaLogin.do' },
      { text: 'Agência de Estágios', url: null },
      { text: 'Biblioteca Universitária', url: null },
      { text: 'Casas de Cultura Estrangeira', url: null },
      { text: 'Ciência sem Fronteiras', url: null },
      { text: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico – CNPq', url: 'https://www.gov.br/cnpq/pt-br' },
      { text: 'Coordenação de Aperfeiçoamento de Pessoal de Nível Superior - CAPES', url: 'https://www.gov.br/capes/pt-br' },
      { text: 'Diretório Central dos Estudantes - DCE', url: null },
      { text: 'Ministério da Educação', url: 'https://www.gov.br/mec/pt-br' },
      { text: 'Pró-Reitoria de Planejamento e Administração', url: 'https://proplad.ufc.br/pt/' },
      { text: 'Pró-Reitoria de Assuntos Estudantis', url: 'https://prae.ufc.br/pt/' },
      { text: 'Pró-Reitoria de Extensão', url: 'https://prex.ufc.br/pt/' },
      { text: 'Pró-Reitoria de Graduação', url: 'https://prograd.ufc.br/pt/' },
      { text: 'Pró-Reitoria de Inovação e Relações Interinstitucionais', url: 'https://prointer.ufc.br/pt/' },
      { text: 'UFC Virtual', url: 'https://virtual.ufc.br/' }
    ]
  },
  russas: {
    titulo: 'Links Úteis',
    links: [
      { text: 'Sistema Integrado de Gestão de Atividades Acadêmicas - SIGAA', url: 'https://si3.ufc.br/sigaa/verTelaLogin.do' },
      { text: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico – CNPq', url: 'https://www.gov.br/cnpq/pt-br' },
      { text: 'Coordenação de Aperfeiçoamento de Pessoal de Nível Superior - CAPES', url: 'https://www.gov.br/capes/pt-br' },
      { text: 'Ministério da Educação', url: 'https://www.gov.br/mec/pt-br' },
      { text: 'Pró-Reitoria de Assuntos Estudantis', url: 'https://prae.ufc.br/pt/' },
      { text: 'Pró-Reitoria de Graduação', url: 'https://prograd.ufc.br/pt/' },
      { text: 'UFC Virtual', url: 'https://virtual.ufc.br/' }
    ]
  }
};

// RSS - em construção
export const rssData: CampusData<PageContent> = {
  sobral: {
    titulo: 'RSS',
    secoes: [
      {
        titulo: 'Em construção',
        conteudo: 'Esta seção está em desenvolvimento.'
      }
    ]
  },
  russas: {
    titulo: 'RSS',
    secoes: [
      {
        titulo: 'Em construção',
        conteudo: 'Esta seção está em desenvolvimento.'
      }
    ]
  }
};
