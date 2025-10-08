import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { auxilioCustosData } from '../../data';

const AuxilioCustosPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(auxilioCustosData) as any;

  return <ContentPage content={content} />;
};

export default AuxilioCustosPage;

