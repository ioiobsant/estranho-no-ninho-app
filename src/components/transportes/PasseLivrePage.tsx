import { Box, Typography, Divider } from '@mui/material';

// estilos padronizados
const sectionBoxSx = { mb: 3 };
const sectionTitleProps = {
  component: 'h2' as const,
  variant: 'subtitle1' as const,
  fontWeight: 700,
  color: 'primary' as const,
  gutterBottom: true,
};
const dividerSx = { mb: 1 };
const bodyTextProps = { variant: 'body2' as const, color: 'text.secondary' as const, fontSize: 16, lineHeight: 1.8 };

const PasseLivrePage = () => {
  return (
    <Box sx={{ 
      pt: 1, 
      pb: 8, 
      bgcolor: 'background.paper', 
      width: '100vw',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      overflowX: 'hidden'
    }}>
      <Box sx={{ 
        px: 3, 
        py: 2, 
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Typography variant="h6" color="primary" fontWeight="500">
          Passe Livre
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Intermunicipal e Interestadual
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Passe Livre Interestadual</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
          O Passe Livre é um programa do Governo Federal que proporciona a pessoas com deficiência e baixa renda, gratuidade nas passagens para viajar entre os estados brasileiros. O Passe Livre é um compromisso assumido pelo governo e pelas empresas de transportes coletivos interestadual de passageiros para assegurar o respeito e a dignidade das pessoas com deficiência. Vale destacar que esse é um direito que todos podem e devem defender ainda que não fosse regulamentado por lei. Inscrição pode ser feita via correios ou online: Como Pedir — Agência Nacional de Transportes Terrestres - ANTT (www.gov.br)
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Passe Livre Intermunicipal</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
          O Passe Livre Intermunicipal é um programa do Governo Estadual destinado a conferir gratuidade ao direito de assentos reservados nos serviços regulares convencionais (ônibus) e nos serviços regulares complementares (vans) às pessoas com deficiência e com homologação, comprovadamente baixa renda. Também terão direito, conforme a Lei Estadual nº 16.362/2017, pessoas vivendo com HIV e AIDS, devidamente diagnosticadas, mediante a comprovação documental oriunda da instituição em que é realizado o tratamento de saúde. As inscrições são feita presencialmente. Para mais informações: Passe Livre Intermunicipal - Agência Reguladora do Estado do Ceará (arce.ce.gov.br)
         
          </Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default PasseLivrePage;
