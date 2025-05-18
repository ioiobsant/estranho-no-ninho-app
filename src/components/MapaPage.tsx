import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { blocoEngenharia } from '../data/geoJsonData';

// Configurações do mapa
const MAP_CONFIG = {
  center: [-3.6931529, -40.3512688] as [number, number],
  zoom: 18,
  tileLayer: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
};

// Estilos do container
const containerStyle = {
  height: '100vh',
  width: '100vw'
};

const mapStyle = {
  height: '100%',
  width: '100%'
};

/**
 * Componente principal do mapa que exibe a localização do bloco de engenharia
 * e um marcador com popup informativo
 */
const MapaPage: React.FC = () => {
  return (
    <div style={containerStyle}>
      <MapContainer
        center={MAP_CONFIG.center}
        zoom={MAP_CONFIG.zoom}
        style={mapStyle}
      >
        <TileLayer
          url={MAP_CONFIG.tileLayer.url}
          attribution={MAP_CONFIG.tileLayer.attribution}
        />
        
        <Marker position={MAP_CONFIG.center}>
          <Popup>
            Marcador simples funcionando!
          </Popup>
        </Marker>

        <GeoJSON data={blocoEngenharia} />
      </MapContainer>
    </div>
  );
};

export default MapaPage; 