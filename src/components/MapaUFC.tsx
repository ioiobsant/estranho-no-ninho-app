import { useRef, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { blocoEngenharia, famed } from '../data/mapa/geoJsonData';
import { iconpos, ObterNiveis } from '../data/mapa/mapData';
import { Box, Button, Paper, useTheme, useMediaQuery } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import { useCampus } from '../contexts/CampusContext';

// Constantes
const HEIGHT_HEADER = 56;
const HEIGHT_BOTTOMBAR = 64;
const HEIGHT_SELECTOR = 80;

const CENTER_MUCAMBINHO: L.LatLngExpression = [-3.6932203, -40.3543455] as [number, number];
const CENTER_FAMED: L.LatLngExpression = [-3.681909655617651, -40.33721049717025] as [number, number];

// Configuração do ícone padrão do Leaflet
L.Icon.Default.mergeOptions({
  iconUrl: '/icons/marker.png',
  iconRetinaUrl: '/icons/marker.png',
  shadowUrl: '',
});

// Componente para controlar o centro do mapa
const ChangeView = ({ center }: { center: L.LatLngExpression }) => {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
};

// Componente para o mapa indisponível
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
        O mapa dessa região ainda não está disponível.
      </Box>
      <Box sx={{ typography: 'body2', color: 'text.secondary', opacity: 0.8 }}>
        Estamos trabalhando para disponibilizar em breve!
      </Box>
    </Box>
  </Box>
);

// Componente para os botões de nível
const NivelButtons = ({ 
  niveisDisponiveis, 
  nivelSelecionado, 
  setNivelSelecionado, 
  isMobile 
}: { 
  niveisDisponiveis: string[], 
  nivelSelecionado: string, 
  setNivelSelecionado: (nivel: string) => void,
  isMobile: boolean 
}) => (
  <Paper
    sx={{
      position: 'fixed',
      right: isMobile ? 1 : 2,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2000,
      bgcolor: 'transparent',
      boxShadow: 'none',
      p: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? 1 : 2,
      alignItems: 'center',
    }}
    elevation={0}
  >
    {niveisDisponiveis.map((nivel) => (
      <Button
        key={nivel}
        variant={nivelSelecionado === nivel ? 'contained' : 'outlined'}
        color={nivelSelecionado === nivel ? 'primary' : 'inherit'}
        size="large"
        sx={{
          minWidth: isMobile ? 48 : 56,
          width: isMobile ? 48 : 56,
          height: isMobile ? 48 : 56,
          borderRadius: '50%',
          fontWeight: 'bold',
          fontSize: isMobile ? 18 : 22,
          p: 0,
          boxShadow: nivelSelecionado === nivel ? 4 : 1,
          bgcolor: nivelSelecionado === nivel ? 'primary.main' : 'background.paper',
          color: nivelSelecionado === nivel ? 'common.white' : 'text.primary',
          border: nivelSelecionado === nivel ? '2px solid #1976d2' : '1.5px solid #bbb',
          transition: 'all 0.2s',
          touchAction: 'manipulation',
          WebkitTapHighlightColor: 'transparent',
          '&:hover': {
            bgcolor: nivelSelecionado === nivel ? 'primary.dark' : 'grey.200',
          },
          '&:active': {
            transform: 'scale(0.95)',
          }
        }}
        onClick={() => setNivelSelecionado(nivel)}
      >
        {nivel}
      </Button>
    ))}
  </Paper>
);

