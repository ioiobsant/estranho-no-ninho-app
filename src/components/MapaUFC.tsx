import { useRef, useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { blocoEngenharia, famed } from '../data/geoJsonData';
import { iconpos, ObterNiveis } from '../data/mapData';
import { Box, Button, Paper, useTheme, useMediaQuery } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import AccessibleIcon from '@mui/icons-material/Accessible';

// Corrige o ícone padrão do Leaflet para produção
L.Icon.Default.mergeOptions({
  iconUrl: '/icons/marker.png',
  iconRetinaUrl: '/icons/marker.png',
  shadowUrl: '', // ou '/icons/marker-shadow.png' se desejar sombra
});

const HEIGHT_HEADER = 56; // altura aproximada do header/topbar
const HEIGHT_BOTTOMBAR = 64; // altura aproximada da BottomBar
const HEIGHT_SELECTOR = 80; // altura do seletor customizado

const MapaUFC = () => {
  const mapRef = useRef<L.Map | null>(null);
  const [campusSelecionado, setCampusSelecionado] = useState<'mucambinho' | 'famed'>('mucambinho');
  const [nivelSelecionado, setNivelSelecionado] = useState<string>('0');
  const [currentZoom, setCurrentZoom] = useState<number>(18);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const geojsonFiltrado = campusSelecionado === 'mucambinho'
    ? { ...blocoEngenharia, features: blocoEngenharia.features.filter((f: any) => f.properties?.level === nivelSelecionado) }
    : { ...famed, features: famed.features.filter((f: any) => f.properties?.level === nivelSelecionado) };

  const marcadoresFiltrados = iconpos.filter((item) => {
    if (Array.isArray(item.pos)) {
      if (campusSelecionado === 'mucambinho') {
        return String(item.level) === nivelSelecionado && item.pos[0] < -3.692;
      } else {
        return String(item.level) === nivelSelecionado && item.pos[0] > -3.6935;
      }
    }
    return String(item.level) === nivelSelecionado;
  });

  const niveisDisponiveis = campusSelecionado === 'mucambinho' ? ObterNiveis(blocoEngenharia.features) : ObterNiveis(famed.features);

  useEffect(() => {
    if (mapRef.current) {
      const newCenter: [number, number] = campusSelecionado === 'mucambinho'
        ? [-3.6932203, -40.3543455]
        : [-3.681909655617651, -40.337232529802655];
      mapRef.current.setView(newCenter, 18);
    }
  }, [campusSelecionado]);

  const handleZoomEnd = (e: L.LeafletEvent) => {
    const map = e.target;
    setCurrentZoom(map.getZoom());
  };

  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', bgcolor: 'background.default', pb: 10 }}>
      <Box
        sx={{
          width: '100vw',
          mt: 2,
          height: isMobile
            ? `calc(100vh - ${HEIGHT_HEADER + HEIGHT_SELECTOR + 8}px)`
            : `calc(100vh - ${HEIGHT_HEADER + HEIGHT_SELECTOR + 12}px)`,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <MapContainer
          center={campusSelecionado === 'mucambinho' ? [-3.6932203, -40.3543455] : [-3.681909655617651, -40.337232529802655]}
          zoom={18}
          minZoom={16}
          maxZoom={18}
          style={{ height: '100%', width: '100%' }}
          whenReady={() => {
            if (mapRef.current) {
              mapRef.current.on('zoomend', handleZoomEnd);
            }
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <GeoJSON data={geojsonFiltrado as GeoJSON.GeoJsonObject} />
          {marcadoresFiltrados.map((item, idx) => (
            <Marker 
              key={idx} 
              position={item.pos} 
              icon={item.icone}
              opacity={currentZoom >= 18 ? 1 : 0.7}
            >
              <Popup>
                <div dangerouslySetInnerHTML={{ __html: String(item.popup.getContent() ?? '') }} />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
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
              '&:hover': {
                bgcolor: nivelSelecionado === nivel ? 'primary.dark' : 'grey.200',
              },
            }}
            onClick={() => setNivelSelecionado(nivel)}
          >
            {nivel}
          </Button>
        ))}
      </Paper>
      <Paper
        sx={{
          position: 'fixed',
          left: '50%',
          bottom: isMobile ? '120px' : '130px',
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
    </Box>
  );
};

export default MapaUFC; 