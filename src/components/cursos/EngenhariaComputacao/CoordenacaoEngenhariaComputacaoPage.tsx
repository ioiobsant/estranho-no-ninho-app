import { useCampus } from '../../../contexts/CampusContext';
import CoordenacaoPage from '../../CoordenacaoPage';
import { coordenacaoEngenhariaComputacaoData, isCourseAvailableInCampus } from '../../../data';

const CoordenacaoEngenhariaComputacaoPage = () => {
  const { getCampusData, campus, campusName } = useCampus();
  
  // Verifica se o curso está disponível no campus
  const isAvailable = isCourseAvailableInCampus('/cursos/engenharia-computacao', campus);
  
  if (!isAvailable) {
    return (
      <CoordenacaoPage 
        coordenacao={null}
        courseName="Engenharia da Computação"
        campusName={campusName}
      />
    );
  }
  
  const coordenacao = getCampusData(coordenacaoEngenhariaComputacaoData) as any;

  return <CoordenacaoPage coordenacao={coordenacao} />;
};

export default CoordenacaoEngenhariaComputacaoPage;
