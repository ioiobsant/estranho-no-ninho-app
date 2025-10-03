import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { pibicData } from '../../data';

const PibicPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(pibicData) as any;

  // ContentPage já trata conteúdo null/vazio
  return <ContentPage content={content} />;
};

export default PibicPage;
