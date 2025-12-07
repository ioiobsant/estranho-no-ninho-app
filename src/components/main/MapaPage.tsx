import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCampus } from '../../contexts/CampusContext';
import MapaIndisponivel from '../MapaIndisponivel';
import { mapaData } from '../../data/mapa/mapaData';

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

/**
 * Página do Mapa Acessível
 * 
 * Exibe o mapa interativo do campus selecionado através de iframe.
 * Se o mapa não estiver disponível para o campus, exibe mensagem informativa.
 * 
 * Para adicionar mapa de um novo campus:
 * 1. Adicione a URL do iframe em src/data/mapa/mapaData.ts
 * 2. O mapa será automaticamente disponibilizado para aquele campus
 */
const MapaPage: React.FC = () => {
  const { campus } = useCampus();
  const mapaConfig = mapaData[campus];

  // Se não há configuração de mapa para este campus, mostra mensagem
  if (!mapaConfig) {
    return <MapaIndisponivel />;
  }

  return (
    <Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <MapContainer>
        <MapTitle>
          <h1>{mapaConfig.titulo}</h1>
          {mapaConfig.subtitulo && (
            <Typography variant="caption" component="p" sx={{ mt: 0.5 }}>
              {mapaConfig.subtitulo}
            </Typography>
          )}
        </MapTitle>
        <IframeContainer>
          <iframe
            src={mapaConfig.iframeUrl}
            title={`${mapaConfig.titulo} - ${campus}`}
            allowFullScreen
          />
        </IframeContainer>
      </MapContainer>
    </Box>
  );
};

export default MapaPage; 