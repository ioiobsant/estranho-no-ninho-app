import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { auxilioCrecheData } from '../../data';

const AuxilioCrechePage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(auxilioCrecheData) as any;

  return <ContentPage content={content} />;
};

export default AuxilioCrechePage;
