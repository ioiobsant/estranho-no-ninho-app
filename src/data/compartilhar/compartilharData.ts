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
  };
  installSections: InstallSection[];
}

export const compartilharData: CompartilharContent = {
  appName: 'Um Estranho no Ninho',
  description:
    'Plataforma digital para acesso centralizado a informações, serviços e recursos institucionais da UFC na palma da mão. Compartilhe através do link abaixo.',
  url: 'https://estranho-no-ninho-app.vercel.app/',
  shareText: 'Conheça o app Um Estranho no Ninho com os serviços da UFC.',
  logoSrc: '/icon-UENN-.png',
  qrCodeSrc: '/qr-code.png',
  instructions: {
    title: 'Como usar este cartão',
    body: 'Você também pode compartilhar o aplicativo através do QR code. Aponte a câmera do seu celular para o QR Code exibido. Assim que o link for reconhecido, toque na notificação para acessar o aplicativo diretamente no navegador.'
  },

  
  installSections: [
    {
      platform: 'Celular: Instruções gerais, podem haver pequenas variações',
      steps: [
        'Abra o link no celular;',
        'Toque no compartilhamento (quadrado com seta);',
        'Confirme o nome “Um Estranho no Ninho” e toque em “Adicionar à tela de início.”'
      ]
    },
    {
      platform: 'Desktop: Instruções gerais, podem haver pequenas variações',
      steps: [
        'Abra o link no navegador. ',
        'Clique na barra de configurações, no canto superior direito da tela.',
        'Procure a opção de "Transmitir, salvar e Compartilhar".',
        'Clique na opção de "Instalar página como APP".', 
      ]
    }
  ]
};
