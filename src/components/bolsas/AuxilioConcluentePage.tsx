import { useCampus } from '../../contexts/CampusContext';
import ContentPage from '../ContentPage';
import { auxilioConcluenteData } from '../../data';

const AuxilioConcluentePage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(auxilioConcluenteData) as any;

  return <ContentPage content={content} />;
};

export default AuxilioConcluentePage;

