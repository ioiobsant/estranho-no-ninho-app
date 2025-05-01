import { Box, Typography } from '@mui/material';

const UfcPage = () => {
  return (
    <Box sx={{ 
      pt: 1, 
      pb: 8, 
      bgcolor: 'background.paper', 
      minHeight: '100vh', 
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
          UFC
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Informações institucionais
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Typography variant="h1" sx={{ 
          fontSize: { xs: '2rem', sm: '2.5rem' },
          color: 'text.secondary',
          textAlign: 'center',
          mt: 4
        }}>
          Em construção
        </Typography>
      </Box>
    </Box>
  );
};

export default UfcPage; 