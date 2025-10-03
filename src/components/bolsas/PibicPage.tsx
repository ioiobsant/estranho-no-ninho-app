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

const PibicPage = () => {
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
          Programa Institucional de Bolsas de Iniciação Científica (PIBIC)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Saiba mais sobre o programa 
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...bodyTextProps}>
            O Programa Institucional de Bolsas de Iniciação Científica - PIBIC é voltado para o desenvolvimento do pensamento científico e iniciação à pesquisa de estudantes de graduação. A Coordenadoria de Pesquisa da Pró-Reitoria de Pesquisa e Pós Graduação (PRPPG) da UFC com a ajuda do Comitê Interno são os responsáveis pela gestão do programa PIBIC.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Valor da Bolsa</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            O bolsista do PIBIC receberá bolsa no valor de R$700,00.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PibicPage;
