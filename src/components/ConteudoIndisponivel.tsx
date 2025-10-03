import { Box } from '@mui/material';

const ConteudoIndisponivel = () => (
  <Box sx={{
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: 'background.default',
    p: 3
  }}>
    <Box sx={{
      bgcolor: 'background.paper',
      borderRadius: 4,
      boxShadow: 6,
      p: 4,
      textAlign: 'center',
      maxWidth: 400,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }}>
      <Box sx={{
        width: 80,
        height: 80,
        borderRadius: '50%',
        bgcolor: 'primary.light',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 1
      }}>
        <span role="img" aria-label="Conteúdo indisponível" style={{ fontSize: 48 }}>📋</span>
      </Box>
      <Box sx={{ typography: 'h5', fontWeight: 'bold', color: 'text.primary', mb: 1 }}>
        Em Construção
      </Box>
      
      <Box sx={{ typography: 'body1', color: 'text.secondary', mb: 2 }}>
        Este conteúdo está em construção.
      </Box>
     
    </Box>
  </Box>
);

export default ConteudoIndisponivel;

