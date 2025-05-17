import { FeatureCollection, Point } from 'geojson';
import { blocoEngenharia } from './blocoEngenharia';

export { blocoEngenharia };

export const famed: FeatureCollection<Point> = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-40.354579670518795, -3.6937765346989315]
      },
      "properties": {
        "name": "Copa",
        "level": "0"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-40.35473424408572, -3.6938214796861875]
      },
      "properties": {
        "name": "Banheiros",
        "level": "0"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-40.3545105457306, -3.6938467327515214]
      },
      "properties": {
        "name": "Laboratório de informática",
        "level": "0"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-40.35443315753666, -3.693676621779604]
      },
      "properties": {
        "name": "Estacionamento",
        "level": "0"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-40.354133024811745, -3.6937052040350187]
      },
      "properties": {
        "name": "Recepção",
        "level": "0"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-40.35431809723378, -3.6938842124520974]
      },
      "properties": {
        "name": "Sala de Radiografia",
        "level": "0"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-40.354255350519516, -3.694209458796248]
      },
      "properties": {
        "name": "Almoxarifado",
        "level": "0"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-40.35441130399705, -3.694208386745116]
      },
      "properties": {
        "name": "Clínica",
        "level": "0"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-40.35458430647851, -3.694168230028304]
      },
      "properties": {
        "name": "Sala de Lavagem",
        "level": "0"
      }
    }
  ]
}; 