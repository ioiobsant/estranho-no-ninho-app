import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const MapContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 112px)', // 56px do header + 56px da bottom bar
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column'
}));

const MapTitle = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
  textAlign: 'center',
  '& h1': {
    margin: 0,
    fontSize: '1.25rem',
    fontWeight: 500
  }
}));

const IframeContainer = styled(Box)({
  flex: 1,
  width: '100%',
  position: 'relative',
  '& iframe': {
    width: '100%',
    height: '100%',
    border: 'none'
  }
});

const MapaPage: React.FC = () => {
  return (
    <div style={{ width: '100vw' }}>
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
    </div>
  );
};

export default MapaPage; 