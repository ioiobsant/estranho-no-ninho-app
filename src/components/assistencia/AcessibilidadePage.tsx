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

const AcessibilidadePage = () => {
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
          Acessibilidade
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Recursos de Acessibilidade</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            A UFC dispõe de uma secretaria de acessibilidade, que oferece suporte pedagógico, tecnológico, comunicacional e atitudinal. 
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Contato</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
            Para mais informações, entre em contato através do Email: ufcinclui@acessibilidade.ufc.br
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AcessibilidadePage;
