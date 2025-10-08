import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { auxilioEmergencialData } from '../../data';

const AuxilioEmergencialPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(auxilioEmergencialData) as any;

  return <ContentPage content={content} />;
};

export default AuxilioEmergencialPage;

