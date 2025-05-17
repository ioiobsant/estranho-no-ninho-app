import L from 'leaflet';

// Configurações do mapa
export const mapOptions = {
  zoomControl: false,
  attributionControl: true,
  minZoom: 14,
  maxZoom: 24,
  maxBounds: [
    [-3.67694, -40.37051],
    [-3.70407, -40.32205]
  ],
  zoomSnap: 0.5
};

// Configurações dos ícones
export const iconesize: [number, number] = [20, 28];
export const icones = {
  cadeirante: [
    L.icon({ iconUrl: "/icons/2-cad.png", iconSize: iconesize }),
    L.icon({ iconUrl: "/icons/1-cad.png", iconSize: iconesize }),
    L.icon({ iconUrl: "/icons/0-cad.png", iconSize: iconesize })
  ],
  mobilidade: [
    L.icon({ iconUrl: "/icons/2-mobred.png", iconSize: iconesize }),
    L.icon({ iconUrl: "/icons/1-mobred.png", iconSize: iconesize }),
    L.icon({ iconUrl: "/icons/0-mobred.png", iconSize: iconesize }),
  ],
  obeso: [
    L.icon({ iconUrl: "/icons/2-obeso.png", iconSize: iconesize }),
    L.icon({ iconUrl: "/icons/1-obeso.png", iconSize: iconesize }),
    L.icon({ iconUrl: "/icons/0-obeso.png", iconSize: iconesize }),
  ],
  visual: [
    L.icon({ iconUrl: "/icons/2-visual.png", iconSize: iconesize }),
    L.icon({ iconUrl: "/icons/1-visual.png", iconSize: iconesize }),
    L.icon({ iconUrl: "/icons/0-visual.png", iconSize: iconesize }),
  ]
};


export function generateIconPos(pos: L.LatLngExpression, level: string, local: string, icone: L.Icon, acess: number[]) {
  const textos = ["Pouco Acessível", "Meio Acessível", "Acessível"];
  const cores = ["red", "#f78f07", "green"];
  
  return {
    pos,
    level,
    icone,
    popup: L.popup({
      content: `
        <div>
          <h3>${local}</h3>
          <h3>Estado de acessibilidade:</h3>
          <p style="margin:0">VISUAL: <span style="color:${cores[acess[0]]}">${textos[acess[0]]}</span></p>
          <p style="margin:0">CADEIRANTE: <span style="color:${cores[acess[1]]}">${textos[acess[1]]}</span></p>
          <p style="margin:0">MOBILIDADE: <span style="color:${cores[acess[2]]}">${textos[acess[2]]}</span></p>
          <p style="margin:0">GESTANTE: <span style="color:${cores[acess[3]]}">${textos[acess[3]]}</span></p>
          <p style="margin:0">OBESO: <span style="color:${cores[acess[4]]}">${textos[acess[4]]}</span></p>
          <p style="margin:0">BENGALA: <span style="color:${cores[acess[5]]}">${textos[acess[5]]}</span></p>
          <p style="margin:0">COM MULETA: <span style="color:${cores[acess[6]]}">${textos[acess[6]]}</span></p>
        </div>
      `
    })
  };
}

