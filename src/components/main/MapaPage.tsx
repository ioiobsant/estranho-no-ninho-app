import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCampus } from '../../contexts/CampusContext';

const MapContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '82px', // Ajuste para header mais alto (mobile)
  bottom: '100px', // Altura ajustada da bottom bar
  left: 0,
  right: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 1,
  pointerEvents: 'auto',
  [theme.breakpoints.up('sm')]: {
    top: '92px',
    bottom: '100px'
  },
  [theme.breakpoints.up('md')]: {
    top: '92px',
    bottom: '100px'
  }
}));

const MapTitle = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1),
  textAlign: 'center',
  '& h1': {
    margin: 0,
  }
}));

const IframeContainer = styled(Box)({
  flex: 1,
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  '& iframe': {
    width: '100%',
    height: '100%',
    border: 'none',
    display: 'block',
    pointerEvents: 'auto'
  }
});

const MapaPage: React.FC = () => {
  const { campusConfig, campusName, campus } = useCampus();
  const mapUrl = campusConfig?.accessibleMapUrl;

  return (
    <Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <MapContainer>
        <MapTitle>
          <Typography
            component="h1"
            variant="h6"
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem' },
              fontWeight: 500,
              lineHeight: 1.3,
            }}
          >
            Mapa Acessível da UFC
          </Typography>
        </MapTitle>
        {mapUrl ? (
          <IframeContainer>
            <iframe
              // key força recarregar o iframe quando trocar o campus
              key={campus}
              src={mapUrl}
              title={`Mapa Acessível - ${campusName}`}
              allowFullScreen
            />
          </IframeContainer>
        ) : (
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: 3,
              textAlign: 'center',
              bgcolor: 'background.default'
            }}
          >
            <Box sx={{ maxWidth: 520 }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Mapa indisponível
              </Typography>
              <Typography variant="body2" color="text.secondary">
                O mapa acessível ainda não está disponível para o campus {campusName}.
              </Typography>
            </Box>
          </Box>
        )}
      </MapContainer>
    </Box>
  );
};

export default MapaPage; 