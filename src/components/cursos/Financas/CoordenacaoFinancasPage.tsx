import { useCampus } from '../../../contexts/CampusContext';
import CoordenacaoPage from '../../CoordenacaoPage';
import { coordenacaoFinancasData, isCourseAvailableInCampus } from '../../../data';

const CoordenacaoFinancasPage = () => {
  const { getCampusData, campus, campusName } = useCampus();
  
  // Verifica se o curso está disponível no campus
  const isAvailable = isCourseAvailableInCampus('/cursos/financas', campus);
  
  if (!isAvailable) {
    return (
      <CoordenacaoPage 
        coordenacao={null}
        courseName="Finanças"
        campusName={campusName}
      />
    );
  }
  
  const coordenacao = getCampusData(coordenacaoFinancasData) as any;

  return <CoordenacaoPage coordenacao={coordenacao} />;
};

export default CoordenacaoFinancasPage;