// Pontos de interesse
export const iconpos = [
  generateIconPos([-3.693203027814058, -40.354491004086256], "1", "Corredores", icones.cadeirante[2], [0, 0, 0, 2, 1, 1, 0]),
  generateIconPos([-3.693339762211707, -40.3544853142617], "0", "Portas das Salas", icones.cadeirante[0], [0, 2, 2, 2, 2, 2, 2]),
  generateIconPos([-3.6932063437621787, -40.3540377147305], "0", "Banheiro", icones.cadeirante[2], [0, 0, 0, 0, 0, 0, 0]),
  generateIconPos([-3.6931183508574192, -40.35409882664681], "0", "Auditório", icones.visual[2], [0, 1, 1, 2, 1, 1, 1]),
  generateIconPos([-3.693327451999401, -40.35408702654328], "0", "Merendeiro", icones.cadeirante[2], [0, 0, 2, 2, 2, 2, 2]),
  generateIconPos([-3.69324182456486, -40.35465885391043], "0", "Elevador", icones.visual[2], [0, 1, 1, 1, 1, 1, 1]),
  generateIconPos([-3.693159958191622, -40.354243496718375], "0", "Banheiros", icones.visual[2], [0, 2, 2, 2, 2, 2, 2]),
  generateIconPos([-3.693228575507798, -40.35456070443696], "1", "Gabinetes", icones.cadeirante[2], [0, 0, 0, 1, 0, 1, 0]),
  generateIconPos([-3.693228575507798, -40.35456070443696], "0", "Foyer", icones.cadeirante[0], [2, 2, 2, 2, 2, 2, 2]),
  generateIconPos([-3.6927378812714955, -40.35474799449504], "0", "Estacionamento", icones.visual[2], [0, 2, 2, 2, 2, 2, 2]),
  generateIconPos([-3.693278239311699, -40.3540612757206], "-1", "Corredores da biblioteca", icones.visual[2], [0, 0, 0, 1, 1, 1, 1]),
  generateIconPos([-3.693303786947998, -40.354008317303666], "-1", "Balcao da biblioteca", icones.cadeirante[0], [2, 2, 2, 2, 2, 2, 2]),
  generateIconPos([-3.693342187876938, -40.354042164981365], "-1", "Rampa", icones.visual[2], [0, 1, 1, 1, 1, 1, 1]),
  // famed 
  generateIconPos([-3.6937765346989315, -40.354579670518795], "0", "Copa", icones.visual[2], [0, 2, 2, 2, 2, 2, 2]),
  generateIconPos([-3.6938214796861875, -40.35473424408572], "0", "Banheiros", icones.visual[2], [0, 2, 2, 2, 2, 2, 2]),
  generateIconPos([-3.6938467327515214, -40.3545105457306], "0", "Laboratório de informática", icones.visual[2], [0, 2, 2, 2, 2, 2, 2]),
  generateIconPos([-3.693676621779604, -40.35443315753666], "0", "Estacionamento", icones.cadeirante[0], [2, 2, 2, 2, 2, 2, 2]),
  generateIconPos([-3.6937052040350187, -40.354133024811745], "0", "Recepção", icones.visual[2], [0, 1, 1, 1, 1, 1, 1]),
  generateIconPos([-3.6938842124520974, -40.35431809723378], "0", "Sala de Radiografia", icones.visual[2], [0, 2, 2, 2, 2, 2, 2]),
  generateIconPos([-3.694209458796248, -40.354255350519516], "0", "Almoxarifado", icones.visual[2], [0, 1, 2, 2, 2, 2, 2]),
  generateIconPos([-3.694208386745116, -40.35441130399705], "0", "Clínica", icones.visual[2], [0, 2, 2, 2, 2, 2, 2]),
  generateIconPos([-3.694168230028304, -40.35458430647851], "0", "Sala de Lavagem", icones.visual[2], [0, 1, 2, 2, 2, 2, 2]),
];

// Função para obter níveis do GeoJSON
export function ObterNiveis(geoJsonFeatures: any[]) {
  const niveis: string[] = [];
  for (const feature of geoJsonFeatures) {
    const level = feature.properties.level;
    if (!niveis.includes(level) && level !== undefined) {
      niveis.push(level);
    }
  }
  return niveis;
}

// Função para calcular centro geométrico
export function CentroGeometrico(coords: number[][]) {
  const coordenadaInicial = L.latLng(coords[0][0], coords[0][1]);
  let distancia = 0;
  let coordenadaMaisLonge: L.LatLng | null = null;
  
  for (let i = 1; i < coords.length; i++) {
    const tempDist = coordenadaInicial.distanceTo(L.latLng(coords[i][0], coords[i][1]));
    if (distancia < tempDist) {
      coordenadaMaisLonge = L.latLng(coords[i][0], coords[i][1]);
      distancia = tempDist;
    }
  }
  
  if (!coordenadaMaisLonge) {
    return coordenadaInicial;
  }
  
  const center = L.latLngBounds(coordenadaInicial, coordenadaMaisLonge).getCenter();
  return center;
} 