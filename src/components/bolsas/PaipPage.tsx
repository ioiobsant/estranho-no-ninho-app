import { Box, Typography, Divider } from '@mui/material';

// padronização do estilo da aplicação
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

const PaipPage = () => {
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
          Programa de Acolhimento e Incentivo à Permanência (PAIP)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Programa de apoio à permanência estudantil
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>

          <Typography {...bodyTextProps}>
            O Programa de Acolhimento e Incentivo à Permanência (PAIP) tem como objetivo principal oferecer suporte aos estudantes que ingressam na UFC, mediante ações acadêmicas que visem reduzir a evasão e garantir a conclusão dos seus respectivos cursos de graduação. Existem vagas remuneradas (com valor de R$700,00) e voluntárias dos projetos de apoio à graduação que terão a vigência de até 09 (nove) meses.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PaipPage;
