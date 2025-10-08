import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { direcaoData } from '../../data';

const DirecaoPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(direcaoData) as any;

  return <ContentPage content={content} />;
};

export default DirecaoPage;

