import { Box } from '@mui/material';

/**
 * Componente exibido quando o mapa não está disponível para o campus selecionado
 */
const MapaIndisponivel = () => (
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
        <span role="img" aria-label="Mapa indisponível" style={{ fontSize: 48 }}>🗺️</span>
      </Box>
      <Box sx={{ typography: 'h5', fontWeight: 'bold', color: 'text.primary', mb: 1 }}>
        Mapa Indisponível
      </Box>
      <Box sx={{ typography: 'body1', color: 'text.secondary', mb: 2 }}>
        O mapa acessível deste campus ainda não está disponível.
      </Box>
      <Box sx={{ typography: 'body2', color: 'text.secondary', opacity: 0.8 }}>
        Estamos trabalhando para disponibilizar em breve!
      </Box>
    </Box>
  </Box>
);

export default MapaIndisponivel;

