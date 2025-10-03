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

const TaxiPage = () => {
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
          Táxi
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Serviço de táxi em Sobral
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Box sx={sectionBoxSx}>

          <Typography {...bodyTextProps}>
         <strong>Disk Táxi: </strong> (88) 3111-1111 <br />
          <strong>Copertáxi Sobral:</strong> (88) 3611-1515 <br />
          <strong>Chame Táxi Sobral</strong> (88) 3614-7111 <br />

          </Typography>
        </Box>

        

      </Box>
    </Box>
  );
};

export default TaxiPage;
