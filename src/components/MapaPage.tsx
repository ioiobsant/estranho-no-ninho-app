import { Box, Typography } from '@mui/material';
import { useCampus } from '../contexts/CampusContext';
import MapaUFC from './MapaUFC';

const MapaPage = () => {
  const { campus } = useCampus();

  if (campus === 'russas') {
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
            Mapa Acessível
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Visualize o mapa do campus
          </Typography>
        </Box>

        <Box sx={{ 
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 200px)'
        }}>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'text.secondary',
              textAlign: 'center',
              mb: 2
            }}
          >
            Mapa Acessível não disponível para essa localidade
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              textAlign: 'center',
              maxWidth: '600px'
            }}
          >
            O mapa acessível está disponível apenas para o campus de Sobral. 
            Estamos trabalhando para disponibilizar essa funcionalidade em breve para o campus de Russas.
          </Typography>
        </Box>
      </Box>
    );
  }

  return <MapaUFC />;
};

export default MapaPage; 