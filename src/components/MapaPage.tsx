import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { blocoEngenharia } from '../data/geoJsonData';
import MapaUFC from './MapaUFC';

const MapaPage = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MapContainer
        center={[-3.6931529, -40.3512688]}
        zoom={18}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[-3.6931529, -40.3512688]}>
          <Popup>
            Marcador simples funcionando!
          </Popup>
        </Marker>
        <GeoJSON data={blocoEngenharia} />
      </MapContainer>
    </div>
  );
};

export default MapaUFC; 