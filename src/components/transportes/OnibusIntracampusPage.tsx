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

const OnibusIntracampusPage = () => {
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
          Ônibus Intracampus
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Transporte interno do campus da UFC
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>
          <Typography {...bodyTextProps}>
          O campus de Sobral oferece serviço de transporte gratuito aos membros da comunidade acadêmica através do “Ônibus Intracampus”. Esse ônibus funciona durante os dias letivos, dando suporte ao restaurante universitário, e interliga os prédios da UFC: Mucambinho, Serviço de Psicologia Aplicada (SPA) e Curso de Medicina.
          </Typography>
        </Box>

        <Box sx={sectionBoxSx}>
          <Typography {...sectionTitleProps}>Mais Informações</Typography>
          <Divider sx={dividerSx} />
          <Typography {...bodyTextProps}>
          www.sobral.ufc.br/sobre/campus/onibus-intercampus/

          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OnibusIntracampusPage;
