import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

// Importando ícones do Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Configurando ícones padrão do Leaflet
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  position: 'relative',
  '& .leaflet-container': {
    width: '100%',
    height: '100%',
    zIndex: 1
  }
}));

const MapTitle = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
  zIndex: 2,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2]
}));

const MapaPage: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);
  const theme = useTheme();

  useEffect(() => {
    if (!mapRef.current) {
      // Coordenadas do campus da UFC em Sobral
      const center: [number, number] = [-3.6806359, -40.3370175];
      
      // Criando o mapa
      const map = L.map('map').setView(center, 18);
      
      // Adicionando o tile layer do OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Adicionando os pontos do mapa
      const pontos = [
        {
          coordenadas: [-3.6806359, -40.3370175],
          nome: 'Campo de Futebol',
          tipo: 'sport',
          esporte: 'soccer'
        },
        {
          coordenadas: [-3.6803914, -40.3371674],
          nome: 'Pista de Atletismo',
          tipo: 'leisure',
          esporte: 'athletics'
        },
        {
          coordenadas: [-3.6794546, -40.3352791],
          nome: 'Lago',
          tipo: 'natural',
          natureza: 'water'
        },
        {
          coordenadas: [-3.6820547, -40.3373508],
          nome: 'Faculdade de Medicina - UFC',
          tipo: 'amenity',
          categoria: 'university'
        },
        {
          coordenadas: [-3.681727, -40.3379786],
          nome: 'UVA - Campus Derby',
          tipo: 'amenity',
          categoria: 'university'
        },
        {
          coordenadas: [-3.6819923, -40.3364091],
          nome: 'Piscina',
          tipo: 'leisure',
          categoria: 'swimming_pool'
        },
        {
          coordenadas: [-3.6814002, -40.3392073],
          nome: 'EEMTI Dom José Tupinambá da Frota',
          tipo: 'amenity',
          categoria: 'school'
        },
        {
          coordenadas: [-3.6828994, -40.34003],
          nome: 'Espelho d\'água',
          tipo: 'amenity',
          categoria: 'fountain'
        },
        {
          coordenadas: [-3.6827038, -40.3404552],
          nome: 'Bloco da Indústria - IFCE',
          tipo: 'building',
          categoria: 'university'
        },
        {
          coordenadas: [-3.6830795, -40.3399852],
          nome: 'Centro de Educação a Distância do Ceará',
          tipo: 'building',
          categoria: 'university'
        }
      ];

      // Adicionando os marcadores ao mapa
      pontos.forEach(ponto => {
        const marker = L.marker(ponto.coordenadas as [number, number])
          .bindPopup(`
            <strong>${ponto.nome}</strong><br>
            Tipo: ${ponto.tipo}<br>
            ${ponto.esporte ? `Esporte: ${ponto.esporte}` : ''}
            ${ponto.categoria ? `Categoria: ${ponto.categoria}` : ''}
          `);
        marker.addTo(map);
      });

      mapRef.current = map;
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <MapContainer>
      <MapTitle variant="h5">
        <h1>Mapa do Campus da UFC em Sobral</h1>
      </MapTitle>
      <div id="map" style={{ height: '100%', width: '100%' }} />
    </MapContainer>
  );
};

export default MapaPage; 