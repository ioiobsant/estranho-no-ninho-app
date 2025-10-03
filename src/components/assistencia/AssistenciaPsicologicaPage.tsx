import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { assistenciaPsicologicaData } from '../../data';

const AssistenciaPsicologicaPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(assistenciaPsicologicaData) as any;

  // ContentPage já trata conteúdo null/vazio
  return <ContentPage content={content} />;
};

export default AssistenciaPsicologicaPage;
