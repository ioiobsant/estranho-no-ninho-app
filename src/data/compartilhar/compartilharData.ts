export interface InstallSection {
  platform: string;
  steps: string[];
}

export interface CompartilharContent {
  appName: string;
  tagline?: string;
  description: string;
  url: string;
  shareText: string;
  logoSrc: string;
  qrCodeSrc: string;
  instructions: {
    title: string;
    body: string;
    ctaLabel: string;
  };
  installSections: InstallSection[];
}

export const compartilharData: CompartilharContent = {
  appName: 'Um Estranho no Ninho',
  description:
    'Serviços, links e contatos essenciais da UFC na palma da mão.',
  url: 'https://estranho-no-ninho-app-git-developeri-63c6e1-ioiobsants-projects.vercel.app/',
  shareText: 'Conheça o app Um Estranho no Ninho com os serviços da UFC.',
  logoSrc: '/icon-UENN-.png',
  qrCodeSrc: '/qr-code.png',
  instructions: {
    title: 'Como usar este cartão',
    body: 'Mostre o QR code ou repasse o link em reuniões, grupos ou eventos. Você também pode imprimir esta tela e deixar em murais do campus.',
    ctaLabel: 'Imprimir / salvar como PDF'
  },

  
  installSections: [
    {
      platform: 'Android / Chrome',
      steps: [
        'Abra o link no Chrome do celular.',
        'Toque no menu ⋮ e selecione “Adicionar à tela inicial”.',
        'Confirme o nome “Um Estranho no Ninho” e toque em “Adicionar”.'
      ]
    },
    {
      platform: 'iPhone / Safari',
      steps: [
        'Acesse o link no Safari.',
        'Toque no ícone de compartilhamento (quadrado com seta).',
        'Escolha “Adicionar à Tela de Início” e confirme.'
      ]
    },
    {
      platform: 'Desktop',
      steps: [
        'Abra o link no Chrome. ',
        'Clique na barra de configurações, no canto superior direito da tela.',
        'Procure a opção de "Transmitir, salvar ou Compartilhar".',
        'Clique na opção de "Instalar página como APP".', 
      ]
    }
  ]
};
