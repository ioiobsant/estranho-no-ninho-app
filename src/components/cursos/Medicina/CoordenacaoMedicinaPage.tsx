import { useCampus } from '../../../contexts/CampusContext';
import CoordenacaoPage from '../../CoordenacaoPage';
import { coordenacaoMedicinaData, isCourseAvailableInCampus } from '../../../data';

const CoordenacaoMedicinaPage = () => {
  const { getCampusData, campus, campusName } = useCampus();
  
  // Verifica se o curso está disponível no campus
  const isAvailable = isCourseAvailableInCampus('/cursos/medicina', campus);
  
  if (!isAvailable) {
    return (
      <CoordenacaoPage 
        coordenacao={null}
        courseName="Medicina"
        campusName={campusName}
      />
    );
  }
  
  const coordenacao = getCampusData(coordenacaoMedicinaData) as any;

  return <CoordenacaoPage coordenacao={coordenacao} />;
};

export default CoordenacaoMedicinaPage;
