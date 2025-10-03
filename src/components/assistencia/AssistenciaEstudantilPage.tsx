import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { assistenciaEstudantilData } from '../../data';

const AssistenciaEstudantilPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(assistenciaEstudantilData) as any;

  // ContentPage já trata conteúdo null/vazio
  return <ContentPage content={content} />;
};

export default AssistenciaEstudantilPage;