// Componente para os botões de campus
const CampusButtons = ({ 
  campusSelecionado, 
  setCampusSelecionado, 
  setNivelSelecionado, 
  isMobile 
}: { 
  campusSelecionado: 'mucambinho' | 'famed', 
  setCampusSelecionado: (campus: 'mucambinho' | 'famed') => void,
  setNivelSelecionado: (nivel: string) => void,
  isMobile: boolean 
}) => (
  <Paper
    sx={{
      position: 'fixed',
      left: '50%',
      bottom: isMobile ? '130px' : '140px',
      transform: 'translateX(-50%)',
      zIndex: 2000,
      bgcolor: 'rgba(255,255,255,0.85)',
      borderRadius: 4,
      boxShadow: 6,
      p: isMobile ? 1 : 2,
      display: 'flex',
      gap: isMobile ? 1 : 2,
      alignItems: 'center',
      minWidth: isMobile ? 220 : 320,
      maxWidth: isMobile ? '99vw' : '95vw',
    }}
    elevation={6}
  >
    <Button
      startIcon={<MapIcon />}
      variant={campusSelecionado === 'mucambinho' ? 'contained' : 'outlined'}
      color="primary"
      size={isMobile ? 'medium' : 'large'}
      sx={{ fontWeight: 'bold', borderRadius: 3, minWidth: isMobile ? 90 : 120, fontSize: isMobile ? 14 : 16 }}
      onClick={() => { setCampusSelecionado('mucambinho'); setNivelSelecionado('0'); }}
    >
      Mucambinho
    </Button>
    <Button
      startIcon={<MapIcon />}
      variant={campusSelecionado === 'famed' ? 'contained' : 'outlined'}
      color="secondary"
      size={isMobile ? 'medium' : 'large'}
      sx={{
        fontWeight: 'bold',
        borderRadius: 3,
        minWidth: isMobile ? 90 : 120,
        fontSize: isMobile ? 14 : 16,
        bgcolor: campusSelecionado === 'famed' ? '#ede7f6' : 'background.paper',
        color: campusSelecionado === 'famed' ? '#6a1b9a' : 'text.primary',
        border: campusSelecionado === 'famed' ? '2px solid #b39ddb' : undefined,
        '&:hover': {
          bgcolor: campusSelecionado === 'famed' ? '#d1c4e9' : 'grey.200',
        },
      }}
      onClick={() => { setCampusSelecionado('famed'); setNivelSelecionado('0'); }}
    >
      FAMED
    </Button>
  </Paper>
);

// Componente principal do mapa
const MapaUFC = () => {
  const mapRef = useRef<L.Map | null>(null);
  const [campusSelecionado, setCampusSelecionado] = useState<'mucambinho' | 'famed'>('mucambinho');
  const [nivelSelecionado, setNivelSelecionado] = useState<string>('0');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { campus } = useCampus();

  const geojsonFiltrado = campusSelecionado === 'mucambinho'
    ? { ...blocoEngenharia, features: blocoEngenharia.features.filter(f => f.properties?.level === nivelSelecionado) }
    : { ...famed, features: famed.features.filter(f => f.properties?.level === nivelSelecionado) };

  const marcadoresFiltrados = iconpos.filter((item) => {
    if (!item.icone?.options?.iconUrl || item.icone.options.iconUrl === '/icons/marker.png') {
      return false;
    }
    if (Array.isArray(item.pos)) {
      if (campusSelecionado === 'mucambinho') {
        return String(item.level) === nivelSelecionado && item.pos[0] < -3.692;
      }
      return String(item.level) === nivelSelecionado && item.pos[0] > -3.6935;
    }
    return String(item.level) === nivelSelecionado;
  });

  const niveisDisponiveis = campusSelecionado === 'mucambinho' 
    ? ObterNiveis(blocoEngenharia.features) 
    : ObterNiveis(famed.features);

  const center = campusSelecionado === 'mucambinho' ? CENTER_MUCAMBINHO : CENTER_FAMED;

  if (campus === 'russas') {
    return <MapaIndisponivel />;
  };

  return (
    <Box sx={{ 
      width: '100vw', 
      bgcolor: 'background.default',
      overflow: 'hidden'
    }}>
      <Box
        sx={{
          width: '100vw',
          height: isMobile
            ? `calc(100vh - ${HEIGHT_HEADER + 8}px)`
            : `calc(100vh - ${HEIGHT_HEADER + 12}px)`,
          position: 'fixed',
          top: `${HEIGHT_HEADER}px`,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          margin: 0,
          padding: 0,
          border: 'none',
          outline: 'none'
        }}
      >
        <MapContainer
          center={center}
          zoom={18}
          minZoom={10}
          maxZoom={24}
          style={{ height: '100%', width: '100%' }}
        >
          <ChangeView center={center} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <GeoJSON 
            data={geojsonFiltrado} 
            pointToLayer={() => L.marker([0, 0]).remove()}
          />
          {marcadoresFiltrados.map((item, idx) => (
            <Marker key={idx} position={item.pos} icon={item.icone}>
              <Popup>
                <div dangerouslySetInnerHTML={{ __html: String(item.popup.getContent() ?? '') }} />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>

      <NivelButtons
        niveisDisponiveis={niveisDisponiveis}
        nivelSelecionado={nivelSelecionado}
        setNivelSelecionado={setNivelSelecionado}
        isMobile={isMobile}
      />

      <CampusButtons
        campusSelecionado={campusSelecionado}
        setCampusSelecionado={setCampusSelecionado}
        setNivelSelecionado={setNivelSelecionado}
        isMobile={isMobile}
      />
    </Box>
  );
};

export default MapaUFC; 