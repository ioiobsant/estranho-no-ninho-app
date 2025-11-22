import { useCampus } from '../../../contexts/CampusContext';
import CoordenacaoPage from '../../CoordenacaoPage';
import { coordenacaoCienciasEconomicasData, isCourseAvailableInCampus } from '../../../data';

const CoordenacaoCienciasEconomicasPage = () => {
  const { getCampusData, campus, campusName } = useCampus();
  
  // Verifica se o curso está disponível no campus
  const isAvailable = isCourseAvailableInCampus('/cursos/ciencias-economicas', campus);
  
  if (!isAvailable) {
    return (
      <CoordenacaoPage 
        coordenacao={null}
        courseName="Ciências Econômicas"
        campusName={campusName}
      />
    );
  }
  
  const coordenacao = getCampusData(coordenacaoCienciasEconomicasData) as any;

  return <CoordenacaoPage coordenacao={coordenacao} />;
};

export default CoordenacaoCienciasEconomicasPage;
