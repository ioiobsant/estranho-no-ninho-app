import { useCampus } from '../../../contexts/CampusContext';
import CoordenacaoPage from '../../CoordenacaoPage';
import { coordenacaoEngenhariaEletricaData, isCourseAvailableInCampus } from '../../../data';

const CoordenacaoEngenhariaEletricaPage = () => {
  const { getCampusData, campus, campusName } = useCampus();
  
  // Verifica se o curso está disponível no campus
  const isAvailable = isCourseAvailableInCampus('/cursos/engenharia-eletrica', campus);
  
  if (!isAvailable) {
    return (
      <CoordenacaoPage 
        coordenacao={null}
        courseName="Engenharia Elétrica"
        campusName={campusName}
      />
    );
  }
  
  const coordenacao = getCampusData(coordenacaoEngenhariaEletricaData) as any;

  return <CoordenacaoPage coordenacao={coordenacao} />;
};

export default CoordenacaoEngenhariaEletricaPage;
