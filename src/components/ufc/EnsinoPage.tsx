import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { ensinoData } from '../../data';

const EnsinoPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(ensinoData) as any;

  return <ContentPage content={content} />;
};

export default EnsinoPage;

