import { useCampus } from '../../../contexts/CampusContext';
import CoordenacaoPage from '../../CoordenacaoPage';
import { coordenacaoMusicaData, isCourseAvailableInCampus } from '../../../data';

const CoordenacaoMusicaPage = () => {
  const { getCampusData, campus, campusName } = useCampus();
  
  // Verifica se o curso está disponível no campus
  const isAvailable = isCourseAvailableInCampus('/cursos/musica', campus);
  
  if (!isAvailable) {
    return (
      <CoordenacaoPage 
        coordenacao={null}
        courseName="Música"
        campusName={campusName}
      />
    );
  }
  
  const coordenacao = getCampusData(coordenacaoMusicaData) as any;

  return <CoordenacaoPage coordenacao={coordenacao} />;
};

export default CoordenacaoMusicaPage;
