import { useCampus } from '../../../contexts/CampusContext';
import CoordenacaoPage from '../../CoordenacaoPage';
import { coordenacaoOdontologiaData, isCourseAvailableInCampus } from '../../../data';

const CoordenacaoOdontologiaPage = () => {
  const { getCampusData, campus, campusName } = useCampus();
  
  // Verifica se o curso está disponível no campus
  const isAvailable = isCourseAvailableInCampus('/cursos/odontologia', campus);
  
  if (!isAvailable) {
    return (
      <CoordenacaoPage 
        coordenacao={null}
        courseName="Odontologia"
        campusName={campusName}
      />
    );
  }
  
  const coordenacao = getCampusData(coordenacaoOdontologiaData) as any;

  return <CoordenacaoPage coordenacao={coordenacao} />;
};

export default CoordenacaoOdontologiaPage;
