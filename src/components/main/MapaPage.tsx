import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const MapContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '48px', // Altura do header em mobile
  bottom: '110px', // Altura do bottom bar
  left: 0,
  right: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 1,
  pointerEvents: 'auto',
  [theme.breakpoints.up('sm')]: {
    top: '56px',
    bottom: '110px'
  },
  [theme.breakpoints.up('md')]: {
    top: '56px',
    bottom: '110px'
  }
}));

const MapTitle = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1),
  textAlign: 'center',
  '& h1': {
    margin: 0,
    fontSize: '1rem',
    fontWeight: 500,
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.1rem'
    }
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
          <h1>Mapa Acessível da UFC</h1>
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