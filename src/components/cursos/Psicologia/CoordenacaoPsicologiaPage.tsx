import { useCampus } from '../../../contexts/CampusContext';
import CoordenacaoPage from '../../CoordenacaoPage';
import { coordenacaoPsicologiaData, isCourseAvailableInCampus } from '../../../data';

const CoordenacaoPsicologiaPage = () => {
  const { getCampusData, campus, campusName } = useCampus();
  
  // Verifica se o curso está disponível no campus
  const isAvailable = isCourseAvailableInCampus('/cursos/psicologia', campus);
  
  if (!isAvailable) {
    return (
      <CoordenacaoPage 
        coordenacao={null}
        courseName="Psicologia"
        campusName={campusName}
      />
    );
  }
  
  const coordenacao = getCampusData(coordenacaoPsicologiaData) as any;

  return <CoordenacaoPage coordenacao={coordenacao} />;
};

export default CoordenacaoPsicologiaPage;
