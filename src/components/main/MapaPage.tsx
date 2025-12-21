import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

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
        <IframeContainer>
          <iframe
            src="https://lincolngondin.github.io/mapaUFC/"
            title="Mapa Acessível da UFC"
            allowFullScreen
          />
        </IframeContainer>
      </MapContainer>
    </Box>
  );
};

export default MapaPage; 